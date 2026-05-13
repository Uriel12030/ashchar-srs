import { writeFileSync, mkdirSync } from "node:fs";
import { join } from "node:path";

const KEY = process.env.OPENAI_API_KEY;
if (!KEY) {
  console.error("OPENAI_API_KEY missing");
  process.exit(1);
}

const OUT = "public/images/generated";
const OG_OUT = "public/og";
mkdirSync(OUT, { recursive: true });
mkdirSync(OG_OUT, { recursive: true });

const ANCHORS =
  "Realistic documentary photograph shot on a full-frame camera, neutral and desaturated documentary color grading, candid framing with slight imperfection, real-world dust and wear, modern corporate-defense operational support contractor atmosphere, premium and credible. NO soldiers, NO weapons, NO military uniforms, NO flags, NO combat gear, NO night-vision aesthetic, NO desert FOB atmosphere, NO tactical posturing, NO PMC or private military company feel, NO cinematic explosion or smoke, NO CGI, NO 3D render, NO illustration, NO painterly effects, NO text or numbers, NO logos, NO obvious AI artifacts.";

const JOBS = [
  {
    out: `${OUT}/hero-operational-logistics.png`,
    size: "1536x1024",
    prompt: `Wide documentary photograph of a modern Israeli operational logistics yard. Foreground: a clean row of white Toyota Hilux pickups, white SUVs, and a white passenger van parked alongside a low concrete warehouse. Mid-ground: a yellow forklift moving a pallet near a flatbed truck, with stacked shipping containers and a few field-office trailers visible. Background: low warehouse buildings, paved access road, cypress and palm trees, modern Israeli industrial infrastructure. Mid-afternoon Mediterranean daylight. ${ANCHORS}`,
  },
  {
    out: `${OG_OUT}/og-preview-raw.png`,
    size: "1536x1024",
    prompt: `Wide horizontal landscape photograph of a modern Israeli operational support yard. Center: a row of clean white SUVs, vans, and a white shuttle bus parked beside a mid-rise Mediterranean-style accommodation building (light stone or pale render). Left side: a yellow forklift moving a shipping container near a low concrete logistics warehouse with stacked containers. Right side: a flatbed truck and a few field-office trailers. Far background: cypress and palm trees, a faint suggestion of an airport apron on the horizon. Mid-afternoon Mediterranean daylight, blue sky. Composition has clean negative space across the upper third for a potential text overlay. ${ANCHORS}`,
  },
];

async function gen(p) {
  const start = Date.now();
  console.log(`→ ${p.out}`);
  const res = await fetch("https://api.openai.com/v1/images/generations", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      model: "gpt-image-1",
      prompt: p.prompt,
      size: p.size,
      quality: "high",
      n: 1,
    }),
  });
  if (!res.ok) {
    const err = await res.text();
    throw new Error(`${p.out}: ${res.status} ${err}`);
  }
  const data = await res.json();
  const buf = Buffer.from(data.data[0].b64_json, "base64");
  writeFileSync(p.out, buf);
  const secs = ((Date.now() - start) / 1000).toFixed(1);
  console.log(`✓ ${p.out}  (${secs}s, ${(buf.length / 1024).toFixed(0)}KB)`);
}

await Promise.all(JOBS.map(gen));
console.log("\nDone.");

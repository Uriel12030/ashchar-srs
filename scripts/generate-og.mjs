import { writeFileSync, mkdirSync } from "node:fs";

const KEY = process.env.OPENAI_API_KEY;
if (!KEY) {
  console.error("OPENAI_API_KEY missing");
  process.exit(1);
}

const OUT = "public/og";
mkdirSync(OUT, { recursive: true });

const ANCHORS =
  "Realistic documentary photograph, shot on a full-frame camera, candid composition, slightly imperfect framing, real-world dust and wear, no cinematic exaggeration, no fantasy lighting, no CGI, no 3D render, no illustration, no painterly effects, no text or numbers, no logos, no soldiers, no weapons, no military uniforms, no flags, no obvious AI artifacts. Composition strongly horizontal with the primary subject in the middle third, designed to crop well to a 1.91:1 landscape preview banner.";

const prompt = `Wide landscape view of a defense logistics fleet operation in Israel: a column of white pickup trucks and white SUVs moving along a dusty gravel access road in the late afternoon, heading toward a modular operational compound visible on the horizon. Light dust kicked up by the wheels, low warm directional sun raking across the scene from the side. Premium operational support contractor aesthetic, serious and grounded. ${ANCHORS}`;

const start = Date.now();
console.log("→ generating OG preview...");

const res = await fetch("https://api.openai.com/v1/images/generations", {
  method: "POST",
  headers: {
    Authorization: `Bearer ${KEY}`,
    "Content-Type": "application/json",
  },
  body: JSON.stringify({
    model: "gpt-image-1",
    prompt,
    size: "1536x1024",
    quality: "high",
    n: 1,
  }),
});

if (!res.ok) {
  const err = await res.text();
  console.error(`API error: ${res.status} ${err}`);
  process.exit(1);
}

const data = await res.json();
const buf = Buffer.from(data.data[0].b64_json, "base64");
const file = `${OUT}/og-preview-raw.png`;
writeFileSync(file, buf);
const secs = ((Date.now() - start) / 1000).toFixed(1);
console.log(`✓ ${file} (${secs}s, ${(buf.length / 1024).toFixed(0)}KB)`);
console.log("\nNext: crop to 1200×630 with sips.");

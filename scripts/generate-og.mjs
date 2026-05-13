import { writeFileSync, mkdirSync } from "node:fs";

const KEY = process.env.OPENAI_API_KEY;
if (!KEY) {
  console.error("OPENAI_API_KEY missing");
  process.exit(1);
}

const OUT = "public/og";
mkdirSync(OUT, { recursive: true });

const ANCHORS =
  "Realistic documentary photograph shot on a full-frame camera, candid framing with slight imperfection, real-world dust, wear, and weathering, natural color grading, no cinematic exaggeration, no fantasy lighting, no CGI, no 3D render, no illustration, no painterly effects, no text or numbers, no logos, no flags, no soldiers, no weapons, no military uniforms, no combat imagery, no obvious AI artifacts. Composition is strongly horizontal with multiple subjects distributed across the frame and clean negative space across the upper third for a potential text overlay.";

const prompt = `Wide documentary photograph of a regional operational logistics hub in Israel — a single integrated scene with several operational activities visible at once. In the mid-ground: a row of clean white passenger vans and white SUVs parked alongside a low temporary accommodation building with simple flat-roof apartments. To the left: a yellow forklift carrying a shipping container near a flatbed truck, with a few additional containers stacked nearby. To the right: a white shuttle bus parked in front of the housing building. Distant background: low desert hills and a couple of modular operational structures arranged like a small logistics base or airfield support compound. Two or three figures in plain civilian workwear are visible from a distance, walking between the vehicles and the building — not posed, faces not prominent. Warm late-afternoon golden-hour daylight raking across the scene, light atmospheric dust haze, gravel and packed earth ground, Middle East desert palette of warm earth tones, clean whites on the vehicles, neutral operational colors. Premium enterprise-grade regional support contractor atmosphere — practical, organized, not flashy. ${ANCHORS}`;

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

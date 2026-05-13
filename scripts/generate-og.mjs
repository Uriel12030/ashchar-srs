import { writeFileSync, mkdirSync } from "node:fs";

const KEY = process.env.OPENAI_API_KEY;
if (!KEY) {
  console.error("OPENAI_API_KEY missing");
  process.exit(1);
}

const OUT = "public/og";
mkdirSync(OUT, { recursive: true });

const ANCHORS =
  "Realistic documentary photograph shot on a full-frame camera, candid framing with slight imperfection, real-world wear and weathering, natural color grading, no cinematic exaggeration, no fantasy lighting, no CGI, no 3D render, no illustration, no painterly effects, no text or numbers, no logos, no flags, no soldiers, no weapons, no military uniforms, no military bases, no desert FOB or warzone atmosphere, no obvious AI artifacts. Composition is strongly horizontal with multiple subjects distributed across the frame and clean negative space across the upper third for a potential text overlay.";

const prompt = `Wide documentary photograph of a modern Israeli operational support hub on a paved service area beside a mid-rise contemporary residential building in Israel. Several activities are integrated naturally into one scene:
- Center: a row of clean white passenger vans and white SUVs parked along the kerb in front of a modern Mediterranean-style apartment or temporary accommodation building (light stone or pale render exterior, simple modern balconies, neutral palette).
- Left: a white shuttle bus parked with the boarding door open, suggesting personnel movement.
- Right: a yellow forklift moving a shipping container near a low concrete logistics warehouse with a flatbed truck and a few stacked containers nearby.
- Far background: a faint suggestion of an airport apron or transportation hub on the horizon — a parked civil aircraft tail or hangar shape barely visible, low and unobtrusive.
- Vegetation: cypress and palm trees, low landscaped shrubs, typical modern Israeli infrastructure.
- A few civilians in plain workwear in the middle distance, walking between the vehicles and the building, faces not prominent.

Lighting is bright mid-afternoon Mediterranean daylight — warm but not desert, with deep clear blue sky and crisp shadows. Real, modern, urban-industrial Israeli atmosphere — premium enterprise-grade contractor, practical and credible, not flashy. ${ANCHORS}`;

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

import { writeFileSync, mkdirSync } from "node:fs";
import { join } from "node:path";

const KEY = process.env.OPENAI_API_KEY;
if (!KEY) {
  console.error("OPENAI_API_KEY missing");
  process.exit(1);
}

const OUT = "public/images/generated";
mkdirSync(OUT, { recursive: true });

const PROMPTS = [
  {
    name: "hero-operational-logistics",
    size: "1536x1024",
    prompt:
      "Ultra-realistic wide cinematic scene of operational logistics support in Israel, white SUVs, pickup trucks, vans and logistics trucks lined up near modular office units and temporary infrastructure, Middle East desert environment, golden hour lighting, premium U.S. government contractor aesthetic, professional, serious, no soldiers, no weapons, no flags, no text, documentary photography style.",
  },
  {
    name: "fleet-vehicles-israel",
    size: "1536x1024",
    prompt:
      "Modern white operational vehicle fleet in Israel including Toyota Land Cruisers, Hilux-style pickups, passenger vans and SUVs lined up in a professional logistics yard, clean but field-ready, cinematic golden hour lighting, realistic corporate defense logistics atmosphere, no branding, no soldiers, no weapons, wide angle documentary style.",
  },
  {
    name: "modular-housing-base-support",
    size: "1536x1024",
    prompt:
      "High-end modular office and temporary housing compound in a Middle East operational environment, clean portable buildings, generators, lighting towers, communication equipment, gravel ground, realistic government contractor base support atmosphere, cinematic dusk lighting, no people, no weapons, no text.",
  },
  {
    name: "heavy-equipment-infrastructure",
    size: "1536x1024",
    prompt:
      "Heavy equipment supporting rapid infrastructure deployment in Middle East terrain, cranes, forklifts, excavators and logistics trucks working around modular infrastructure, realistic dust atmosphere, professional operational contractor style, cinematic lighting, no military vehicles, no weapons, no soldiers.",
  },
  {
    name: "rapid-procurement-operations",
    size: "1536x1024",
    prompt:
      "Professional logistics coordination and rapid procurement operations room, modern screens showing maps and supply chain dashboards, serious operations staff working, dark premium corporate atmosphere, realistic, no stock photo look, no visible logos, no text.",
  },
  {
    name: "force-protection-infrastructure",
    size: "1536x1024",
    prompt:
      "Concrete protective barriers and modular infrastructure being positioned by crane in a secure operational compound, Middle East environment, realistic contractor field operations, premium defense infrastructure support aesthetic, no soldiers, no weapons, no flags, no combat.",
  },
  {
    name: "about-field-operations",
    size: "1536x1024",
    prompt:
      "Professional operations manager inspecting field logistics site in Israel, vehicle fleet and modular infrastructure visible in background, serious documentary photography style, premium U.S. government contractor aesthetic, no weapons, no soldiers, no text.",
  },
  {
    name: "operations-control-room",
    size: "1536x1024",
    prompt:
      "Minimal premium logistics operations center, dark modern office with large screens showing transportation routes and infrastructure coordination maps, serious professional atmosphere, cinematic lighting, realistic, no branding, no readable text.",
  },
];

async function gen(p) {
  const start = Date.now();
  console.log(`→ ${p.name}`);
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
    throw new Error(`${p.name}: ${res.status} ${err}`);
  }
  const data = await res.json();
  const b64 = data.data[0].b64_json;
  const buf = Buffer.from(b64, "base64");
  const file = join(OUT, `${p.name}.png`);
  writeFileSync(file, buf);
  const secs = ((Date.now() - start) / 1000).toFixed(1);
  console.log(`✓ ${p.name}.png  (${secs}s, ${(buf.length / 1024).toFixed(0)}KB)`);
}

// Limit concurrency to avoid rate limits
const queue = [...PROMPTS];
const workers = 3;
async function worker() {
  while (queue.length) {
    const p = queue.shift();
    if (!p) return;
    try {
      await gen(p);
    } catch (e) {
      console.error(`✗ ${p.name}: ${e.message}`);
    }
  }
}

await Promise.all(Array.from({ length: workers }, worker));
console.log("\nAll done.");

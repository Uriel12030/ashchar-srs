import { writeFileSync, mkdirSync } from "node:fs";
import { join } from "node:path";

const KEY = process.env.OPENAI_API_KEY;
if (!KEY) {
  console.error("OPENAI_API_KEY missing");
  process.exit(1);
}

const OUT = "public/images/generated";
mkdirSync(OUT, { recursive: true });

// Documentary-style prompts. Strong anti-CGI / anti-illustration language so
// the model leans toward grounded, plausible field photography.
const ANCHORS =
  "Realistic documentary photograph, shot on a full-frame camera, natural daylight, candid composition, slightly imperfect framing, real-world dust and wear, no cinematic exaggeration, no fantasy lighting, no CGI, no 3D render, no illustration, no painterly effects, no text or numbers, no logos, no soldiers, no weapons, no military uniforms, no flags, no obvious AI artifacts.";

const PROMPTS = [
  {
    name: "hero-operational-logistics",
    size: "1536x1024",
    prompt: `Wide angle view of a working operations yard in Israel. Several white pickup trucks and SUVs parked near a row of modular office trailers. Gravel ground. A lighting tower and a generator visible in the background. Practical contractor logistics environment. ${ANCHORS}`,
  },
  {
    name: "fleet-vehicles-israel",
    size: "1536x1024",
    prompt: `White Toyota Hilux pickups, Land Cruisers, and passenger vans lined up in a dusty gravel operations yard in Israel. Late afternoon sun. Vehicles are clean but in real working condition with light dust on tires. Simple fencing in background. No logos, no markings. ${ANCHORS}`,
  },
  {
    name: "modular-housing-base-support",
    size: "1536x1024",
    prompt: `Row of beige and white modular office and accommodation units in a gravel compound in Israel. Exterior generator and HVAC condenser units sitting alongside the buildings. Gravel surface. Mid-day flat daylight. No people. Practical contractor base support, simple and functional. ${ANCHORS}`,
  },
  {
    name: "heavy-equipment-infrastructure",
    size: "1536x1024",
    prompt: `Yellow forklifts and a flatbed truck working near rows of stacked metal shipping containers in a Middle East operations yard. Some dust in the air. Gravel surface. Real working environment, candid. ${ANCHORS}`,
  },
  {
    name: "rapid-procurement-operations",
    size: "1536x1024",
    prompt: `A logistics coordinator in plain civilian clothing working at a laptop with a phone on the desk inside a modest field trailer office. Simple desk, paperwork, a printed map pinned to the wall, available natural light through a window. Real practical workspace, no stock photo styling, no fake smiling. ${ANCHORS}`,
  },
  {
    name: "force-protection-infrastructure",
    size: "1536x1024",
    prompt: `Gray concrete T-wall and Jersey-barrier protective barriers staged in rows in a gravel yard with a mobile crane positioned alongside, ready to lift one. Middle East operations site. Daylight. Dusty practical contractor environment. No people in the frame. ${ANCHORS}`,
  },
  {
    name: "about-field-operations",
    size: "1536x1024",
    prompt: `A civilian operations manager in plain workwear (cargo pants, polo shirt, baseball cap) walking through a logistics yard in Israel and inspecting equipment with a clipboard. Modular trailers and white pickup trucks visible in the background. Gravel ground. Candid documentary moment. ${ANCHORS}`,
  },
  {
    name: "operations-control-room",
    size: "1536x1024",
    prompt: `A real working logistics operations office with two operators at desks with regular consumer-grade computer monitors showing simple map applications and spreadsheets. Plain office walls, normal fluorescent and ambient lighting, paperwork on desks. Modest practical workspace, not futuristic. ${ANCHORS}`,
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

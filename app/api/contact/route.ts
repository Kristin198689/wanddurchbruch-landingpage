import { NextRequest, NextResponse } from "next/server";
import { isRateLimited } from "@/lib/rateLimit";
import { sendTelegramMessage } from "@/lib/telegram";

const MAX_LEN = 2000;

function escapeHtml(input: string): string {
  return input
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}

function optionalString(value: unknown): string {
  return typeof value === "string" && value.trim() && value.length <= MAX_LEN
    ? escapeHtml(value.trim())
    : "";
}

export async function POST(req: NextRequest) {
  const ip = req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ?? "unknown";

  if (isRateLimited(ip)) {
    return NextResponse.json({ error: "rate_limited" }, { status: 429 });
  }

  let body: unknown;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "invalid_body" }, { status: 400 });
  }

  if (typeof body !== "object" || body === null) {
    return NextResponse.json({ error: "invalid_body" }, { status: 400 });
  }

  const { name, contact, message, city, wallType, timeframe, consent } = body as Record<
    string,
    unknown
  >;

  if (
    typeof name !== "string" ||
    typeof contact !== "string" ||
    typeof message !== "string" ||
    !name.trim() ||
    !contact.trim() ||
    !message.trim() ||
    consent !== true ||
    name.length > MAX_LEN ||
    contact.length > MAX_LEN ||
    message.length > MAX_LEN
  ) {
    return NextResponse.json({ error: "invalid_fields" }, { status: 400 });
  }

  const lines = [
    "<b>New lead — Wanddurchbruch</b>",
    `Name: ${escapeHtml(name.trim())}`,
    `Contact: ${escapeHtml(contact.trim())}`,
  ];
  const cityVal = optionalString(city);
  const wallTypeVal = optionalString(wallType);
  const timeframeVal = optionalString(timeframe);
  if (cityVal) lines.push(`City: ${cityVal}`);
  if (wallTypeVal) lines.push(`Wall type: ${wallTypeVal}`);
  if (timeframeVal) lines.push(`Timeframe: ${timeframeVal}`);
  lines.push(`Message: ${escapeHtml(message.trim())}`);

  const sent = await sendTelegramMessage(lines.join("\n"));

  if (!sent) {
    return NextResponse.json({ error: "delivery_failed" }, { status: 502 });
  }

  return NextResponse.json({ ok: true });
}

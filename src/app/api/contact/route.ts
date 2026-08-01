import { NextResponse } from "next/server";
import { db } from "@/db";
import { contactInfo } from "@/db/schema";

export async function GET() {
  try {
    const rows = await db.select().from(contactInfo).limit(1);
    return NextResponse.json({ success: true, info: rows[0] || null });
  } catch (error) {
    console.error("Failed to fetch contact info:", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}

export async function POST(request: Request) {
  try {
    const data = await request.json();
    const { phone, whatsapp, email, address, mapEmbedUrl } = data;

    // Upsert: delete existing and insert new (simple approach for single-row table)
    const existing = await db.select().from(contactInfo).limit(1);

    if (existing.length > 0) {
      const { eq } = await import("drizzle-orm");
      await db.update(contactInfo)
        .set({ phone, whatsapp, email, address, mapEmbedUrl, updatedAt: new Date() })
        .where(eq(contactInfo.id, existing[0].id));
    } else {
      await db.insert(contactInfo).values({ phone, whatsapp, email, address, mapEmbedUrl });
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Failed to save contact info:", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}

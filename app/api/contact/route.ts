import { supabase } from "@/server/init/database/config";
import { type NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const { email } = await request.json();

    await supabase.schema("public").from("waitlist").insert({
      email,
      created_at: new Date().toISOString(),
    });

    return NextResponse.json({
      success: true,
      message: "Email submitted successfully",
    });
  } catch (error) {
    console.error("Error processing contact form:", error);
    return NextResponse.json(
      { success: false, message: "Failed to submit email" },
      { status: 500 }
    );
  }
}

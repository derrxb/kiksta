import { type NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const { email } = await request.json();

    // Here you would typically save to Supabase
    // For now, we'll just simulate a successful response
    console.log("Email submitted:", email);

    // Simulate some processing time
    await new Promise((resolve) => setTimeout(resolve, 500));

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

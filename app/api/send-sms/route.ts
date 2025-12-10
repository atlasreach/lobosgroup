import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { to, message } = body;

    // Validate required fields
    if (!to || !message) {
      return NextResponse.json(
        { error: "Missing required fields: to, message" },
        { status: 400 }
      );
    }

    // Get TextGrid credentials from environment variables
    const accountSid = process.env.TEXTGRID_ACCOUNT_SID;
    const authToken = process.env.TEXTGRID_AUTH_TOKEN;
    const fromNumber = process.env.TEXTGRID_PHONE_NUMBER;

    if (!accountSid || !authToken || !fromNumber) {
      return NextResponse.json(
        { error: "TextGrid credentials not configured" },
        { status: 500 }
      );
    }

    // TextGrid API endpoint (Twilio-compatible)
    const endpoint = `https://api2.textgrid.com/2010-04-01/Accounts/${accountSid}/Messages.json`;

    // Create Basic Auth header
    const authString = Buffer.from(`${accountSid}:${authToken}`).toString("base64");

    // Send SMS via TextGrid
    const response = await fetch(endpoint, {
      method: "POST",
      headers: {
        "Authorization": `Basic ${authString}`,
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: new URLSearchParams({
        To: to,
        From: fromNumber,
        Body: message,
      }),
    });

    const data = await response.json();

    if (!response.ok) {
      console.error("TextGrid API error:", data);
      return NextResponse.json(
        { error: "Failed to send SMS", details: data },
        { status: response.status }
      );
    }

    return NextResponse.json({
      success: true,
      message: "SMS sent successfully",
      data,
    });
  } catch (error) {
    console.error("Error sending SMS:", error);
    return NextResponse.json(
      { error: "Internal server error", details: error instanceof Error ? error.message : String(error) },
      { status: 500 }
    );
  }
}

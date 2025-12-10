import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const formData = await request.json();

    // Validate required fields
    if (!formData.name || !formData.email || !formData.phone) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    // Get TextGrid credentials from environment variables
    const accountSid = process.env.TEXTGRID_ACCOUNT_SID;
    const authToken = process.env.TEXTGRID_AUTH_TOKEN;
    const fromNumber = process.env.TEXTGRID_PHONE_NUMBER;
    const notificationNumbers = process.env.NOTIFICATION_PHONE_NUMBERS;

    if (!accountSid || !authToken || !fromNumber || !notificationNumbers) {
      console.error("TextGrid credentials not configured");
      // Still return success to user, but log the error
      return NextResponse.json({
        success: true,
        message: "Booking received (notification not sent - configuration error)",
      });
    }

    // Parse notification numbers (comma-separated)
    const phoneNumbers = notificationNumbers.split(",").map(num => num.trim());

    // Format the SMS notification message
    const smsMessage = `
🔔 NEW BOOKING REQUEST

Name: ${formData.name}
Email: ${formData.email}
Phone: ${formData.phone}
Service: ${formData.serviceCategory || "Not specified"}
${formData.serviceType ? `Type: ${formData.serviceType}` : ""}
Address: ${formData.address || "Not provided"}
${formData.squareFootage ? `Sq Ft: ${formData.squareFootage}` : ""}
${formData.additionalDetails ? `\nDetails: ${formData.additionalDetails}` : ""}
    `.trim();

    // TextGrid API endpoint
    const endpoint = `https://api2.textgrid.com/2010-04-01/Accounts/${accountSid}/Messages.json`;

    // Create Basic Auth header
    const authString = Buffer.from(`${accountSid}:${authToken}`).toString("base64");

    // Send SMS notification to all phone numbers
    const smsPromises = phoneNumbers.map(async (phoneNumber) => {
      try {
        const response = await fetch(endpoint, {
          method: "POST",
          headers: {
            "Authorization": `Basic ${authString}`,
            "Content-Type": "application/x-www-form-urlencoded",
          },
          body: new URLSearchParams({
            To: phoneNumber,
            From: fromNumber,
            Body: smsMessage,
          }),
        });

        const data = await response.json();

        if (!response.ok) {
          console.error(`TextGrid API error for ${phoneNumber}:`, data);
          return { success: false, phoneNumber, error: data };
        }

        return { success: true, phoneNumber, data };
      } catch (error) {
        console.error(`Error sending SMS to ${phoneNumber}:`, error);
        return { success: false, phoneNumber, error };
      }
    });

    // Wait for all SMS to be sent
    const results = await Promise.all(smsPromises);
    const successCount = results.filter(r => r.success).length;
    const failedCount = results.filter(r => !r.success).length;

    return NextResponse.json({
      success: true,
      message: "Booking received and notifications sent",
      smsResults: {
        total: phoneNumbers.length,
        sent: successCount,
        failed: failedCount,
      },
    });
  } catch (error) {
    console.error("Error processing booking:", error);
    // Return success to user even if notification fails
    return NextResponse.json({
      success: true,
      message: "Booking received",
      warning: "Notification system error",
    });
  }
}

"use client";

export default function GoogleMap() {
  const apiKey = "AIzaSyDJe6jp7mNRZm-dAGFAMrSSADU5KwD0vtc";
  const center = "New Orleans, LA";

  return (
    <div className="w-full h-[400px] rounded-lg overflow-hidden border shadow-sm">
      <iframe
        width="100%"
        height="100%"
        style={{ border: 0 }}
        loading="lazy"
        allowFullScreen
        referrerPolicy="no-referrer-when-downgrade"
        src={`https://www.google.com/maps/embed/v1/place?key=${apiKey}&q=${encodeURIComponent(center)}&zoom=11`}
      />
    </div>
  );
}

import { Hono } from "hono";
import { cors } from "hono/cors";

type Env = {
  DB: D1Database;
  RESEND_API_KEY: string;
};

const app = new Hono<{ Bindings: Env }>();

app.use("/*", cors());

const COMPANY_EMAIL = "ferassadadi10@gmail.com";

async function sendEmail(env: Env, subject: string, html: string) {
  try {
    if (!env.RESEND_API_KEY) {
      console.error("RESEND_API_KEY is not configured");
      return false;
    }

    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${env.RESEND_API_KEY}`,
      },
      body: JSON.stringify({
        from: "Bayanati Website <notifications@resend.dev>",
        to: [COMPANY_EMAIL],
        subject: subject,
        html: html,
      }),
    });

    if (!response.ok) {
      const error = await response.text();
      console.error("Failed to send email:", error);
      return false;
    }

    return true;
  } catch (error) {
    console.error("Error sending email:", error);
    return false;
  }
}

// Contact form endpoint
app.post("/api/contact", async (c) => {
  try {
    const body = await c.req.json();
    const { name, email, phone, service, message } = body;

    // Store in database
    await c.env.DB.prepare(
      `INSERT INTO contact_submissions (name, email, phone, service, message) 
       VALUES (?, ?, ?, ?, ?)`
    )
      .bind(name, email, phone, service, message)
      .run();

    // Send email notification
    const emailHtml = `
      <h2>New Contact Form Submission</h2>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Phone:</strong> ${phone}</p>
      <p><strong>Service:</strong> ${service}</p>
      <p><strong>Message:</strong></p>
      <p>${message.replace(/\n/g, '<br>')}</p>
      <hr>
      <p style="color: #666; font-size: 12px;">Submitted from Bayanati website contact form</p>
    `;

    await sendEmail(c.env, `New Contact Form Submission from ${name}`, emailHtml);

    console.log("Contact form submission stored:", { name, email, phone, service });

    return c.json({ success: true, message: "Contact form submitted successfully" });
  } catch (error) {
    console.error("Error processing contact form:", error);
    return c.json({ success: false, message: "Failed to submit contact form" }, 500);
  }
});

// Book meeting endpoint
app.post("/api/book-meeting", async (c) => {
  try {
    const body = await c.req.json();
    const { name, email, phone, date, time, notes } = body;

    // Store in database
    await c.env.DB.prepare(
      `INSERT INTO meeting_bookings (name, email, phone, meeting_date, meeting_time, notes) 
       VALUES (?, ?, ?, ?, ?, ?)`
    )
      .bind(name, email, phone, date, time, notes || null)
      .run();

    // Send email notification
    const emailHtml = `
      <h2>New Meeting Booking</h2>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Phone:</strong> ${phone}</p>
      <p><strong>Date:</strong> ${date}</p>
      <p><strong>Time:</strong> ${time}</p>
      ${notes ? `<p><strong>Notes:</strong></p><p>${notes.replace(/\n/g, '<br>')}</p>` : ''}
      <hr>
      <p style="color: #666; font-size: 12px;">Submitted from Bayanati website meeting booking form</p>
    `;

    await sendEmail(c.env, `New Meeting Booking - ${date} at ${time}`, emailHtml);

    console.log("Meeting booking stored:", { name, email, phone, date, time });

    return c.json({ success: true, message: "Meeting booked successfully" });
  } catch (error) {
    console.error("Error booking meeting:", error);
    return c.json({ success: false, message: "Failed to book meeting" }, 500);
  }
});

export default app;

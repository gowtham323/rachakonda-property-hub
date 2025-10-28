import { serve } from "https://deno.land/std@0.190.0/http/server.ts";

const resend = {
  emails: {
    send: async (data: {
      from: string;
      to: string[];
      subject: string;
      html: string;
    }) => {
      const RESEND_API_KEY = Deno.env.get("RESEND_API_KEY");
      
      const response = await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          "Authorization": `Bearer ${RESEND_API_KEY}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      
      if (!response.ok) {
        const error = await response.text();
        throw new Error(`Resend API error: ${error}`);
      }
      
      return await response.json();
    },
  },
};

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

interface ContactRequest {
  name: string;
  email: string;
  phone: string;
  message?: string;
}

const handler = async (req: Request): Promise<Response> => {
  console.log("Contact email function invoked");
  
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { name, email, phone, message }: ContactRequest = await req.json();
    
    console.log("Processing contact form:", { name, email, phone });

    // Validate input
    if (!name || !email || !phone) {
      console.error("Missing required fields");
      return new Response(
        JSON.stringify({ error: "Name, email, and phone are required" }),
        { status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    // Send email to business owner
    const ownerEmailResponse = await resend.emails.send({
      from: "Rachakonda Real Estate <onboarding@resend.dev>",
      to: ["rachakonda1111@gmail.com"],
      subject: `New Lead from ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #1e3a8a;">New Lead from Website</h2>
          <div style="background-color: #f3f4f6; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Phone:</strong> ${phone}</p>
            ${message ? `<p><strong>Message:</strong><br/>${message}</p>` : ''}
          </div>
          <p style="color: #6b7280; font-size: 14px;">This lead was submitted through the Rachakonda Real Estate website contact form.</p>
        </div>
      `,
    });

    console.log("Owner email sent:", ownerEmailResponse);

    // Send confirmation email to the customer
    const customerEmailResponse = await resend.emails.send({
      from: "Rachakonda Real Estate <onboarding@resend.dev>",
      to: [email],
      subject: "Thank you for contacting Rachakonda Real Estate",
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #1e3a8a;">Thank you for reaching out!</h2>
          <p>Dear ${name},</p>
          <p>We have received your inquiry and appreciate your interest in Rachakonda Real Estate.</p>
          <p>Our real estate consultant, <strong>Rachakonda Muthyalu</strong>, will get back to you within 24 hours.</p>
          
          <div style="background-color: #f3f4f6; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="margin-top: 0;">In the meantime, feel free to contact us directly:</h3>
            <p><strong>Phone:</strong> +91 9848774575</p>
            <p><strong>Email:</strong> rachakonda1111@gmail.com</p>
            <p><strong>Office:</strong> Road No 18, Vinayaka Nagar Colony, Hayathnagar, Hyderabad - 501505</p>
          </div>
          
          <p>We look forward to helping you find your perfect property!</p>
          <p style="margin-top: 30px;">Best regards,<br/><strong>Rachakonda Muthyalu</strong><br/>Real Estate Consultant<br/>Rachakonda Real Estate</p>
        </div>
      `,
    });

    console.log("Customer confirmation email sent:", customerEmailResponse);

    return new Response(
      JSON.stringify({ 
        success: true,
        message: "Contact form submitted successfully" 
      }),
      {
        status: 200,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      }
    );
  } catch (error: any) {
    console.error("Error in send-contact-email function:", error);
    return new Response(
      JSON.stringify({ 
        error: error.message || "Failed to send email",
        details: error.toString()
      }),
      {
        status: 500,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      }
    );
  }
};

serve(handler);

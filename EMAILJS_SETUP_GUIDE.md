# EmailJS Setup Guide - Completely FREE Email Service

## Overview
EmailJS allows you to send emails directly from your frontend without any backend code. It's completely free for up to 200 emails per month.

## Step-by-Step Setup

### 1. Create EmailJS Account
1. Go to [EmailJS.com](https://www.emailjs.com/)
2. Click "Sign Up" and create a free account
3. Verify your email address

### 2. Connect Your Email Service
1. In EmailJS dashboard, go to **Email Services**
2. Click **Add New Service**
3. Choose **Gmail** (recommended for personal use)
4. Click **Connect Account** and authorize with your Gmail (rachakonda1111@gmail.com)
5. Copy the **Service ID** (something like `service_abc123`)

### 3. Create Email Template (EXACT MATCH FOR YOUR CODE)
1. Go to **Email Templates** in EmailJS dashboard
2. Click **Create New Template**
3. Use these EXACT settings to match your ContactForm.tsx:

**Template Name:** `property_inquiry`

**Subject:** `New Property Inquiry from {{from_name}}`

**Content (copy this exactly):**
```html
<div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
  <h2 style="color: #1e3a8a; border-bottom: 2px solid #1e3a8a; padding-bottom: 10px;">
    🏠 New Property Inquiry
  </h2>
  
  <div style="background-color: #f8fafc; padding: 20px; border-radius: 8px; margin: 20px 0; border-left: 4px solid #1e3a8a;">
    <h3 style="margin-top: 0; color: #1e3a8a;">Customer Details:</h3>
    <p><strong>📝 Name:</strong> {{from_name}}</p>
    <p><strong>📧 Email:</strong> {{from_email}}</p>
    <p><strong>📞 Phone:</strong> {{from_phone}}</p>
  </div>
  
  <div style="background-color: #fff; padding: 20px; border: 1px solid #e2e8f0; border-radius: 8px; margin: 20px 0;">
    <h3 style="margin-top: 0; color: #1e3a8a;">💬 Message:</h3>
    <p style="white-space: pre-wrap; line-height: 1.6;">{{message}}</p>
  </div>
  
  <div style="background-color: #fee2e2; padding: 15px; border-radius: 8px; margin: 20px 0; border-left: 4px solid #dc2626;">
    <p style="margin: 0; color: #dc2626; font-weight: bold;">🚨 ACTION REQUIRED: Please respond to this inquiry within 24 hours!</p>
  </div>
  
  <hr style="border: none; border-top: 1px solid #e2e8f0; margin: 30px 0;">
  
  <div style="color: #64748b; font-size: 14px; text-align: center;">
    <p><em>This inquiry was submitted through the Rachakonda Real Estate website contact form.</em></p>
    <p><strong>Rachakonda Real Estate</strong> | Road No 18, Vinayaka Nagar Colony, Hayathnagar, Hyderabad - 501505</p>
  </div>
</div>
```

**Settings in EmailJS Template:**
- **To Email:** `rachakonda1111@gmail.com` 
- **From Name:** `Rachakonda Real Estate Website`
- **From Email:** `{{from_email}}` (this will be the customer's email)
- **Reply To:** `{{from_email}}` (so you can reply directly to customer)

**Template Variables (these MUST match your code):**
- `{{from_name}}` ✅ (matches `from_name` in your code)
- `{{from_email}}` ✅ (matches `from_email` in your code) 
- `{{from_phone}}` ✅ (matches `from_phone` in your code)
- `{{message}}` ✅ (matches `message` in your code)

4. Click **Save** and **copy the Template ID** (it will look like `template_abc123xyz`)

### 4. Get Your Public Key
1. Go to **Account** → **General**
2. Copy your **Public Key**

### 5. Update Environment Variables
Replace the placeholder in your `.env` file:

```env
VITE_EMAILJS_SERVICE_ID="service_ky6sdbw"  ✅ DONE
VITE_EMAILJS_TEMPLATE_ID="your_template_id_here"  ← UPDATE THIS
VITE_EMAILJS_PUBLIC_KEY="QdqvKjVFtPuuHWptE"  ✅ DONE
```

After creating your template, update with your actual Template ID:
```env
VITE_EMAILJS_SERVICE_ID="service_ky6sdbw"
VITE_EMAILJS_TEMPLATE_ID="template_xyz789"  ← Put your real Template ID here
VITE_EMAILJS_PUBLIC_KEY="QdqvKjVFtPuuHWptE"
```

### 6. Test Your Setup
1. Save all files
2. Run your development server: `npm run dev`
3. Fill out the contact form on your website
4. Check your Gmail inbox for the email!

## Free Tier Limits
- ✅ **200 emails per month** (FREE)
- ✅ **No credit card required**
- ✅ **Unlimited templates**
- ✅ **All features included**

## Troubleshooting

### Email not received?
1. Check your spam folder
2. Verify all IDs are correct in `.env`
3. Check browser console for errors
4. Make sure you authorized Gmail in EmailJS

### Common Issues:
- **Invalid service ID**: Double-check the Service ID from EmailJS dashboard
- **Template not found**: Verify Template ID matches exactly
- **Unauthorized**: Ensure Public Key is correct

## Benefits Over Paid Services
- ✅ **Completely FREE** (no credit card needed)
- ✅ **No monthly charges**
- ✅ **200 emails/month** (sufficient for most small businesses)
- ✅ **Direct Gmail integration**
- ✅ **No backend required**
- ✅ **Works from any domain**

## Next Steps (Optional)
- Create a customer confirmation template
- Set up email templates for different types of inquiries
- Add email tracking and analytics

Your email system will be completely free and functional!
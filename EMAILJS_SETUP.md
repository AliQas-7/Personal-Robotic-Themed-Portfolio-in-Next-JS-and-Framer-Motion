# EmailJS Setup Guide

## What's Been Done
✅ Installed `@emailjs/browser` package
✅ Updated Contact.tsx with EmailJS integration
✅ Added robotic-themed success popup
✅ Added form validation and error handling
✅ Auto-close popup after 5 seconds

## What You Need to Do

### 1. Get Your Template ID
The form currently uses `template_default` as a placeholder. You need to:

1. Go to https://dashboard.emailjs.com/admin
2. In the left sidebar, click **"Email Templates"**
3. Create a new template or use an existing one
4. The template should have these variables:
   - `user_name` (from input name="name")
   - `user_email` (from input name="email")
   - `message` (from textarea name="message")

5. Copy your **Template ID** (looks like: `template_abc123xyz`)

### 2. Update the Template ID in Contact.tsx
Replace this line (around line 28):
```typescript
'template_default', // You'll need to verify this template ID from your EmailJS dashboard
```

With your actual template ID:
```typescript
'template_YOUR_TEMPLATE_ID_HERE',
```

### 3. Configure Your Email Service
1. Go to your EmailJS Dashboard
2. In the left sidebar, click **"Email Services"**
3. Make sure your email service is connected
4. Your service ID should match: `service_vvdh742`

### 4. Test the Form
1. Run your development server (`npm run dev`)
2. Fill out the contact form
3. Click "Send Message"
4. You should see the robotic-themed success popup
5. Check your email inbox for the message

## Form Field Mapping

The form automatically maps these fields:
- **Name Input** → `user_name`
- **Email Input** → `user_email`  
- **Message Textarea** → `message`

Make sure your EmailJS template variable names match these exactly!

## Features Implemented

✨ **Form Functionality:**
- EmailJS integration with your service ID
- Form validation and error handling
- Loading state during submission
- Auto-reset form after successful send

🤖 **Robotic-Themed Success Popup:**
- Animated neon-green success indicator
- System status display (ESTABLISHED, DATA TRANSFER, CONFIRMED)
- Auto-closes after 5 seconds
- Manual close button
- Glass morphism design matching your portfolio theme

⚠️ **Error Handling:**
- Error messages displayed in top-right corner
- Console logging for debugging
- User-friendly error feedback

## Troubleshooting

If emails aren't sending:
1. Check that your Template ID is correct
2. Verify email service is connected in EmailJS dashboard
3. Check browser console for error messages
4. Ensure form field names match template variables
5. Verify CORS is allowed in EmailJS settings

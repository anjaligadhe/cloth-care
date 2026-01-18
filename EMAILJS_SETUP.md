# EmailJS Setup Guide (Optional)

The Order Form currently uses a **mailto link** which works immediately without any setup. When customers submit the form, it will open their email client with all the order details pre-filled.

## To Enable Automatic Email Sending (Optional)

If you want orders to be sent automatically to your email without opening the customer's email client, you can set up EmailJS:

### Step 1: Sign up for EmailJS
1. Go to https://www.emailjs.com/
2. Create a free account (allows 200 emails/month)

### Step 2: Create an Email Service
1. In EmailJS dashboard, go to "Email Services"
2. Click "Add New Service"
3. Choose your email provider (Gmail recommended)
4. Follow the setup instructions
5. Copy your **Service ID**

### Step 3: Create an Email Template
1. Go to "Email Templates"
2. Click "Create New Template"
3. Use this template:

**Subject:** `New Order - {{product_details}}`

**Content:**
```
New Order Received!

Customer Details:
- Name: {{customer_name}}
- Email: {{customer_email}}
- Mobile: {{customer_mobile}}

Product: {{product_details}}

Delivery Address:
{{customer_address}}

Additional Message:
{{message}}

---
Reply to: {{reply_to}}
```

4. Copy your **Template ID**

### Step 4: Get Your Public Key
1. Go to "Account" → "General"
2. Copy your **Public Key**

### Step 5: Configure Environment Variables
Create a `.env` file in the root directory:

```env
VITE_EMAILJS_SERVICE_ID=your_service_id_here
VITE_EMAILJS_TEMPLATE_ID=your_template_id_here
VITE_EMAILJS_PUBLIC_KEY=your_public_key_here
```

### Step 6: Restart Development Server
```bash
npm run dev
```

That's it! The form will now automatically send emails to cloth.care14@gmail.com when customers submit orders.

---

**Note:** The mailto link method works perfectly fine and doesn't require any setup. EmailJS is optional for a more seamless experience.

# ChatBot Pro - Setup Guide

## 🚀 How to Host This Website (Free Options)

### Option 1: GitHub Pages (Recommended - Free)

1. Create a GitHub account at github.com
2. Create a new repository named `chatbot-pro`
3. Upload all 5 HTML files to the repository
4. Go to Settings → Pages → Source: Deploy from branch → Main → Save
5. Your website will be live at: `https://yourusername.github.io/chatbot-pro/`

### Option 2: Netlify (Free)

1. Go to netlify.com and sign up
2. Drag and drop your website folder
3. Get a free custom domain or use theirs
4. Your site is live instantly

### Option 3: Vercel (Free)

1. Go to vercel.com and sign up
2. Import your GitHub repository
3. Deploy with one click
4. Get a free `.vercel.app` domain

---

## 💰 How You Get Paid

### Step 1: Set Up Stripe

1. Go to stripe.com and create an account
2. Get your Publishable Key and Secret Key
3. In `payment.html`, replace the placeholder with Stripe Elements code
4. Set up Stripe Billing for recurring subscriptions

### Step 2: Connect Payment Flow

When a client clicks "Pay & Start Subscription":
1. Collect their card details via Stripe Elements
2. Create a Stripe Customer
3. Create a Stripe Subscription for $49/$99/$199 per month
4. Store their payment status in your database

### Step 3: Control Access

Each client gets a unique API key in their embed code:
```html
<script src="https://yourcdn.com/chatbot.js?key=STORE_AUSTIN_482"></script>
```

If they stop paying:
- Cancel their Stripe subscription
- Their API key returns "Subscription expired"
- Chatbot stops working on their site

---

## 🔧 How Clients Install the Chatbot

### WordPress
1. Install "Insert Headers and Footers" plugin
2. Paste the embed code in the footer section
3. Save and done!

### Shopify
1. Online Store → Themes → Edit Code
2. Open `theme.liquid`
3. Paste code before `</body>` tag
4. Save

### Wix
1. Settings → Custom Code
2. Add Custom Code
3. Paste in Body - End
4. Apply to All Pages

### Squarespace
1. Settings → Advanced → Code Injection
2. Paste in Footer section
3. Save

### Custom Website
Paste this one line before the closing `</body>` tag:
```html
<script src="https://yourcdn.com/chatbot.js?key=THEIR_UNIQUE_KEY"></script>
```

---

## 📊 What You Need to Build Next

### Backend (Required for Production)
- Node.js/Express or Python/Flask server
- Database (MongoDB/PostgreSQL) to store:
  - Client accounts
  - Payment status
  - Chatbot configurations
  - Conversation analytics
- Stripe webhook handler for payment events
- API to serve customized chatbot files

### CDN for Chatbot Files
- Host chatbot JavaScript on Cloudflare or AWS S3
- Each client gets a unique URL with their config
- Update once, applies to all clients instantly

---

## 💡 Revenue Model

| Plan | Price | Your Monthly Income per Client |
|------|-------|-------------------------------|
| Starter | $49/mo | $49 |
| Pro | $99/mo | $99 |
| Enterprise | $199/mo | $199 |

**Example:**
- 10 clients on Pro = $990/month
- 25 clients on Pro = $2,475/month
- 50 clients (mixed) = ~$4,000/month

---

## 🎯 Next Steps

1. Host the website (GitHub Pages/Netlify)
2. Set up Stripe account
3. Find your first 5 clients
4. Customize chatbot for each client
5. Collect payment
6. Give them embed code
7. Watch recurring revenue grow!

---

Built with ❤️ by [Your Name]

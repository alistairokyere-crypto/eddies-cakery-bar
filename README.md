# Eddie's Cakery Bar — Website

A premium, single-page website for a cake business with:

- 🎂 **Order form** that sends straight to **WhatsApp**, **Email**, or **Instagram DM**
- ⭐ **Reviews** — a curated showcase plus a "Leave a Review" form (new reviews save in the visitor's browser)
- 🤖 **Smart FAQ chat assistant** that instantly answers common questions and hands off to WhatsApp
- 📱 Fully responsive, premium design inspired by Tabi Cakes / Joelle Jacobs / Rafy Cakery

No build tools, no server, no monthly cost. It's plain HTML/CSS/JS.

---

## 🚀 Quick start (5 minutes)

### 1. Add your details
Open **`script.js`** and edit the `CONFIG` block at the very top:

```js
const CONFIG = {
  whatsapp: "447000000000",            // your number, international format, digits only
  email: "hello@eddiescakerybar.com",  // your business email
  formspreeId: "",                     // optional — see "Real email" below
  instagram: "eddiescakerybar",
  businessName: "Eddie's Cakery Bar",
};
```

> **WhatsApp number format:** country code + number, no `+`, no spaces, no leading 0.
> UK example: `07123 456789` becomes `447123456789`.

### 2. Add your own cake photos & videos
Right now the cake cards, hero and banner use placeholder stock media. To use your own:

**Photos**
1. Drop your photos into the `images/` folder (already created for you).
2. In `script.js`, change each cake's `img:` to `"images/your-photo.jpg"`.
3. For the **hero** and **banner** backgrounds, edit `styles.css` and search for
   `PLACEHOLDER IMAGE` — replace the two URLs with `images/...` paths.

**Logo** (already done ✅)
Your logo is in place across the site — `images/logo.png` (dark, for the nav) and
`images/logo-white.png` (light, for the footer), plus `favicon.png` for the browser
tab. To change it, replace those files (keep the same names).

**Videos**
- Drop clips into the `videos/` folder.
- Big featured player: set `CONFIG.featuredVideo.src` to `"videos/your-clip.mp4"`
  (the section is hidden until you do this).
- A cake card that plays video: add a `video:` field to any cake in the `CAKES`
  list (see `videos/README.txt` for the exact format).

> Don't have files handy? Your **Instagram feed** (below) shows your real photos
> and videos automatically — and I can wire up any files you send me.

### 3. Preview it
Just double-click `index.html` to open it in your browser. That's it.

---

## 📧 Real email delivery + photo uploads (free)

By default "Send via Email" opens the customer's own email app. To have orders —
**and the inspiration photos customers upload** — emailed directly to you:

**Recommended: Web3Forms (free, supports photo attachments)**
1. Go to [web3forms.com](https://web3forms.com), enter **your** email, get an Access Key.
2. Paste it into `CONFIG.web3formsKey` in `script.js`.
3. Done — every enquiry *and* any uploaded inspiration photos land in your inbox.

*Alternative: Formspree* (text only, no attachments) — sign up at
[formspree.io](https://formspree.io), create a form, paste the ID into
`CONFIG.formspreeId`. With this, photo uploads are redirected to WhatsApp instead.

> Until you add one of these keys, "Send via Email" opens the customer's email app
> (which can't attach files), and the upload prompts them to send photos via WhatsApp.

## ✍️ Editing the About, Masterclass, Flavours & Fillings

- **About & Masterclass text** live in `index.html` — search for `id="about"` and
  `id="masterclass"`. Swap `images/about.jpg` / `images/masterclass.jpg` for your
  own photos any time.
- **Flavours & fillings** are edited in ONE place: the `FLAVOURS` and `FILLINGS`
  lists near the top of `script.js`. Add/remove items there and they update both
  the on-page menu **and** the order-form dropdowns automatically.

---

## 📸 Instagram feed (Gallery)

The **Gallery** section currently shows your **latest 4 posts** as a curated grid
(set in `CONFIG.instagramFeed.posts`), using the cake photos you provided. Each tile
links to your Instagram. To refresh it, just swap the images/captions in that list.

### Want it to update itself automatically? (optional)
A truly *live* feed that pulls new posts the moment you publish needs a connection
to Instagram — which requires **your** Instagram login, so it can't be set up for
you. It takes ~2 minutes:

1. Go to **[lightwidget.com](https://lightwidget.com)** (or [snapwidget.com](https://snapwidget.com)).
2. Connect `@eddiescakerybar` and create a widget (grid layout, 4 posts).
3. Copy the iframe **`src`** URL it gives you.
4. Paste it into `CONFIG.instagramFeed.embedUrl` in `script.js`.

Once `embedUrl` is set, it automatically takes over from the curated grid and stays
current on its own.

---

## 🌐 Putting it online (free hosting)

Pick any one:

- **Netlify Drop** — go to [app.netlify.com/drop](https://app.netlify.com/drop) and drag this whole folder in. Live in seconds.
- **Vercel** — [vercel.com](https://vercel.com), import the folder.
- **GitHub Pages** — push the folder to a repo, enable Pages.

Then put the link in your Instagram bio. 🎉

---

## ⭐ Google Reviews

The reviews section is powered by Google. There are two parts, both set in the
`CONFIG.google` block at the top of `script.js`:

### 1. The "Review us on Google" button (recommended, 2 min)
This sends customers straight to your Google review form.

1. Find your **Place ID** here:
   [Place ID finder](https://developers.google.com/maps/documentation/places/web-service/place-id)
   (search your business name on the map — it shows an ID like `ChIJ...`).
2. Paste it into `CONFIG.google.placeId`.

Now the **Review us on Google** and **See all reviews** buttons work. *(Until you
add it, those buttons just open a Google Maps search for your business — still fine.)*

### 2. Auto-display your real Google reviews (free, no API key)
To show your live Google star ratings & reviews on the page:

1. Sign up free at **[featurable.com](https://featurable.com)**.
2. Connect your Google Business Profile and create a reviews **widget**.
3. Copy the widget ID (a UUID like `a1b2c3d4-...`) into
   `CONFIG.google.featurableWidgetId`.

Your real Google reviews now appear automatically and stay up to date. 🎉

### Until then…
The page shows 4 curated starter reviews (`SEED_REVIEWS` in `script.js`) so the
section never looks empty. **Replace these with real testimonials** — once your
Featurable widget is set, they're hidden automatically.

> Prefer no third-party service? Google's own **Places API** can fetch reviews
> directly, but it needs an API key + billing and only returns up to 5 reviews.
> Say the word and it can be wired up instead.

---

## 🤖 The chat assistant

It answers FAQs (price, flavours, lead time, delivery, allergens, custom designs)
using keyword matching, and offers a WhatsApp handoff when it's unsure. Edit or add
answers in the `KB` array in `script.js` — no AI key or backend needed.

Want a *real* AI (Claude API) instead? That needs a small backend + API key — say the
word and it can be added.

---

## 📁 Files

| File | What it is |
|------|-----------|
| `index.html` | Page structure & content |
| `styles.css` | All styling / design |
| `script.js`  | Config, menu, order routing, reviews, chat bot |
| `README.md`  | This guide |

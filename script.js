/* ============================================================
   EDDIE'S CAKERY BAR — site logic
   ------------------------------------------------------------
   👉 EDIT THE CONFIG BELOW with your real details.
      Everything you need to change is in this one block.
   ============================================================ */

const CONFIG = {
  // Your WhatsApp number in FULL international format, digits only.
  // UK example: 44 + number without the leading 0  ->  447123456789
  whatsapp: "447460011497",          // 07460 011497 in UK international format

  // Your business email (orders sent "via Email" go here).
  email: "Eddiescakerybar@gmail.com",

  // OPTIONAL: A Formspree form ID for real email delivery (free, text only).
  // 1) Sign up at https://formspree.io  2) Create a form  3) paste the ID here.
  // Leave as "" to fall back to opening the customer's own email app.
  formspreeId: "xqeovgve",            // Formspree form (handles enquiries + photo attachments)

  // RECOMMENDED for the "upload inspiration photos" feature (free + supports
  // photo attachments emailed to you):
  //   1) Go to https://web3forms.com  2) Enter YOUR email, get an Access Key
  //   3) paste the key below. Orders AND uploaded photos will arrive in your inbox.
  // If set, this is used for "Send via Email" (takes priority over Formspree).
  web3formsKey: "358564c2-0852-49b2-856b-139fd26b856e",

  // For inspiration PHOTOS to arrive as links inside the email (free).
  // Web3Forms' free plan can't attach files, so uploaded photos are first sent
  // to ImgBB and the resulting links are included in your enquiry email.
  //   1) Sign up free at https://imgbb.com  2) Go to https://api.imgbb.com and
  //   click "Get API key"  3) paste the 32-character key below.
  // Leave "" and photos are collected via WhatsApp instead.
  imgbbKey: "6b4d4b5b74397f08f7cb7c2af61792b9",

  instagram: "eddiescakerybar",

  businessName: "Eddie's Cakery Bar",

  /* ---------- GOOGLE REVIEWS ----------
     Two parts. Fill in whichever you set up (instructions in README):

     1) placeId  — your Google Business "Place ID". Powers the
        "Review us on Google" and "See all reviews" buttons.
        Find it: https://developers.google.com/maps/documentation/places/web-service/place-id

     2) featurableWidgetId — to AUTO-DISPLAY your real Google reviews on the
        page (free, no API key). Sign up at https://featurable.com, create a
        widget for your business, and paste its ID here (looks like a UUID).
        Leave "" and the page shows the curated reviews below instead.        */
  google: {
    placeId: "",            // e.g. "ChIJ..."
    featurableWidgetId: "", // e.g. "a1b2c3d4-...."
  },

  /* ---------- INSTAGRAM FEED (last posts) ----------
     To show your real, auto-updating Instagram posts, paste an embed URL from a
     FREE widget service (no coding). Recommended: LightWidget or SnapWidget.
       • LightWidget: https://lightwidget.com  → create widget → copy the
         iframe "src" URL and paste it below.
       • SnapWidget:  https://snapwidget.com   → same idea.
     Leave "" and the page shows a tasteful fallback grid that links to your IG. */
  instagramFeed: {
    // OPTION A (live, auto-updating): paste a free LightWidget/SnapWidget embed URL.
    // When set, this overrides the curated posts below and pulls your real feed live.
    embedUrl: "", // e.g. "https://cdn.lightwidget.com/widgets/xxxxxxxx.html"

    // OPTION B (curated): your latest posts shown as a feed. Used until an embedUrl
    // is set. Update these images/links whenever you post something new.
    posts: [
      { img: "images/raspberry-square.jpg",  caption: "Raspberry ruffle celebration cake" },
      { img: "images/chapter30.jpg",         caption: "Chapter 30, ruffles & roses" },
      { img: "images/vintage-raspberry.jpg", caption: "Vintage raspberry cake with bows" },
      { img: "images/racing.jpg",            caption: "Kayo's Fast One racing birthday cake" },
    ],
  },

  /* ---------- FEATURED VIDEO (optional) ----------
     Show a video on the page. Two ways:
       • Your own file:  src: "videos/behind-the-scenes.mp4"  (drop it in /videos)
       • An embed URL:   src: "https://www.youtube.com/embed/XXXX"
                         or an Instagram reel embed URL.
     Leave src: "" and the whole video section stays hidden.                  */
  featuredVideo: {
    src: "",
    poster: "", // optional thumbnail image for .mp4 files, e.g. "images/video-poster.jpg"
  },
};

/* ---------- The cake collection (edit names / prices / photos) ----------
   img: replace the URLs with your own cake photos. Drop photos into an
   /images folder and use e.g. "images/red-velvet.jpg".                  */
const CAKES = [
  {
    name: "Wedding Cakes",
    desc: "Bespoke luxury wedding cakes designed to beautifully complement your special day.",
    img: "images/vintage-tiered.jpg",
  },
  {
    name: "Vintage Cakes",
    desc: "Stylish vintage cakes perfect for birthdays, anniversaries and memorable celebrations.",
    img: "images/heart-thirty.jpg",
  },
  {
    name: "Wafer Paper Cakes",
    desc: "Elegant cakes featuring delicate edible wafer paper details for a modern, artistic finish.",
    img: "images/chapter30.jpg",
  },
  {
    name: "Tiered Cakes",
    desc: "Beautifully crafted multi-tier cakes designed to create a stunning centrepiece for any celebration.",
    img: "images/circus-tj.jpg",
  },
  {
    name: "Kids Cakes",
    desc: "Fun and creative themed cakes designed to make every child's celebration extra special.",
    img: "images/racing.jpg",
  },
  {
    name: "Brand Collaborations",
    desc: "Custom-designed cakes created to elevate brand events, launches and corporate celebrations.",
    img: "images/brand-collab.jpg",
  },
];

/* ---------- Seed reviews (shown by default; new ones save in browser) ---------- */
const SEED_REVIEWS = [
  { name: "Naomi B.", rating: 5, text: "Absolutely stunning cake and it tasted even better than it looked. Everyone asked where it was from!" },
  { name: "David O.", rating: 5, text: "Ordered a bento cake for my partner and the detail was incredible. Eddie made the whole process so easy." },
  { name: "Priya K.", rating: 5, text: "My wedding cake was a dream. Beautifully made, delivered on time, and so delicious. Thank you!" },
  { name: "Tom W.", rating: 5, text: "Best red velvet I've ever had, no exaggeration. Will be ordering again for every birthday." },
];

/* ---------- Cake flavours (shown on the page + selectable in the order form) ---------- */
const FLAVOURS = [
  { name: "Classic Vanilla", desc: "A timeless favourite. Light, fluffy and full of rich vanilla goodness, perfect for any occasion." },
  { name: "Oreo", desc: "For all the Oreo lovers! Moist layers mixed with Oreo and creamy Oreo frosting make a cookie-filled delight." },
  { name: "Red Velvet", desc: "Smooth and velvety with a hint of cocoa, topped with luscious cream cheese frosting for the ultimate indulgence." },
  { name: "Chocolate", desc: "Rich, indulgent and packed with deep cocoa flavour. A chocoholic's dream." },
  { name: "Biscoff", desc: "Deliciously spiced Biscoff cake layered with creamy Biscoff spread. A caramelised, crunchy delight in every bite!" },
  { name: "Salted Caramel", desc: "A perfect balance of sweet and salty, drizzled with luscious caramel sauce and a touch of sea salt." },
  { name: "Victorian Sponge", desc: "Light, airy and a true classic, filled with fresh cream and strawberry jam. Traditional yet irresistible." },
];

/* ---------- Cake fillings (shown on the page + selectable in the order form) ---------- */
const FILLINGS = [
  { name: "Jam", desc: "A classic strawberry favourite. A sweet burst that balances light, fluffy cakes." },
  { name: "Oreo White Chocolate", desc: "A creamy dream. The crunch of Oreo cookies with smooth white chocolate for a luxurious bite." },
  { name: "Salted Caramel", desc: "A rich, buttery delight with just the right hint of saltiness for a sweet-and-salty twist." },
  { name: "Biscoff", desc: "Smooth, spiced and caramelised. A unique crunchy sweetness that melts in your mouth." },
  { name: "Bueno", desc: "Creamy hazelnut and chocolate perfection inspired by the beloved treat. Dreamy and nutty in every layer!" },
];

/* ============================================================
   Helpers
   ============================================================ */
const $ = (sel) => document.querySelector(sel);
const $$ = (sel) => document.querySelectorAll(sel);
const waLink = (text) => `https://wa.me/${CONFIG.whatsapp}?text=${encodeURIComponent(text)}`;
const igLink = `https://www.instagram.com/${CONFIG.instagram}/`;

/* ============================================================
   Year + footer/contact links
   ============================================================ */
$("#year").textContent = new Date().getFullYear();
$("#footWhatsApp").href = waLink(`Hi ${CONFIG.businessName}! I'd love to ask about a cake.`);
$("#floatWa").href = waLink(`Hi ${CONFIG.businessName}! I'd love to ask about a cake.`);
$("#footEmail").href = `mailto:${CONFIG.email}`;
$("#sendInstagram").href = igLink;

/* ============================================================
   Nav: scroll state + mobile burger
   ============================================================ */
const nav = $("#nav");
const toTop = $("#toTop");
window.addEventListener("scroll", () => {
  nav.classList.toggle("scrolled", window.scrollY > 30);
  toTop.classList.toggle("show", window.scrollY > 600);
});
toTop.addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));
const navLinks = $("#navLinks");
$("#burger").addEventListener("click", () => navLinks.classList.toggle("open"));
navLinks.querySelectorAll("a").forEach((a) =>
  a.addEventListener("click", () => navLinks.classList.remove("open"))
);

/* ============================================================
   Render cake cards + populate order dropdown
   ============================================================ */
const menuGrid = $("#menuGrid");
const cakeSelect = $("#cake");
CAKES.forEach((cake) => {
  // card — supports an optional `video` field (mp4). If present, the card shows a
  // muted, looping video instead of a static image.
  const media = cake.video
    ? `<video class="cake-card__video" src="${cake.video}" poster="${cake.img || ""}"
              muted loop playsinline autoplay preload="metadata"></video>`
    : `<div class="cake-card__img" style="background-image:url('${cake.img}')"></div>`;
  const card = document.createElement("article");
  card.className = "cake-card reveal";
  card.innerHTML = `
    ${media}
    <div class="cake-card__body">
      <h3 class="cake-card__name">${cake.name}</h3>
      <p class="cake-card__desc">${cake.desc}</p>
      <div class="cake-card__foot">
        <a href="#order" class="cake-card__btn" data-cake="${cake.name}">Enquire to order →</a>
      </div>
    </div>`;
  menuGrid.appendChild(card);

  // dropdown option (before the "Custom design" option)
  const opt = document.createElement("option");
  opt.textContent = cake.name;
  cakeSelect.insertBefore(opt, cakeSelect.lastElementChild);
});

// clicking "Order this" preselects the cake
menuGrid.addEventListener("click", (e) => {
  const link = e.target.closest("[data-cake]");
  if (link) cakeSelect.value = link.dataset.cake;
});

/* ============================================================
   Flavours & fillings — render menu + populate order dropdowns
   ============================================================ */
function renderChoiceList(items, containerSel) {
  const box = $(containerSel);
  items.forEach((it) => {
    const row = document.createElement("div");
    row.className = "choice";
    row.innerHTML = `<h4 class="choice__name">${it.name}</h4><p class="choice__desc">${it.desc}</p>`;
    box.appendChild(row);
  });
}
function fillSelect(items, selectSel) {
  const sel = $(selectSel);
  items.forEach((it) => {
    const opt = document.createElement("option");
    opt.textContent = it.name;
    sel.insertBefore(opt, sel.lastElementChild); // before "Not sure — advise me"
  });
}
renderChoiceList(FLAVOURS, "#flavourList");
renderChoiceList(FILLINGS, "#fillingList");
fillSelect(FLAVOURS, "#flavour");
fillSelect(FILLINGS, "#filling");

/* ============================================================
   Order form -> WhatsApp / Email / Instagram
   ============================================================ */
const orderForm = $("#orderForm");
const orderNote = $("#orderNote");

function gatherOrder() {
  const get = (id) => ($("#" + id)?.value || "").trim();
  return {
    name: get("name"),
    phone: get("phone"),
    email: get("email"),
    occasion: get("occasion"),
    date: get("date"),
    cake: get("cake"),
    servings: get("servings"),
    flavour: get("flavour"),
    filling: get("filling"),
    fulfilment: get("fulfilment"),
    details: get("details"),
  };
}

function validOrder(o) {
  if (!o.name || !o.phone || !o.occasion || !o.date || !o.cake) {
    orderNote.textContent = "Please fill in the required fields (marked *) first.";
    orderForm.reportValidity();
    return false;
  }
  return true;
}

function orderToText(o) {
  return (
    `🎂 New cake enquiry for ${CONFIG.businessName}\n\n` +
    `Name: ${o.name}\n` +
    `Phone/WhatsApp: ${o.phone}\n` +
    (o.email ? `Email: ${o.email}\n` : "") +
    `Occasion: ${o.occasion}\n` +
    `Date needed: ${o.date}\n` +
    `Cake: ${o.cake}\n` +
    (o.servings ? `Size/servings: ${o.servings}\n` : "") +
    (o.flavour ? `Flavour: ${o.flavour}\n` : "") +
    (o.filling ? `Filling: ${o.filling}\n` : "") +
    (o.fulfilment ? `Collection/Delivery: ${o.fulfilment}\n` : "") +
    (o.details ? `\nDetails: ${o.details}\n` : "")
  );
}

// --- Inspiration photo upload: reflect selection in the label ---
const inspoInput = $("#inspo");
inspoInput.addEventListener("change", () => {
  const n = inspoInput.files.length;
  $("#uploadText").textContent = n
    ? `${n} photo${n > 1 ? "s" : ""} attached ✓`
    : "Tap to add photos";
});

// --- Send via WhatsApp ---
$("#sendWhatsApp").addEventListener("click", () => {
  const o = gatherOrder();
  if (!validOrder(o)) return;
  window.open(waLink(orderToText(o)), "_blank");
  orderNote.textContent = inspoInput.files.length
    ? "Opening WhatsApp. Hit send, then attach your inspiration photos right in the chat! 📸"
    : "Opening WhatsApp with your order. Just hit send! 🎉";
});

// --- Send via Email (Web3Forms w/ photo attachments → Formspree → mailto) ---
orderForm.addEventListener("submit", async (e) => {
  e.preventDefault();
  const o = gatherOrder();
  if (!validOrder(o)) return;
  const files = inspoInput.files;

  // Fallback service: Web3Forms (used only if Formspree isn't configured).
  if (CONFIG.web3formsKey && !CONFIG.formspreeId) {
    orderNote.textContent = "Sending your enquiry…";
    try {
      // 1) If photos were added and ImgBB is configured, upload them first so we
      //    can include clickable links in the email (Web3Forms free can't attach).
      let photoLinks = [];
      let uploadFailed = false;
      if (files.length && CONFIG.imgbbKey) {
        orderNote.textContent = "Uploading your photos…";
        for (const f of files) {
          try {
            const ifd = new FormData();
            ifd.append("image", f);
            const ir = await fetch(`https://api.imgbb.com/1/upload?key=${CONFIG.imgbbKey}`, { method: "POST", body: ifd });
            const ij = await ir.json();
            if (ij && ij.success && ij.data && ij.data.url) photoLinks.push(ij.data.url);
            else uploadFailed = true;
          } catch { uploadFailed = true; }
        }
      }

      // 2) Send the enquiry to your inbox.
      orderNote.textContent = "Sending your enquiry…";
      const fd = new FormData();
      fd.append("access_key", CONFIG.web3formsKey);
      fd.append("subject", `New cake enquiry from ${o.name}`);
      fd.append("from_name", CONFIG.businessName + " website");
      Object.entries(o).forEach(([k, v]) => v && fd.append(k, v));
      if (photoLinks.length) {
        fd.append("inspiration_photos", photoLinks.join("\n"));
      } else if (files.length) {
        fd.append("inspiration_photos", `${files.length} photo(s) to follow via WhatsApp`);
      }
      const res = await fetch("https://api.web3forms.com/submit", { method: "POST", body: fd });
      const data = await res.json().catch(() => ({}));

      if (res.ok && data.success) {
        orderForm.reset();
        $("#uploadText").textContent = "Tap to add photos";
        if (photoLinks.length) {
          orderNote.textContent = "Thank you! Your enquiry and photos have been sent to our inbox. We'll be in touch soon. 🎂";
        } else if (files.length) {
          // photos couldn't be hosted (no ImgBB key, or upload failed) -> WhatsApp
          orderNote.textContent = "Enquiry sent to our inbox! Opening WhatsApp so you can attach your photos.";
          window.open(waLink(orderToText(o) + "\n(Sending my inspiration photos here)"), "_blank");
        } else {
          orderNote.textContent = "Thank you! Your enquiry has been sent straight to our inbox. We'll be in touch soon. 🎂";
        }
      } else {
        orderNote.textContent = "Hmm, that didn't send. Please try WhatsApp instead.";
      }
    } catch {
      orderNote.textContent = "Network issue. Please try WhatsApp instead.";
    }
    return;
  }

  // Primary: Formspree for the enquiry. Photos are hosted on ImgBB first and
  // included as clickable links (works on Formspree's free plan, which doesn't
  // accept file attachments). If hosting fails, photos fall back to WhatsApp.
  if (CONFIG.formspreeId) {
    const endpoint = `https://formspree.io/f/${CONFIG.formspreeId}`;
    const post = (fd) => fetch(endpoint, { method: "POST", headers: { Accept: "application/json" }, body: fd });
    orderNote.textContent = files.length ? "Uploading your photos…" : "Sending your enquiry…";
    try {
      // 1) Host any photos on ImgBB to get shareable links.
      let photoLinks = [];
      if (files.length && CONFIG.imgbbKey) {
        for (const f of files) {
          try {
            const ifd = new FormData();
            ifd.append("image", f);
            const ir = await fetch(`https://api.imgbb.com/1/upload?key=${CONFIG.imgbbKey}`, { method: "POST", body: ifd });
            const ij = await ir.json();
            if (ij && ij.success && ij.data && ij.data.url) photoLinks.push(ij.data.url);
          } catch { /* skip a failed photo */ }
        }
      }

      // 2) Send the enquiry (with photo links) to your inbox.
      orderNote.textContent = "Sending your enquiry…";
      const fd = new FormData();
      fd.append("_subject", `New cake enquiry from ${o.name}`);
      Object.entries(o).forEach(([k, v]) => v && fd.append(k, v));
      if (photoLinks.length) fd.append("inspiration_photos", photoLinks.join("\n"));
      const res = await post(fd);

      if (res.ok) {
        orderForm.reset();
        $("#uploadText").textContent = "Tap to add photos";
        if (photoLinks.length) {
          orderNote.textContent = "Thank you! Your enquiry and photos have been sent to our inbox. We'll be in touch soon. 🎂";
        } else if (files.length) {
          // photos couldn't be hosted -> hand off to WhatsApp so they aren't lost
          orderNote.textContent = "Enquiry sent to our inbox! Opening WhatsApp so you can attach your photos.";
          window.open(waLink(orderToText(o) + "\n(Sending my inspiration photos here)"), "_blank");
        } else {
          orderNote.textContent = "Thank you! Your enquiry has been sent straight to our inbox. We'll be in touch soon. 🎂";
        }
      } else {
        orderNote.textContent = "Hmm, that didn't send. Please try WhatsApp instead.";
      }
    } catch {
      orderNote.textContent = "Network issue. Please try WhatsApp instead.";
    }
    return;
  }

  // Fallback: open the customer's own email app (can't attach files this way).
  const subject = encodeURIComponent(`Cake order from ${o.name}`);
  const body = encodeURIComponent(orderToText(o));
  window.location.href = `mailto:${CONFIG.email}?subject=${subject}&body=${body}`;
  orderNote.textContent = files.length
    ? "Opening your email app. Please attach your photos there, or send them via WhatsApp."
    : "Opening your email app with the order ready to send.";
});

// --- Masterclass enquiry button -> WhatsApp prefilled ---
$("#bookClass").href = waLink(
  `Hi ${CONFIG.businessName}! I'm interested in booking a cake masterclass. Could you tell me more about availability?`
);
$("#bookClass").target = "_blank";
$("#bookClass").rel = "noopener";

/* ============================================================
   Google Reviews
   ------------------------------------------------------------
   - Buttons deep-link to Google using CONFIG.google.placeId
   - If CONFIG.google.featurableWidgetId is set, the live Google
     reviews widget is mounted and the curated fallback is hidden.
   - Otherwise the curated SEED_REVIEWS are shown so the section
     never looks empty.
   ============================================================ */
// Runs only if the Reviews section is present (it's currently removed until the
// business is connected to real Google reviews — restore the HTML to re-enable).
if (document.getElementById("reviews")) {
  const { placeId, featurableWidgetId } = CONFIG.google;

  // --- wire up the Google buttons ---
  const leaveBtn = $("#leaveGoogleReview");
  const seeAllBtn = $("#seeAllGoogle");
  if (placeId) {
    leaveBtn.href = `https://search.google.com/local/writereview?placeid=${placeId}`;
    seeAllBtn.href = `https://search.google.com/local/reviews?placeid=${placeId}`;
  } else {
    const q = encodeURIComponent(CONFIG.businessName);
    leaveBtn.href = `https://www.google.com/maps/search/?api=1&query=${q}`;
    seeAllBtn.href = `https://www.google.com/maps/search/?api=1&query=${q}`;
  }

  const starStr = (n) => "★★★★★".slice(0, n) + "☆☆☆☆☆".slice(0, 5 - n);
  const reviewsGrid = $("#reviewsGrid");
  const renderCurated = () => {
    reviewsGrid.innerHTML = "";
    SEED_REVIEWS.forEach((r) => {
      const card = document.createElement("article");
      card.className = "review-card reveal in";
      card.innerHTML = `
        <div class="review-card__stars">${starStr(r.rating)}</div>
        <p class="review-card__text">“${r.text}”</p>
        <p class="review-card__author">${r.name} · <span class="review-card__src">Google</span></p>`;
      reviewsGrid.appendChild(card);
    });
    const avg = SEED_REVIEWS.reduce((s, r) => s + r.rating, 0) / SEED_REVIEWS.length;
    $("#avgStars").textContent = starStr(Math.round(avg));
    $("#avgText").textContent = `${avg.toFixed(1)} · from ${SEED_REVIEWS.length} reviews`;
  };

  // --- mount live Google reviews (Featurable) or fall back to curated ---
  if (featurableWidgetId) {
    reviewsGrid.style.display = "none";
    $("#googleReviews").innerHTML = `<div id="featurable-${featurableWidgetId}" data-featurable-async></div>`;
    const s = document.createElement("script");
    s.src = "https://featurable.com/assets/bundle.js";
    s.async = true;
    s.charset = "utf-8";
    document.body.appendChild(s);
  } else {
    renderCurated();
  }
}

/* ============================================================
   Featured video (optional) — show section only if configured
   ============================================================ */
(function setupVideo() {
  const { src, poster } = CONFIG.featuredVideo;
  if (!src) return; // section stays hidden
  const section = $("#videoFeature");
  const frame = $("#videoFrame");
  const isFile = /\.(mp4|webm|ogg)(\?|$)/i.test(src);
  frame.innerHTML = isFile
    ? `<video src="${src}" ${poster ? `poster="${poster}"` : ""} controls playsinline preload="metadata"></video>`
    : `<iframe src="${src}" title="Featured video" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen loading="lazy"></iframe>`;
  section.hidden = false;
})();

/* ============================================================
   Instagram feed — live widget if configured, else fallback grid
   ============================================================ */
(function setupInsta() {
  const embedUrl = CONFIG.instagramFeed.embedUrl;
  const feed = $("#instaFeed");
  const fallback = $("#instaFallback");

  if (embedUrl) {
    fallback.style.display = "none";
    feed.innerHTML = `<iframe src="${embedUrl}" title="Instagram feed" scrolling="no" allowtransparency="true" frameborder="0" loading="lazy"></iframe>`;
    return;
  }

  // Curated "latest posts" grid — uses CONFIG.instagramFeed.posts and links to
  // the profile. Stays until a live widget URL is connected (see README).
  feed.style.display = "none";
  const posts = CONFIG.instagramFeed.posts || [];
  fallback.style.setProperty("--cols", Math.min(posts.length, 4));
  posts.forEach((p) => {
    const a = document.createElement("a");
    a.className = "insta__tile reveal in";
    a.href = igLink;
    a.target = "_blank";
    a.rel = "noopener";
    a.style.backgroundImage = `url('${p.img}')`;
    a.innerHTML = `<span class="insta__tile-overlay">⌾ ${p.caption || "View on Instagram"}</span>`;
    fallback.appendChild(a);
  });
})();

/* ============================================================
   Reveal-on-scroll
   ============================================================ */
const io = new IntersectionObserver(
  (entries) => entries.forEach((en) => en.isIntersecting && en.target.classList.add("in")),
  { threshold: 0.12 }
);
$$(".reveal").forEach((el) => io.observe(el));

/* ============================================================
   AI-style FAQ chat bot
   ------------------------------------------------------------
   Keyword-matched smart answers + WhatsApp handoff.
   Add/edit Q&A in the KB array below.
   ============================================================ */
const KB = [
  {
    keys: ["price", "cost", "how much", "pricing", "expensive", "budget", "price list", "price guide", "prices"],
    a: "Here's our starting price guide. Final prices vary with the design, decorations, toppers, florals and cake shape.<br><br>" +
       "<strong>Celebration cakes</strong><br>6-inch from £90<br>8-inch from £130<br>10-inch from £190<br><br>" +
       "<strong>Cupcakes</strong><br>Box of 12 from £30<br><br>" +
       "<strong>Bento box</strong> (4-inch cake &amp; 5 cupcakes) from £65<br><br>" +
       "<strong>Tiered cakes</strong><br>Small two-tier (6-inch &amp; 4-inch) from £160<br>Standard two-tier from £200<br><br>" +
       "For an exact quote, send your serving size, date, theme and any inspiration photos via the order form or WhatsApp.",
  },
  {
    keys: ["flavour", "flavor", "taste", "sponge", "vanilla", "chocolate", "red velvet", "filling", "biscoff", "oreo"],
    a: "Our flavours are Classic Vanilla, Oreo, Red Velvet, Chocolate, Biscoff, Salted Caramel and Victorian Sponge. Fillings include Jam, Oreo White Chocolate, Salted Caramel, Biscoff and Bueno. You'll find full descriptions in the Flavours section above.",
  },
  {
    keys: ["wedding", "weddings", "bride", "marriage"],
    a: "We'd love to make your wedding cake! Please book a minimum of 3 months in advance so we can plan the consultation, design and scheduling.",
  },
  {
    keys: ["last minute", "last-minute", "short notice", "urgent", "rush", "asap", "emergency", "soon"],
    a: "We sometimes take last-minute orders, subject to availability. A £20 surcharge applies to short-notice orders. Message us on WhatsApp and we'll check your date right away.",
  },
  {
    keys: ["how long", "notice", "lead time", "advance", "when", "book", "available", "how far"],
    a: "To avoid disappointment, please book at least 1 month ahead for celebration cakes, and 3 months for weddings. Need something sooner? Just ask, short-notice orders are sometimes possible (a £20 surcharge applies).",
  },
  {
    keys: ["deliver", "delivery", "collect", "collection", "pickup", "pick up", "ship"],
    a: "You can collect from us, or we offer local delivery for a small fee depending on distance. Just choose your preference in the order form.",
  },
  {
    keys: ["allergy", "allergen", "gluten", "vegan", "dairy", "nut", "egg"],
    a: "We can cater to many dietary needs including vegan and gluten-friendly options. Please tell us about any allergies in your order so we can advise safely.",
  },
  {
    keys: ["custom", "design", "bespoke", "theme", "picture", "photo", "personalised", "personalized"],
    a: "Custom designs are our favourite! Describe your theme, colours and inspiration in the order form (or send reference photos on WhatsApp) and we'll bring it to life. Every cake is uniquely designed for you.",
  },
  {
    keys: ["pay", "payment", "deposit", "secure", "booking", "confirm", "reserve"],
    a: "A 50% non-refundable deposit secures your date. Orders aren't confirmed until the deposit is received, with the balance due before collection or delivery.",
  },
  {
    keys: ["where", "location", "address", "based"],
    a: "We're a small-batch home cakery taking orders locally. Send us a message and we'll confirm collection details and our delivery range for your area.",
  },
  {
    keys: ["order", "buy", "want a cake", "place order"],
    a: "Wonderful! Scroll up to the order form, fill in your details and send it to us via WhatsApp or email. We'll confirm price and availability quickly.",
  },
  {
    keys: ["hour", "open", "opening", "time"],
    a: "We're around Mon to Fri 9am to 6pm, Sat 10am to 4pm, and Sundays by order. We answer messages as quickly as we can!",
  },
];

const FALLBACK =
  "Great question! I'm not 100% sure on that one. The quickest way to get an answer is to message us directly. Want me to open WhatsApp for you?";

const GREETING =
  "Hi there! 👋 I'm the Cakery Assistant. Ask me about flavours, prices, delivery, lead times or custom designs, or tap a question below.";

const QUICK = ["How much are your cakes?", "What flavours do you have?", "How far in advance?", "Do you deliver?"];

const chat = $("#chat");
const chatBody = $("#chatBody");
const chatQuick = $("#chatQuick");
let chatStarted = false;

function addMsg(text, who) {
  const div = document.createElement("div");
  div.className = `msg msg--${who}`;
  div.innerHTML = text;
  chatBody.appendChild(div);
  chatBody.scrollTop = chatBody.scrollHeight;
}

function botReply(text) {
  // small "typing" delay for a natural feel
  setTimeout(() => addMsg(text, "bot"), 450);
}

function answer(query) {
  const q = query.toLowerCase();
  const hit = KB.find((item) => item.keys.some((k) => q.includes(k)));
  if (hit) return hit.a;
  return `${FALLBACK} <a href="${waLink("Hi! I have a question about a cake.")}" target="_blank">Chat on WhatsApp →</a>`;
}

function renderQuick() {
  chatQuick.innerHTML = "";
  QUICK.forEach((q) => {
    const b = document.createElement("button");
    b.textContent = q;
    b.addEventListener("click", () => handleUser(q));
    chatQuick.appendChild(b);
  });
}

function startChat() {
  if (chatStarted) return;
  chatStarted = true;
  addMsg(GREETING, "bot");
  renderQuick();
}

function handleUser(text) {
  addMsg(text, "user");
  botReply(answer(text));
}

$("#chatToggle").addEventListener("click", () => {
  chat.classList.add("open");
  $("#chatWindow").setAttribute("aria-hidden", "false");
  startChat();
});
$("#chatClose").addEventListener("click", () => {
  chat.classList.remove("open");
  $("#chatWindow").setAttribute("aria-hidden", "true");
});
$("#chatForm").addEventListener("submit", (e) => {
  e.preventDefault();
  const input = $("#chatText");
  const text = input.value.trim();
  if (!text) return;
  handleUser(text);
  input.value = "";
});

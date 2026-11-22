import _2048club from "~/assets/imgs/2048club.png"
import ChargeBellImg from "~/assets/imgs/chargebell.png"
import ConverturImg from "~/assets/imgs/convertur.jpg"
import DEMSImg from "~/assets/imgs/dems.webp"
import ElfilahaImg from "~/assets/imgs/elfilaha.webp"
import FlutterFireImg from "~/assets/imgs/flutter-social.webp"
import JsonKitImg from "~/assets/imgs/jsonkit.jpg"
import KorgiImg from "~/assets/imgs/korgi.webp"
import LinkDapImg from "~/assets/imgs/linkdap.jpg"
import OrbDocImg from "~/assets/imgs/orbdoc.jpg"
import PDFToolzImg from "~/assets/imgs/pdftoolz.jpg"
import ThumbnailGrabberImg from "~/assets/imgs/thumbnail-grabber.jpg"

// Every project shown on the home page, each with its own /work/<slug> case
// study. Facts come from each product's public site; keep them in sync when a
// product changes (tool counts, supported platforms, pricing).
export const products = [
  {
    slug: "chargebell",
    name: "ChargeBell",
    category: "SaaS",
    platform: "Web app with Stripe and Slack integrations",
    src: "https://chargebell.com",
    host: "chargebell.com",
    img: ChargeBellImg,
    description:
      "ChargeBell posts Stripe activity in Slack, including payments, payouts, failed cards, refunds, disputes, and subscription changes. Teams can choose which alerts go where, set minimum amounts, and keep noisy events out of the channel.",
    problem:
      "Payments happen in Stripe, but the people who act on them work in Slack. Without a dedicated tool, teams write their own webhook code, chain together automations, or keep checking the Stripe dashboard by hand, and a failed payment or new dispute can sit unnoticed.",
    built: [
      "Stripe and Slack connections through each platform's official OAuth, with read-only access to Stripe so alerts can never change a payment or subscription",
      "Plain-English alerts for payments, failed payments, new customers, subscription changes, refunds, and disputes",
      "Per-channel routing, minimum amounts, daily and weekly digests, and a full alert history",
      "A two-minute setup flow that ends with a test alert in the chosen channel",
      "Free and Pro plans with subscription billing, plus free tools such as a Stripe fee calculator and webhook decoder",
    ],
    techs: ["saas", "stripe", "slack"],
  },
  {
    slug: "orbdoc",
    name: "OrbDoc",
    category: "Healthcare AI",
    platform: "iPhone app, web, and EHR integration",
    src: "https://orbdoc.com",
    host: "orbdoc.com",
    img: OrbDocImg,
    description:
      "OrbDoc's OrbVoice app listens during a patient visit and turns the conversation into a draft clinical note while the doctor is still in the room. The physician reviews it, makes any edits, and sends it to the EHR instead of typing everything afterward.",
    problem:
      "Clinicians spend a large part of their day writing notes after visits. What was decided in the exam room has to be typed up, coded, and passed along accurately, and every manual step is a chance for detail to get lost.",
    built: [
      "OrbVoice, an iPhone app that records or takes dictation during a visit and drafts the clinical note",
      "One conversation turned into SOAP notes, patient instructions, and visit paperwork",
      "A review-and-edit step so the physician approves every note before it leaves the app",
      "Delivery of finished notes into the EHR, starting with eClinicalWorks",
      "Distribution through the App Store, with SOAP notes free for individual clinicians",
    ],
    techs: ["healthcare", "ai", "ios"],
  },
  {
    slug: "korgiboard",
    name: "KorgiBoard",
    category: "AI productivity SaaS",
    platform: "Web app, Chrome extension, and Google Workspace add-on",
    src: "https://korgiboard.com",
    host: "korgiboard.com",
    img: KorgiImg,
    description:
      "Korgi turns a short prompt into a working Kanban board, then lets the team pull in files and meetings from Google Workspace, Microsoft 365, and Zoom. It keeps the plan, the source material, and the finished work in one place.",
    problem:
      "Small businesses and teams lose hours every week switching between tabs, apps, and drives to find the files and conversations behind their work. Plans live in one tool and the material they depend on lives everywhere else.",
    built: [
      "AI board generation that turns a short prompt into stages, steps, and resources in under a minute",
      "Integrations with Google Workspace, Microsoft 365, Gmail, and Zoom, saving work to the user's own drives",
      "An AI assistant that answers questions using the board and its connected files",
      "One-click export to Docs, Sheets, and Slides, plus a Chrome extension and a Google Workspace add-on",
      "Team sharing, real-time collaboration, and paid plans with free trials",
    ],
    proof: "Korgi 2.0 was the #4 launch of the day on Product Hunt (December 2025).",
    techs: ["typescript", "react", "nextjs"],
  },
  {
    slug: "pdftoolz",
    name: "PDFToolz",
    category: "Privacy-first web tools",
    platform: "Web, in any modern browser",
    src: "https://pdftoolz.com",
    host: "pdftoolz.com",
    img: PDFToolzImg,
    description:
      "PDFToolz puts the common PDF jobs in one place: merge, split, compress, convert, edit, sign, and protect. Files stay on the device while you work, which keeps the tools quick and private.",
    problem:
      "Most online PDF tools upload your document to a server, process it, and send it back. For contracts, medical records, tax forms, and ID scans, that means sensitive files sit on someone else's computer.",
    built: [
      "73 PDF tools across organizing, converting, editing, and securing documents",
      "Processing that runs entirely in the browser with JavaScript and WebAssembly, so files never make a round trip to a server",
      "Open-source engines wired together: pdf-lib, PDF.js, qpdf compiled to WebAssembly, and Tesseract.js for OCR",
      "eSign, redaction, metadata removal, and an accessibility checker",
      "No accounts, upload limits, or watermarks",
    ],
    techs: ["pdf", "webassembly", "privacy"],
  },
  {
    slug: "jsonkit",
    name: "JsonKit",
    category: "Developer tools",
    platform: "Web, works offline once loaded",
    src: "https://jsonkit.com",
    host: "jsonkit.com",
    img: JsonKitImg,
    description:
      "JsonKit is a collection of 71 developer tools for working with JSON, code, URLs, SQL, and QR codes. Everything runs in the browser, so you can paste real data without sending it to a server.",
    problem:
      "Most JSON tools upload what you paste. Developers routinely paste production responses, access tokens, and personal data into them, and that data ends up on servers they know nothing about.",
    built: [
      "71 tools for formatting, validating, converting, querying, and generating data",
      "Live results as you type, with errors pointing to the exact line and column",
      "Keyboard-first navigation, with shortcuts to jump between tools, run, and copy",
      "Each tool checked against the specification it implements, such as RFC 8259 for JSON",
      "Fully client-side processing with no signup, paywall, or file size limit",
    ],
    techs: ["developer tools", "client-side", "privacy"],
  },
  {
    slug: "convertur",
    name: "Convertur",
    category: "Privacy-first web tools",
    platform: "Web, works offline once loaded",
    src: "https://convertur.com",
    host: "convertur.com",
    img: ConverturImg,
    description:
      "Convertur handles images, PDFs, audio, video, documents, and data files without uploading them first. Drop in a file, pick an output, and the conversion runs in the browser.",
    problem:
      "Upload-based converters send personal files to someone else's server, make you wait in a queue, and add size limits, daily caps, paywalls, or required accounts.",
    built: [
      "Converters for images, PDFs, audio, video, documents, and data, from HEIC to JPG to MP4 to GIF",
      "A WebAssembly engine that runs each conversion inside the browser tab",
      "In-browser machine learning for OCR and background removal",
      "Compression tools with quality sliders and resolution caps",
      "No upload size cap, daily limit, or account",
    ],
    techs: ["file conversion", "webassembly", "privacy"],
  },
  {
    slug: "thumbnail-grabber",
    name: "Thumbnail Grabber",
    category: "Creator tools",
    platform: "Web, on desktop and mobile",
    src: "https://thumbnail-grabber.com",
    host: "thumbnail-grabber.com",
    img: ThumbnailGrabberImg,
    description:
      "Paste a video link and Thumbnail Grabber finds every available image size. It works with YouTube, TikTok, Vimeo, Dailymotion, and Rumble, with tools for previews, comparisons, quick edits, and bulk downloads.",
    problem:
      "Getting a video's thumbnail usually means taking a screenshot or downloading the whole video. Creators who want to recover their own artwork, compare designs, or save a reference have no direct way to do it.",
    built: [
      "Thumbnail lookup for YouTube, Shorts, TikTok, Vimeo, Dailymotion, and Rumble, in every available size",
      "Bulk download of up to 50 videos into a single ZIP file",
      "A preview that shows a thumbnail in mock desktop, mobile, and search feeds, plus side-by-side comparison",
      "An in-browser editor and compressor, with fetching proxied through the server only when needed",
      "19 free tools for YouTube creators, from a banner maker to a revenue calculator",
    ],
    techs: ["creator tools", "media", "client-side"],
  },
  {
    slug: "2048-club",
    name: "2048 Club",
    category: "Web game",
    platform: "Web, installable",
    src: "https://2048.club",
    host: "2048.club",
    img: _2048club,
    description:
      "A fresh take on 2048 with board sizes from 3x3 to 8x8, custom tile themes, multiplayer rooms, leaderboards, and several puzzle variants. The familiar game is still at the center. There is simply more to do with it.",
    problem:
      "Most versions of 2048 stop at the original 4x4 board. Players who want more variety, a reason to come back each day, or a way to compete with friends have to look elsewhere.",
    built: [
      "Board sizes from 3x3 to 8x8 and more than 20 modes, including Hexagon, Tetris, and Time Attack",
      "A daily board that every player gets at the same time",
      "Leaderboards with move-by-move replays and challenge links to send to friends",
      "A solver that suggests the next move, a strategy guide, and practice puzzles",
      "Optional accounts for saving best games and badges",
    ],
    techs: ["astro", "solidjs", "game"],
  },
  {
    slug: "linkdap",
    name: "LinkDap",
    category: "Community platform",
    platform: "Web app",
    src: "https://linkdap.com/feed",
    host: "linkdap.com",
    img: LinkDapImg,
    description:
      "LinkDap is a community feed for people sharing ideas, questions, and opportunities. Posts, curated listings, topic spaces, bookmarks, replies, and discovery keep useful conversations from getting lost.",
    problem:
      "Research updates, questions, and opportunities are scattered across campuses, mailing lists, and inboxes. Faculty, staff, and students miss deadlines and collaborators because there is no single place to find them.",
    built: [
      "A feed with personalized, curated, community, deadline, and newest views",
      "Post types for updates, questions, recommendations, links, and opportunities",
      "Opportunity cards that people can save, mark as interested, or follow up on",
      "Topic spaces, a programs directory, and an intake form for new programs",
      "Feed tuning with boosted tags and search",
    ],
    techs: ["community", "social", "opportunities"],
  },
  {
    slug: "elfilaha",
    name: "Elfilaha",
    category: "Content site",
    platform: "Web, in Arabic",
    src: "https://elfilaha.com",
    host: "elfilaha.com",
    img: ElfilahaImg,
    description:
      "Elfilaha publishes practical farming information in Arabic for people in Morocco. Its articles cover subsidies, crops, irrigation, farm projects, land rules, and the everyday questions farmers and students actually have.",
    problem:
      "Practical farming knowledge in Morocco, such as which subsidies exist and how to start a farm project, is hard to find in plain Arabic. The founder, an agricultural engineer, wanted it free and easy to read for every farmer.",
    built: [
      "A right-to-left Arabic publishing site organized into 11 specialized sections",
      "Over 60 articles on subsidies, irrigation, livestock, seeds, nutrient deficiencies, and farming law",
      "Feasibility studies for farm projects such as alfalfa, red pepper, and dairy cattle",
      "Newsletter sign-up and WhatsApp contact for consultations",
    ],
    techs: ["blog", "cms", "arabic"],
  },
  {
    slug: "flutterfire-social",
    name: "FlutterFire Social",
    category: "Mobile app template",
    platform: "iOS and Android",
    src: "https://codecanyon.net/item/flutterfire-social-messenger/25605604",
    host: "codecanyon.net",
    img: FlutterFireImg,
    description:
      "A complete Flutter and Firebase starter for building a social app. It includes phone sign-in, posts, likes, comments, follows, search, private and group chat, moderation, push notifications, analytics, ads, and dark mode.",
    problem:
      "Building a social app from scratch means months of work on sign-in, feeds, real-time chat, notifications, and moderation before any of the ideas that make the app unique. Developers want a working base to start from.",
    built: [
      "A cross-platform iOS and Android app in Flutter backed by Firebase, Firestore, and Cloud Messaging",
      "Phone sign-in, posts with images, likes, comments, follows, and user and group search",
      "Real-time private and group chat with online status, message editing, and deletion",
      "Admin moderation for reported posts, plus blocking, push notifications, analytics, and AdMob ads",
      "Light and dark themes, sold and supported on CodeCanyon",
    ],
    proof: "117 sales and a 4.82-star rating from 22 reviews on CodeCanyon.",
    techs: ["flutter", "firebase", "ios/android"],
  },
  {
    slug: "dems",
    name: "DEMS",
    category: "Civic tech",
    platform: "Web app",
    // No src: the site is no longer online, so the case study shows no link.
    host: "dems.dev",
    img: DEMSImg,
    description:
      "A civic tech platform we developed for a client, built to make election information easier to understand and democratic participation easier to navigate.",
    problem:
      "Election information is spread across official sources and written for specialists. Voters who want to understand how an election works, and how to take part, struggle to find clear answers.",
    built: [
      "A web app built with Next.js, TypeScript, and Tailwind CSS",
      "Plain-language pages that make election information easier to understand",
    ],
    techs: ["typescript", "nextjs", "tailwind"],
  },
] satisfies Product[]

// First four render as large cards with a screenshot; the rest as compact tiles.
export const featured = products.slice(0, 4)
export const more = products.slice(4)

export type Product = {
  slug: string
  name: string
  category: string
  platform: string
  // Live URL; omitted when the project is no longer online.
  src?: string
  host: string
  img: ImageMetadata
  description: string
  problem: string
  built: string[]
  // Public, verifiable traction such as sales or rankings.
  proof?: string
  techs: string[]
}

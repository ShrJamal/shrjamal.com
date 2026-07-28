import _2048club from "~/assets/imgs/2048club.webp"
import ChargeBellImg from "~/assets/imgs/chargebell.webp"
import ConverturImg from "~/assets/imgs/convertur.jpg"
import DEMSImg from "~/assets/imgs/dems.webp"
import ElfilahaImg from "~/assets/imgs/elfilaha.webp"
import FlutterFireImg from "~/assets/imgs/flutter-social.webp"
import JsonKitImg from "~/assets/imgs/jsonkit.jpg"
import KorgiImg from "~/assets/imgs/korgi.webp"
import PDFToolzImg from "~/assets/imgs/pdftoolz.jpg"
import ProshopImg from "~/assets/imgs/proshop.webp"
import ThumbnailGrabberImg from "~/assets/imgs/thumbnail-grabber.jpg"
import WeWeb3Img from "~/assets/imgs/weweb3.webp"

export const products = [
  {
    name: "ChargeBell",
    src: "https://chargebell.com",
    host: "chargebell.com",
    img: ChargeBellImg,
    description:
      "A Slack message every time a customer pays, a card fails, or someone asks for a refund. If you can pick a Slack channel, you can set it up.",
    techs: ["slack", "saas"],
  },
  {
    name: "2048 Club",
    src: "https://2048.club",
    host: "2048.club",
    img: _2048club,
    description:
      "A redesigned 2048 game with a modern look, built with Astro and SolidJS.",
    techs: ["astro", "solidjs"],
  },
  {
    name: "JsonKit",
    src: "https://jsonkit.com",
    host: "jsonkit.com",
    img: JsonKitImg,
    description:
      "A privacy-first toolkit with 53 browser-based utilities for formatting, validating, and converting JSON, generating code, inspecting URLs and SQL, and working with QR codes. Everything runs client-side, so data never leaves the browser.",
    techs: ["developer tools", "client-side", "privacy"],
  },
  {
    name: "PDFToolz",
    src: "https://pdftoolz.com",
    host: "pdftoolz.com",
    img: PDFToolzImg,
    description:
      "A complete browser-based PDF workspace for merging, splitting, compressing, converting, editing, signing, and protecting documents. Files are processed locally for a fast, private workflow with no uploads.",
    techs: ["pdf", "client-side", "privacy"],
  },
  {
    name: "Convertur",
    src: "https://convertur.com",
    host: "convertur.com",
    img: ConverturImg,
    description:
      "A private, all-purpose file converter for images, PDFs, audio, video, documents, and structured data. It runs directly in the browser with smart format suggestions, no accounts, and no server upload limits.",
    techs: ["file conversion", "client-side", "privacy"],
  },
  {
    name: "Thumbnail Grabber",
    src: "https://thumbnail-grabber.com",
    host: "thumbnail-grabber.com",
    img: ThumbnailGrabberImg,
    description:
      "A creator toolkit for grabbing every available thumbnail resolution from YouTube, TikTok, Vimeo, Twitch, Dailymotion, and Instagram Reels. It also includes feed previews, A/B comparison, quick editing, and bulk ZIP export.",
    techs: ["creator tools", "media", "client-side"],
  },
  {
    name: "Elfilaha",
    src: "https://elfilaha.com",
    host: "elfilaha.com",
    img: ElfilahaImg,
    description:
      "Elfilaha (الفِلاحة) is a modern, Arabic-first agricultural knowledge platform and content studio. It puts practical, trustworthy farming guidance — subsidies, crop care, irrigation, project ideas, and the laws that govern the land — into the hands of Morocco's farmers, agri-entrepreneurs, and students, completely free of charge.",
    techs: ["blog", "cms"],
  },
  {
    name: "KorgiBoard",
    src: "https://korgiboard.com",
    host: "korgiboard.com",
    img: KorgiImg,
    description:
      "Project management workspace integrated with Google Workspace and MS365.",
    techs: ["typescript", "react", "nextjs"],
  },
  {
    name: "FlutterFire Social",
    src: "https://codecanyon.net/item/flutterfire-social-messenger/25605604",
    host: "codecanyon.net",
    img: FlutterFireImg,
    description:
      "A complete social media app with posts, chat, and notifications.",
    techs: ["flutter", "firebase", "ios/android"],
  },
  {
    name: "DEMS",
    src: "https://dems.dev",
    host: "dems.dev",
    img: DEMSImg,
    description:
      "A headless CMS for developers, built with Next.js and Tailwind CSS.",
    techs: ["typescript", "nextjs", "tailwind"],
  },
  {
    name: "WeWeb3",
    src: "https://weweb3.xyz",
    host: "weweb3.xyz",
    img: WeWeb3Img,
    description: "A web3 social platform with wallet integration.",
    techs: ["nextjs", "react"],
  },
  {
    name: "Proshop",
    src: "https://proshop-sajam.vercel.app",
    host: "proshop-sajam.vercel.app",
    img: ProshopImg,
    description: "An e-commerce web app built with the MERN stack.",
    techs: ["react", "nodejs", "mongodb"],
  },
] satisfies Product[]

// First four render as large cards with a screenshot; the rest as compact tiles.
export const featured = products.slice(0, 4)
export const more = products.slice(4)

export type Product = {
  name: string
  src: string
  host: string
  img: ImageMetadata
  description: string
  techs: string[]
}

import _2048club from "~/assets/imgs/2048club.webp"
import ChargeBellImg from "~/assets/imgs/chargebell.webp"
import DEMSImg from "~/assets/imgs/dems.webp"
import ElfilahaImg from "~/assets/imgs/elfilaha.webp"
import FlutterFireImg from "~/assets/imgs/flutter-social.webp"
import KorgiImg from "~/assets/imgs/korgi.webp"
import ProshopImg from "~/assets/imgs/proshop.webp"
import thumbnailGrabber from "~/assets/imgs/thumbnail-grabber.webp"
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
    name: "Thumbnail Downloader",
    src: "https://thumbnail-grabber.com",
    host: "thumbnail-grabber.com",
    img: thumbnailGrabber,
    description: "A web app to download thumbnails from YouTube videos.",
    techs: ["astro", "solidjs"],
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

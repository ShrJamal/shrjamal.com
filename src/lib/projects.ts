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

export const products = [
  {
    name: "ChargeBell",
    src: "https://chargebell.com",
    host: "chargebell.com",
    img: ChargeBellImg,
    description:
      "ChargeBell posts Stripe activity in Slack, including payments, payouts, failed cards, refunds, disputes, and subscription changes. Teams can choose which alerts go where, set minimum amounts, and keep noisy events out of the channel.",
    techs: ["slack", "saas"],
  },
  {
    name: "2048 Club",
    src: "https://2048.club",
    host: "2048.club",
    img: _2048club,
    description:
      "A fresh take on 2048 with board sizes from 3x3 to 8x8, custom tile themes, multiplayer rooms, leaderboards, and several puzzle variants. The familiar game is still at the center. There is simply more to do with it.",
    techs: ["astro", "solidjs"],
  },
  {
    name: "JsonKit",
    src: "https://jsonkit.com",
    host: "jsonkit.com",
    img: JsonKitImg,
    description:
      "JsonKit is a collection of 53 small developer tools for working with JSON, code, URLs, SQL, and QR codes. Everything runs in the browser, so you can paste real data without sending it to a server.",
    techs: ["developer tools", "client-side", "privacy"],
  },
  {
    name: "PDFToolz",
    src: "https://pdftoolz.com",
    host: "pdftoolz.com",
    img: PDFToolzImg,
    description:
      "PDFToolz puts the common PDF jobs in one place: merge, split, compress, convert, edit, sign, and protect. Files stay on the device while you work, which keeps the tools quick and private.",
    techs: ["pdf", "client-side", "privacy"],
  },
  {
    name: "Convertur",
    src: "https://convertur.com",
    host: "convertur.com",
    img: ConverturImg,
    description:
      "Convertur handles images, PDFs, audio, video, documents, and data files without uploading them first. Drop in a file, pick an output, and the conversion runs in the browser.",
    techs: ["file conversion", "client-side", "privacy"],
  },
  {
    name: "Thumbnail Grabber",
    src: "https://thumbnail-grabber.com",
    host: "thumbnail-grabber.com",
    img: ThumbnailGrabberImg,
    description:
      "Paste a video link and Thumbnail Grabber finds every available image size. It works with YouTube, TikTok, Vimeo, Twitch, Dailymotion, and Instagram Reels, with tools for previews, comparisons, quick edits, and bulk downloads.",
    techs: ["creator tools", "media", "client-side"],
  },
  {
    name: "LinkDap",
    src: "https://linkdap.com/feed",
    host: "linkdap.com",
    img: LinkDapImg,
    description:
      "LinkDap is a community feed for people sharing ideas, questions, and opportunities. Posts, curated listings, topic spaces, bookmarks, replies, and discovery keep useful conversations from getting lost.",
    techs: ["community", "social", "opportunities"],
  },
  {
    name: "OrbDoc",
    src: "https://orbdoc.com",
    host: "orbdoc.com",
    img: OrbDocImg,
    description:
      "OrbDoc's OrbVoice app listens during a patient visit and turns the conversation into a draft clinical note while the doctor is still in the room. The physician reviews it, makes any edits, and sends it to the EHR instead of typing everything afterward.",
    techs: ["healthcare", "ai", "ios"],
  },
  {
    name: "Elfilaha",
    src: "https://elfilaha.com",
    host: "elfilaha.com",
    img: ElfilahaImg,
    description:
      "Elfilaha publishes practical farming information in Arabic for people in Morocco. Its articles cover subsidies, crops, irrigation, farm projects, land rules, and the everyday questions farmers and students actually have.",
    techs: ["blog", "cms"],
  },
  {
    name: "KorgiBoard",
    src: "https://korgiboard.com",
    host: "korgiboard.com",
    img: KorgiImg,
    description:
      "Korgi turns a short prompt into a working Kanban board, then lets the team pull in files and meetings from Google Workspace, Microsoft 365, and Zoom. It keeps the plan, the source material, and the finished work in one place.",
    techs: ["typescript", "react", "nextjs"],
  },
  {
    name: "FlutterFire Social",
    src: "https://codecanyon.net/item/flutterfire-social-messenger/25605604",
    host: "codecanyon.net",
    img: FlutterFireImg,
    description:
      "A complete Flutter and Firebase starter for building a social app. It includes phone sign-in, posts, likes, comments, follows, search, private and group chat, moderation, push notifications, analytics, ads, and dark mode.",
    techs: ["flutter", "firebase", "ios/android"],
  },
  {
    name: "DEMS",
    src: "https://dems.dev",
    host: "dems.dev",
    img: DEMSImg,
    description:
      "A civic tech platform we developed for a client, built to make election information easier to understand and democratic participation easier to navigate.",
    techs: ["typescript", "nextjs", "tailwind"],
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

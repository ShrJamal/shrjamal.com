import _2048club from "~/assets/imgs/2048club.webp"
import ChargeBellImg from "~/assets/imgs/chargebell.webp"
import DEMSImg from "~/assets/imgs/dems.webp"
import ElfilahaImg from "~/assets/imgs/elfilaha.webp"
import FluterFireImg from "~/assets/imgs/flutter-social.webp"
import KorgiImg from "~/assets/imgs/korgi.webp"
import ProshopImg from "~/assets/imgs/proshop.webp"
import thumbnailGrabber from "~/assets/imgs/thumbnail-grabber.webp"
import { techs } from "~/lib/consts"

export const projects = [
  {
    name: "ChargeBell",
    src: "https://chargebell.com",
    img: ChargeBellImg,
    description:
      "ChargeBell sends a simple Slack message every time a customer pays you, a card fails, or someone asks for a refund. If you can pick a Slack channel, you can set it up.",
  },
  {
    name: "2048 Club",
    src: "https://2048.club",
    img: _2048club,
    description:
      "A redesigned 2048 game with a modern look, built with Astro, SolidJS, and Cloudflare.",
    techs: [techs.astro, techs.solidjs, techs.tailwindcss, techs.cloudflare],
  },
  {
    name: "FlutterFire Social",
    src: "https://codecanyon.net/item/flutterfire-social-messenger/25605604",
    img: FluterFireImg,
    description:
      "A complete social media app with posts, chat, and notifications.",
    techs: [
      techs.dart,
      techs.flutter,
      techs.firebase,
      techs.android,
      techs.ios,
    ],
  },
  {
    name: "Thumbnail Downloader",
    src: "https://thumbnail-grabber.com",
    img: thumbnailGrabber,
    description: "A web app to download thumbnails from YouTube videos.",
    techs: [techs.astro, techs.solidjs, techs.tailwindcss, techs.cloudflare],
  },
  {
    name: "KorgiBoard",
    src: "https://korgiboard.com",
    img: KorgiImg,
    description:
      "Project management workspace integrated with Google Workspace and MS365.",
    techs: [techs.typescript, techs.react, techs.nextjs, techs.tailwindcss],
  },
  {
    name: "Elfilaha",
    src: "https://elfilaha.com",
    img: ElfilahaImg,
    description: "Elfilaha is a ",
    techs: [techs.typescript, techs.react, techs.nextjs, techs.tailwindcss],
  },
  {
    name: "DEMS",
    src: "https://dems.dev",
    img: DEMSImg,
    description:
      "A headless CMS for developers, built with Next.js and Tailwind CSS.",
    techs: [techs.typescript, techs.react, techs.nextjs, techs.tailwindcss],
  },
  {
    name: "Proshop",
    src: "https://proshop-sajam.vercel.app",
    img: ProshopImg,
    description:
      "An e-commerce web app built with the MERN stack and deployed on Vercel.",
    techs: [techs.typescript, techs.react, techs.nodejs, techs.mongodb],
  },
]

import Image from 'next/image'
import Link from 'next/link'
import { MdArrowRightAlt } from 'react-icons/md'

export default function Projects() {
  return (
    <section id="projects" className="my-8 flex flex-col items-center">
      <span className="gradient-text text-4xl">Featured Projects </span>
      <h2 className="text-sm text-base-content">Some Things I&apos;ve built</h2>

      <div className="pt-4 container grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {projects.map((p) => (
          <div key={p.name} className="p-2 bg-glass rounded-xl flex flex-col ">
            <Link href={p.link} target="_blank" rel="noreferrer">
              <Image
                className="w-[25rem] h-[20rem] rounded-xl object-cover overflow-clip"
                loading="lazy"
                width={320}
                height={480}
                src={p.img}
                alt={p.name}
              />
              <h3 className="mt-2 mb-1 text-xl">{p.name}</h3>
            </Link>

            <Link
              className="flex items-center text-accent"
              href={p.demo}
              target="_blank"
              rel="noreferrer"
            >
              <p>Demo</p>
              <MdArrowRightAlt className="text-xl transition-transform duration-1000 translate-x-2" />
            </Link>
          </div>
        ))}
      </div>
    </section>
  )
}

const projects = [
  {
    name: 'FlutterFire Social',
    link: 'https://codecanyon.net/item/flutterfire-social-messenger/25605604',
    demo: 'https://codecanyon.net/item/flutterfire-social-messenger/25605604',
    img: '/images/flutter-social.webp',
  },
  {
    name: 'Proshop',
    link: 'https://github.com/SHRJamal/proshop',
    demo: 'https://github.com/SHRJamal/proshop',
    // demo: 'https://shr-proshop.herokuapp.com/',
    img: '/images/proshop.webp',
  },
  {
    name: 'Linkdap',
    link: 'https://linkdap.fly.dev',
    demo: 'https://linkdap.fly.dev',
    img: '/images/linkdap.webp',
  },
  {
    name: 'Covider Tracker',
    link: 'https://github.com/SHRJamal/covid-tracker',
    demo: 'https://covid-tracker.shrjamal.com',
    img: '/images/covid-tracker.webp',
  },
  {
    name: 'Web3 Template',
    link: 'https://github.com/weweb3/web3_template',
    demo: 'https://github.com/weweb3/web3_template',
    img: '/images/weweb3.webp',
  },
  {
    name: 'NFT Marketplace',
    link: 'https://github.com/weweb3/nft-marketplace',
    demo: 'https://github.com/weweb3/nft-marketplace',
    img: '/images/nft-marketplace.webp',
  },
]

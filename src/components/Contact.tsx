import Link from 'next/link'
import { BiMailSend } from 'react-icons/bi'
import {
  BsGithub,
  BsLinkedin,
  BsSkype,
  BsTelegram,
  BsTwitter,
  BsWhatsapp,
} from 'react-icons/bs'

export default function Contact() {
  return (
    <section
      className="max-w-[30rem] mx-auto mt-4 grid sm:grid-cols-9 grid-color-3 gap-2 justify-center items-center"
      id="contact"
    >
      {contactInfo.map((it) =>
        it.name === 'Email' ? (
          <div
            key={it.name}
            className="bg-glass rounded-xl col-span-3 p-2 flex flex-col items-center"
          >
            <h3 className="text-lg flex items-center">
              <i className="mr-1 text-2xl"> {it.icon} </i>
              Email
            </h3>
            <span>{it.url}</span>
            <a
              className="underline text-slate-300 text-sm flex items-center"
              href={`mailto:${it.url}`}
              target="_blank"
              rel="noreferrer"
              title={it.name}
            >
              Write me {it.icon}
            </a>
          </div>
        ) : (
          <Link
            key={it.name}
            className="bg-glass btn btn-circle btn-outline hover:bg-black"
            href={it.url}
            target="_blank"
            rel="noreferrer"
            title={it.name}
          >
            <i className="text-3xl text-white"> {it.icon} </i>
          </Link>
        ),
      )}
    </section>
  )
}

const contactInfo = [
  {
    name: 'Github',
    url: 'https://github.com/shrjamal',
    icon: <BsGithub />,
  },
  {
    name: 'Twitter',
    url: 'https://twitter.com/shrjamal',
    icon: <BsTwitter />,
  },
  {
    name: 'Linkdin',
    url: 'https://www.linkedin.com/in/shrjamal',
    icon: <BsLinkedin />,
  },
  {
    name: 'Email',
    url: 'me@shrjamal.com',
    icon: <BiMailSend />,
  },
  {
    name: 'Telegram',
    url: 'https://t.me/jamalshr',
    icon: <BsTelegram />,
  },
  {
    name: 'Skype',
    url: 'https://join.skype.com/invite/bOsjSN8qhcQh',
    icon: <BsSkype />,
  },
  {
    name: 'Whatsapp',
    url: 'https://wa.me/2120700862543',
    icon: <BsWhatsapp />,
  },
]

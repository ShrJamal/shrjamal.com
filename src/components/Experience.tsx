import Image from 'next/image'

export default function Experience() {
  return (
    <section id="experience" className="mt-8 flex flex-col items-center">
      <h2 className="gradient-text text-4xl ">Experience</h2>
      <div className="mt-4 grid sm:grid-cols-2 grid-cols-1 gap-4 ">
        {experiences.map((it) => (
          <a
            key={it.company}
            className="bg-glass w-80 flex flex-col rounded-xl p-2"
            href={it.link}
            target="_blank"
            rel="noreferrer"
          >
            <Image
              className="bg-white w-80 h-48 object-contain rounded-t-xl"
              width="160"
              height="120"
              src={it.img}
              alt={it.alt}
              loading="lazy"
            />
            <h3 className="mt-2 flex-1 ">{it.description}</h3>
          </a>
        ))}
      </div>
    </section>
  )
}

const experiences = [
  {
    description:
      'Top Rated freelancer on Upwork, worked with more 30+ clients. I have 100% positive reviews on Upwork.',
    company: 'Upwork',
    img: '/images/upwork.webp',
    alt: 'Shrjamal Upwork Profile',
    link: 'https://www.upwork.com/freelancers/shrjamal',
    date: 'since 2022',
  },
  {
    description: 'Level 1 Seller in Fiverr with 100% positive reviews.',
    company: 'Fiverr',
    img: '/images/fiverr.webp',
    alt: 'Shrjamal Fiverr Profile',
    link: 'https://www.fiverr.com/jamalshr',
    date: 'since 2018',
  },
]
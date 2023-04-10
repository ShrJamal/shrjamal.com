import { BiBadgeCheck } from 'react-icons/bi'

export default function Techs() {
  return (
    <section id="skills" className="mt-10 flex flex-col items-center">
      <h2 className="gradient-text text-4xl">Techs</h2>
      <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-4 ">
        {skills.map((s) => (
          <div
            key={s.name}
            className="bg-glass px-4 rounded-xl w-[20rem] text-primary-content"
          >
            <h3 className="mt-2 mb-4 font-bold text-center text-xl">
              {s.name}
            </h3>
            <div className="mb-4 grid grid-cols-2 gap-2">
              {s.techs.map((t) => (
                <div key={t} className="flex ">
                  <BiBadgeCheck className="text-accent" />
                  <h3 className="ml-2 leading-4">{t}</h3>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export const skills = [
  {
    name: 'Languages',
    techs: ['HTML5', 'CSS3', 'Javascript', 'Typescript', 'Dart', 'Python'],
  },
  {
    name: 'Frontend',
    techs: ['React', 'Nextjs', 'TailwindCSS', 'Flutter', 'Svelte', 'SvelteKit'],
  },
  {
    name: 'Backend',
    techs: [
      'Nodejs',
      'Nestjs',
      'MongoDB',
      'SQL',
      'Redis',
      'Graphql API',
      'Firebase',
    ],
  },
  // {
  //   name: 'Web3 / Blockchain',
  //   techs: [
  //     'Solidity',
  //     'Hardhat',
  //     'Ether.js',
  //     'Solana (Rust)',
  //     'ThirdWeb',
  //     'Moralis',
  //     'Chai, Mocha',
  //   ],
  // },
  // {
  //   name: 'DevOps',
  //   techs: ['Docker', 'AWS', 'Google Cloud', 'Digital Ocean'],
  // },
]

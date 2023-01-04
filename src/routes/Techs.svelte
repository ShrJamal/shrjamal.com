<script>
  import Icon from '@iconify/svelte'
  export const skills = [
    {
      name: 'Languages',
      techs: ['HTML5', 'CSS3', 'Javascript', 'Typescript', 'Dart', 'Python'],
    },
    {
      name: 'Frontend',
      techs: [
        'React',
        'Nextjs',
        'TailwindCSS',
        'Flutter',
        'Svelte',
        'SvelteKit',
      ],
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
</script>

<section id="skills" class="mt-10 flex flex-col items-center">
  <h2 class="gradient-text text-4xl">Techs</h2>
  <div class="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-4 ">
    {#each skills as s}
      <div class="bg-glass px-4 rounded-xl w-[20rem] text-primary-content">
        <h3 class="mt-2 mb-4 font-bold text-center text-xl">
          {s.name}
        </h3>
        <div class="mb-4 grid grid-cols-2 gap-2">
          {#each s.techs as tech}
            <div class="flex ">
              <Icon class="text-accent" icon="bxs-badge-check" />
              <h3 class="ml-2 leading-4">{tech}</h3>
            </div>
          {/each}
        </div>
      </div>
    {/each}
  </div>
</section>

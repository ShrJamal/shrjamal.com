<script>
  import Icon from '@iconify/svelte'
  const projects = [
    {
      name: 'Flutter Social',
      link: 'https://codecanyon.net/item/flutterfire-social-messenger/25605604',
      demo: 'https://codecanyon.net/item/flutterfire-social-messenger/25605604',
      img: '/flutter-social.webp',
    },
    {
      name: 'Proshop',
      link: 'https://github.com/SHRJamal/proshop',
      demo: 'https://github.com/SHRJamal/proshop',
      // demo: 'https://shr-proshop.herokuapp.com/',
      img: '/proshop.webp',
    },
    {
      name: 'Linkdap',
      link: 'https://linkdap.fly.dev',
      demo: 'https://linkdap.fly.dev',
      img: '/linkdap.webp',
    },
    {
      name: 'Covider Tracker',
      link: 'https://github.com/SHRJamal/covid-tracker',
      demo: 'https://covid-tracker.shrjamal.com',
      img: '/covid-tracker.webp',
    },
    {
      name: 'Web3 Template',
      link: 'https://github.com/weweb3/web3_template',
      demo: 'https://github.com/weweb3/web3_template',
      img: '/weweb3.webp',
    },
    {
      name: 'NFT Marketplace',
      link: 'https://github.com/weweb3/nft-marketplace',
      demo: 'https://github.com/weweb3/nft-marketplace',
      img: '/nft-marketplace.webp',
    },
  ]
</script>

<section id="projects" class="my-8 flex flex-col items-center">
  <span class="gradient-text text-4xl">Featured Projects </span>
  <h2 class="text-sm text-base-content">Some Things I've built</h2>

  <div
    class="pt-4 container grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4"
  >
    {#each projects as p}
      <a
        class="p-2 bg-glass rounded-xl flex flex-col "
        href={p.link}
        target="_blank"
        rel="noreferrer"
      >
        <img
          class="w-[25rem] h-[20rem] rounded-xl object-cover overflow-clip"
          loading="lazy"
          width="320"
          height="480"
          src={p.img}
          alt={p.name}
        />
        <h3 class="mt-2 mb-1">{p.name}</h3>
        <a
          class="flex items-center text-primary"
          href={p.demo}
          target="_blank"
          rel="noreferrer"
        >
          <p>Demo</p>
          <Icon
            class="text-xl transition-transform duration-1000 translate-x-2"
            icon="bxs-chevron-right"
          />
        </a>
      </a>
    {/each}
  </div>
</section>

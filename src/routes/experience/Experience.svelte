<script>
  const experiences = [
    {
      description:
        'Top Rated freelancer on Upwork, worked with more 30+ clients. I have 100% positive reviews on Upwork.',
      company: 'Upwork',
      img: '/upwork.webp',
      alt: 'Shrjamal Upwork Profile',
      link: 'https://www.upwork.com/freelancers/shrjamal',
      date: 'since 2022',
    },
    {
      description: 'Level 1 Seller in Fiverr with 100% positive reviews.',
      company: 'Fiverr',
      img: '/fiverr.webp',
      alt: 'Shrjamal Fiverr Profile',
      link: 'https://www.fiverr.com/jamalshr',
      date: 'since 2018',
    },
  ]
</script>

<section id="experience" class="mt-8 flex flex-col items-center px-4">
  <h2 class="gradient-text text-4xl ">Experience</h2>
  <div class="mt-4 grid sm:grid-cols-2 grid-cols-1 gap-4 ">
    {#each experiences as item}
      <a
        class="bg-glass w-80 flex flex-col rounded-xl p-2"
        href={item.link}
        target="_blank"
        rel="noreferrer"
      >
        <img
          class="bg-white w-80 h-48 object-contain rounded-t-xl"
          width="160"
          height="120"
          src={item.img}
          alt={item.alt}
          loading="lazy"
        />
        <h3 class="mt-2 flex-1 ">{item.description}</h3>
      </a>
    {/each}
  </div>
</section>

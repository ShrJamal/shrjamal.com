<script>
  import { allProjects } from '$lib/helpers/projects'
  import Icon from '@iconify/svelte'
</script>

<section class="my-8 flex flex-col items-center" id="projects">
  <span class="text-2xl text-primary font-bold">Featured Projects </span>
  <h2 class="text-sm text-secondary">Some Things I've built</h2>

  <div
    class="pt-4 container grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4"
  >
    {#each allProjects as p}
      <div class="card rounded-xl bg-base-300 flex flex-col max-h-[25rem]">
        <img
          class="p-2 rounded-2xl h-[20rem] max-w-[25rem]"
          loading="lazy"
          src={p.img}
          alt={p.name}
        />
        <div class="p-4">
          <h3 class="mb-1">{p.name}</h3>
          <a
            class="w-max flex items-center gap-x-1 text-primary"
            href={p.demo}
            target="_blank"
          >
            Demo
            <Icon
              class=" text-lg transition-transform duration-1000 translate-x-20"
              icon="bxs-right-arrow-alt"
            />
          </a>
        </div>
      </div>
    {/each}
  </div>
</section>

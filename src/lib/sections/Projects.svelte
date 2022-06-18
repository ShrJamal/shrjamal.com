<script>
  import { allProjects } from '$lib/helpers/projects'

  let category = 'Web'
  const categories = allProjects.map((v) => v.type)
  $: items = allProjects.find((v) => v.type === category)?.projects || []
</script>

<section class="my-8 flex flex-col items-center" id="projects">
  <span class="text-2xl text-primary font-bold">Featured Projects </span>
  <h2 class="text-sm text-secondary">Some Things I've built</h2>

  <div class="flex justify-center items-center mt-4 mb-8">
    {#each categories as c}
      <span
        class="cursor-pointer py-1 px-3 rounded-lg"
        class:bg-accent={c === category}
        data-filter={c}
        on:click={() => (category = c)}
      >
        {c}
      </span>
    {/each}
  </div>

  <div
    class="pt-4 container grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4"
  >
    {#each items as p}
      <div class="card rounded-xl bg-base-300 flex flex-col max-h-[25rem]">
        <img
          class="p-2 rounded-2xl h-[20rem]"
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
            Demo <i
              class="bx bx-right-arrow-alt text-lg transition-transform duration-1000 translate-x-20"
            />
          </a>
        </div>
      </div>
    {/each}
  </div>
</section>

<script>
  import { skills } from '$lib/helpers/skills'
  import Icon from '@iconify/svelte'
</script>

<section id="skills" class="mt-10 w-screen flex flex-col items-center">
  <h2 class="text-primary text-2xl font-bold text-center">
    Some Technologies I have experience with:
  </h2>

  <div
    class="pt-4 px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 justify-center "
  >
    {#each skills as s}
      <div class="py-6 px-4 rounded-[1.25rem] w-[20rem] bg-base-300">
        <h3 class="mb-6 font-bold text-center text-xl">
          {s.name}
        </h3>
        <div class="grid grid-cols-2 ">
          {#each s.techs as tech}
            <div class="flex">
              <Icon class="text-primary" icon="bxs-badge-check" />
              <div class="ml-2">
                <h3 class="leading-4">{tech.name}</h3>
                <!-- <span class="text-2xs">{tech.level}</span> -->
              </div>
            </div>
          {/each}
        </div>
      </div>
    {/each}
  </div>
</section>

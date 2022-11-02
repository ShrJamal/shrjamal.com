<script>
  import { experiences } from '$lib/helpers/experiences'
</script>

<section id="experience" class="flex flex-col px-4">
  <h2 class="text-2xl font-bold text-primary text-center">Experience</h2>

  <div class="flex flex-col">
    {#each experiences as item}
      <div class="card flex flex-row mt-4 bg-base-300 max-h-[20rem] w-full">
        <img class="w-40 w-48 mr-4" src={item.img} alt={item.alt} />
        <div class="flex flex-col pr-4 py-4 w-full">
          <h3 class="flex-1 ">{item.description}</h3>
          <div class="flex justify-between items-center">
            <p class="text-2xs">{item.date}</p>
            <a
              class="link link-primary text-right"
              href={item.link}
              target="_blank"
            >
              Hire Me
            </a>
          </div>
        </div>
      </div>
    {/each}
  </div>
</section>

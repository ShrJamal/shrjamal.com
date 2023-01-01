<script>
  import Icon from '@iconify/svelte'
  import { contactInfo, emailInfo, socialInfo } from './data'
</script>

<section class="text-center" id="contact">
  <h2 class="text-2xl font-bold text-primary mb-2">Get in Touch</h2>

  <div
    class="flex sm:flex-row flex-col justify-center  items-center space-y-2 space-x-2"
  >
    <div class="flex space-x-2">
      {#each socialInfo as item (item.name)}
        <a
          class="btn btn-circle bg-base-100  "
          href={item.url}
          target="_blank"
          rel="noreferrer"
        >
          <Icon class="text-blue-300 text-xl" icon={item.icon} />
        </a>
      {/each}
    </div>

    <!-- Email -->
    <div class="bg-base-200 rounded-xl p-4">
      <div class="flex flex-col items-center">
        <h3 class="text-lg flex items-center">
          <Icon class="mr-1 text-2xl" icon={emailInfo.icon} />
          Email
        </h3>
        <span>{emailInfo.url}</span>
        <a
          class="underline text-primary"
          href={`mailto:${emailInfo.url}`}
          target="_blank"
          rel="noreferrer"
        >
          Write me <i class=" bx-right-arrow-alt  underline" />
        </a>
      </div>
    </div>
    <!-- Contact me -->
    <div class="flex space-x-2">
      {#each contactInfo as item (item.name)}
        <a
          class="btn btn-circle bg-base-100  "
          href={item.url}
          target="_blank"
          rel="noreferrer"
        >
          <Icon class="text-blue-300 text-xl" icon={item.icon} />
        </a>
      {/each}
    </div>
  </div>
</section>

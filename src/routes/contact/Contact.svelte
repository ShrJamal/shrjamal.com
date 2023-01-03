<script>
  import Icon from '@iconify/svelte'
  const contactInfo = [
    {
      name: 'Github',
      url: 'https://github.com/shrjamal',
      icon: 'bxl-github',
    },
    {
      name: 'Twitter',
      url: 'https://twitter.com/shrjamal',
      icon: 'bxl-twitter',
    },
    {
      name: 'Linkdin',
      url: 'https://www.linkedin.com/in/shrjamal',
      icon: 'bxl-linkedin-square',
    },
    {
      name: 'Email',
      url: 'me@shrjamal.com',
      icon: 'bx-mail-send',
    },
    {
      name: 'Telegram',
      url: 'https://t.me/jamalshr',
      icon: 'bxl-telegram',
    },
    {
      name: 'Skype',
      url: 'https://join.skype.com/invite/bOsjSN8qhcQh',
      icon: 'bxl-skype',
    },
    {
      name: 'Whatsapp',
      url: 'https://wa.me/2120700862543',
      icon: 'bxl-whatsapp',
    },
  ]
</script>

<section
  class="mt-4 grid sm:grid-cols-9 grid-color-3 gap-2 justify-center items-center"
  id="contact"
>
  {#each contactInfo as item (item.name)}
    {#if item.name === 'Email'}
      <div
        class="bg-glass rounded-xl col-span-3 p-2 flex flex-col items-center"
      >
        <h3 class="text-lg flex items-center">
          <Icon class="mr-1 text-2xl" icon={item.icon} />
          Email
        </h3>
        <span>{item.url}</span>
        <a
          class="underline text-primary text-sm"
          href={`mailto:${item.url}`}
          target="_blank"
          rel="noreferrer"
          title={item.name}
        >
          Write me <i class=" bx-right-arrow-alt  underline" />
        </a>
      </div>
    {:else}
      <a
        class="bg-glass btn btn-circle btn-outline "
        href={item.url}
        target="_blank"
        rel="noreferrer"
        title={item.name}
      >
        <Icon class="text-3xl " icon={item.icon} />
      </a>
    {/if}
  {/each}
</section>

<script>
  import Icon from '@iconify/svelte'
</script>

<section class="text-center" id="contact">
  <h2 class="text-2xl font-bold text-primary mb-2">Get in Touch</h2>

  <div
    class="flex sm:flex-row flex-col justify-center  items-center space-y-2 space-x-2"
  >
    <div class="flex space-x-2">
      <a
        class="btn btn-circle bg-base-100  "
        href="https://www.linkedin.com/in/shrjamal"
        target="_blank"
      >
        <Icon class="text-blue-300 text-xl" icon="bxl-linkedin-square" />
      </a>
      <a
        class="btn btn-circle bg-base-100"
        href="https://twitter.com/shrjamal"
        target="_blank"
      >
        <Icon class="text-blue-500 text-xl" icon="bxl-twitter" />
      </a>

      <a
        class="btn btn-circle bg-base-100"
        href="https://github.com/shrjamal"
        target="_blank"
      >
        <Icon class="text-white text-xl" icon="bxl-github" />
      </a>
    </div>
    <!-- Email -->
    <div class="bg-base-200 rounded-xl p-4">
      <div class="flex flex-col items-center">
        <h3 class="text-lg flex items-center">
          <Icon class="mr-1 text-2xl" icon="bx-mail-send" />
          Email
        </h3>
        <span>me@shrjamal.com</span>
        <a
          class="underline text-primary"
          href="mailto:me@shrjamal.com"
          target="_blank"
        >
          Write me <i class="bx bx-right-arrow-alt  underline" />
        </a>
      </div>
    </div>
    <!-- Contact me -->
    <div class="flex space-x-2">
      <a
        class="btn btn-circle bg-base-100"
        href="https://t.me/jamalshr"
        target="_blank"
      >
        <Icon class="text-blue-400 text-xl" icon="bxl-telegram" />
      </a>
      <a
        class="btn btn-circle bg-base-100"
        href="https://join.skype.com/invite/bOsjSN8qhcQh"
        target="_blank"
      >
        <Icon class="text-blue-400 text-xl" icon="bxl-skype" />
      </a>
      <a
        class="btn btn-circle bg-base-100  "
        href="https://wa.me/2120700862543"
        type="tel"
        target="_blank"
      >
        <Icon class="text-green-400 text-xl" icon="bxl-whatsapp" />
      </a>
    </div>
  </div>
</section>

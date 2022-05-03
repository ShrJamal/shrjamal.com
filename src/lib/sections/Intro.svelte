<script>
  import SocialButtons from '$lib/components/SocialButtons.svelte'
</script>

<section class="home section" id="home">
  <div class="flex flex-col justify-center pt-8 container">
    <div class="text-center">
      <span>Hello, I am </span>
      <h1 class="text-6xl my-2">Jamal Shr</h1>
      <h3 class="text-lg font-thin">
        Full Stack and Experienced Mobile Developer
      </h3>
    </div>
    <!-- Profile Image -->
    <div
      class="mx-auto my-10 w-[190px] h-[293px] flex items-end justify-center overflow-hidden rounded-t-full rounded-b-2xl "
      style="background: linear-gradient(
        180deg,
        hsla(var(--first-hue), var(--sat), var(--lig), 1),
        hsla(var(--first-hue), var(--sat), var(--lig), 0.2)
      )"
    >
      <img
        class="w-[160px]"
        src="/assets/img/perfil.png"
        target="_blank"
        alt=""
      />
    </div>

    <SocialButtons />
  </div>
</section>

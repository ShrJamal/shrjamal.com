<script>
  import GithubActivity from '$lib/sections/GithubActivity.svelte'
  import Intro from '$lib/sections/Intro.svelte'
  import Skills from '$lib/sections/Skills.svelte'
  import Work from '$lib/sections/Projects.svelte'
  import Contact from '$lib/sections/Contact.svelte'
  import Qualifications from '$lib/sections/qualifications.svelte'
</script>

<div class="flex flex-col justify-center items-center">
  <Intro />
  <Contact />
  <Skills />
  <GithubActivity />
  <Work />
  <Qualifications />
  <div class="h-20" />
</div>

<svelte:head>
  <title>ShrJamal</title>
</svelte:head>

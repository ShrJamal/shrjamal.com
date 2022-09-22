<script>
  import GithubActivity from './GithubActivity.svelte'
  import Intro from './Intro.svelte'
  import Skills from './Skills.svelte'
  import Work from './Projects.svelte'
  import Contact from './Contact.svelte'
  import Qualifications from './experience.svelte'
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

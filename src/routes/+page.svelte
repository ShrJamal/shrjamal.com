<script>
  import GithubActivity from './GithubActivity.svelte'
  import Intro from './Intro.svelte'
  import Skills from './skills/Skills.svelte'
  import Work from './projects/Projects.svelte'
  import Contact from './contact/Contact.svelte'
  import Qualifications from './experience/Experience.svelte'

  export const ssr = false
  export const csr = false
  export const prerender = true
</script>

<Intro />
<Contact />
<Skills />
<GithubActivity />
<Work />
<Qualifications />
<div class="h-20" />

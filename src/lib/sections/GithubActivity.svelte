<script>
  import { browser } from '$app/env'
  import GitHubCalendar from 'github-calendar'
  import 'github-calendar/dist/github-calendar.css'
  if (browser) {
    GitHubCalendar('.calendar', 'shrjamal', {
      responsive: true,
    })
  }
</script>

<section id="github-activity" class="mt-6 mx-2 flex flex-col items-center">
  <h2 class="text-2xl font-bold text-primary my-2">Github Activity</h2>
  <div class="calendar" />
</section>

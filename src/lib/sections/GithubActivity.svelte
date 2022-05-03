<script>
  import { browser } from '$app/env'
  import GitHubCalendar from 'github-calendar'
  import 'github-calendar/dist/github-calendar.css'
  browser &&
    GitHubCalendar('.calendar', 'shrjamal', {
      responsive: true,
    })
</script>

<section id="github-activity" class="mt-6 flex flex-col items-center">
  <h2 class="text-xl text-primary mb-2">Github Activity</h2>
  <div class="calendar" />
</section>

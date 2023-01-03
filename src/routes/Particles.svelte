<script>
  import '../app.css'
  import Particles from 'svelte-particles'
  import { loadFull } from 'tsparticles'
</script>

<Particles
  particlesInit={async (eng) => {
    await loadFull(eng)
  }}
  options={{
    particles: {
      number: {
        value: 200,
        density: {
          enable: true,
          area: 800,
        },
      },
      color: {
        value: ['#BD10E0', '#B8E986', '#50E3C2', '#FFD300', '#E86363'],
      },
      shape: {
        type: 'circle',
        stroke: {
          width: 0,
          color: '#b6b2b2',
        },
      },
      opacity: {
        value: 0.9,
        random: false,
        animation: {
          enable: true,
          speed: 1,
          minimumValue: 0.1,
          sync: false,
        },
      },
      size: {
        value: 20,
        random: true,
        animation: {
          enable: true,
          speed: 12.181158184520175,
          minimumValue: 0.1,
          sync: false,
        },
      },
      lineLinked: {
        enable: true,
        distance: 150,
        color: '#c8c8c8',
        opacity: 0.4,
        width: 1,
      },
      move: {
        enable: true,
        speed: 1,
        direction: 'none',
        random: false,
        straight: false,
        outMode: 'bounce',
        bounce: false,
        attract: {
          enable: false,
          rotateX: 600,
          rotateY: 1200,
        },
      },
    },
    interactivity: {
      detectOn: 'canvas',
      events: {
        onHover: {
          enable: true,
          mode: 'grab',
          parallax: {
            enable: true,
            force: 1000,
            smooth: 10,
          },
        },
        onClick: {
          enable: true,
          mode: 'remove',
        },
        resize: true,
      },
      modes: {
        grab: {
          distance: 400,
          lineLinked: {
            opacity: 0.5,
          },
        },
        bubble: {
          distance: 100,
          size: 80,
          duration: 2,
          opacity: 8,
          speed: 3,
        },
        connect: {},
        repulse: {
          distance: 10,
          duration: 0.1,
        },
        push: {
          particles_nb: 4,
        },
        remove: {
          particles_nb: 2,
        },
      },
    },
    detectRetina: true,
  }}
/>

<style global>
  :global(#tsparticles) {
    margin: 0;
    padding: 0;
    position: fixed;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    z-index: -1;
  }
</style>

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
    style: {
      position: 'absolute',
      width: '100%',
      height: '100%',
    },
    particles: {
      number: {
        value: 10,
        density: {
          enable: true,
          area: 800,
          factor: 1000,
        },
      },
      color: {
        value: [
          '#3998D0',
          '#2EB6AF',
          '#A9BD33',
          '#FEC73B',
          '#F89930',
          '#F45623',
          '#D62E32',
          '#EB586E',
          '#9952CF',
        ],
      },
      shape: {
        type: 'circle',
        stroke: {
          width: 1,
          color: '#c8c8c8',
        },
      },
      size: {
        value: 150,
        random: false,
        animation: {
          enable: true,
          speed: 1,
          minimumValue: 10,
          sync: false,
        },
      },
      opacity: {
        value: 0.8,
        random: false,
        animation: {
          enable: false,
          speed: 1,
          minimumValue: 0.1,
          sync: false,
        },
      },
      lineLinked: {
        enable: false,
        distance: 150,
        color: '#c8c8c8',
        opacity: 0.4,
        width: 1,
      },
      collisions: {
        enable: true,
        mode: 'bounce',
        bounce: {
          horizontal: {
            value: 10,
            random: {
              enable: false,
              minimumValue: 0.1,
            },
          },
          vertical: {
            value: 10,
            random: {
              enable: false,
              minimumValue: 0.1,
            },
          },
        },
      },
      move: {
        enable: true,
        speed: 0.2,
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
          mode: 'push',
          parallax: {
            enable: true,
            force: 1000,
            smooth: 100,
          },
        },
        onClick: {
          enable: false,
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
    flex: 1;
    height: 100rem;
    top: 0;
    left: 0;
    bottom: 0;
    z-index: -1;
  }
</style>

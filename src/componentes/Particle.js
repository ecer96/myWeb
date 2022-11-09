import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";


const Particle = () => {
    const particlesInit = useCallback(async (engine) => {
      console.log(engine);
     
      await loadFull(engine);
    }, []);
  
    const particlesLoaded = useCallback(async (container) => {
      await console.log(container);
    }, []);
  
    return (
      <Particles
        id="tsparticles"
        init={particlesInit}
        loaded={particlesLoaded}
        options={{
          background: {
            color: {
              value: "#050403",
              opacity:1,
            
            },
          },
          fullScreen:{
            enable:true,
            zIndex:-1,
          },
          fpsLimit: 120,
          interactivity: {
            events: {
              onClick: {
                enable: true,
                mode: "push",
              },
              onHover: {
                enable: true,
                mode: "connect",
              },
              resize: true,
            },
            modes: {
              push: {
                quantity: 2,
              },
              repulse: {
                distance: 100,
                duration: 1,
              },
            },
          },
          particles: {
            color: {
              value: "#C5D4D6",
            },
            links: {
              color: "#E9F9FC",
              enable: false,
              
            },
            collisions: {
              enable: true,
            },
            move: {
              directions: "none",
              enable: true,
              outModes: {
                default: "bounce",
              },
              random: false,
              speed: 0.3,
              straight: false,
            },
            number: {
              density: {
                enable: true,
                area: 500,
              },
              value: 100,
            },
           
            opacity: {
              value: 0.5,
            },
            shape: {
              type: "circle",
            },
            size: {
              value: { min: 1, max: 2 },
            },
       
          },
          detectRetina: true,
        }}
      />
    );
  };

  export default Particle
import React from "react";
import Particles from "react-tsparticles";

interface ParticlesProps {
  skills: [];
}

export const ParticleContainer: React.FC<ParticlesProps> = ({ skills }) => {
  return (
    <Particles
      className="absolute inset-0 w-full h-full bg-no-repeat bg-cover "
      params={{
        background: {
          color: {
            value: "#1D1D1D",
          },
        },

        fpsLimit: 60,
        interactivity: {
          detectsOn: "canvas",
          events: {
            onClick: {
              enable: true,
              mode: "repulse",
            },
            onHover: {
              enable: true,
              mode: "bubble",
              parallax: { enable: false, force: 60, smooth: 10 },
            },
            resize: true,
          },
          modes: {
            bubble: {
              distance: 400,
              duration: 2,
              opacity: 0.8,
              size: 18,
            },
            push: {
              quantity: 4,
            },
            repulse: {
              distance: 200,
              duration: 0.4,
            },
          },
        },
        particles: {
          color: {
            value: "random",
          },
          links: {
            color: "random",
            distance: 150,
            enable: true,
            opacity: 0.3,
            width: 0.5,
          },
          collisions: {
            enable: true,
          },
          move: {
            direction: "none",
            enable: true,
            outMode: "bounce",
            random: false,
            speed: 3,
            straight: false,
          },
          number: {
            density: {
              enable: true,
              value_area: 800,
            },
            value: 50,
          },
          opacity: {
            value: 0.2,
          },
          shape: {
            type: "image",
            image: skills,
          },
          size: {
            value: 10,
            random: true,
            anim: {
              enable: true,
              speed: 10,
              size_min: 0.1,
              sync: false,
            },
          },
        },
        detectRetina: true,
      }}
    />
  );
};

export default ParticleContainer;

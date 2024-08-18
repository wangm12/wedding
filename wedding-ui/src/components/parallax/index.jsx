import { useRef } from "react";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import "./style.css";
import ParallaxHeader from './header';

function useParallax(value, distance) {
  return useTransform(value, [0, 1], [-distance, distance]);
}

function _renderImage({ id, key }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref });
  const y = useParallax(scrollYProgress, 50);
  const imagePath = `/assets/images/gallery/${id}.jpg`;

  // onclick will be entering full screen mode, reclick to exit
  const _handleClick = () => {
    // Exit fullscreen if already in fullscreen mode
    if (document.fullscreenElement || document.webkitFullscreenElement || document.msFullscreenElement) {
      if (document.exitFullscreen) {
        document.exitFullscreen();
      } else if (document.webkitExitFullscreen) {
        document.webkitExitFullscreen(); // For Safari
      } else if (document.msExitFullscreen) {
        document.msExitFullscreen(); // For IE/Edge
      }
      return;
    }

    // Enter fullscreen
    const elem = ref.current;
    if (elem.requestFullscreen) {
      elem.requestFullscreen();
    } else if (elem.webkitRequestFullscreen) {
      elem.webkitRequestFullscreen(); // For Safari
    } else if (elem.msRequestFullscreen) {
      elem.msRequestFullscreen(); // For IE/Edge
    } else if (elem.mozRequestFullScreen) {
      elem.mozRequestFullScreen(); // For older Firefox versions
    }
  };


  return (
    <section key={key} className="Parallax__Section">
      <div ref={ref} onClick={_handleClick}>
        <img
          className="Parallax__Image"
          src={imagePath}
          alt="A London skyscraper"
        />
      </div>
      <motion.h2 className="Parallax__Text" style={{ y }}>{`#00${id}`}</motion.h2>
    </section>
  );
}

export default function Parallax() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <div>
      <ParallaxHeader />
      <div className="Parallax_Container">
        {[1, 2, 3, 4, 5, 6].map((image, index) =>
          _renderImage({ id: image, key: index })
        )}
      </div>
      <motion.div className="Parallax__Progress" style={{ scaleX }} />
    </div>
  );
}

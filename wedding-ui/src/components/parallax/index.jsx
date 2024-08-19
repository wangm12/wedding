import { useRef } from "react";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import "./style.css";
import ParallaxHeader from './header';

const ImagesNumber = 27;

function useParallax(value, distance) {
  return useTransform(value, [0, 1], [-distance, distance]);
}

// always keep 2 digits
function _renderImageIndex(id) {
  return id < 10 ? `0${id}` : `${id}`;
}

function _renderImage({ id, key }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref });
  const y = useParallax(scrollYProgress, 50);
  const imagePath = `/assets/images/gallery/${id}.jpg`;


  return (
    <section key={key} className="Parallax__Section">
      <div ref={ref}>
        <img
          loading="lazy" 
          className="Parallax__Image"
          src={imagePath}
        />
      </div>
      <motion.h2 className="Parallax__Text" style={{ y }}>{`${_renderImageIndex(id)} / ${ImagesNumber}`}</motion.h2>
    </section>
  );
}

function _renderImages() {
  const images = Array.from({ length: ImagesNumber }, (_, i) => i + 1);
  return images.map((image, index) => _renderImage({ id: image, key: index }));
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
        {_renderImages()}
      </div>
      <motion.div className="Parallax__Progress" style={{ scaleX }} />
    </div>
  );
}

import "./style.css";
import { useRef } from "react";
import { motion, useScroll } from "framer-motion";

function Item() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"]
  });

  return (
    <section >
      <div className="maina" ref={ref}>
        <figure className="progress">
          <div id="progress" width="75" height="75" viewBox="0 0 100 100">
            <div cx="50" cy="50" r="30" pathLength="1" className="bg" />
            <motion.div
              cx="50"
              cy="50"
              r="30"
              pathLength="1"
              className="indicator"
              style={{ pathLength: scrollYProgress }}
            />
          </div>
        </figure>
      </div>
    </section>
  );
}

export default Item;
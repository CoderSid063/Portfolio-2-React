import { useRef } from "react";
import "./portfolio.scss";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

const items = [
  {
    id: 1,
    title: "React Commerce",
    img: "https://images.pexels.com/photos/13441993/pexels-photo-13441993.jpeg",
    desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ad id molestiae cum praesentium expedita, a alias doloribus quae earum suscipit fugiat",
  },
  {
    id: 2,
    title: "Amazon Clone",
    img: "https://images.pexels.com/photos/12820603/pexels-photo-12820603.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ad id molestiae cum praesentium expedita, a alias doloribus quae earum suscipit fugiat",
  },
  {
    id: 3,
    title: "Movie App",
    img: "https://images.pexels.com/photos/1200450/pexels-photo-1200450.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ad id molestiae cum praesentium expedita, a alias doloribus quae earum suscipit fugiat",
  },
  {
    id: 4,
    title: "React Commerce",
    img: "https://images.pexels.com/photos/16931543/pexels-photo-16931543/free-photo-of-roses-on-an-open-book-on-the-windowsill.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
    desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ad id molestiae cum praesentium expedita, a alias doloribus quae earum suscipit fugiat",
  },
];

const Single = ({ item }) => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    // offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [-200, 200]);

  return (
    <section>
      <div className="container">
        <div className="wrapper">
          <div className="imageContainer" ref={ref}>
            <img src={item.img} alt="" />
          </div>
          <motion.div className="textContainer" style={{ y }}>
            <h2>{item.title}</h2>
            <p>{item.desc}</p>
            <button>See Demo</button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export const Portfolio = () => {
  const ref = useRef();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });

  return (
    <div className="portfolio" ref={ref}>
      <div className="progress">
        <h1>Featured Works</h1>
        <motion.div style={{ scaleX }} className="progressBar"></motion.div>
      </div>
      {items.map((item) => (
        <Single item={item} key={item.id} />
      ))}
    </div>
  );
};

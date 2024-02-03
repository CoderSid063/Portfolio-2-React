import { useRef } from "react";
import "./portfolio.scss";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

const items = [
  {
    id: 1,
    title: "Nextjs Project",
    link: "https://nextjswebapp1.netlify.app/",
    img: "/HomePage.png",
    desc: "This is a Blog WebApp created using Next.js14",
  },
  {
    id: 2,
    title: "Amazon Clone",
    link: "https://codersid063.github.io/Amazon-Clone-Frontend-Javascript/",
    img: "/AmazonClone.png",
    desc: "This is a Clone webApp of Amazone.in with verious functionality",
  },
  {
    id: 3,
    title: "MovieLand",
    link: "https://moviex-land.netlify.app/",
    img: "https://images.pexels.com/photos/1200450/pexels-photo-1200450.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    desc: "This WebApp show the movies according to your search and all the data catch by API call",
  },
  {
    id: 4,
    title: "SocialHub",
    link: "https://social-hub-post.netlify.app/",
    img: "/SocialHub.png",
    desc: "Social Hub is a dynamic and interactive web application that brings together a collection of 100 random posts sourced from a dummyJSON API and also empowers users to creating their own posts. ",
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
            <a href={item.link}>
              <button>See Demo</button>
            </a>
            <a
              href="https://github.com/CoderSid063?tab=repositories"
              className="gitbtn"
            >
              <img src="/git.png" alt="" />
              <p>Get Code</p>
            </a>
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

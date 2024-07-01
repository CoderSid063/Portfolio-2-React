import { useRef } from "react";
import "./portfolio.scss";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

const items = [
  {
    id: 1,
    title: "E-Raktkosh",
    gitLink: "https://github.com/CoderSid063/Raktkosh-BloodBank-WebApp-React",
    img: "/raktkosh.png",
    desc: "E-Raktkosh is a full-stack web platform designed to facilitate blood donation and request processes. Users can register and interact with the platform to organize blood donation camps, request blood donations, and donate blood to those in need. The platform aims to streamline the blood donation process and connect donors with recipients efficiently.",
  },
  {
    id: 2,
    title: "Food-Blog",
    link: "https://food-blog-jet.vercel.app",
    gitLink: "https://github.com/CoderSid063/foodBlog",
    img: "https://res.cloudinary.com/codersid063/image/upload/v1719846362/meals/amtk44u2svptcbtiinty.png",
    desc: "This is a Food-Blog WebApp created using Next.js14,A user can share his favourite food and read others food blogs and also perform CRUD operation on that post. ",
  },
  {
    id: 3,
    title: "Amazon Clone",
    link: "https://codersid063.github.io/Amazon-Clone-Frontend-Javascript/",
    gitLink: "https://github.com/CoderSid063/Amazon-Clone-Frontend-Javascript",
    img: "/AmazonClone.png",
    desc: "This is a Clone webApp of Amazone.in with verious functionality",
  },
  // {
  //   id: 4,
  //   title: "SocialHub",
  //   link: "https://social-hub-post.netlify.app/",
  //   gitLink:
  //     "https://github.com/CoderSid063/Social-Media/tree/main/social-media",
  //   img: "/SocialHub.png",
  //   desc: "Social Hub is a dynamic and interactive web application that brings together a collection of 100 random posts sourced from a dummyJSON API and also empowers users to creating their own posts. ",
  // },
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
            <a href={item.gitLink} className="gitbtn">
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

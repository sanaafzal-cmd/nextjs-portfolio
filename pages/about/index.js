import React from "react";
import { useState } from "react";
//icons
import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaWordpress,
  FaFigma,
} from "react-icons/hi2";

import { render } from "react-dom";

import {
  SiNextdotjs,
  SiFramer,
  SiAdobexd,
  SiAdobephotoshop,
} from "react-icons/si";

//  about data
const aboutData = [
  {
    title: "skills",
    info: [
      {
        title: "HTML5, CSS3",
        icons: [
          <FaHtml5 />,
          <FaCss3 />,
          <FaJs />,
          <FaReact />,
          <SiNextdotjs />,
          <SiFramer />,
          <FaWordpress />,
        ],
      },
      {
        title: "Javascript, Jquery",
        icon: <FaCss3 />
      },
      {
        title: "React JS, Next JS",
      },
      {
        title: "Laravel",
      },
     
      {
        title: "UI/UX Design",
        icons: [<FaFigma />, <SiAdobexd />, <SiAdobephotoshop />],
      },
    ],
  },
  {
    title: "awards",
    info: [
      {
        title: "Gold Medalist",
        stage: "2011 - 2013",
      },
      {
        title: "Silver Medalist",
        stage: "2013 - 2015",
      },
    ],
  },
  {
    title: "experience",
    info: [
      {
        title: "Front End Web Developer - Upwork",
        stage: "2021 - Present",
      },
      {
        title: "Front End Web Developer - Fiverr",
        stage: "2021 - Present",
      },
     
    ],
  },
  {
    title: "credentials",
    info: [
      {
        title: "Certification in Front End Web Development",
        stage: "Aug 2021- Jan 2022",
      },
      {
        title: "Masters of Computer Sciences",
        stage: "2013-2015",
      },
     
    ],
  },
];

//components
import { Avatar } from "../../components/Avatar";
import { Circles } from "../../components/Circles";
import FloatingWhatsAppIcon from "../../components/FloatingWhatsappIcon";
// framer motion
import { motion } from "framer-motion";
import { fadeIn } from "../../variants";

import Image from 'next/image'

//counter
import CountUp from "react-countup";

const About = () => {
  const [index, setIndex] = useState(0);
  console.log(index)

  return (
    <div>
      {" "}
      <div className="h-full bg-primary/30 py-32 text-center xl:text-left">
        {/* Circles */}
      <div className='w-[200px] xl:w-[300px] absolute -right-16 -bottom-2 mix-blend-color-dodge animate-pulse duration-75 z-10'>
    <Image src={'/circles.png'}
    width={260}
    height={200}
    className='w-full h-full'
    alt='' />
  </div>

  {/* Bulb */}
  <div className="absolute -left-36 -bottom-12 rotate-12 mix-blend-color-dodge animate-pulse duration-75 z-10 w-[200px] xl:w-[260px]">
    <Image
    src={'/bulb.png'}
    width={260}
    height={200}
    className="w-full h-full"
    alt="" />
  </div>
        {/* avatar img */}
        <motion.div
          variants={fadeIn("right", 0.2)}
          initial="hidden"
          animate="show"
          exit="hidden"
          className="hidden xl:flex absolute bottom-0 -left-[370px]"
        >
          {/* <Avatar /> */}
          
        </motion.div>
        <div className="container mx-auto h-full flex flex-col items-center xl:flex-row gap-x-6">
          {/* text */}
          <div className="flex-1 flex flex-col justify-center">
            <motion.h2
              variants={fadeIn("right", 0.2)}
              initial="hidden"
              animate="show"
              exit="hidden"
              className="h2"
            >
              I design & <span className="text-accent">build</span> user interfaces.
            </motion.h2>
            <motion.p
              variants={fadeIn("right", 0.4)}
              initial="hidden"
              animate="show"
              exit="hidden"
              className="max-w-[550px] mx-auto xl:mx-0 mb-6 xl:mb-12 px-2 xl:px-0"
            >
              2 years ago, I began freelancing as a front-end web developer. Since then, I've
              done remote work for agencies, consulted for startups, and
              colaborated on digital products for business and consumer use.
            </motion.p>
            {/* counters */}
            <motion.div
              variants={fadeIn("right", 0.6)}
              initial="hidden"
              animate="show"
              exit="hidden"
              className="hidden md:flex md:max-w-xl xl:max-w-none mx-auto xl:mx-0 mb-8"
            >
              <div className="flex flex-1 xl:gap-x-6">
                {/* experience */}
                <div className="relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0">
                  <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                    <CountUp start={0} end={5} duration={5}>
                      {" "}
                    </CountUp>
                  </div>
                  <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]">
                    Years of experience
                  </div>
                </div>
                {/* clients */}
                <div className="relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0">
                  <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                    <CountUp start={0} end={50} duration={5}></CountUp>
                  </div>
                  <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]">
                    Satisfied Clients
                  </div>
                </div>
                {/* projects */}
                <div className="relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0">
                  <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                    <CountUp start={0} end={50} duration={5}></CountUp>
                  </div>
                  <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]">
                    Finished Projects
                  </div>
                </div>
                {/* awards */}
                <div className="relative flex-1">
                  <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                    <CountUp start={0} end={3} duration={5}></CountUp>
                  </div>
                  <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]">
                    Winning awards
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
          {/* Info */}
          <motion.div
            variants={fadeIn("left", 0.4)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="flex flex-col w-full xl:max-w-[48%] h-[480px]"
          >
            <div className="flex gap-x-4 xl:gap-x-8 mx-auto xl:mx-0 mb-4">
              {aboutData.map((item, itemIndex) => {
                return (
                  <div
                    key={itemIndex}
                    className={`${index === itemIndex && 'text-accent after:w-[100%] after:bg-accent after:transition-all after:duration-300'} cursor-pointer capitalize xl:text-lg relative after:w-8 after:h-[2px] after:bg-white after:absolute after:-bottom-1 after:left-0`}
                    onClick={() => setIndex(itemIndex)}
                  >
                    {item.title}
                  </div>
                );
              })}
            </div>
            <div className="bg-pink-400/10 py-2 xl:py-6 flex flex-col gap-y-2 xl:gap-y-4 items-center xl:items-start ">
              {aboutData[index].info.map((item, itemIndex) => {
                return (
                  <div
                    key={itemIndex}
                    className="flex-1 flex flex-col md:flex-row max-w-max gap-x-2 items-center text-white/60"
                  >
                    {/* title */}
                    <div className="hidden md:flex">-</div>
                    <div className="font-light mb-2 md:mb-0">{item.title}</div>
                    
                    <div>{item.stage}</div>
                  
                  
                    <div className="flex gap-x-4">
                      {/* icons */}
                     
                      {/* {item.icons?.map((icon, itemIndex) => {
                          return <div key={itemIndex}>{icon}</div>
                      })} */}
                    </div>
                  </div>
                );
              })}
            </div>
          </motion.div>
          
        </div>
      </div>{" "}
     
    </div>
  );
};

export default About;

// const About = () => {
//   return <div>About</div>;
// };

// export default About;

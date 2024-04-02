import aboutPhoto from "../assets/aboutPhoto.png";
import { HTMLsvg } from "../svg/HTMLsvg";
import { CSSsvg } from "../svg/CSSsvg";
import { Sasssvg } from "../svg/Sasssvg";
import { Jssvg } from "../svg/Jssvg";
import { Reactsvg } from "../svg/Reactsvg";
import { Tssvg } from "../svg/Tssvg";
import { Tailwindsvg } from "../svg/Tailwindsvg";
import { MainButton } from "../elements/MainButton";
import { SocialMedia } from "../elements/SocialMedia";
import CV from "../assets/CV.pdf";
import { useRef } from "react";
import { NodeJssvg } from "../svg/NodeJssvg";
import { MongoDBsvg } from "../svg/MongoDBsvg";
import { ExpressJssvg } from "../svg/ExpressJssvg";

export const About = () => {
  const scrollSectionAbout = useRef<HTMLDivElement>(null);

  return (
    <section
      id="aboutSection"
      ref={scrollSectionAbout}
      className="bg-about-gradient-linear-light py-10 text-black dark:bg-about-gradient-linear dark:text-white"
    >
      <div className="mx-auto flex max-w-7xl items-center px-10 max-sm:px-5">
        <div className="w-1/2 max-md:hidden">
          <img src={aboutPhoto} alt="aboutPhoto" className="" />
        </div>
        <div className="w-1/2 max-md:w-full">
          <h2 className="text-4xl">
            About <span className="gradient-text mr-1 font-bold">me</span>
          </h2>
          <p className="my-5 text-gray-950 dark:text-stone-300">
            Nice to meet you! My name is Artur, I am 25 years old frontend
            developer based in Bytów, Poland. Currently I`m looking for my first
            job as a frontend developer.
          </p>
          <h3 className="my-5">Actually I work with</h3>
          <div className="inline-flex items-center space-x-3 rounded-md bg-black bg-opacity-5 px-6 py-3 backdrop-blur-md dark:bg-white dark:bg-opacity-10 max-md:flex-wrap max-sm:px-2 max-[455px]:space-x-2">
            <a
              href="https://www.w3schools.com/html/"
              title="HTML"
              target="_blank"
              rel="noreferrer"
            >
              <HTMLsvg />
            </a>
            <a
              href="https://www.w3schools.com/css/"
              title="CSS"
              target="_blank"
              rel="noreferrer"
            >
              <CSSsvg />
            </a>
            <a
              href="https://sass-lang.com/"
              title="SASS"
              target="_blank"
              rel="noreferrer"
            >
              <Sasssvg />
            </a>
            <a
              href="https://www.w3schools.com/js/"
              title="JavaScript"
              target="_blank"
              rel="noreferrer"
            >
              <Jssvg />
            </a>
            <a
              href="https://www.typescriptlang.org/"
              title="TypeScript"
              target="_blank"
              rel="noreferrer"
            >
              <Tssvg />
            </a>
            <a
              href="https://react.dev/"
              title="React"
              target="_blank"
              rel="noreferrer"
            >
              <Reactsvg />
            </a>
            <a
              href="https://tailwindcss.com/"
              title="TailwindCSS"
              target="_blank"
              rel="noreferrer"
            >
              <Tailwindsvg />
            </a>
            <a
              href="https://nodejs.org/en"
              title="NodeJs"
              target="_blank"
              rel="noreferrer"
            >
              <NodeJssvg />
            </a>
            <a
              href="https://expressjs.com/"
              title="Express"
              target="_blank"
              rel="noreferrer"
            >
              <ExpressJssvg />
            </a>
            <a
              href="https://www.mongodb.com/"
              title="MongoDB"
              target="_blank"
              rel="noreferrer"
            >
              <MongoDBsvg />
            </a>
          </div>
          <h3 className="my-5">Find me on GitHub and Linkedin</h3>
          <SocialMedia />
          <h3 className="my-5">Check my CV</h3>
          <a href={CV} download="ArturWisniewskiCV">
            <MainButton>Download</MainButton>
          </a>
        </div>
      </div>
    </section>
  );
};

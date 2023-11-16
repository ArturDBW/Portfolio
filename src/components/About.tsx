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

export const About = () => {
  return (
    <section className="bg-about-gradient-linear-light py-10 text-black dark:bg-about-gradient-linear dark:text-white">
      <div className="mx-auto flex max-w-7xl items-center px-10 max-sm:px-5">
        <div className="w-1/2 max-md:hidden">
          <img src={aboutPhoto} alt="aboutPhoto" />
        </div>
        <div className="w-1/2 max-md:w-full">
          <h2 className="text-4xl">
            About <span className="gradient-text mr-1 font-bold">me</span>
          </h2>
          <p className="my-5 text-gray-950 dark:text-stone-300">
            Nice to meet you! My name is Artur, I am 25 years old frontend
            developer based in Bytów, Poland. Currently I looking for my first
            job as a frontend developer.
          </p>
          <h3 className="my-5">Actually i work with</h3>
          <div className="inline-flex items-center space-x-3 rounded-md bg-black bg-opacity-5 px-6 py-3 backdrop-blur-md dark:bg-white dark:bg-opacity-10 max-md:flex-wrap max-sm:px-2 max-[455px]:space-x-2">
            <HTMLsvg />
            <CSSsvg />
            <Sasssvg />
            <Jssvg />
            <Tssvg />
            <Reactsvg />
            <Tailwindsvg />
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

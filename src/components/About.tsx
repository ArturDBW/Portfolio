import aboutPhoto from "../assets/aboutPhoto.png";
import { HTMLsvg } from "../svg/HTMLsvg";
import { CSSsvg } from "../svg/CSSsvg";
import { Sasssvg } from "../svg/Sasssvg";
import { Jssvg } from "../svg/Jssvg";
import { Reactsvg } from "../svg/Reactsvg";
import { Tssvg } from "../svg/Tssvg";
import { Tailwindsvg } from "../svg/Tailwindsvg";
import { GitHubsvg } from "../svg/GitHubsvg";
import { Linkedlnsvg } from "../svg/Linkedlnsvg";
import { MainButton } from "../elements/MainButton";

export const About = () => {
  return (
    <section className="bg-about-gradient-linear py-10 text-white">
      <div className="mx-auto flex max-w-7xl items-center">
        <div className="w-1/2">
          <img src={aboutPhoto} alt="aboutPhoto" />
        </div>
        <div className="w-1/2">
          <h2 className="text-4xl">
            About <span className="gradient-text mr-1 font-bold">me</span>
          </h2>
          <p className="my-5 text-stone-300">
            Nice to meet you! My name is Artur, I am 25 years old frontend
            developer based in Bytów, Poland. Currently I looking for my first
            job as a frontend developer.
          </p>
          <span className="my-5 block">Actually i work with:</span>
          <div className="inline-flex items-center space-x-3 rounded-md bg-white bg-opacity-20 px-6 py-3 backdrop-blur-md">
            <HTMLsvg />
            <CSSsvg />
            <Sasssvg />
            <Jssvg />
            <Tssvg />
            <Reactsvg />
            <Tailwindsvg />
          </div>
          <span className="my-5 block">Find me on GitHub and Linkdln</span>
          <div className="inline-flex items-center space-x-3 rounded-md bg-white bg-opacity-20 px-6 py-3 backdrop-blur-md">
            <GitHubsvg />
            <Linkedlnsvg />
          </div>
          <span className="my-5 block">Check my CV</span>
          <MainButton>Download</MainButton>
        </div>
      </div>
    </section>
  );
};

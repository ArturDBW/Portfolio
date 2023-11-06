import aboutPhoto from "../assets/aboutPhoto.png";
import { AiFillHtml5 } from "react-icons/ai";
import { HTMLsvg } from "../svg/HTMLsvg";
import { CSSsvg } from "../svg/CSSsvg";
import { Sasssvg } from "../svg/Sasssvg";
import { Jssvg } from "../svg/Jssvg";
import { Reactsvg } from "../svg/Reactsvg";
import { Tssvg } from "../svg/Tssvg";
import { Tailwindsvg } from "../svg/Tailwindsvg";

export const About = () => {
  return (
    <section className="bg-about-gradient-linear py-10 text-white">
      <div className="mx-auto flex max-w-7xl items-center">
        <div className="w-1/2">
          <img src={aboutPhoto} alt="aboutPhoto" className="" />
        </div>
        <div className="w-1/2">
          <h2 className="text-4xl">
            About <span className="gradient-text mr-1 font-bold">me</span>
          </h2>
          <p className="mt-5 text-stone-300">
            Nice to meet you! My name is Artur, I am 25 years old frontend
            developer based in Bytów, Poland. Currently I looking for my first
            job as a frontend developer.
          </p>
          <HTMLsvg />
          <CSSsvg />
          <Sasssvg />
          <Jssvg />
          <Reactsvg />
          <Tssvg />
          <Tailwindsvg />
        </div>
      </div>
    </section>
  );
};

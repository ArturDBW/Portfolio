import { SocialMedia } from "../elements/SocialMedia";
import { Mailsvg } from "../svg/Mailsvg";
import { Phonesvg } from "../svg/Phonesvg";
import { Pinsvg } from "../svg/Pinsvg";

export const InfoContact = () => {
  return (
    <div className="flex w-1/2 flex-col items-start justify-between space-y-3 rounded-md bg-black bg-opacity-5 p-4 text-gray-950 dark:bg-white dark:bg-opacity-10 dark:text-white max-md:w-full">
      <div>
        <h3 className="mb-4 text-3xl ">
          <span className="gradient-text mr-1 font-bold">Let&rsquo;s</span>
          talk!
        </h3>
        <p className="text mb-6 mt-2 text-lg max-sm:text-base">
          Thank you for visiting my portfolio. If you are interested in
          cooperation, please contact me!
        </p>
      </div>
      <div className="flex w-full items-end justify-between max-lg:flex-col max-lg:items-start">
        <div className="space-y-3 max-lg:mb-6">
          <div className="flex ">
            <Mailsvg />
            <span className="ml-5">Arturwisniewski1998@gmail.com</span>
          </div>
          <div className="flex">
            <Pinsvg />
            <span className="ml-5">77-100 Bytów, Poland</span>
          </div>
          <div className="flex">
            <Phonesvg />
            <span className="ml-5">+48 889 737 046</span>
          </div>
        </div>
        <div>
          <SocialMedia />
        </div>
      </div>
    </div>
  );
};

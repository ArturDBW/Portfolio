import { GitHubsvg } from "../svg/GitHubsvg";
import { Linkedlnsvg } from "../svg/Linkedlnsvg";
import { Mailsvg } from "../svg/Mailsvg";
import { Phonesvg } from "../svg/Phonesvg";
import { Pinsvg } from "../svg/Pinsvg";

export const InfoContact = () => {
  return (
    <div className="flex w-1/2 flex-col items-start justify-between space-y-3 rounded-md bg-white bg-opacity-10 p-4">
      <div>
        <h3 className="mb-4 text-3xl ">
          <span className="gradient-text mr-1 font-bold">Let&rsquo;s</span>
          talk!
        </h3>
        <p className="text mb-6 mt-2 text-lg">
          Thank you for visiting my portfolio. If you are interested in
          cooperation, please contact me!
        </p>
      </div>
      <div className="flex w-full items-end justify-between">
        <div className="space-y-3">
          <div className="flex">
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
          <div className="flex space-x-3 rounded-md bg-white bg-opacity-10 px-6 py-3">
            <GitHubsvg />
            <Linkedlnsvg />
          </div>
        </div>
      </div>
    </div>
  );
};

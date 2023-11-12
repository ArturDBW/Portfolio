import { GitHubsvg } from "../svg/GitHubsvg";
import { Linkedlnsvg } from "../svg/Linkedlnsvg";
import { Mailsvg } from "../svg/Mailsvg";
import { Phonesvg } from "../svg/Phonesvg";
import { Pinsvg } from "../svg/Pinsvg";

export const InfoContact = () => {
  return (
    <div className="w-1/2 space-y-3 rounded-md bg-white bg-opacity-10 p-4">
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
      <div>
        <GitHubsvg />
        <Linkedlnsvg />
      </div>
    </div>
  );
};

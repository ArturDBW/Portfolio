import { Mailsvg } from "../svg/Mailsvg";
import { Phonesvg } from "../svg/Phonesvg";
import { Pinsvg } from "../svg/Pinsvg";
import { FormContact } from "./FormContact";

export const Contact = () => {
  return (
    <div className="bg-[#14071A] py-8 text-white">
      <h2 className="my-10 text-center text-4xl">Contact</h2>
      <div className="mx-auto flex max-w-7xl gap-x-6">
        <FormContact />
        <div className="w-1/2 rounded-md bg-white bg-opacity-10 p-4">
          <div className="flex">
            <Mailsvg />
            <p className="ml-4">Arturwisniewski1998@gmail.com</p>
          </div>
          <Pinsvg />
          <Phonesvg />
        </div>
      </div>
    </div>
  );
};

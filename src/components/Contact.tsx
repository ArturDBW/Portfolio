import { FormContact } from "./FormContact";
import { InfoContact } from "./InfoContact";

export const Contact = () => {
  return (
    <div className="bg-[#14071A] px-10 py-8 text-white max-sm:px-5">
      <h2 className="my-10 text-center text-4xl">Contact</h2>
      <div className="mx-auto flex max-w-7xl gap-x-6 max-md:flex-col-reverse max-md:gap-y-10">
        <FormContact />
        <InfoContact />
      </div>
    </div>
  );
};

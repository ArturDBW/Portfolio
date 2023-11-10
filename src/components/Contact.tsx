import { FormContact } from "./FormContact";
import { InfoContact } from "./InfoContact";

export const Contact = () => {
  return (
    <div className="bg-[#14071A] py-8 text-white">
      <h2 className="my-10 text-center text-4xl">Contact</h2>
      <div className="mx-auto flex max-w-7xl gap-x-6">
        <FormContact />
        <InfoContact />
      </div>
    </div>
  );
};

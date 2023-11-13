import { useRef } from "react";
import emailjs from "@emailjs/browser";

export const FormContact = () => {
  const inputStyles =
    "borderBottomGradient w-full border-b-[1px] border-stone-400 bg-transparent pb-2 pt-4 outline-none placeholder:text-stone-400";

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_068qxvx",
        "template_j0o5n7m",
        form.current,
        "iukb8ccPKFQwZ5dwj",
      )
      .then(
        (result) => {
          console.log(result.text);
          console.log("jest oki");
        },
        (error) => {
          console.log(error.text);
          console.log("kurde");
        },
      );
  };

  return (
    <div className="w-1/2 rounded-md bg-white bg-opacity-10 p-4">
      <form ref={form} onSubmit={sendEmail} className="">
        <input
          type="text"
          name="user_name"
          className={inputStyles}
          placeholder="Name"
        />
        <input
          type="email"
          name="user_email"
          className={inputStyles}
          placeholder="Email"
        />
        <textarea
          name="message"
          className={`${inputStyles} h-40`}
          placeholder="Message"
        />
        <input
          type="submit"
          value="Send message"
          className="mt-4  cursor-pointer rounded-md border-none bg-gradient-linear px-6 py-3 font-bold uppercase tracking-widest outline-none duration-100 ease-out hover:scale-110 hover:bg-white hover:bg-none hover:text-black hover:shadow-gradient-linear-shadow"
        />
      </form>
    </div>
  );
};

import { FormEvent, useRef } from "react";
import emailjs from "@emailjs/browser";
import { Checksvg } from "../svg/Checksvg";
import { useState } from "react";

export const FormContact = () => {
  const inputStyles: string =
    "borderBottomGradient w-full border-b-[2px] border-stone-400 bg-transparent pb-2 pt-4 outline-none placeholder:text-stone-400";

  const [nameInputValue, setNameInputValue] = useState<string>("");
  const [emailInputValue, setEmailInputValue] = useState<string>("");
  const [messageInputValue, setMessageInputValue] = useState<string>("");

  const [messageVisible, setMessageVisible] = useState<boolean>(false);
  const messageHandling = (): void => {
    if (emailInputValue === "") return;
    setMessageVisible(true);
    setTimeout(() => {
      setMessageVisible(false);
    }, 3000);
  };

  const form = useRef<HTMLFormElement>(null);

  const sendEmail = (e: FormEvent) => {
    e.preventDefault();
    if (emailInputValue === "") return;
    setNameInputValue("");
    setEmailInputValue("");
    setMessageInputValue("");

    emailjs
      .sendForm(
        "service_068qxvx",
        "template_j0o5n7m",
        form.current as HTMLFormElement,
        "iukb8ccPKFQwZ5dwj",
      )
      .then(() => {
        messageHandling();
      });
  };

  return (
    <div className="w-1/2 rounded-md bg-black bg-opacity-5 p-4 dark:bg-white dark:bg-opacity-10 max-md:w-full">
      <form ref={form} onSubmit={sendEmail} className="">
        <input
          type="text"
          name="user_name"
          value={nameInputValue}
          onChange={(e) => setNameInputValue(e.target.value)}
          className={inputStyles}
          placeholder="Name"
        />
        <input
          type="email"
          name="user_email"
          value={emailInputValue}
          onChange={(e) => setEmailInputValue(e.target.value)}
          className={inputStyles}
          placeholder="Email"
        />
        <textarea
          name="message"
          value={messageInputValue}
          onChange={(e) => setMessageInputValue(e.target.value)}
          className={`${inputStyles} h-40`}
          placeholder="Message"
        />
        <input
          type="submit"
          value="Send message"
          className="mt-4 cursor-pointer rounded-md border-none bg-gradient-linear px-6 py-3 font-bold uppercase tracking-widest text-white outline-none duration-100 ease-out hover:scale-110 hover:bg-white hover:bg-none hover:text-black hover:shadow-gradient-linear-shadow"
        />
      </form>
      <div
        className={`fixed left-1/2 top-20 z-50 flex -translate-x-1/2 transform items-center  justify-center space-x-4 rounded-md bg-stone-950 px-10 py-6 text-lg text-white transition-transform duration-150 ease-in-out dark:bg-white dark:text-black max-md:text-sm max-sm:px-4 max-sm:py-4 ${
          messageVisible ? "" : "-translate-y-40"
        }`}
      >
        <Checksvg />
        <span>Message sent! Thank you.</span>
      </div>
    </div>
  );
};

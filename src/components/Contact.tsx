import { useRef } from "react";
import emailjs from "@emailjs/browser";

export const Contact = () => {
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
    <div className="bg-[#14071A] py-8 text-white">
      <h2 className="my-10 text-center text-4xl">Contact</h2>

      <form ref={form} onSubmit={sendEmail} className="">
        <label className="block">Name</label>
        <input
          type="text"
          name="user_name"
          className="border-b-[1px] border-stone-400 bg-transparent outline-none focus:border-red-500"
        />
        <label className="block">Email</label>
        <input type="email" name="user_email" />
        <label className="block">Message</label>
        <textarea name="message" />
        <input type="submit" value="Send" className="block" />
      </form>
    </div>
  );
};

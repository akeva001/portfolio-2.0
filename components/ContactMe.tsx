import React from "react";
import { PhoneIcon, MapPinIcon, EnvelopeIcon } from "@heroicons/react/24/solid";
import { useForm, SubmitHandler } from "react-hook-form";

type Inputs = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

type Props = {};

const ContactMe = (props: Props) => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = (formData) => console.log(formData);

  return (
    <div
      className="h-screen relative flex flex-col text-center md:text-left md:flex-row
    max-w-7xl justify-evenly mx-auto items-center"
    >
      <h3 className="absolute top-24 uppercase ml-[20px] tracking-[20px] text-gray-500 text-2xl">
        Contact
      </h3>
      {/* <div className="flex flex-col space-y-10">
        <div className="flex items-center space-x-5">
          <PhoneIcon className="h-7 w-7 text-[#06c]" />
          <p>+18189342736</p>
        </div>
        <div className="flex items-center space-x-5">
          <EnvelopeIcon className="h-7 w-7 text-[#06c]" />
          <p>+18189342736</p>
        </div>
      </div> */}

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col space-y-2 w-full p-10 md:p-0 md:w-fit mx-auto"
      >
        <div className="flex flex-col md:flex-row md:space-x-2 space-y-2 md:space-y-0">
          <input
            {...register("name")}
            placeholder="Name"
            className="contactInput"
            type="text"
          />
          <input
            {...register("email")}
            placeholder="Email"
            className="contactInput"
            type="email"
          />
        </div>
        <input
          {...register("subject")}
          placeholder="Subject"
          className="contactInput"
          type="text"
        />
        <textarea
          {...register("message")}
          placeholder="Message"
          className="contactInput  md:min-h-[150px]"
        />
        <button
          type="submit"
          className="bg-[#06c] py-5 px-10 rounded-md text-black font-bold text-lg"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default ContactMe;

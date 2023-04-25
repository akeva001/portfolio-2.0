import React, { useState } from "react";
import { PhoneIcon, MapPinIcon, EnvelopeIcon } from "@heroicons/react/24/solid";
import { useForm, SubmitHandler } from "react-hook-form";

type Inputs = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

interface ErrorMessages {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
}

type Props = {};

const ContactMe = (props: Props) => {
  const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  //   Form validation state
  const [errorMessages, setErrorMessages] = useState<ErrorMessages>({});

  //   Setting button text on form submission
  const [buttonText, setButtonText] = useState("Send");

  // Setting success or failure messages states
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const [showFailureMessage, setShowFailureMessage] = useState(false);

  // Validation check method
  const handleValidation = () => {
    let tempErrors: any = {};
    let isValid = true;

    if (fullname.length <= 0) {
      tempErrors["name"] = true;
      isValid = false;
    }
    if (email.length <= 0) {
      tempErrors["email"] = true;
      isValid = false;
    }
    if (subject.length <= 0) {
      tempErrors["subject"] = true;
      isValid = false;
    }
    if (message.length <= 0) {
      tempErrors["message"] = true;
      isValid = false;
    }

    setErrorMessages({ ...tempErrors });
    console.log("errors", errorMessages);
    return isValid;
  };

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = async (formData) => {
    let isValidForm = handleValidation();

    if (isValidForm) {
      setButtonText("Sending");
      const res = await fetch("/api/sendgrid", {
        body: JSON.stringify({
          email: email,
          fullname: fullname,
          subject: subject,
          message: message,
        }),
        headers: {
          "Content-Type": "application/json",
        },
        method: "POST",
      });

      const { error } = await res.json();
      if (error) {
        console.log(error);
        setShowSuccessMessage(false);
        setShowFailureMessage(true);
        setButtonText("Send");
        return;
      }
      setShowSuccessMessage(true);
      setShowFailureMessage(false);
      setButtonText("Send");
    }
    console.log(fullname, email, subject, message);
  };

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
        className="relative flex flex-col space-y-2 w-full p-10 md:p-0 md:w-fit mx-auto md:mt-20"
      >
        <div className="flex flex-col md:flex-row md:space-x-2 space-y-2 md:space-y-0">
          <input
            {...register("name")}
            placeholder="Name"
            className="contactInput"
            type="text"
            onChange={(e) => {
              setFullname(e.target.value);
            }}
          />
          <input
            {...register("email")}
            placeholder="Email"
            className="contactInput"
            type="email"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
        </div>
        <input
          {...register("subject")}
          placeholder="Subject"
          className="contactInput"
          type="text"
          onChange={(e) => {
            setSubject(e.target.value);
          }}
        />
        <textarea
          {...register("message")}
          placeholder="Message"
          className="contactInput min-h-[150px]"
          onChange={(e) => {
            setMessage(e.target.value);
          }}
        />
        <button
          type="submit"
          className={`py-5 px-10 rounded-md text-black font-bold text-lg cursor-pointer ${
            !showSuccessMessage ? "bg-[#06c]" : "bg-gray-500"
          }`}
          disabled={showSuccessMessage}
        >
          {buttonText}
        </button>
        {errorMessages.name ? (
          <p className="formErrorMessage">Please fill out name.</p>
        ) : errorMessages.email ? (
          <p className="formErrorMessage">Please fill out email.</p>
        ) : errorMessages.subject ? (
          <p className="formErrorMessage">Please fill out subject.</p>
        ) : errorMessages.message ? (
          <p className="formErrorMessage">Please fill out message.</p>
        ) : null}

        {showFailureMessage && (
          <p className="formErrorMessage">Error sending your message.</p>
        )}
        {showSuccessMessage && (
          <p className="formErrorMessage">Your message was sent!</p>
        )}
      </form>
    </div>
  );
};

export default ContactMe;

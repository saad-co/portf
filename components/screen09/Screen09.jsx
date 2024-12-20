"use client";
import { AlertContext } from "@/context/AlertContext";
import React, { useContext, useEffect, useState } from "react";

export const Screen09 = () => {
  const { showAlert } = useContext(AlertContext);
  const [sendingEmail, setSendingEmail] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);

  // Check if all fields are filled
  useEffect(() => {
    const { name, email, subject, message } = formData;
    const allFieldsFilled =
      name.length > 0 &&
      email.length > 0 &&
      subject.length > 0 &&
      message.length > 0;
    setIsButtonDisabled(!allFieldsFilled); // Disable button if any field is empty
  }, [formData]);

  function inputChangeHandler(e) {
    const { name, value } = e.target; // Destructure name and value from the event
    setFormData((prevState) => ({
      ...prevState, // Keep the previous state
      [name]: value, // Update the field corresponding to the input's name
    }));
  }

  async function sendMail(e) {
    e.preventDefault();
    try {
      setSendingEmail(true);
      const response = await fetch("/api/sendMail", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        showAlert({ type: "SUCCESS", message: "Message sent successfully!" });
        setFormData({
          name: "",
          email: "",
          phone: "",
          subject: "",
          message: "",
        });
      } else {
        const data = await response.json();
        showAlert({
          type: "ERROR",
          message: "An error occurred! Please try again.",
        });
      }
      setSendingEmail(false);
    } catch (error) {
      console.error("Error:", error);
    }
  }

  return (
    <section
      id="contact"
      className="flex flex-col bg-page03-gradient items-center">
      <div className="max-w-7xl ~px-4/8 pb-20 ~gap-8/16 flex flex-col justify-center items-center w-full">
        <div className="flex flex-col w-full mx-auto pt-20 gap-4">
          <h1 className="w-full text-center ~text-3xl/7xl font-bold">
            GET IN TOUCH
          </h1>
          <p className="w-full text-center ~text-base/3xl text-customYellow">
            Interesting Ideas and Proposals? Write to Us!
          </p>
        </div>
        <div className="w-full">
          <form>
            <div className="grid md:grid-cols-2 grid-cols-1 w-full gap-14 pb-16">
              <div className="flex flex-col relative">
                <label className="bg-gradient-to-t from-[#350204] to-[#360204] absolute px-4 top-0 left-5 -translate-y-1/2">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={inputChangeHandler}
                  required
                  className="px-8 py-4 rounded-2xl w-full bg-transparent border border-customYellow font-helvetica"
                />
              </div>
              <div className="flex flex-col relative">
                <label className="bg-gradient-to-t from-[#350204] to-[#360204] absolute px-4 top-0 left-5 -translate-y-1/2">
                  EMAIL
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  required
                  onChange={inputChangeHandler}
                  className="px-8 py-4 rounded-2xl w-full bg-transparent border border-customYellow font-helvetica"
                />
              </div>
              <div className="flex flex-col relative">
                <label className="bg-[#2F0103] absolute px-4 top-0 left-5 -translate-y-1/2">
                  PHONE
                </label>
                <input
                  type="phone"
                  name="phone"
                  value={formData.phone}
                  required
                  onChange={inputChangeHandler}
                  className="px-8 py-4 rounded-2xl w-full bg-transparent border border-customYellow font-helvetica"
                />
              </div>
              <div className="flex flex-col relative">
                <label className="bg-[#2F0103] absolute px-4 top-0 left-5 -translate-y-1/2">
                  SUBJECT
                </label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  required
                  onChange={inputChangeHandler}
                  className="px-8 py-4 rounded-2xl w-full bg-transparent border border-customYellow font-helvetica"
                />
              </div>
            </div>
            <div className="flex flex-col relative w-full">
              <label className="bg-[#2F0103] absolute px-4 top-0 left-5 -translate-y-1/2">
                MESSAGE
              </label>
              <textarea
                type="textarea"
                name="message"
                value={formData.message}
                required
                rows={10}
                onChange={inputChangeHandler}
                className="px-8 py-4 rounded-2xl w-full bg-transparent border border-customYellow font-helvetica"
              />
            </div>
            <div className="w-full mx-auto pt-20 flex justify-center items-center">
              <div className="bg-gold-gradient w-fit py-1 px-2 rounded-[47px]">
                <button
                  disabled={isButtonDisabled || sendingEmail}
                  onClick={sendMail}
                  className={`${
                    isButtonDisabled || sendingEmail
                      ? "bg-black"
                      : "bg-custom-gradient"
                  } px-6 py-3 rounded-[47px]`}>
                  {sendingEmail ? "SENDING..." : "SEND MESSAGE"}
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Screen09;

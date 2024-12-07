"use client";
import { useContext, useEffect } from "react";
import { AlertContext } from "@/context/AlertContext";
import Image from "next/image";
import { FaX } from "react-icons/fa6";
import { IoClose } from "react-icons/io5";

const Alert = ({ message, type }) => {
  const { hideAlert } = useContext(AlertContext);

  useEffect(() => {
    const alertTimeout = setTimeout(() => {
      hideAlert();
    }, 5000);

    return () => {
      clearTimeout(alertTimeout);
    };
  }, []);

  return (
    <>
      <div
        className={`fixed overflow-hidden z-50 top-0 right-0 mx-4 mt-4 bg-white border-2 border-gray-200 shadow-xl rounded-lg flex items-center gap-4`}>
        <div className="pl-4 pt-3 pb-4 text-black">
          {message}
        </div>
        <button className="p-4" onClick={hideAlert}>
          <IoClose className="text-black"/>
        </button>
        <div
          className={`${type === "SUCCESS"
            ? "bg-green-500"
            : type === "ERROR"
              ? "bg-red-500"
              : type === "WARNING"
                ? "bg-yellow-500"
                : "bg-blue-500"
            } h-1.5 absolute bottom-0 left-0 right-0 animate-alert`}></div>
      </div>
    </>
  );
};

export default Alert;
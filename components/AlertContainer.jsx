"use client";
import { AlertContext } from "@/context/AlertContext";
import { useContext } from "react";
import Alert from "./Alert";

const AlertContainer = () => {
    const { alerts } = useContext(AlertContext);

    return (
        <div>
            {alerts?.map(({ message, type, timestamp }) => (
                <Alert key={timestamp} message={message} type={type} />
            ))}
        </div>
    );
};

export default AlertContainer;
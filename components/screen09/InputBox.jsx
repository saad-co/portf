import React from 'react';
export const InputBox = ({
    label,
    value,
    name,
    type,
    idHtmlFor,
    inputHandler = () => { },
    placeholder = "",
    className = "",
    required = false,
}) => {
    const onChangeHandler = (e) => {
        inputHandler(name, e.target.value);
    };

    return (
        <>
            <div className={`${className} flex flex-col gap-2.5 lg:gap-2.5`}>
                <label htmlFor={idHtmlFor} className="font-bold lg:text-md">
                    {label}
                </label>
                {type === "text" || type === "password" || type === "email" || type === "tel" ? (
                    <input
                        type={type}
                        id={idHtmlFor}
                        value={value}
                        name={name}
                        required={required}
                        placeholder={placeholder}
                        onChange={onChangeHandler}
                        className="px-4 py-3 text-sm bg-transparent border border-white rounded font-medium"
                    />
                ) : type === "textarea" ? (
                    <textarea
                        id={idHtmlFor}
                        value={value}
                        name={name}
                        required={required}
                        placeholder={placeholder}
                        onChange={onChangeHandler}
                        rows={4}
                        className="p-4 text-sm border border-black/50 rounded font-medium"
                    />
                ) : null}
            </div>
        </>
    );
};

export default InputBox;

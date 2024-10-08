import * as React from "react";

export interface InputFieldProps {
  onChange: (
    event:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>
  ) => void;
  value: string;
  labelText: string;
  labelFor: string;
  id: string;
  inputName: string;
  pattern?: string;
  inputType?: "text" | "textarea" | "email";
}

const InputField: React.FC<InputFieldProps> = ({
  onChange,
  value,
  labelText,
  labelFor,
  id,
  inputName,
  pattern,
  inputType = "text",
}) => {
  return (
    <div className="w-full">
      <div className="relative mt-2 w-full">
        {inputType === "textarea" ? (
          <textarea
            name={inputName}
            id={id}
            className="peer block w-full appearance-none rounded-lg border border-black bg-transparent px-2.5 pb-2.5 pt-3 text-black focus:border-[#5A2094] focus:outline-none focus:ring-0"
            placeholder=" "
            onChange={onChange}
            value={value}
            required
          />
        ) : (
          <input
            name={inputName}
            type={inputType}
            id={id}
            className="peer block w-full appearance-none rounded-lg border border-black bg-transparent px-2.5 pb-2.5 pt-3 text-black focus:border-[#5A2094] focus:outline-none focus:ring-0"
            placeholder=" "
            onChange={onChange}
            value={value}
            required
            pattern={pattern}
          />
        )}
        <label
          htmlFor={labelFor}
          className="absolute top-2 left-1 z-10 origin-[0] -translate-y-8 scale-75 transform cursor-text select-none  px-2 text-black duration-300 peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:scale-100 peer-focus:top-2 peer-focus:-translate-y-8 peer-focus:scale-75 peer-focus:px-2 peer-focus:text-[#5A2094] font-light"
        >
          {labelText}
        </label>
      </div>
    </div>
  );
};

export default InputField;

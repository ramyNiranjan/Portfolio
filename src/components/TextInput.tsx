import React from "react";
import classnames from "classnames";

interface TextInputProps {
  type?: string;
  name: string;
  placeHolder: string;
  textarea?: boolean;
  register: () => {};
  errors: {};
}

const InputStyle = classnames(
  "w-3/4 px-3 py-2 mt-4 appearance-none bg-secondary-200 text-secondary-300 placeholder-secondary-300 focus:outline-none  focus:border-primary-300  sm:text-sm  focus:bg-secondary-200  "
);

export const TextInput: React.FC<TextInputProps> = ({
  type,
  name,
  placeHolder,
  textarea = false,
  register,
  errors,
}) => {
  return (
    <div className="flex flex-col items-center justify-center w-full ">
      {!textarea ? (
        <>
          <input
            name={name}
            type={type}
            className={InputStyle}
            placeholder={placeHolder}
            ref={register}
            autoComplete="off"
          />
        </>
      ) : (
        <>
          <textarea
            className={InputStyle}
            rows={5}
            name={name}
            placeholder={placeHolder}
            ref={register}
          ></textarea>
        </>
      )}
      {errors && (
        <span className="mt-1 text-red-400">{errors[name]?.message}</span>
      )}
    </div>
  );
};

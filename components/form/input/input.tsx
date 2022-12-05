"user client";
import Image from "next/image";

const Input = ({
  placeholder,
  type,
  getValue,
  value,
  inputStatus,
  errorMsg,
}: {
  placeholder: string;
  type: string;
  value: any;
  inputStatus: string;
  getValue: Function;
  errorMsg: string | null;
}) => {
  return (
    <div className="relative">
      <input
        placeholder={placeholder}
        type={type}
        className={`${
          inputStatus == "error" ? " border-[2px] border-red text-red" : ""
        }`}
        onChange={(event) => getValue(event.target.value)}
      ></input>
      {inputStatus == "error" ? (
        <>
          {errorMsg ? (
            <p className=" mt-[6px] text-right text-[11px] font-medium italic leading-normal text-red ">
              {errorMsg}
            </p>
          ) : (
            <p className=" mt-[6px] text-right text-[11px] font-medium italic leading-normal text-red ">
              {placeholder} cannot be empty
            </p>
          )}

          <Image
            src="/images/icon-error.svg"
            alt=""
            width={24}
            height={24}
            className="absolute top-4 right-[27px]"
          ></Image>
        </>
      ) : (
        ""
      )}
    </div>
  );
};

export default Input;

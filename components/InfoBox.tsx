import Link from "next/link";
import React from "react";

type ButtonInfo = {
  link: string;
  backgroundColor: string;
  text: string;
};

type InfoBoxProps = {
  heading: string;
  backgroundColor?: string;
  textColor?: string;
  btnInfo: ButtonInfo;
  children: React.ReactNode;
};

const InfoBox = ({
  btnInfo,
  heading,
  backgroundColor,
  textColor,
  children,
}: InfoBoxProps) => {
  return (
    <div className={`${backgroundColor} p-6 rounded-lg shadow-md`}>
      <h2 className={`${textColor} text-2xl font-bold`}>{heading}</h2>
      <p className={`${textColor} mt-2 mb-4`}>{children}</p>
      <Link
        href={btnInfo.link}
        className={`${btnInfo.backgroundColor} inline-block bg-black text-white rounded-lg px-4 py-2 hover:opacity-80`}
      >
        {btnInfo.text}
      </Link>
    </div>
  );
};

export default InfoBox;

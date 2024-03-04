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
  buttonInfo: ButtonInfo;
  children: React.ReactNode;
};

export const InfoBox = ({
  heading,
  backgroundColor,
  textColor,
  children,
  buttonInfo,
}: InfoBoxProps) => {
  console.log(buttonInfo);
  return (
    <div className={`${backgroundColor} p-6 rounded-lg shadow-md`}>
      <h2 className={`${textColor} text-2xl font-bold`}>{heading}</h2>
      <p className={`${textColor} mt-2 mb-4`}>{children}</p>
    </div>
  );
};

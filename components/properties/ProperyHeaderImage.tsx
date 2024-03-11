import Image from "next/image";
import React from "react";

interface ProperyHeaderImageProps {
  image: string;
}
const ProperyHeaderImage = ({ image }: ProperyHeaderImageProps) => {
  return (
    <section>
      <div className="container-xl m-auto">
        <div className="grid grid-cols-1">
          <Image
            src={`/images/properties/${image}`}
            alt=""
            className="object-cover h-96 w-full"
            width={0}
            height={0}
            sizes="100vw"
            priority
          />
        </div>
      </div>
    </section>
  );
};

export default ProperyHeaderImage;

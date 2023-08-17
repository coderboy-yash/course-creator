import React from "react";
import Image from "next/image";
const Footer = () => {
  return (
    <div className=" flex justify-center gap-32 p-3 bg-gradient-to-r from-orange-300 to-amber-400">
      <div className="flex gap-8 items-center">
        <Image src="/assets/email.png" width={40} height={40}></Image>
        <span>nigamy911@gmail.com</span>
      </div>
      <div className="flex gap-4 items-center">
        <Image src="/assets/phone.png" width={40} height={40}></Image>
        <span>+91-8957655061</span>
      </div>
    </div>
  );
};

export default Footer;

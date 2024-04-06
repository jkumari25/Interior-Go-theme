import React from "react";
import logo from "../public/assets/logo.jpg";
import Image from "next/image";
import Link from "next/link";

const Logo = () => {
  return (
    <Link href="/">
      <Image src={logo} width={160} height={55} alt="" />
    </Link>
  );
};
export default Logo;

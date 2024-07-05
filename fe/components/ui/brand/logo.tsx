import Image from "next/image";
import React from "react";

type LogoProps = {
  size?: number;
};

const Logo = (props: LogoProps) => {
  const { size = 40 } = props;
  return (
    <Image width={size * 2} height={size} src={"/logo.png"} alt="Chillax" />
  );
};

export default Logo;

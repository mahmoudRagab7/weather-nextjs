import React from "react";
import Image from "next/image";
import { cn } from "@/utils/cn";

export default function WeatherIcon({
  iconName,
  ...restProps
}: React.HTMLProps<HTMLDivElement> & { iconName: string }) {
  return (
    <div {...restProps} className={cn("relative h-20 w-20")}>
      <Image
        width={100}
        height={100}
        className="absolute h-full w-full"
        src={`https://openweathermap.org/img/wn/${iconName}@4x.png`}
        alt="Weather Status"
      />
    </div>
  );
}

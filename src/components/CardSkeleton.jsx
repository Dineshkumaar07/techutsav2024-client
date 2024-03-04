import React from "react";
import Skeleton from "react-loading-skeleton";
import { SkeletonTheme } from "react-loading-skeleton";
import { useMediaQuery } from "@mui/material";

const CardSkeleton = ({ cards }) => {
  const mobileCheck = useMediaQuery("(min-width: 600px)");
  return Array(cards)
    .fill(0)
    .map((i) => (
      <SkeletonTheme baseColor="" highlightColor="">
        <div
          className={`${
            mobileCheck ? "h-[600px]" : "max-h-[500px]"
          } lg:w-full w-5/6 border-2 border-black/35  rounded-md p-7 flex flex-col gap-9 items-center cursor-pointer transition-transform duration-300   aspect-[1/1] text-center`}
          key={i}
        >
          <div>
            <Skeleton circle width={130} height={130} />
          </div>
          <div className="w-full h-full flex flex-col gap-3  ">
            <Skeleton height={25} />
            <Skeleton height={25} />
            <Skeleton height={25} />
            <Skeleton height={25} />
            <Skeleton width={200} height={40} className="md:mt-6 mt-0" />
          </div>
        </div>
      </SkeletonTheme>
    ));
};

export default CardSkeleton;

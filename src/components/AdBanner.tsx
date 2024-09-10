import React from "react";
import { Button } from "./ui/button";
import Link from "next/link";
import { ArrowRightIcon } from "@radix-ui/react-icons";
import Image from "next/image";

async function AdBanner() {
  return (
    <section className="">
      <div className="mx-auto max-w-2xl p-4 pb-24 sm:px-6 lg:max-w-7xl lg:px-8">
        <div className="mx-auto grid grid-cols-1 overflow-hidden rounded-md bg-gray-800 text-white sm:grid-cols-5">
          <div className="h-full overflow-hidden sm:col-span-2">
            <Image
              width={1080}
              height={1080}
              className="h-full w-full object-cover object-top"
              alt="Hero Image"
              priority
              src={"/assets/images/ad-banner-image.jpg"}
            />
          </div>
          <div className="flex flex-col justify-between gap-4 p-4 sm:col-span-3 sm:gap-6 lg:p-9">
            <div>
              <p className="text-gray-400">LIMITED OFFER</p>
              <h2 className="mt-4 text-3xl font-bold lg:text-6xl">
                35% off only this friday and get special gift
              </h2>
            </div>
            <Button
              size={"lg"}
              asChild
              className="flex w-full items-center gap-2 sm:w-fit"
            >
              <Link href={"/catalog"}>
                Grab it now <ArrowRightIcon className="h-5 w-5 text-white" />{" "}
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AdBanner;

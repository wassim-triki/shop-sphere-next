import Image from "next/image";
import React from "react";
import { client } from "~/sanity/lib/client";
import { defineQuery } from "next-sanity";
import { urlFor } from "~/sanity/lib/image";
import Link from "next/link";
import { navLinks } from "~/data";
async function getData() {
  const HERO_IMAGES_QUERY = defineQuery(`*[_type == 'heroImages']`);
  const data = await client.fetch(HERO_IMAGES_QUERY);
  return data;
}

async function Hero() {
  const data = await getData();
  return (
    <section className="bgs-red-500 mx-auto max-w-2xl px-4 sm:pb-6 lg:max-w-7xl lg:px-8">
      <div className="bg-grseen-500 mb-8 flex flex-wrap justify-between md:mb-16">
        <div className="mb-6 flex w-full flex-col justify-center sm:mb-12 lg:mb-0 lg:w-1/3 lg:pb-20 lg:pt-28">
          <h1 className="mb-4 text-4xl font-bold text-black sm:text-5xl md:text-6xl">
            Top Fashion for a top price!
          </h1>
          <p className="max-w-md leading-relaxed text-muted-foreground">
            We sel only the most exclusive and high quality products for you. We
            are the best so come and shop with us.
          </p>
        </div>

        <div className="mb-12 flex w-full md:mb-16 lg:w-2/3">
          <div className="shadow-2lg relative left-12 top-12 z-10 -ml-12 overflow-hidden rounded-lg bg-gray-100 md:left-16 md:top-16 lg:ml-0">
            <Image
              width={500}
              height={500}
              className="h-full w-full object-cover object-center"
              alt="Hero Image"
              priority
              src={urlFor(data[0]?.image1).url()}
            />
          </div>
          <div className="overflow-hidden rounded-lg bg-gray-100 shadow-lg">
            <Image
              width={500}
              height={500}
              className="h-full w-full object-cover object-center"
              alt="Hero Image"
              priority
              src={urlFor(data[0]?.image2).url()}
            />
          </div>
        </div>
      </div>

      <div className="flex flex-col items-center justify-between gap-8 md:flex-row">
        <div className="flex h-12 w-64 divide-x overflow-hidden rounded-lg border">
          {navLinks.slice(1).map(({ name, href }) => (
            <Link
              key={name}
              href={href}
              className="flex w-1/3 items-center justify-center text-muted-foreground transition duration-100 hover:bg-gray-100 active:bg-gray-200"
            >
              {name}
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Hero;

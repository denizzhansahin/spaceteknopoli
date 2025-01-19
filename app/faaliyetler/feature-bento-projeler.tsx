"use client";

import React from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Image,
  Button,
} from "@nextui-org/react";


import { Link } from "@nextui-org/link";
import { siteConfig } from "@/config/site";

export default function FeaturesBentoFaaliyetler() {
  return (
    <div className=" gap-4 grid grid-cols-12 grid-rows-2 px-8 mt-20">
      
      <Card className="col-span-12 sm:col-span-4 h-[300px]">
        <CardHeader className="absolute z-10 top-1 flex-col !items-start">
          <p className="text-tiny text-white/60 uppercase font-bold">
            Mobil
          </p>
          <h4 className="text-white font-medium text-large">
            React Native
          </h4>
        </CardHeader>
        <Image
          removeWrapper
          alt="Card background"
          className="z-0 w-full h-full object-cover"
          src="logo_icon_kutuphane/21.png"
        />
        <div className="absolute inset-0 bg-black opacity-50 z-0"></div>
 
      </Card>
      <Card className="col-span-12 sm:col-span-4 h-[300px]">
        <CardHeader className="absolute z-10 top-1 flex-col !items-start">
          <p className="text-tiny text-white/60 uppercase font-bold">
            WEB
          </p>
          <h4 className="text-white font-medium text-large">
            NextJS
          </h4>
        </CardHeader>
        <Image
          removeWrapper
          alt="Card background"
          className="z-0 w-full h-full object-cover"
          src="logo_icon_kutuphane/22.png"
        />
        <div className="absolute inset-0 bg-black opacity-50 z-0"></div>

      </Card>
      <Card className="col-span-12 sm:col-span-4 h-[300px]">
        <CardHeader className="absolute z-10 top-1 flex-col !items-start">
          <p className="text-tiny text-white/60 uppercase font-bold">
            WEB
          </p>
          <h4 className="text-white font-medium text-large">
            React ve Vite
          </h4>
        </CardHeader>
        <Image
          removeWrapper
          alt="Card background"
          className="z-0 w-full h-full object-cover"
          src="logo_icon_kutuphane/23.png"
        />
        <div className="absolute inset-0 bg-black opacity-50 z-0"></div>

      </Card>
      <Card
        isFooterBlurred
        className="w-full h-[300px] col-span-12 sm:col-span-5"
      >
        <CardHeader className="absolute z-10 top-1 flex-col items-start">
          <p className="text-tiny text-white/60 uppercase font-bold">Back-End</p>
          <h4 className="text-white font-medium text-2xl">NestJS</h4>
        </CardHeader>
        <Image
          removeWrapper
          alt="Card example background"
          className="z-0 w-full h-full scale-125 -translate-y-6 object-cover"
          src="logo_icon_kutuphane/24.png"
        />
        <div className="absolute inset-0 bg-black opacity-50 z-0"></div>

      </Card>
      <Card
        isFooterBlurred
        className="w-full h-[300px] col-span-12 sm:col-span-7"
      >
        <CardHeader className="absolute z-10 top-1 flex-col items-start">
          <p className="text-tiny text-white/60 uppercase font-bold">
            Back-End
          </p>
          <h4 className="text-white/90 font-medium text-xl">
            GraphQL
          </h4>
        </CardHeader>
        <Image
          removeWrapper
          alt="Relaxing app background"
          className="z-0 w-full h-full object-cover"
          src="logo_icon_kutuphane/25.png"
        />
        <div className="absolute inset-0 bg-black opacity-50 z-0"></div>

      </Card>
      <Card className="col-span-12 sm:col-span-4 h-[300px]">
        <CardHeader className="absolute z-10 top-1 flex-col !items-start">
          <p className="text-tiny text-white/60 uppercase font-bold">
            Back-End
          </p>
          <h4 className="text-white font-medium text-large">
            TypeORM
          </h4>
        </CardHeader>
        <Image
          removeWrapper
          alt="Card background"
          className="z-0 w-full h-full object-cover"
          src="logo_icon_kutuphane/26.png"
        />
        <div className="absolute inset-0 bg-black opacity-50 z-0"></div>

      </Card>
      <Card className="col-span-12 sm:col-span-4 h-[300px]">
        <CardHeader className="absolute z-10 top-1 flex-col !items-start">
          <p className="text-tiny text-white/60 uppercase font-bold">
            Masaüstü
          </p>
          <h4 className="text-white font-medium text-large">
            ElectronJS
          </h4>
        </CardHeader>
        <Image
          removeWrapper
          alt="Card background"
          className="z-0 w-full h-full object-cover"
          src="logo_icon_kutuphane/27.png"
        />
        <div className="absolute inset-0 bg-black opacity-50 z-0">
          
        </div>

      </Card>
      <Card className="col-span-12 sm:col-span-4 h-[300px]">
        <CardHeader className="absolute z-10 top-1 flex-col !items-start">
          <p className="text-tiny text-white/60 uppercase font-bold">
            AI ve Veri Analizi
          </p>
          <h4 className="text-white font-medium text-large">
            Python
          </h4>
        </CardHeader>
        <Image
          removeWrapper
          alt="Card background"
          className="z-0 w-full h-full object-cover"
          src="logo_icon_kutuphane/28.png"
        />
        <div className="absolute inset-0 bg-black opacity-50 z-0"></div>

      </Card>
      <Card
        isFooterBlurred
        className="w-full h-[300px] col-span-12 sm:col-span-5"
      >
        <CardHeader className="absolute z-10 top-1 flex-col items-start">
          <p className="text-tiny text-white/60 uppercase font-bold">Back-End</p>
          <h4 className="text-white font-medium text-2xl">ASP.NET</h4>
        </CardHeader>
        <Image
          removeWrapper
          alt="Card example background"
          className="z-0 w-full h-full scale-125 -translate-y-6 object-cover"
          src="logo_icon_kutuphane/29.png"
        />
        <div className="absolute inset-0 bg-black opacity-50 z-0"></div>

      </Card>
      <Card
        isFooterBlurred
        className="w-full h-[300px] col-span-12 sm:col-span-7"
      >
        <CardHeader className="absolute z-10 top-1 flex-col items-start">
          <p className="text-tiny text-white/60 uppercase font-bold">
            Back-End
          </p>
          <h4 className="text-white/90 font-medium text-xl">
            Firebase
          </h4>
        </CardHeader>
        <Image
          removeWrapper
          alt="Relaxing app background"
          className="z-0 w-full h-full object-cover"
          src="logo_icon_kutuphane/30.png"
        />
        <div className="absolute inset-0 bg-black opacity-50 z-0"></div>

      </Card>
      
    </div>
  );
}

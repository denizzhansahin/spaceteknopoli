"use client";
import { Chip, Link } from "@nextui-org/react";
import React from "react";
import { button as buttonStyles } from "@nextui-org/theme";
import { siteConfig } from "@/config/site";

function Integrations() {
  return (
    <div className="flex-col justify-center items-center mx-auto relative text-center">
      <div className="flex justify-center items-center text-cente mb-2">
        <Chip variant="flat" color="secondary">
          Kodlarımız Her Yerde!
        </Chip>
      </div>
      <h1 className="text-2xl lg:text-4xl font-semibold z-10 relative">
        Bir Şair Gibi Hayallarini Kodlara Dökmek Kadar Güzel Ne Var?
      </h1>
      <h1 className="text-lg lg:text-xl font-normal z-10 relative max-w-[900px] text-center flex mx-auto justify-center items-center text-gray-500 mt-2">
        İlk kod satırımızdan buralara geleceğimizi bilemezdik ama hep hayal ederdik. Buraya kadar gelmek için öğrendiğimiz her şeyi binlerce ve on binlerce satır koda aktardık.
        İlk uygulamamızı yayınladığımızda yaşadığımız heyecan o kadar farklıydı ki, bize büyük bir motivasyon kaynağı oldu. Şimdi ise kodlarımız her yerde!
      </h1>
      <br/>
      <Link
          isExternal
          className={buttonStyles({
            color: "danger",
            radius: "full",
            variant: "shadow",
          })}
          href={siteConfig.links.playstore}
        >
          
          Google Play Store Sizi Bekliyoruz!
        </Link>
        <br />
      <img alt="integration" className="mt-4 lg:mt-10 rounded-lg" src="/Ekran Görüntüsü - 2025-01-17 10-55-39.png"/>
    </div>
  );
}

export default Integrations;

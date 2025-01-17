"use client";
import { Chip, Link } from "@nextui-org/react";
import React from "react";
import { button as buttonStyles } from "@nextui-org/theme";
import { siteConfig } from "@/config/site";

function LightBgTwitter() {
  return (
    <div className="flex-col justify-center items-center mx-auto mt-10 relative text-center">
      <div className="flex justify-center items-center text-cente mb-2">

        <Chip variant="flat" color="secondary">
          Instagram - X - TikTok
        </Chip>
      </div>
      <h1 className="text-2xl lg:text-4xl font-semibold z-10 relative">
        Görsel ve İçerik Üretimi
      </h1>
      <h1 className="text-lg lg:text-xl font-normal z-10 relative max-w-[900px] text-center flex mx-auto justify-center items-center text-gray-500 mt-2">
        Bu platformlar üzerindeki içeriklerimizle, sizlere en iyi haberleri ve bilgileri sunuyoruz. Çeşitli alanlardaki gönderiler ile sizlere en iyi içerikleri ulaştırmaya çalışıyoruz.
      </h1>
      <br />
      <Link
        isExternal
        className={buttonStyles({
          color: "danger",
          radius: "full",
          variant: "shadow",
        })}
        href={siteConfig.links.youtube}
      >

        Instagram!
      </Link>
      <Link
        isExternal
        className={buttonStyles({
          color: "danger",
          radius: "full",
          variant: "shadow",
        })}
        href={siteConfig.links.twitter}
      >

        X
      </Link>
      <Link
        isExternal
        className={buttonStyles({
          color: "danger",
          radius: "full",
          variant: "shadow",
        })}
        href={siteConfig.links.tiktok}
      >

        TikTok
      </Link>
      <br />
      <br />
      <img alt="meetings" src="Ekran Görüntüsü - 2025-01-17 15-40-32.png" className="rounded-lg" />
      <br/>
      <div className="flex justify-center items-center text-cente mb-2">

        <img alt="meetings" src="Ekran Görüntüsü - 2025-01-17 15-48-32.png" className="rounded-lg justify-center" />
      </div>
      <br/>
      <div className="flex justify-center items-center text-cente mb-2">

        <img alt="meetings" src="Ekran Görüntüsü - 2025-01-17 15-42-56.png" className="rounded-lg justify-center" />
      </div>

    </div>
  );
}

export default LightBgTwitter;

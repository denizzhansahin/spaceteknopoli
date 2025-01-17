"use client";
import { Chip, Link } from "@nextui-org/react";
import React from "react";
import { button as buttonStyles } from "@nextui-org/theme";
import { siteConfig } from "@/config/site";

function LightBg() {
  return (
    <div className="flex-col justify-center items-center mx-auto mt-10 relative text-center">
      <div className="flex justify-center items-center text-cente mb-2">
      
        <Chip variant="flat" color="secondary">
          Hayallerimiz
        </Chip>
      </div>
      <h1 className="text-2xl lg:text-4xl font-semibold z-10 relative">
        Neden Her Şey Hayal Etmekle Başlar? Bilir Misiniz?
      </h1>
      <h1 className="text-lg lg:text-xl font-normal z-10 relative max-w-[900px] text-center flex mx-auto justify-center items-center text-gray-500 mt-2">
      Küçük bir hayal olarak başladığımız bu yolcuklukta ilk olarak sosyal medya dünyasında yer aldık. İlk paylaştığımız içerikten itibaren kendimizi sürekli geliştirdik ama artık teknoloji dünyasında aktif bir geliştirici olarak yer alıyoruz.
      Birkaç kişi ile başlayan maceramızda binlerce kişiye ulaştık ve bu sayı her geçen gün artıyor.
      Bütün macera bir YouTube kanalı ile başladı.
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
          
          YouTube Kanalımıza Hemen Gel!
        </Link>
        <br />
        <br />
      <img alt="meetings" src="Ekran Görüntüsü - 2025-01-17 10-46-00.png" className="rounded-lg" />
    </div> 
  );
}

export default LightBg;

"use client"
import { Chip, Link } from "@nextui-org/react"
import React from "react"
import { button as buttonStyles } from "@nextui-org/theme"
import { siteConfig } from "@/config/site"

function LightBgYouTube() {
  return (
    <div className="flex-col justify-center items-center mx-auto mt-10 relative text-center">
      <div className="flex justify-center items-center text-cente mb-2">
      
        <Chip variant="flat" color="secondary">
          YouTube
        </Chip>
      </div>
      <h1 className="text-2xl lg:text-4xl font-semibold z-10 relative">
        Yüzlerce Video, Binlerce Etkileşim
      </h1>
      <h1 className="text-lg lg:text-xl font-normal z-10 relative max-w-[900px] text-center flex mx-auto justify-center items-center text-gray-500 mt-2">
      İlk adımı attığımız YouTube üzerinden eğlenceli, bilgilendirici, yazılım öğreten, gündem ve birçok konu üzerine videolar yaptık. Canlı yayınlarımız ile etkileşim kurduk. 
      Geliştirmek için emek verdiğimiz YouTube kanalımız ile binlerce kişiye ulaştım ve etkileşim kurduk. Küçük bir işi büyük hayallerimize ulaşmak için gerçekleştirmek bize büyük bir deneyim kattı.
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

export default LightBgYouTube;

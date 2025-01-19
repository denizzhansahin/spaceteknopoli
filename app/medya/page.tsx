"use client"

import { LastButNotLeast } from "@/components/last-but-not-least"
import { title } from "@/components/primitives"

import LightBgYouTube from "./medya-component-youtube"
import LightBgTwitter from "./medya-component-instagram-twitter"




export default function PricingPage() {


  return (
    <div>
      <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10 ">
      
      <div className="inline-block max-w-sm lg:max-w-4xl text-center justify-center text-2xl">
        <h1 className={title({ size: "lg" })}>Sizlerle, &nbsp;</h1>
        <h1 className={title({ color: "violet", size: "lg" })}>
        Her Yerde&nbsp;
        </h1>
        <br />
        
        <h1 className={title({ color: "yellow", size: "lg" })}>Birlikteyiz!</h1>
      
        <h2 className="font-normal text-gray-500 py-2">
          Büyük bir maceranın ilk adımları burada başladı!
        </h2>
      </div>
    
      <LightBgYouTube/>
      <LightBgTwitter/>
      <LastButNotLeast />
    </section>
    </div>
  );
}

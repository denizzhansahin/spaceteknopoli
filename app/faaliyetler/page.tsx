import FeaturesBento from "@/components/feature-bento";
import { title } from "@/components/primitives";
import { LastButNotLeast } from "@/components/last-but-not-least";
import FeaturesBentoFaaliyetler from "./feature-bento-projeler";
import FeaturesBentoFaaliyetlerAlanlar from "./alanlar";

export default function DocsPage() {
  return (
    <div>
      <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10 ">
      
      <div className="inline-block max-w-sm lg:max-w-4xl text-center justify-center text-2xl">
        <h1 className={title({ size: "lg" })}>Teknolojiyi &nbsp;</h1>
        <h1 className={title({ color: "violet", size: "lg" })}>
       Hissettiğimiz&nbsp;
        </h1>
        <br />
        <h1 className={title({ size: "lg" })}>Her An &nbsp;</h1>
        <h1 className={title({ color: "yellow", size: "lg" })}>İçinde Kayboluyoruz!</h1>
      
        <h2 className="font-normal text-gray-500 py-2">
          Kararlı adımlar atarak kendimizi geliştirdiğimiz alanlarda projeler geliştirmeyi seviyoruz! Siz de içinde bulunduğumuzda mutluluk duyduğumuz alanları keşfedin! </h2>
      </div>
      <br/>
      <h1 className={title()}>Üzerine Keyifle Çalıştığımız Alanlar</h1>
      <FeaturesBentoFaaliyetlerAlanlar/>
      <br/>
      <br/>
      <h1 className={title()}>Kullandığımız Teknolojiler</h1>
      <FeaturesBentoFaaliyetler/>
       <LastButNotLeast />
    
    </section>
    </div>
  );
}
import FeaturesBento from "@/components/feature-bento";
import { title } from "@/components/primitives";
import FeaturesBentoProjeler from "./feature-bento-projeler";
import { LastButNotLeast } from "@/components/last-but-not-least";

export default function DocsPage() {
  return (
    <div>
      <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10 ">
      
      <div className="inline-block max-w-sm lg:max-w-4xl text-center justify-center text-2xl">
        <h1 className={title({ size: "lg" })}>Her Hayal, &nbsp;</h1>
        <h1 className={title({ color: "violet", size: "lg" })}>
       Bir Şair Tarafından&nbsp;
        </h1>
        <br />
        <h1 className={title({ size: "lg" })}>Kimsenin Bilmediği Bir An, &nbsp;</h1>
        <h1 className={title({ color: "yellow", size: "lg" })}>Mutlaka Gerçeğe Dönüştürülür!</h1>
      
        <h2 className="font-normal text-gray-500 py-2">
          Kod yazmanın büyülü ama bir uzay kadar sonsuz dünyasında kim bilir ne kadar kaybolduk! Kendi dünyalarımızı kodlamanın verdiği mutluluğu başka galaksilerde bulamadık, bizde kendi galaksimizi ve evrenimizi kodladık!
          Her bir projemizin içinde büyük bir mutluluk var, bu mutluluğumuza ortak olmak için sizi de kendi kod evrenimize davet ediyoruz! Açık kaynak tekolojilere önem vermekteyiz ve bu ilke ile projelerimizi geliştiriciler kendi GitHub adreslerinde herkese açmaktadır.
        </h2>
      </div>
      <FeaturesBentoProjeler/>
       <LastButNotLeast />
    
    </section>
    </div>
  );
}

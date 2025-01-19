import { title } from "@/components/primitives"
import { LastButNotLeast } from "@/components/last-but-not-least"
import { ReactGorsel } from "./gorsel"


export default function DocsPage() {
  return (
    <div>
      <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10 ">

        <div className="inline-block max-w-sm lg:max-w-6xl text-center justify-center text-2xl">
          <h1 className={title({ size: "lg" })}>Bizimle Tanışmak  &nbsp;</h1>
          <h1 className={title({ color: "violet", size: "lg" })}>
            İster Misiniz?&nbsp;
          </h1>
          <br />
          <h1 className={title({ size: "lg" })}>Küçük Bir Hayaldi, &nbsp;</h1>
          <h1 className={title({  color: "violet", size: "lg" })}>Şimdi Hayaller  &nbsp;</h1> <br/>
          <h1 className={title({  color: "yellow", size: "lg" })}>Gerçek Oluyor. &nbsp;</h1>
          <br />
          <br />
          <ReactGorsel />
          <br />
          <br />
          <h2 className="font-normal text-gray-500 py-2">
            27 Ocak 2021'de ilk adımımızı YouTube ile atmıştık. Küçük bir YouTube kanalı kurma düşüncesi ile iki liseli genç tarafından Instagram, YouTube , o zaman ismi Twwitter olan X'de ve TikTok üzerinde maceramız başlamıştı. Hatta ilk videomuz ise takım kurucularımızın eski bir YouTube kanalının ilk videosuydu.
            İlk olarak Kafalara Göre Teknopoli ismi ile başlamıştık. Bu isim özellikle her bir üyemizin "kafamıza göre" ve rahatça proje geliştirmesini belirtmek için "Kafalara Göre", teknoloji ile Latince "poli" kelimesi teknolojinin çok fazla kullanılacağı anlamında "Teknopoli" kelimesini belirledi.  Teknofest gibi büyük yarışmalara katılmak üzere proje geliştirme hayallerimiz vardı ve bunun üzerine çalışıyorduk.
            Devam eden süreçte önemli bir karar aldık, ismimizin anlamı yeterince anlaşılmıyordu ve hedefimiz doğrultusunda yeni bir isim belirledik. Space Teknopoli ismi ise tam olarak burada doğdu. "Space" ile teknolojinin sonsuz bir uzay kadar çok büyük olduğunu belirtmek istedik. "Teknpoli" kelimesi burada çok teknoloji anlamını koruyacaktı. Bundan sonra ise teknolojinin sonsuz uzayında sonsuz bir teknoloji yolculuğu ve teknolojinin her alanda çok yaşandığını belirtmek olarak hedefimizi belirledik.
            Bununla birlikte logomuzdaki roket ise bu yolculukta geliştirmeyi hayal ettiğimiz bir araçtır, bu roket sayesinde istediğimiz yere ulaşmayı hedefliyoruz.
            Sloganımız ise sonsuz teknoloji uzayında sonsuz teknoloji olarak belirledik.
            Renklerimiz ise neden mavi ve mor diye soracak olursanız enerjik olmayı temsil ettiği için seçtik.
            İlerleyen süreçte mobil uygulama geliştirme, yapay zeka teknolojileri geliştirme, WEB teknolojileri geliştirme ve diğer faaliyet alanlarımız ile asıl hedeflerimizi belirledik. Bu alanda birçok proje geliştirdik. Ayrıca katıldığımız birçok hackathon ve ideathon ise bizler için güzel deneyimler oldu.
            Asıl hedefimiz teknolojinin sonsuz evreninde çıktığımız bu yolculukta insanlar için faydalı teknolojiler geliştirmek, açık kaynak yazılımlara katkı sağlamak ve dünyamızın daha iyi yaşanabilir yer olmasını sağlamak istiyoruz.
            Ülkemizin teknoloji alanında gelişmesini ve Milli Teknoloji Hamlesine katkı sağlamak asıl hedeflerimiz arasında yer almaktadır.
            Üzerinden yıllar geçse de ilk günden beri ilk heyecanımızı yaşıyor ve bu günlere gelmenin mutluluğunu yaşıyoruz.
            
          </h2>
        </div>
        <h1 className={title({ color: "violet", size: "lg" })}>Kurucu Ekibimiz İle Tanışın &nbsp;</h1>
        <h2 className={title({ color: "yellow", size: "sm" })}>
          <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/denizzhan-sahin/">Denizhan Şahin - LinkedIn</a>
          <br/>
          <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/resul-ekrem-%C3%B6zt%C3%BCrk-026893271/">Resul Ekrem Öztürk - LinkedIn</a>
        </h2>
        <LastButNotLeast />

      </section>
    </div>
  );
}

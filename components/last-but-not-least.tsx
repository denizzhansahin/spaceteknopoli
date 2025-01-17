/* eslint-disable react/display-name */
"use client";
import {
  title,
  subtitle,
  titleWrapper,
  sectionWrapper,
} from "@/components/primitives";
// import { FeaturesGrid } from "@/components/features-grid";
// import landingContent from "@/content/landing";

export const LastButNotLeast = () => {
  return (
    <section className={sectionWrapper({ class: "mt-16 lg:mt-4" })}>
      <div className="flex flex-col gap-0 md:gap-8">
        <div>
          <div className={titleWrapper({ class: "items-center" })}>
            <div>
              <h1 className={title({ size: "lg" })}>Her Şey &nbsp;</h1>
              <h1 className={title({ color: "yellow", size: "lg" })}>Bir</h1>
            </div>
            <div>
              <h1 className={title({ size: "lg" })}>Satır Koddan&nbsp;</h1>
              <h1 className={title({ size: "lg", color: "pink" })}>Fazlasıdır</h1>
            </div>
          </div>
          <p
            className={subtitle({
              class:
                "mt-4 md:w-full text-center flex justify-center items-center",
            })}
          >
            Space Teknopoli 2021-Günümüz
          </p>
        </div>
        {/* <FeaturesGrid features={landingContent.fullFeatures} /> */}
      </div>
    </section>
  );
};

import Image from "next/image";
import { Truck } from "lucide-react";


/** Wide promo banner from the mockup — static placeholder (no ads API yet). */
export default function MidBanner() {
  return (
    // <section className="mx-auto mt-10 max-w-7xl px-4 lg:px-6">
    //   <div className={`relative overflow-hidden rounded-[2.5rem] ${midBanner.bg}`}>
    //     <div className="flex items-center gap-6 ">
    //       <div className="flex-1 py-8 pl-8 sm:py-10 sm:pl-14">
    //         <p className="text-xs font-medium text-gray-500">{midBanner.dates}</p>
    //         <h2 className="mt-3 text-lg font-medium text-gray-800 sm:text-xl">{midBanner.title}</h2>
    //         <p className="text-2xl font-extrabold text-ink sm:text-3xl">{midBanner.highlight}</p>
    //         <span className="mt-4 inline-flex items-center gap-2 rounded-full bg-neutral-900 px-4 py-2 text-[10px] font-bold tracking-wide text-white">
    //           <Truck className="h-3.5 w-3.5 text-amber-400" />
    //           {midBanner.badge}
    //         </span>
    //         <p className="mt-4 max-w-xs rounded-lg border border-gray-300/70 bg-white/70 px-3 py-2 text-[10px] leading-relaxed text-gray-600">
    //           {midBanner.finePrint}
    //         </p>
    //       </div>
    //       <div className="relative hidden aspect-[3/2] w-72 self-stretch sm:block lg:w-96">
    //         <Image
    //           src={midBanner.img}
    //           alt=""
    //           fill
    //           sizes="(min-width: 1024px) 384px, 288px"
    //           className="object-cover object-center"
    //           unoptimized
    //         />
    //         {/* soft blend into the banner background */}
    //         <span className={`absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-[#efe7dc] to-transparent`} aria-hidden />
    //       </div>
    //     </div>
    //   </div>
    // </section>


<section className="mx-auto mt-10 max-w-7xl px-4 lg:px-6">
  <div className="relative h-[170px] overflow-hidden rounded-[2.5rem] sm:h-[250px] lg:h-[400px]">
    <Image
      src="/banners/midB.png"
      alt="Promotional banner"
      fill
      sizes="100vw"
      className="object-cover object-center"
      unoptimized
    />
  </div>
</section>

  );
}

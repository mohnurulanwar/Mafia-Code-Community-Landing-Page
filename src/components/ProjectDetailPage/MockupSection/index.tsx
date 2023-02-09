import { type FC } from "react";
import Image from "next/image";

const MockupSection: FC = () => {
  return (
    <>
      <section className="section-container centered-layout relative bg-base-500">
        <div className="mockup-img absolute translate-y-[-56px] md:translate-y-[-40px] xl:translate-y-[-96px]">
          <div className="absolute z-10 m-auto h-[234px] w-[282px] translate-y-[-120px] translate-x-[-50%] self-center md:h-[414px] md:w-[498px] md:translate-y-[-56%] xl:h-[532px] xl:w-[640px] xl:translate-y-[-42%]">
            <Image src="/img/mockup1.png" fill={true} alt="Preview Image" />
          </div>
          <div className="absolute z-20 h-[95px] w-[131px] translate-y-[28px] translate-x-[-115%] md:h-[188px] md:w-[259px] md:translate-y-[-2%] xl:h-[282px] xl:w-[387px] xl:translate-y-[12%]">
            <Image src="/img/mockup2.png" fill={true} alt="Preview Image" />
          </div>
          <div className="absolute z-20 h-[115px] w-[174px] translate-x-[-5%] translate-y-[10px] md:h-[221px] md:w-[334px] md:translate-y-[-16%] xl:h-[327px] xl:w-[494px] xl:translate-y-[-6%]">
            <Image src="/img/mockup3.png" fill={true} alt="Preview Image" />
          </div>
          <div className="absolute z-50 h-[31px] w-[320px] translate-x-[-50%] translate-y-[400%] md:h-[56px] md:w-[640px] md:translate-y-[194px] xl:h-[72px] xl:w-[855px] xl:translate-y-[320px]">
            <Image
              src="/img/mockupShadow.png"
              fill={true}
              alt="Preview Image"
            />
          </div>
        </div>
        <div className="absolute z-30 translate-y-32 text-white md:translate-y-60 xl:translate-y-[320px]">
          <button className="CTA-btn">View Live</button>
        </div>
      </section>
    </>
  );
};

export default MockupSection;
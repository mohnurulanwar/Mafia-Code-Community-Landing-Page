import { type FC } from "react";
import Image from "next/image";

type CardItemProps = {
    title: string;
    desc: string;
    srcImg: string;
}

const CardItem: FC<CardItemProps> = ({ title, desc, srcImg }) => {
    return (
        <div className="grid grid-flow-col grid-cols-2 place-content-center items-center">
            <div className="mockup-phone">
                <div className="camera" />
                <div className="display">
                    <div className="artboard artboard-demo phone-1 !w-52 !h-[27rem]">
                        <Image src={srcImg} className="h-full w-full" width={300} height={600} alt="Preview Image" />
                    </div>
                </div>
            </div>
            <div className="text-neutral-50 pr-10">
                <h1 className="text-3xl font-bold mb-2">{title}</h1>
                <p className="text-lg">{desc}</p>
            </div>
        </div>
    )
}

export default CardItem;
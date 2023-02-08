import { type FC } from "react";
import Link from "next/link";
import Carousel from "nuka-carousel/lib/carousel";
import { ArrowCircleLeft, ArrowCircleRight } from "iconsax-react";

type CarouselContentProps = {
    children: React.ReactNode;
}

const CarouselContent: FC<CarouselContentProps> = ({ children }) => {
    return (
        <article className="bg-glass-gray-100 rounded-3xl py-6 px-8">
            <Link href={"#all-pages"} className="flex justify-end link-hover text-primary-500">
                See all pages
            </Link>
            <Carousel
                autoplay
                pauseOnHover
                enableKeyboardControls
                wrapAround
                autoplayInterval={5000}
                className="py-8 px-12"
                renderCenterLeftControls={({ previousSlide }) => (
                    <button onClick={previousSlide} className={"btn btn-ghost hover:btn-ghost"}>
                        <ArrowCircleLeft variant="Bulk" size={35} className="text-primary-500" />
                    </button>
                )}
                renderCenterRightControls={({ nextSlide }) => (
                    <button onClick={nextSlide} className="btn btn-ghost hover:btn-ghost">
                        <ArrowCircleRight variant="Bulk" size={35} className="text-primary-500" />
                    </button>
                )}
            >
                {children}
            </Carousel>
        </article>

    )
}

export default CarouselContent;
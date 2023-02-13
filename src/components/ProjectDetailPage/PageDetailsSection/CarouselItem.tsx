import { type FC } from "react";
import Link from "next/link";
import CarouselContent from "@/components/_children/CarouselContent";

type CarouselItemProps = {
    children: React.ReactNode;
}

const CarouselItem: FC<CarouselItemProps> = ({ children }) => {
    return (
        <article className="bg-glass-gray-100 rounded-3xl py-6 px-8">
            <Link href={"#all-pages"} className="flex justify-end link-hover text-primary-500">
                See all pages
            </Link>
            <CarouselContent>
                {children}
            </CarouselContent>
        </article>

    )
}

export default CarouselItem;
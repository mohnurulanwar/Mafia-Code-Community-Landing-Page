import { type FC } from "react";
import CarouselContent from "./CarouselContent";
import CardItem from "./CardItem";

const PageDetailsSection: FC = () => {
    return (
        <>
            <section className="section-container centered-layout relative bg-base-500">
                <h1 className="section-title">Page Details</h1>
                <CarouselContent>
                    <CardItem
                        title="Home Page"
                        desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod."
                        srcImg="/img/sc-mobile-page.png"
                    />
                    <CardItem
                        title="Transaction Page"
                        desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod."
                        srcImg="/img/sc-mobile-page-2.png"
                    />
                    <CardItem
                        title="Page 1"
                        desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod."
                        srcImg="/img/sc-mobile-page.png"
                    />
                </CarouselContent>
            </section>
        </>
    )
}

export default PageDetailsSection;


import { type FC } from "react";

const PresentationVideoSection: FC = () => {
    return (
        <section className="my-10">
            <h1 className="section-title">Meeting Presentation Video</h1>
            <div className="flex justify-center items-center">
                <iframe
                    className="w-[70vw] h-[32rem] rounded-3xl mx-8 my-4"
                    src="https://www.youtube.com/embed/PbjHxIuHduU"
                    title="YouTube video player"
                    allowTransparency
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                />
            </div>
        </section>
    );
};

export default PresentationVideoSection;
import { type FC } from "react";
import AvatarItem from "./AvatarItem";
import ModalAvatar from "./ModalAvatar";

const ContributorSection: FC = () => {
    return (
        <section className="">
            <h1 className="section-title">Contributor</h1>
            <ul className="flex flex-auto my-10 flex-wrap items-center justify-center gap-8 h-fit max-w-4xl mx-auto">
                {Array(24).fill(0).map((_, index) => (
                    <AvatarItem key={index} src="https://source.unsplash.com/random/200x200/?suit" />
                ))}
            </ul>
            <ModalAvatar />
        </section>
    );
};

export default ContributorSection;
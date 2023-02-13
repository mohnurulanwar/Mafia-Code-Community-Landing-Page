import { type FC } from "react";
import { ArrowRight } from "iconsax-react"
import Link from "next/link";

const Button: FC = () => {
    return (
        <Link href="/about">
            <button className=" flex group text-primary-500 link-hover rounded-full font-medium transition text-base py-1 items-center gap-2">
                More
                <ArrowRight className="font-bold group-hover:animate-bounce" size={15} />
            </button>
        </Link>
    );
}

export default Button;
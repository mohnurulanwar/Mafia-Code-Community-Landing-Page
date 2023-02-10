import { type FC } from "react";
import Image from "next/image";
import { Tooltip } from "flowbite-react";

type AvatarItemProps = {
    src: string;
}

const AvatarItem: FC<AvatarItemProps> = ({ src }) => {
    return (
        <label htmlFor="modal-avatar">
            <li className="hover:cursor-pointer">
                <Tooltip content="Tooltip content">
                    <div className="avatar">
                        <div className="w-16 rounded-full ring ring-purple-600 ring-offset-base-100 ring-offset-4">
                            <Image
                                src={src}
                                alt="Avatar Contributor"
                                width={300}
                                height={300}
                            />
                        </div>
                    </div>
                </Tooltip>
            </li>
        </label>
    )
}

export default AvatarItem;
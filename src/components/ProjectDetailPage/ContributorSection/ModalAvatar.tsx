import { type FC } from "react";
import { AddCircle } from "iconsax-react";
import Image from "next/image";
import Link from "next/link";
import { RiLinkedinBoxFill, RiGithubFill, RiInstagramFill, RiFacebookBoxFill, RiDribbbleFill } from "react-icons/ri";


const ModalAvatar: FC = () => {
    return (
        <>
            <input type="checkbox" id="modal-avatar" className="modal-toggle" />
            <label htmlFor="modal-avatar" className="modal cursor-pointer">
                <label htmlFor="" className="modal-box text-white bg-[#9CA3AF]/30 backdrop-blur backdrop-filter shadow-inner drop-shadow-xl shadow-purple-500">
                    <label htmlFor="modal-avatar" className="rotate-45 cursor-pointer absolute right-2 top-2">
                        <AddCircle size="32" className="text-primary-700 hover:text-primary-100" variant="Bulk" />
                    </label>
                    <div className="flex gap-4 mb-6">
                        <Image
                            className="w-28 rounded-full"
                            src="https://source.unsplash.com/random/200x200/?suit"
                            alt="Avatar Contributor"
                            width={300}
                            height={300}
                        />
                        <div className="flex flex-col justify-evenly">
                            <p className="font-semibold text-2xl">Contributor Name</p>
                            <ul className="flex gap-2">
                                <li>
                                    <Link href="https://www.linkedin.com/" target="_blank" >
                                        <RiLinkedinBoxFill className="text-purple-500 hover:text-purple-400 bg-purple-700/40 rounded-full w-8 h-8 p-1" size="24" />
                                    </Link>
                                </li>
                                <li>
                                    <Link href="https://www.github.com/" target="_blank">
                                        <RiGithubFill size="24" className="text-purple-500 hover:text-purple-400 bg-purple-700/40 rounded-full w-8 h-8 p-1" />
                                    </Link>
                                </li>
                                <li>
                                    <Link href="https://www.instagram.com/" target="_blank">
                                        <RiInstagramFill size="24" className="text-purple-500 hover:text-purple-400 bg-purple-700/40 rounded-full w-8 h-8 p-1" />
                                    </Link>
                                </li>
                                <li>
                                    <Link href="https://www.dribbble.com/" target="_blank">
                                        <RiDribbbleFill size="24" className="text-purple-500 hover:text-purple-400 bg-purple-700/40 rounded-full w-8 h-8 p-1" />
                                    </Link>
                                </li>
                                <li>
                                    <Link href="https://www.facebook.com/" target="_blank">
                                        <RiFacebookBoxFill size="24" className="text-purple-500 hover:text-purple-400 bg-purple-700/40 rounded-full w-8 h-8 p-1" />
                                    </Link>
                                </li>
                            </ul>

                            <p className="flex gap-2">
                                <span className="text-sm font-semibold rounded-full bg-purple-600 text-white px-2">Role</span>
                                <span className="text-sm font-semibold rounded-full bg-purple-600 text-white px-2">Role</span>
                                <span className="text-sm font-semibold rounded-full bg-purple-600 text-white px-2">Role</span>
                            </p>
                        </div>
                    </div>
                    <h4 className="font-semibold text-lg my-2">Contributors Task </h4>
                    <ul className="flex flex-col gap-2 list-disc list-inside leading-4 text-base">
                        <li>Optimizing the user experience</li>
                        <li>Using HTML, JavaScript and CSS to bring concepts to life.</li>
                        <li>Optimizing the user experience</li>
                        <li>Using HTML, JavaScript and CSS to bring concepts to life.</li>
                    </ul>
                    <h4 className="font-semibold text-lg my-2">Fixed Bug</h4>
                    <ul className="flex flex-col gap-2 list-disc list-inside leading-4 text-base">
                        <li>Optimizing the user experience</li>
                        <li>Using HTML, JavaScript and CSS to bring concepts to life.</li>
                        <li>Optimizing the user experience</li>
                        <li>Using HTML, JavaScript and CSS to bring concepts to life.</li>
                    </ul>
                    {/* <p className="">Youve been selected for a chance to get one year of subscription to use Wikipedia for free!</p> */}
                </label>
            </label>
        </>
    )
}

export default ModalAvatar;

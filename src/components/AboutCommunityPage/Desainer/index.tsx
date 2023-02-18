import { type FC } from 'react';
import Image from 'next/image';
import { Instagram } from 'iconsax-react';
import { Link } from 'iconsax-react';

const UIDesainer: FC = () => {
    return (
        
        <section>
            <h3 className="text-white text-3xl font-semibold ml-24 mt-28">UI/UX DESAINER</h3>
            <div className="flex mt-20 items-center justify-center">
                <div className="grid grid-cols-1 gap-32 md:grid-cols-2 lg:grid-cols-3">
                    <div className="group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30">
                        <div className="justify-center">
                            <Image
                                src="/img/ronaldo.png"
                                alt="member"
                                className="rounded-xl h-full w-full object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125"
                                height={250}
                                width={250}
                            />
                        </div>
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
                        <div className="absolute inset-0 flex translate-y-[50%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
                            <h3 className="font-dmserif text-xl font-bold text-white">Ronaldo</h3>
                            <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
                                <Instagram
                                    size="32"
                                    color="#FF60D2"
                                    variant="Bold"
                                />
                                <Link
                                    size="32"
                                    color="#FF60D2"
                                    variant="Bold"
                                />
                            </div>
                        </div>
                    </div>

                    <div className="group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30">
                        <div className="justify-center">
                        <Image
                            src="/img/ronaldo.png"
                            alt="member"
                            className="rounded-xl h-full w-full object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125"
                            height={250}
                            width={250}
                        />
                        </div>
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
                        <div className="absolute inset-0 flex translate-y-[50%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
                            <h3 className="font-dmserif text-xl font-bold text-white">Dodo</h3>
                            <div className='grid grid-cols-1 gap-3 md:grid-cols-2'>
                                <Instagram
                                    size="32"
                                    color="#FF60D2"
                                    variant="Bold"
                                />
                                <Link
                                    size="32"
                                    color="#FF60D2"
                                    variant="Bold"
                                />
                            </div>
                        </div>
                    </div>

                    <div className="group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30">
                        <div className="text-center">
                        <Image
                            src="/img/ronaldo.png"
                            alt="member"
                            className="rounded-xl h-full w-full object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125"
                            height={250}
                            width={250}
                        />
                        </div>
                        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
                        <div className="absolute inset-0 flex translate-y-[50%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
                            <h3 className="font-dmserif text-xl font-bold text-white">CR7</h3>
                            <div className='grid grid-cols-1 gap-3 md:grid-cols-2'>
                                <Instagram
                                    size="32"
                                    color="#FF60D2"
                                    variant="Bold"
                                />
                                <Link
                                    size="32"
                                    color="#FF60D2"
                                    variant="Bold"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            //team line 2

            <div className="grid mt-14 mr-40">
                <div className="flex flex-row-reverse gap-32">
                    <div className="group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30">
                        <div className="justify-center">
                        <Image
                            src="/img/ronaldo.png"
                            alt="member"
                            className="rounded-xl h-full w-full object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125"
                            height={250}
                            width={250}
                        />
                        </div>
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
                        <div className="absolute inset-0 flex translate-y-[50%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
                            <h3 className="font-dmserif text-xl font-bold text-white">Dodo</h3>
                            <div className='grid grid-cols-1 gap-3 md:grid-cols-2'>
                                <Instagram
                                    size="32"
                                    color="#FF60D2"
                                    variant="Bold"
                                />
                                <Link
                                    size="32"
                                    color="#FF60D2"
                                    variant="Bold"
                                />
                            </div>
                        </div>
                    </div>

                    <div className="group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30">
                        <div className="text-center">
                        <Image
                            src="/img/ronaldo.png"
                            alt="member"
                            className="rounded-xl h-full w-full object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125"
                            height={250}
                            width={250}
                        />
                        </div>
                        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
                        <div className="absolute inset-0 flex translate-y-[50%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
                            <h3 className="font-dmserif text-xl font-bold text-white">CR7</h3>
                            <div className='grid grid-cols-1 gap-3 md:grid-cols-2'>
                                <Instagram
                                    size="32"
                                    color="#FF60D2"
                                    variant="Bold"
                                />
                                <Link
                                    size="32"
                                    color="#FF60D2"
                                    variant="Bold"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            //team line 3

            <div className="grid mt-14 mr-40">
                <div className="flex flex-row-reverse gap-32">
                    <div className="group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30">
                        <div className="justify-center">
                        <Image
                            src="/img/ronaldo.png"
                            alt="member"
                            className="rounded-xl h-full w-full object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125"
                            height={250}
                            width={250}
                        />
                        </div>
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
                        <div className="absolute inset-0 flex translate-y-[50%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
                            <h3 className="font-dmserif text-xl font-bold text-white">Dodo</h3>
                            <div className='grid grid-cols-1 gap-3 md:grid-cols-2'>
                                <Instagram
                                    size="32"
                                    color="#FF60D2"
                                    variant="Bold"
                                />
                                <Link
                                    size="32"
                                    color="#FF60D2"
                                    variant="Bold"
                                />
                            </div>
                        </div>
                    </div>

                    <div className="group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30">
                        <div className="text-center">
                        <Image
                            src="/img/ronaldo.png"
                            alt="member"
                            className="rounded-xl h-full w-full object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125"
                            height={250}
                            width={250}
                        />
                        </div>
                        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
                        <div className="absolute inset-0 flex translate-y-[50%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
                            <h3 className="font-dmserif text-xl font-bold text-white">CR7</h3>
                            <div className='grid grid-cols-1 gap-3 md:grid-cols-2'>
                                <Instagram
                                    size="32"
                                    color="#FF60D2"
                                    variant="Bold"
                                />
                                <Link
                                    size="32"
                                    color="#FF60D2"
                                    variant="Bold"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default UIDesainer;
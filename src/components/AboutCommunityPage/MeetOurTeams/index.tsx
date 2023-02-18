import { type FC } from 'react';
import Image from 'next/image';
import { Instagram } from 'iconsax-react';
import { Link } from 'iconsax-react';

const MeetOurTeams: FC = () => {
    return (
        <section>
            <h1 className="section-title items-center w-4/5 mx-auto">Meet Our Teams</h1>
            <div className="mt-20 flex items-center justify-center">
                <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
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
                </div>
            </div>
        </section>
    );
}

export default MeetOurTeams;
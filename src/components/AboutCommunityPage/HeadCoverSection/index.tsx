import { type FC } from 'react';

const AboutCommunityPage: FC = () => {
    return (
        <section className="flex items-center h-screen w-4/5 mx-auto">
            <h1 className="flex flex-col w-1/2 py-5 px-5 font-extrabold text-left text-7xl text-white">We Are <span className='text-primary-500'>Mafia Code</span> Community</h1>
            <p className='w-1/2 py-5 px-5 text-gray-50'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tincidunt lobortis feugiat vivamus at augue eget arcu dictum varius. Tristique senectus et netus et. Vitae congue mauris rhoncus aenean vel elit scelerisque. Ultricies mi eget mauris pharetra et ultrices.</p>
        </section>
    );
}

export default AboutCommunityPage;
import './global.css';
import {JetBrains_Mono} from 'next/font/google';
import type {Metadata} from 'next';
import tw from '@/utilities/tailwindcss'
import React, {ReactNode} from 'react';
import SplashScreen from "@/components/SplashScreen";

const jetBrainsMono = JetBrains_Mono({
    subsets: ['latin'],
    style: ['normal'],
    weight: ['100', '200', '300', '400', '500', '600', '700', '800']
});

const metadata: Metadata = {
    title: 'connecting...',
    description: 'bun-stack',
};

interface Layout {
    children: ReactNode;
}

const Layout = ({children}: Layout) => {
    return (
        <html lang={'en'}>
            <body className={tw(jetBrainsMono.className, 'text-white bg-neutral-950')}>
                <SplashScreen/>
                {children}
            </body>
        </html>
    );
};

export {metadata};
export default Layout
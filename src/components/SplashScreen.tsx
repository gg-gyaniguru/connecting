'use client'

import {useEffect, useState} from 'react';
import {AnimatePresence, motion} from 'framer-motion';
import Image from "next/image";
import Connecting from "@/components/Connecting";

const SplashScreen = () => {

    const [toggle, setToggle] = useState(true);

    useEffect(() => {
        const active = setTimeout(() => {
            setToggle(false);
        }, 900);
        return () => {
            clearTimeout(active);
        }
    }, []);

    return (
        <AnimatePresence>
            {
                toggle &&
                <motion.div
                    className={'w-dvw h-dvh fixed left-0 right-0 z-[99999999999]'}
                    transition={{duration: .15, ease: 'easeInOut'}}
                    initial={{top: 0}}
                    animate={{top: 0}}
                    exit={{top: '-100dvh'}}
                >
                    <div className={'w-full h-full flex flex-col gap-3 items-center justify-center bg-neutral-900'}>
                        <motion.div
                            className={''}
                            transition={{
                                duration: 3,
                                repeat: Infinity,
                                ease: 'linear'
                            }}
                            animate={{rotate: 360}}
                        >
                            <Image src={'/connecting.png'} alt={''} width={60} height={60} priority={true}/>
                        </motion.div>

                        <Connecting toggle={toggle}/>

                    </div>

                </motion.div>
            }
        </AnimatePresence>
    );
};

export default SplashScreen;
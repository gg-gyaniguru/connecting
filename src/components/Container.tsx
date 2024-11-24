import {ReactNode} from 'react';
import tw from '@/utilities/tailwindcss';

interface Container {
    className?: string;
    children: ReactNode
}

const Container = ({className, children}: Container) => {
    return (
        <div className={tw('w-[90%] m-auto', className)}>
            {children}
        </div>
    );
};

export default Container;
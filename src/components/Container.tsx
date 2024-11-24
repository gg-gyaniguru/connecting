import {ReactNode} from 'react';

interface Container {
    className?: string;
    children: ReactNode
}

const Container = ({className, children}: Container) => {
    return (
        <div className={`w-[90%] m-auto ${className}`}>
            {children}
        </div>
    );
};

export default Container;
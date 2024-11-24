import {twMerge as unique} from 'tailwind-merge';
import {clsx as logic} from 'clsx';

const tailwindcss = (...inputs: any[]) => {
    return unique(logic(...inputs));
}

export default tailwindcss;
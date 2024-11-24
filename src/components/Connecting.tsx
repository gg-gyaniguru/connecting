'use client'

import {useEffect, useState} from 'react';
import tw from '@/utilities/tailwindcss';

interface Connecting {
    toggle: boolean;
}

const Connecting = ({toggle}: Connecting) => {

    const [loading, setLoading] = useState('.');

    const action = () => {
        if (toggle) {
            setTimeout(() => {
                if (loading.length === 3) {
                    setLoading('.')
                } else {
                    setLoading(loading => loading + '.');
                }
            }, 300);
        }
    }

    useEffect(() => {
        action()
    }, [toggle, loading]);

    return (
        <div className={tw('w-32')}>
            connecting{loading}
        </div>
    );
};

export default Connecting;
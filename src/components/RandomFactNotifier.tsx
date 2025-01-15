import { useEffect } from 'react';
import { Toaster, toast } from 'sonner';
import facts from '@/Data/Facts';

const getRandomFact = () => facts[Math.floor(Math.random() * facts.length)];

const RandomFactNotifier = () => {
    useEffect(() => {
        const interval = setInterval(() => {
            toast(getRandomFact());
        }, 30000);

        return () => clearInterval(interval);
    }, []);

    return <Toaster position="bottom-left" />;
};

export default RandomFactNotifier;

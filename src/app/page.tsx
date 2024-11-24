import Container from '@/components/Container';
import tw from '@/utilities/tailwindcss';
import Link from "next/link";
import Image from "next/image";
import Connecting from "@/components/Connecting";

interface Links {
    title: string,
    url: string
}

const links: Links[] = [
    {
        title: 'youtube',
        url: 'https://www.youtube.com/@codingwithkishoryadav'
    },
    {
        title: 'instagram',
        url: 'https://www.instagram.com/gg.gyaniguru'
    },
    {
        title: 'facebook',
        url: 'https://www.facebook.com/profile.php?id=61556896329245'
    },
    {
        title: 'x',
        url: 'https://x.com/gg_gyaniguru'
    },
    {
        title: 'linkedin',
        url: 'https://www.linkedin.com/in/gyaniguru'
    },
    {
        title: 'github',
        url: 'https://github.com/gg-gyaniguru'
    },
    {
        title: 'discord',
        url: 'https://discordapp.com/users/gg.gyaniguru'
    },
    {
        title: 'whatsapp',
        url: 'https://wa.me/+918076358992'
    },
    {
        title: 'telegram',
        url: 'https://t.me/gg_gyaniguru'
    }
]

const Page = () => {
    return (
        <Container className={tw('mt-9 flex flex-col items-center justify-center gap-9')}>
            <div className={tw('')}>
                <Connecting toggle={true}/>
            </div>
            <div className={tw('text-center flex items-center justify-center gap-6')}>
                <div>
                    <Image className={tw('')} src={'/image1.png'} alt={''} width={65} height={65} priority={true}/>
                </div>
                <div className={tw('text-left flex flex-col gap-1')}>
                    <div>kishor yadav</div>
                    <div>gg.gyaniguru@gmail.com</div>
                </div>
            </div>
            <div className={tw('w-full flex flex-col items-center justify-center gap-3.5')}>
                {
                    links.map(({title, url}) => (
                        <Link className={tw('w-[20rem] px-3 py-1.5 text-center bg-neutral-800')} href={url}
                              key={url}>{title}</Link>
                    ))
                }
            </div>
        </Container>
    );
};

export default Page;
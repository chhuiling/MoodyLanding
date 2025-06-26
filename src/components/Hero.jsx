import Image from 'next/image'
import '../style/Home.css'

export default function Hero() {
    return (
        <section className='absolute top-30 flex justify-center w-5/6 h-1/2 gap-8'>
            <div className='h-full relative flex items-center justify-center'>
                <Image src={"/images/app_icon.png"} width={180} height={180} alt='icon' className='border-2 bg-[var(--background)] rounded-md border-[var(--background)]'/>
            </div>
            <div className='h-full relative flex flex-col justify-center'>
                <Image src={"/images/logo_name.png"} width={150} height={150} alt='icon'/>
                <h1>Track Your Mood, Understand Yourself</h1>
            </div>
        </section>
    )
}
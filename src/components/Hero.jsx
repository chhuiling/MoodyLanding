import Image from 'next/image'
import '../style/Home.css'

export default function Hero() {
    const handleClick = () => {
        window.scrollTo({
            top: document.documentElement.scrollHeight,
            behavior: 'smooth'
        })
    }
    return (
        <section className='absolute top-30 flex justify-center w-5/6 h-1/2 gap-8'>
            <div className='h-full relative flex items-center justify-center'>
                <Image src={"/images/square_logo_2.png"} width={180} height={180} alt='icon' />
            </div>
            <div className='h-full relative flex flex-col justify-center'>
                <Image src={"/images/logo_name.png"} width={150} height={150} alt='icon'/>
                <h1>Track Your Mood, Understand Yourself</h1>
                <button onClick={handleClick} 
                    className='py-2 border rounded-2xl w-1/2 mt-8 hover:cursor-pointer hover:bg-[rgba(255,255,255,0.2)] transition-all ease-in-out duration-700'>download now</button>
            </div>
        </section>
    )
}
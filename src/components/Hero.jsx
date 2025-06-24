import Image from 'next/image'
import '../style/Home.css'

export default function Hero() {
    return (
        <section className='flex flex-col items-center justify-center w-full h-1/2'>
            <Image src={"/images/logo.png"} width={300} height={50} alt='logo-img' className='absolute top-10' />
            <div className='w-1/2 h-5/6 relative flex'>
                <div className='w-1/2 h-full relative flex'>
                    <Image src={"/images/drawing0.PNG"} fill alt='cover-img'/>
                </div>
                <div className='w-1/2 h-full relative flex bg-white items-center justify-center'>
                    <h1>QR IMAGE HERE</h1>
                </div>
            </div>
        </section>
    )
}
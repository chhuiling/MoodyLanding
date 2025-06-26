import '../style/Home.css'
import CircularGallery from './customCards/CircularGallery'

export default function KeyFeatures() {
    return (
        <section className='flex flex-col items-center justify-center w-full'>
            <h1 className='absolute top-20'>key features</h1>
            <div style={{ height: '480px', width: '100%', position: 'relative', marginBottom: '200px' }}>
                <CircularGallery bend={3} textColor="#ffffff" borderRadius={0.05} />
            </div>
        </section>
    )
}
export default function({ visible }) {
    return (
        <section className="w-full justify-center absolute -bottom-40 flex">
            
            <div className="w-1/3 ml-50 flex flex-col justify-center items-center">
                <p className="pb-10">how to download</p>
                <p className={`w-100 border rounded-2xl text-center py-5 transition-opacity duration-700 ${
                    visible ? 'opacity-100 delay-600' : 'opacity-0 delay-0' }`} >
                scan the qr code </p>
                <div className={`w-px bg-[var(--foreground)] transition-all duration-700 ${
                    visible ? 'opacity-100 delay-900 h-10' : 'opacity-0 delay-0 h-0' }`}/>
                <p className={`w-100 border rounded-2xl text-center py-5 transition-opacity duration-700 ${
                    visible ? 'opacity-100 delay-1200' : 'opacity-0 delay-0' }`} >
                download from google drive </p>
                <div className={`w-px bg-[var(--foreground)] transition-all duration-700 ${
                    visible ? 'opacity-100 delay-1500 h-10' : 'opacity-0 delay-0 h-0' }`}/>
                <p className={`w-100 border rounded-2xl text-center py-5 transition-opacity duration-700 ${
                    visible ? 'opacity-100 delay-1800' : 'opacity-0 delay-0' }`} >
                install Moody Writer </p>
            </div>
            <div className={`w-1/3 transition-all duration-700 ${
                    visible ? 'opacity-100 delay-2000' : 'opacity-0 delay-0' }`}>
                <video autoPlay loop muted className="w-50 ">
                    <source src="/video/tutorial.mp4"/>
                </video>
            </div>
            <div className="w-1/2"></div>
        </section>
    )
}
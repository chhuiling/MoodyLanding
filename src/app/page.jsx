"use client"

import Contact from "@/components/Contact"
import Faq from "@/components/Faq"
import Header from "@/components/Header"
import Hero from "@/components/Hero"
import KeyFeatures from "@/components/KeyFeatures"
import '../style/Home.css'
import { useEffect, useState } from "react"

export default function Home() {
    const [scrollY, setScrollY] = useState(0);
    const [windowHeight, setWindowHeight] = useState(0);

    useEffect(() => {
        // Set initial height
        setWindowHeight(window.innerHeight);
        
        const handleScroll = () => {
            setScrollY(window.scrollY);
        };

        const handleResize = () => {
            setWindowHeight(window.innerHeight);
        };

        window.addEventListener('scroll', handleScroll);
        window.addEventListener('resize', handleResize);
        
        return () => {
            window.removeEventListener('scroll', handleScroll);
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    // Calculate transforms for all sections
    const heroTransform = `translateY(${-scrollY * 0.9}px)`;
    const featuresTransform = `translateY(${-Math.max(0, scrollY - windowHeight) * 0.6}px)`;
    const faqTransform = `translateY(${-Math.max(0, scrollY - windowHeight * 2) * 0.3}px)`;
    const contactTransform = `translateY(${-Math.max(0, scrollY - windowHeight * 3) * 0.2}px)`;
    
    return (
        <section>
            <Header/>
            <div className="scroll-container">
                <div 
                    className="section hero" 
                    style={{ transform: heroTransform }}>
                    <Hero/>
                </div>
                
                <div 
                    className="section keyFeatures" 
                    style={{ transform: featuresTransform }}>
                    <KeyFeatures/>
                </div>
                
                <div 
                    className="section faq" 
                    style={{ transform: faqTransform }}>
                    <Faq/>
                </div>
                
                <div 
                    className="section contact"
                    style={{ transform: contactTransform }}>
                    <Contact/>
                </div>
            </div>
        </section>
    )
}
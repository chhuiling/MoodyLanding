"use client"

import { useState } from 'react';
import '../style/Home.css'
import { FaQuestionCircle } from "react-icons/fa";
import Image from 'next/image';

export default function Faq({ visible }) {
    const [expandedIndex, setExpandedIndex] = useState(null);
    const toggleCard = (index) => {
        setExpandedIndex(expandedIndex === index ? null: index)
    }

    const delayClasses = ['delay-0', 'delay-200', 'delay-400', 'delay-600', 'delay-800'];


    return (
        <section className='flex flex-col items-center justify-center pr-4 pl-4'>
            <h1>FAQ</h1>
            <div className='h-90 w-full flex flex-wrap items-center justify-center gap-2 overflow-y-scroll'>
                
                {cards.map((card, index) => (
                    <div
                        key={index}
                        className={`transition-all duration-700 ease-in-out h-80 bg-[#ede7e0] rounded-2xl flex flex-col relative p-4
                            ${expandedIndex === index ? 'w-full sm:w-1/2' : 'w-65'} 
                            ${visible ? `opacity-100 ${delayClasses[index]}` : 'opacity-0 delay-0'}`}>
                        <button onClick={() => { toggleCard(index); }}  className='flex justify-end hover:cursor-pointer p-3 z-10' >
                            <FaQuestionCircle className='text-[#403D3D] text-2xl z-20' />
                        </button>

                        {expandedIndex === index ? (
                            <div className='flex flex-col justify-center items-center gap-4 p-1'>
                                <h1 className='text-[#403D3D] text-lg'>{card.title}</h1>
                                <div className='flex flex-col w-full h-50 p-1 overflow-y-scroll gap-2'>
                                    {card.content.map((item, qindex) => (
                                        <div key={qindex} className='text-[#403D3D] w-full'>
                                            <h1 className='text-[#c44937]'>{item.question}</h1>
                                            <h1 className='text-sm'>{item.answer}</h1>
                                        </div>
                                    ))}
                                </div>
                                
                            </div>
                        ) : (
                            <div className='flex w-58 h-60 justify-center items-center pt-24'>
                                <h1 className='text-[#403D3D] z-10 bg-white p-1'>{card.title}</h1>
                                <Image src={`/images/${card.img}`} layout='fill' objectFit='cover' alt='bg-img' />
                            </div>
                        )}
                    </div>
                ))}

                
            </div>
        </section>
    )
}

const cards = [
    {title: "General Questions", img: "drawing1.PNG", content: [
        {question: "What is Moody Writer?", answer: "Moody Writer is an emotional diary app designed to help you track your daily moods, activities (like hobbies, food, sleep, energy levels, etc.), and thoughts through notes and pictures. It also provides visual insights to help you understand your emotional patterns."},
        {question: "Is Moody Writer free?", answer: "Yes! Moody Writer is completely free to use."},
        {question: "How do I create an account?", answer: "Simply download the app, tap 'Register', and enter your email and a secure password. You can also sign up with Google or Apple for faster access."}
    ]},
    {title: "Using the App", img: "drawing4.PNG", content: [
        {question: "How do I log my daily mood?", answer: "Open the app, go to today's entry, and select your mood from the options. You can also add activities, notes, and images to enrich your entry."},
        {question: "Can I edit or delete past entries?", answer: "No, this is supposed to be a diary, each post represent one day's mood, so it shouldn't be affected by another day's point of view."},
        {question: "How does the monthly calendar work?", answer: "The calendar gives you a quick overview of your main mood each day, color-coded for easy visualization."},
        {question: "What kind of analysis does the app provide?", answer: "The Analysis Screen shows graphs and trends based on your moods, sleep, energy, and activities over time, helping you spot patterns."}
    ]},
    {title: "Privacy & Security", img: "drawing3.PNG", content: [
        {question: "Is my data private?", answer: "Absolutely. Your entries are stored securely, and only you can access them with your login. We do not share your personal data."},
        {question: "Can I export my entries?", answer: "We currently do not have this feature, but we are working on it."}
    ]},
    {title: "Troubleshooting", img: "drawing5.PNG", content: [
        {question: "I forgot my password. How can I reset it?", answer: "Go to the login screen, tap 'Forgot Password', and follow the instructions sent to your email."},
        {question: "The app is running slow. What can I do?", answer: "Try closing other apps, updating Moody Writer, or restarting your device. If the issue persists, contact support."},
        {question: "Can I use Moody Writer offline?", answer: "No, Moody Writer needs connection to the main database to store your moods and retrieve your posts."}
    ]},
    {title: "Feedback & Support", img: "drawing2.PNG", content: [
        {question: "How can I suggest a new feature?", answer: "We'd love your input! Email us at moodywriter@gmail.com."},
        {question: "Where can I get more help?", answer: "Email us at moodywriter@gmail.com."}
    ]}
];
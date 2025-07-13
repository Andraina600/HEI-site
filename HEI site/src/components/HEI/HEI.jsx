import { useEffect, useState } from "react";

import img1 from '../../assets/images/image1.jpeg'
import img2 from '../../assets/images/image2.jpeg'
import img3 from '../../assets/images/image3.jpeg'
export default function HEI_principale() {
    
    const slides = [
        {
            image: img1,
            title: "Haute Ecole d'Informatique",
            description: "Une infrastructure de qualité et une équipa pédagique qui répond au besoin du marché pour l'employablilité de nos étudiant",
            button1: "Inscrivez-vous ici",
            button2: "Emplois du temps",
            button3: "Programme pédagogique",
        },
        {
            image: img2,
            title: "Haute Ecole d'Informatique",
            description: "Des entreprise parteneaires et une équipe administrative qui travail sans relâche pour la montée en compétences de nos étudiants",
            button1: "Inscrivez-vous ici",
            button2: "Emplois du temps",
            button3: "Programme pédagogique",
        }, {
            image: img3,
            title: "Haute Ecole d'Informatique",
            description: "L'éducation est l'arme la plus puissante pour le monde selon Nelson Mandela. L'éducation dans l'informatique est une arme très puissante pour lutter contre la pauvreté à Madagascar selon HEI. C'est notre mission",
            button1: "Inscrivez-vous ici",
            button2: "Emplois du temps",
            button3: "Programme pédagogique",
        }
    ]
    const [loading, setLoading] = useState(true);
    const [index, setIndex] = useState(0);
    const [direction, setDirection] = useState("left"); 

    const nextSlide = () => {
        setDirection("left");
        setIndex((prev) => (prev + 1) % slides.length);
    };
    //------------------------------------
    const prevSlide = () => {
        setDirection("right");
        setIndex((prev) => (prev - 1 + slides.length) % slides.length);
    }
    //------------------------------------
    useEffect(() => {
        const timer = setTimeout(() => {
          nextSlide();
        }, 5000);
        return () => clearTimeout(timer);
      }, [index]);
    //------------------------------------  
    const Direction = () => {
        if (direction === "left") return `translateX(-${index * 100}%)`;
        if (direction === "right") return `translateX(-${index * 100}%)`;
    };
    //-------------------------------------
    useEffect(() => {
        const timer = setTimeout(() => {
          setLoading(false);
        }, 2000);
        return () => clearTimeout(timer);
      }, []);
    //-------------------------------------
      if (loading) {
        return (
          <div className="flex justify-center items-center h-[400px] bg-gray-100">
            <div className="flex flex-col items-center gap-3">
              <div className="w-12 h-12 border-4 border-gray-300 border-t-blue-500 rounded-full animate-spin" />
            
            </div>
          </div>
        );
      }
    //--------------------------------------------------
    return (
        <div className="relative w-full max-w-full h-150 overflow-hidden shadow-lg">
            <div className="flex transition-transform duration-700 ease-in-out h-full bg-center"
            style={{ width: `${slides.length * 40}%`,transform: Direction(),}}>
                {slides.map((slide , i) => (
                    <div key={i} className="w-full flex-shrink-0 h-full bg-cover bg-center relative"
                    style={{ backgroundImage: `url(${slide.image})` }}>
                        <div className="absolute text-white flex flex-col bg-cover bg-center w-full h-full pr-55 bg-black/60 gap-20 justify-center pb-8 items-center">
                            <h2 className="text-7xl font-garamond font-bold pt-10">{slide.title}</h2>
                            <p className="mb-4 text-2xl font-semibold text-center w-250">{slide.description}</p>
                            <div className="flex flex-wrap gap-30 justify-center mt-4">
                                {slide.button1 && (
                                    <button className="bg-white hover:bg-gray-200 text-blue-950 text-xl font-semibold p-4 rounded cursor-pointer">
                                    {slide.button1}
                                    </button>
                                )}
                                {slide.button2 && (
                                    <button className="bg-yellow-500 hover:bg-yellow-600 text-white text-xl font-semibold p-4 rounded cursor-pointer">
                                    {slide.button2}
                                    </button>
                                )}
                                {slide.button3 && (
                                    <button className="bg-blue-950 hover:opacity-90 text-white text-xl font-semibold p-4 rounded cursor-pointer">
                                    {slide.button3}
                                    </button>
                                )}
                            </div>
                            <p className="text-2xl">Habilitation MESupRES, suivant l'arrêté n°313309/2023</p>
                        </div>
                    </div>  
                ))}           
            </div>
            <button
                onClick={prevSlide}
                className="absolute top-1/2 left-3 font-semibold text-6xl text-white w-15 px-3 pb-2 rounded-full hover:bg-white hover:text-black"
            >
                ‹
            </button>
            <button
                onClick={nextSlide}
                className="absolute top-1/2 right-3 font-semibold text-6xl text-white w-15 px-3 pb-2  rounded-full hover:bg-white hover:text-black"
            >
                ›
            </button>
            <div className="absolute bottom-2 left-1/2 -translate-x-1 flex gap-2">
                {slides.map((_, i) => (
                <span
                    key={i}
                    onClick={() =>{setDirection(i > index ? "left" : "right");setIndex(i);}}
                    className={`w-3 h-3 rounded-full cursor-pointer ${
                    i === index ? "bg-white" : "bg-gray-400"
                    }`}
                />
                ))}
            </div>
            
        </div>
      )
}
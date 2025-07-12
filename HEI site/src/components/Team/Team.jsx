import { useEffect, useRef, useState } from "react";
import photo1 from '../../assets/images/photo (7).jpeg'
import photo2 from '../../assets/images/photo (3).jpeg'
import photo3 from '../../assets/images/photo (4).jpeg'
import photo4 from '../../assets/images/photo (6).jpeg'
import photo5 from '../../assets/images/photo (5).jpeg'
import photo6 from '../../assets/images/photo (1).jpeg'
import photo7 from '../../assets/images/photo (8).jpeg'
import photo8 from '../../assets/images/photo (2).jpeg'

const originalCards = [
  { profile: photo1, title: "Dr Lou Maurica", description: "Docteur-ingénieur en informatique | Fondateur et Directeur pédagogique de HEI" },
  { profile: photo2, title: "Mirado RAFENOMAHEHINTSOA", description: "Data and Business Intelligence Specialist 5+" },
  { profile: photo3, title: "Julien RAJERISON", description: "Lead Developper | Fondateur de l'association Techzara Madagascar" },
  { profile: photo4, title: "Ryan ANDRIAMAHERY", description: "Développeur back end | Cofondateur et Directeur des opération de HEI" },
  { profile: photo5, title: "Jean Aimé Maxa", description: "Responsable technique cybersécurité chez CES France Continentale(Toulouse-France)" },
  { profile: photo6, title: "Parison Ravalomande", description: "Ingénieur en informatque | Ingénieur chez Google (Londre-UK)" },
  { profile: photo7, title: "Yannick Raharijaona", description: "Responsable technique ML chez Rocket Science" },
  { profile: photo8, title: "Dre Tahina Ralitera", description: "Docteure-Ingénieur, CNRS France | Prix L'Oréal UNESCO pour les femmes en SCience (2017)" },
];

const card_visible = 3;

const Enseignent = () => {
  const carouselRef = useRef(null);
  const intervalRef = useRef(null);
  const [index, setIndex] = useState(card_visible);

  const cards = [
    ...originalCards.slice(-card_visible),
    ...originalCards,
    ...originalCards.slice(0, card_visible),
  ];

  const totalCards = cards.length;

  const startAutoScroll = () => {
    clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      setIndex((prev) => prev + 1);
    }, 4000);
  };

  useEffect(() => {
    startAutoScroll();
    return () => clearInterval(intervalRef.current);
  }, []);

  useEffect(() => {
    if (index === totalCards - card_visible) {
      setTimeout(() => {
        if (!carouselRef.current) return;
        carouselRef.current.style.transition = "none";
        setIndex(card_visible);
        requestAnimationFrame(() => {
          requestAnimationFrame(() => {
            if (carouselRef.current) {
              carouselRef.current.style.transition = "transform 700ms ease-in-out";
            }
          });
        });
      }, 700);
    }

    if (index === 0) {
      setTimeout(() => {
        if (!carouselRef.current) return;
        carouselRef.current.style.transition = "none";
        setIndex(originalCards.length);
        requestAnimationFrame(() => {
          requestAnimationFrame(() => {
            if (carouselRef.current) {
              carouselRef.current.style.transition = "transform 700ms ease-in-out";
            }
          });
        });
      }, 700);
    }
  }, [index]);

  const goPrev = () => {
    setIndex((prev) => prev - 1);
    startAutoScroll();
  };

  const goNext = () => {
    setIndex((prev) => prev + 1);
    startAutoScroll();
  };

  const totalVisibleSlides = originalCards.length;
  const getCurrentSlide = () => {
    return (index - card_visible + totalVisibleSlides) % totalVisibleSlides;
  };


  return (
    <div className="relative w-full px-20 py-10 bg-blue-300">
        <div className="mt-4 flex flex-col gap-5 justify-center items-center">
            <h1 className="text-5xl text-white text-center">L'équipe Pédagogique</h1>
            <p className="text-white w-250 text-xl text-center">
                Notre équipe pédagogique se compose d’experts nationaux et internationaux de l’informatique, de la cybersécurité, 
                de l’intelligence artificielle, dont un ingénieur chez Google. Ils sont passionnés par l’informatique et sont engagés vers 
                l’excellence. Nous sommes conscients que cette équipe est la pierre angulaire de l’employabilité de nos étudiants, 
                elle a été soigneusement sélectionnée.
            </p>
        </div>
        <div className="relative w-250 overflow-hidden mx-30">
              <div ref={carouselRef} className="flex"
              style={{
                transition: "transform 700ms ease-in-out",
                transform: `translateX(-${index * (100 / cards.length)}%)`,
                width: `${(cards.length * 100) / card_visible}%`,
              }}>
              
              {cards.map((card, i) => (
                <div
                  key={i}
                  className="py-8 flex-shrink-0"
                  style={{ width: `${100 / cards.length}%` }}>
                  <div className="bg-white rounded-2xl shadow overflow-hidden gap-3 w-70 h-80 flex flex-col items-center">
                    <img
                      src={card.profile}
                      alt={card.title}
                      className="w-40 h-40 object-cover rounded-full mt-4"
                    />
                    <div className="p-4 gap-3 text-center">
                      <h3 className="text-lg text-blue-700 font-bold">{card.title}</h3>
                      <p className="text-sm text-blue-700">{card.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
        </div>
      

      <button
        onClick={goPrev}
        className="absolute top-100 left-40 font-semibold text-6xl text-white cursor-pointer hover:opacity-70"
      >
        ‹
      </button>
      <button
        onClick={goNext}
        className="absolute top-100 right-40 font-semibold text-6xl text-white cursor-pointer hover:opacity-70"
      >
        ›
      </button>
      <div className="flex justify-center mt-4 gap-2 mb-3">
        {originalCards.map((_, i) => (
          <button
            key={i}
            onClick={() => {
              setIndex(i + card_visible);
              startAutoScroll();
            }}
            className={`w-2 h-2 cursor-pointer hover:bg-black rounded-full ${
              getCurrentSlide() === i ? "bg-white" : "bg-white/50"
            }`}
          />
        ))}
      </div>

    </div>
  );
};

export default Enseignent;

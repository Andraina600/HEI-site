import { useEffect, useState } from "react";
import photo1 from '../../assets/images/photo (7).jpeg'
import photo2 from '../../assets/images/photo (3).jpeg'
import photo3 from '../../assets/images/photo (4).jpeg'
import photo4 from '../../assets/images/photo (6).jpeg'
import photo5 from '../../assets/images/photo (5).jpeg'
import photo6 from '../../assets/images/photo (1).jpeg'
import photo7 from '../../assets/images/photo (8).jpeg'
import photo8 from '../../assets/images/photo (2).jpeg'

const cards = [
    { profile: photo1, title: "Card 1", description: "Description 1" },
    { profile: photo2, title: "Card 2", description: "Description 2" },
    { profile: photo3, title: "Card 3", description: "Description 3" },
    { profile: photo4, title: "Card 4", description: "Description 4" },
    { profile: photo5, title: "Card 5", description: "Description 5" },
    { profile: photo6, title: "Card 6", description: "Description 6" },
    { profile: photo7, title: "Card 7", description: "Description 7" },
    { profile: photo8, title: "Card 8", description: "Description 8" },
];

const card_visible = 4

const Enseignent = () => {
    const [index, setIndex] = useState(0);

    const maxIndex = cards.length - card_visible;

    useEffect(() => {
        const interval = setInterval(() => {
        setIndex((prev) => (prev < maxIndex ? prev + 1 : 0));
        }, 4000); // une carte toutes les 4 secondes

        return () => clearInterval(interval);
    }, []);
    //------------------------------
    return (
        <div  className="relative max-w-6xl mx-auto overflow-hidden bg-blue-400">
            <div  className="flex transition-transform duration-700 ease-in-out w-80"
            style={{transform: `translateX(-${(index * 100) / card_visible}%)`,
            width: `${(cards.length * 100) / card_visible}%`,}}>
                {cards.map((card, i) => (
                    <div key={i} className="w-1/8 px-2 py-4 flex-shrink-0">
                        <div className="bg-white rounded-lg shadow overflow-hidden h-full">
                        <img
                            src={card.profile}
                            alt={card.title}
                            className="w-40 rounded-full h-40 object-cover"
                        />
                        <div className="p-4">
                            <h3 className="text-lg font-bold">{card.title}</h3>
                            <p className="text-sm text-gray-600">{card.description}</p>
                        </div>
                        </div>
                    </div>
                ))}
            </div>
            <button
                onClick={() => setIndex(index === 0 ? maxIndex : index - 1)}
                className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-black/50 text-white px-3 py-1 rounded-full hover:bg-black"
            >
                ‹
            </button>
            <button
                onClick={() => setIndex(index < maxIndex ? index + 1 : 0)}
                className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-black/50 text-white px-3 py-1 rounded-full hover:bg-black"
            >
                ›
            </button>
        </div>
    )
}

export default Enseignent
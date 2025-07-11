import { FaGraduationCap } from "react-icons/fa";
import { FaUsers } from "react-icons/fa";
import { FaMedal } from "react-icons/fa6";
import ImageAbout from "../../assets/images/imageAbout.webp";

const aboutData = [
  {
    id: 1,
    title: "+3ans",
    description: "Depuis 3 ans, nous formons ceux qui décodent le futur, aux métiers de l'informatique. Nous sommes un groupe d'experts, de professionnels et des passionnés de l'informatique de Madagascar et du monde entier.",
    icon: <FaGraduationCap/>
  },
  {
    id: 2,
    title: "+250 étudiants",
    description: "Plus de 250 étudiants et plus d'une dizaine d'entreprises ont déjà fait confiance à notre formation habilitée par l'État malgache. Avec eux tous, nous sommes fiers de pouvoir parler de la 'grande famille HEI'.",
    icon: <FaUsers/>
  },
  {
    id: 3,
    title: "Notre mission",
    description: "Notre mission est d'amener des jeunes malgaches sur des domaines porteurs comme l'intelligence artificielle, la cybersécurité ou la programmation afin de favoriser leur employabilité et le développement de Madagascar.",
    icon: <FaMedal/>
  }
];

export default function about () {
    return (
        <>
            <div className="flex flex-row p-15 justify-center items-center gap-10">
                <div className="w-130"><img src={ImageAbout} alt="" /></div>
                <div className="flex flex-col gap-8 p-10 w-1/2">
                    <h1 className="text-[2.7rem] font-semibold">A propos de nous</h1>
                        <div className="flex flex-col gap-10">
                            {aboutData.map(e => (
                                <div className="flex flex-col gap-3">
                                    <div className="flex flex-row items-center gap-5">
                                        <div className="text-[3.7rem] text-yellow-500">{e.icon}</div>
                                        <h3 className="text-[1.5rem] font-semibold">{e.title}</h3>
                                    </div>
                                    <p className="text-[1.1rem] font-[400]">{e.description}</p>
                                </div>
                            ))}
                        </div>
                </div>
            </div>
            
        </>
    )
}
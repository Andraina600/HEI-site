import next from '../../assets/images/next.png'
import PN from '../../assets/images/PN.png'
import yooz from '../../assets/images/yooz.png'
import etech from '../../assets/images/etech.png'
import emit from '../../assets/images/emit.png'
import numer from '../../assets/images/numer.png'
import Bp from '../../assets/images/Bp.png'
import VIF from '../../assets/images/VIF.png'
import KANTE from '../../assets/images/KANTE.png'

import hei from '../../assets/images/HEI.png'

import { FaFacebook } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";
import { FaInstagram } from "react-icons/fa";

const partenaireImage = [
    {image: <img src={next} alt="" />},
    {image: <img src={PN} alt="" />},
    {image: <img src={yooz} alt="" />},
    {image: <img src={etech} alt="" />},
    {image: <img src={emit} alt="" />},
    {image: <img src={numer} alt="" />},
    {image: <img src={Bp} alt="" />},
    {image: <img src={VIF} alt="" />},
    {image: <img src={KANTE} alt="" />}
]

const footerNavigation = [
    "Accueil", "Actualités", "Bourses d'études", "Inscription"
]

const footerIcon = [
    {
        icon : <FaFacebook className="text-2xl"/>
    },
    {
        icon : <CiLinkedin className="text-2xl"/>
    },
    {
        icon : <FaInstagram className="text-2xl"/>
    }
]

export default function partenaireFooter () {
    return (
        <>
            <div>
                <div className='p-15 flex flex-col gap-15'>
                    <div className="flex flex-col justify-center items-center px-15 text-center">
                        <p className="text-[3rem] text-blue-950 font-bold mb-5">Nos partenaires</p>
                        <p className="text-[1.1rem]">L’employabilité de nos étudiants se base sur la pertinence  de notre programme pédagogique et de la composition de notre corps enseignant mais aussi du soutien et la collaboration des entreprises partenaires</p>
                    </div>

                    <div className='flex items-center gap-20 px-10'>
                        {partenaireImage.slice(0,5).map(e => (
                            <div className='w-50'>{e.image}</div>
                        ))}
                    </div>

                    <div className='flex items-center gap-25 px-10'>
                        {partenaireImage.slice(5).map(e => (
                            <div className='w-35'>{e.image}</div>
                        ))}
                    </div>
                </div>

                <footer className='bg-blue-950 pb-10'>
                    <div className='w-26 ml-10'><img src={hei} alt="" /></div>

                    <div className='text-white text-[1.1rem] flex flex-row justify-center gap-30'>
                        <div className='w-60 flex flex-col gap-5 py-5'>
                            <p>Formation habilitée par l’Etat suivant le système LMD</p>
                            <p>Habilitation MESupRes n°31309/2023</p>
                        </div>
                        <div className='w-60 flex flex-col gap-5 py-5'>
                            <p className='text-[1.5rem] font-bold'>Adresse</p>
                            <p>II J 161 R Ambodivoanjo </p>
                            <p>Ivandry Antananarivo</p>
                            <p>101, Madagascar</p>
                        </div>
                        <div className='flex flex-col gap-2 py-5'>
                            <p className='text-[1.5rem] font-bold'>Navigation</p>
                            <ul className='space-y-3'>
                                {footerNavigation.map((e) => (
                                    <li>
                                        <a href="#" className={`hover:text-amber-400 cursor-pointer font-semibold transition ${e === "Accueil" ? "text-amber-400" : "text-white"}`}>{e}</a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className='flex flex-col gap-2 py-5'>
                            <p className='text-[1.5rem] font-bold'>Médias sociaux</p>
                            <div className='flex flex-row gap-5'>
                                {footerIcon.map(e => (
                                    <div className='flex justify-center text-[1.1rem] items-center w-10 h-10 rounded-full bg-yellow-500 cursor-pointer hover:bg-yellow-600 duration-500'>{e.icon}</div>
                                ))}
                            </div>
                        </div>
                    </div>
                </footer>
                <div className='flex flex-row justify-center items-center py-2'>
                    <p className='font-bold text-gray-600'>© HEI Madagascar</p>
                </div>
            </div>
        </>
    )
}
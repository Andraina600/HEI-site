import java from '../../assets/images/java.png'
import python from '../../assets/images/python.png'
import js from '../../assets/images/js.png'
import c from '../../assets/images/c.png'
import TS from '../../assets/images/TS.png'
import docker from '../../assets/images/docker.png'
import next from '../../assets/images/next.png'
import aws from '../../assets/images/aws.png'
import serverless from '../../assets/images/serverless.png'
import react from '../../assets/images/react.png'
import openapi from '../../assets/images/openapi.png'

const technologieImage = [
    {image: <img src={java} alt="" />},
    {image: <img src={python} alt="" />},
    {image: <img src={js} alt="" />},
    {image: <img src={c} alt="" />},
    {image: <img src={TS} alt="" />},
    {image: <img src={docker} alt="" />},
    {image: <img src={next} alt="" />},
    {image: <img src={aws} alt="" />},
    {image: <img src={serverless} alt="" />},
    {image: <img src={react} alt="" />},
    {image: <img src={openapi} alt="" />},
]

export default function technologie () {
    return (
        <>
            <div className='bg-gray-100 p-15 gap-15 flex flex-col '>
                <div className="flex flex-col justify-center items-center px-15 text-center">
                    <p className="text-[3rem] font-garamond text-blue-950 font-bold mb-5">Les technos et langages utilisées</p>
                    <p className="text-[1.1rem] text-blue-950 ">Nos étudiants sont formés à l’utilisation et à la maîtrise des langages de programmation Java et JavaScript. Ces deux langages occupent une place de choix dans le domaine du développement logiciel et du web, offrant une polyvalence et une robustesse appréciées par les développeurs à travers le monde.</p>
                </div>

                <div className='flex justify-center items-center gap-20'>
                    {technologieImage.slice(0,5).map(e => (
                        <div className='w-30'>
                            {e.image}
                        </div>
                    ))}
                </div>

                <div className='flex justify-center items-center gap-20'>
                    {technologieImage.slice(5).map(e => (
                        <div className='w-25'>
                            {e.image}
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}
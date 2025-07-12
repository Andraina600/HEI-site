import ImageProgramme from '../../assets/images/imageProgramme.webp'
import ImageProgramme1 from '../../assets/images/imageProgramme1.jpg'
import ImageProgramme2 from '../../assets/images/imageProgramme2.jpg'
import ImageProgramme3 from '../../assets/images/imageProgramme3.jpg'

const programmeImage = [
    {
        image: <img src={ImageProgramme1} alt="" />
    },
    {
        image: <img src={ImageProgramme2} alt="" />
    },
    {
        image: <img src={ImageProgramme3} alt="" />
    }
]

const programmeData = [
    {
        pourcentage:"25%",
        description:"Apprentissage théoriques en présentiel"
    },
    {
        pourcentage:"25%",
        description:"Apprentissage sur supports numériques"
    },
    {
        pourcentage:"25%",
        description:"Travaux individuels de l'étudiant"
    },
    {
        pourcentage:"25%",
        description:"Apprentissage en entreprise"
    }

]

export default function programme () {
    return (
        <>
            <div className='flex flex-col p-15 gap-10'>
                <div className='flex flex-row justify-center gap-20'>
                    <div className='w-110'><img src={ImageProgramme} alt="" /></div>
                    <div className='flex flex-col w-1/2 jus justify-center'>
                        <p className='font-bold text-[2.6rem] mb-10'>Le programme pédagogique</p>
                        <p className='text-[1.1rem] mb-10'>Suivant le système LMD, jusqu’au Master, notre formation repose sur un programme pédagogique conçu en adéquation avec les attentes du marché. La formation est sanctionnée par un diplôme de Licence et de Master en Informatique reconnu par le MESupRes de Madagascar.</p>
                        <button className='font-semibold w-50 px-4 py-2 rounded border-2 text-blue-950 text-[1.2rem] hover:bg-blue-950 hover:text-white duration-200 cursor-pointer'>Notre Programme</button>
                    </div>
                </div>

                <div className='flex flex-row justify-center gap-5'>
                    {programmeData.map(e =>(
                        <div className='w-70 h-60 bg-amber-100 rounded-3xl p-8 flex flex-col justify-center'>
                            <div className='text-[3rem] text-amber-600 font-bold'>{e.pourcentage}</div>
                            <div className='text-blue-950 font-bold text-[1.7rem]'>{e.description}</div>
                        </div>
                    ))}
                </div>

                <div className='flex flex-row justify-center gap-5'>
                    {programmeImage.map(e => (
                        <div className='w-100 rounded-2xl'>{e.image}</div>
                    ))}
                </div>
            </div>
        </>
    )
}
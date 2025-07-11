import imageDomaine1 from '../../assets/images/imageDomaine1.jpg';
import imageDomaine2 from '../../assets/images/imageDomaine2.jpg';
import imageDomaine3 from '../../assets/images/imageDomaine3.jpg';

const domaineData = [
    {
        image: <img src={imageDomaine1} alt="Domaine 1"/>,
        title : "Cloud et cybersécurité",
        description : "Maîtrisez les engrenages des outils en ligne interconnectés sur les nuages (comme sur AWS). Ou encore, devenez maître de la sécurisation des données en ligne ou des programmes et applications contre les cybermenaces. Chez HEI, vous allez vous former dans le domaine du cloud et de la cybersécurité."
    },
    {
        image :<img src={imageDomaine2} alt="Domaine 2"/>,
        title:"Intelligence artificielle",
        description: "Le monde de la reconnaissance faciale ou la détection d’obstacles par les voitures semi-autonomes vous fascinent ? Ce n’est pas sorcier, cela s’apprend. Apprenez les bases de l’intelligence artificielle lors de vos cours chez HEI."
    },
    {
        image :<img src={imageDomaine3} alt="Domaine 3"/>,
        title:"Ingénierie logicielle",
        description:"Apprenez les principes de la conception ou le développement de programmes et d’applications web et mobile et explorez le monde fascinant des “codes”. A la fin de votre formation, vous serez aptes à proposer des solutions pratiques, créatives et innovantes à des particuliers ou des entreprises pour leurs besoins numériques."
    }
]

export default function domaine () {
    return (
        <>
            <div className='flex flex-col p-15 gap-10 bg-gray-100'>
                <div className='flex flex-col justify-center items-center'>
                    <p className='text-[3rem] font-semibold mb-4'>Domaines</p>
                    <p className='text-[1.1rem]'>Au cours de vos trois ans de formation, naviguez entre les domaines les plus porteurs du numérique du présent et de l’avenir :</p>
                </div>
                <div className='flex flex-row justify-center gap-8'>
                    {domaineData.map(e => (
                        <div className='flex flex-col w-1/3 items-center gap-4 bg-white rounded-2xl p-5 hover:shadow-2xl transition-shadow duration-300'>
                            <div>{e.image}</div>
                            <div className='text-yellow-500 text-[1.3rem] font-semibold'>{e.title}</div>
                            <div className='text-[1.1rem] '>{e.description}</div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}
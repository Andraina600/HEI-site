import logo_HEI from '../../assets/images/472416466_9391920067493318_9000330513189571888_n-removebg-preview.png'
const p_button = "p-4"

export default function navbar() {
    return (
        <>
            <div className='flex bg-blue-950 gap-77 h-27 items-center'>
                <div className='pl-15'>
                    <img className='w-26' src={logo_HEI} alt="logo" />
                </div>
                <div className='flex items-center gap-6 pl-10 border-red-500'>
                    <ul className='flex gap-7 text-white text-[1.15rem] font-[650]'>
                        <li className='text-yellow-500 cursor-pointer '><a href=""></a>ACCUEIL</li>
                        <li className='hover:text-yellow-500 cursor-pointer'><a href=""></a>ACTUALITES</li>
                        <li className='hover:text-yellow-500 cursor-pointer'><a href=""></a>BOURSE D'ETUDES</li>
                        <li className='hover:text-yellow-500 cursor-pointer'><a href=""></a>INSCRIPTION</li>
                    </ul>
                    <button className= 'text-white bg-yellow-500 cursor-pointer rounded px-4 py-2 font-bold hover:text-black'>INTRANET</button>
                </div>
            </div>
        </>
    )
}
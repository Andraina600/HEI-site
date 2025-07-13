const admissionData = [
    {
        numero: "01",
        title: "Dépôt de dossiers : ",
        description: "pour les bacheliers de toutes séries sans limite d’âge",
        bgColor : "bg-orange-100",
        row : "=>"
    },
    {
        numero: "02",
        title:"Test de niveau : ",
        description:"composé d’une épreuve de français niveau B2 et d’une épreuve de mathématiques niveau Terminale D",
        bgColor : "bg-orange-200",
        row : "=>"
    },
    {
        numero: "03",
        title:"Inscription définitive",
        description:"(si test réussi)",
        bgColor : "bg-orange-300",
        row: ""
    }
]

export default function admission () {
    return (
        <>
            <div className="flex flex-col p-15 bg-blue-300 gap-10">
                <div className="flex flex-col items-center">
                    <p className="text-white text-[3rem] font-garamond font-semibold mb-4">Admission</p>
                    <p className="text-white text-[1.1rem] mb-3">Ouverte aux bacheliers de toutes les séries, l’admission chez HEI se fait par test de niveau :</p>
                    <p className="text-white text-[1.1rem]">une épreuve de français niveau B2 et d’une épreuve de mathématiques niveau Terminale D. </p>
                </div>
                <div className="flex flex-row">
                    {admissionData.map(e => (
                        <div className={`${e.bgColor} ${e.textColor}bg-orange-200 p-5 w-1/3 flex flex-col h-68`}>
                            <div className="text-[3rem] font-bold text-white">{e.numero}</div>
                            <div className="flex text-blue-950 flex-row gap-5">   
                                <div>
                                    <div className="font-bold text-[1.1rem]">{e.title}</div>
                                    <div className="text-[1.1rem]">{e.description}</div>
                                </div>
                                <div className="font-bold text-white text-[2.5rem]">{e.row}</div>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="flex flex-row justify-center gap-10">
                    <button className="border-2 text-white hover:border-blue-950 rounded px-5 py-2 text-[1.3rem] font-bold hover:bg-blue-950 cursor-pointer">Inscrivez-vous ici</button>
                    <button className="bg-blue-950 rounded px-5 py-2 text-[1.3rem] text-white font-bold hover:bg-white hover:text-black transition-colors duration-300 cursor-pointer">Résultat concours</button>
                </div>
            </div>
        </>
    )
}
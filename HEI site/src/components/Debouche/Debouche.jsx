import imageDebouche from "../../assets/images/imageDebouche.webp";

export default function debouche() {
    return (
        <>
            <div className="flex flex-row p-15 items-center gap-10">
                <div className="w-1/2">
                    <p className="text-[3rem] font-semibold mb-6">Quelques débouchés</p>
                    <p className="text-[1.1rem] mb-6">Formez-vous à une panoplie de métiers du numérique avec nous et venez acquérir les fondements de la programmation (qui vous servira pour les différents métiers) ! Ce sont des métiers porteurs, des métiers du présent, des métiers du futur…</p>
                    <p className="text-[1.1rem]">Développeur back end, développeur front end, développeurs mobile, chefs de projet, exploitants cloud, analystes cybersécurité, pentesters, auditeur technique SSI, auditeur organisationnel SSI, administrateur système et réseau, développeur de sécurité…</p>
                </div>
                <div className="w-110">
                    <img src={imageDebouche} alt="" />
                </div>
            </div>
        </>
    )
}
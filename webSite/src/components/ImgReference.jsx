export function ImgReference({imagemUrl, texto}) {
    return (
        <div className="flex flex-col justify-around items-center h-[30vh] w-[35vh] rounded-[50%] p-2 m-2">
        <div className="bg-cover bg-center h-[22vh] w-[22vh] rounded-[50%] overflow-hidden">
           <img src={imagemUrl} className="w-full h-full object-cover"/>
        </div>
        <h2 className="text-[#3A577B] text-[17.5px]  text-center mt-[3vh]">{texto}</h2>
        </div>
    )
}
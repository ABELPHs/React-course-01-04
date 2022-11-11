import { useFetchGifts } from "../hooks/useFetchGifts";
import { GifItem } from "./";


export const GifGrid = ({category}) => {

    const {images, isLoading} = useFetchGifts(category);
    
    return (
        <>
            <h3>{category}</h3>
            {
                isLoading && <h1>Cargando...</h1>
            }
            <div className="card-grid">
                {
                    images.map(e=>
                        <GifItem 
                            key  =  {e.id}
                            { ...e }
                        />
                    )
                }
            </div>
        </>
    )
}

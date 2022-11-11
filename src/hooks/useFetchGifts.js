import { useEffect, useState } from "react";
import { getGift } from "../helpers/getGifs";

export const useFetchGifts = (category) => {
  
    const [categoryGifs, setCategoryGifs] = useState([]);
    const [loading, setLoading] = useState(true);

    const getImages = async () => {
        let images = await getGift(category);
        setCategoryGifs(images);
        setLoading(false);
    }

    useEffect(() => {
        getImages(category);
    }, []);

    return {
        images: categoryGifs,
        isLoading: loading
    }
}


import React, { useState } from 'react'
import { AddCategories, GifGrid } from './components'

export const GifExpertApp = () => {

    const [categories, setCategories] = useState([
        'One punch Man',
        'Dragon ball'
    ])

    const onNewValue = (newValue) => {
        if(categories.includes(newValue))return;
        setCategories((e)=>[newValue, ...e]);
    }

    const currentValue = (newValue) => {
        setCategories((e)=>[newValue, ...e]);
    }
    
    return (
    <>
        <h1>GifExpertApp</h1>
        <AddCategories 
            /* setCategories = {setCategories} */
            onNewCategory = {onNewValue}
        />
        <ol>
            {
                categories.map((category) => 
                    <GifGrid 
                        category={category}
                        key={category}
                    />)
            }
        </ol>
    </>
    );
}

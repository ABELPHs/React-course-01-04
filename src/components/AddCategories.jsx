import { useState } from "react"

export const AddCategories = ({onNewCategory}) => {
  
    const [inputValue, setInputValue] = useState('')
    
    const onInputChange = (event) => {
        setInputValue(event.target.value)
    }

    const onSubmit = (event) => {
        event.preventDefault();
        if(inputValue.trim() < 1)return;
        setInputValue('');
        onNewCategory(inputValue);
    }

    

    return (
    <>
        <form 
            onSubmit={onSubmit}

        >
            <input 
                type="text" 
                placeholder="Buscar gifs"
                value={inputValue}
                onChange = {onInputChange}
            />
        </form>
    </>
  )
}

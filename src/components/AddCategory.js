import React, { useState } from 'react'
import PropTypes from 'prop-types'

export const AddCategory = ({setCategories}) => {

    
    const [inputValue, setInputValue] = useState('');

    // Cambiamos con lo que se está escribiendo:
    const handleInputChange = (e)=>{           
        setInputValue(e.target.value);
    }
    // Para cuando damos enter y vamos agregando elementos a nuestra lista
    const handleSubmit = (e)=>{
        e.preventDefault();

        if(inputValue.trim().length>2){
            setCategories(cats=>[inputValue,...cats]);
            setInputValue('');
        }

    }

    return (
        
        <form onSubmit={handleSubmit}>
            <input 
                type="text"
                value={inputValue}
                // Aqui esta la magia:
                onChange={handleInputChange}  
            />
        </form>    
        
    )
}

AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired,
}

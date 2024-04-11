import { useState } from "react"
import { AddCategory } from "./components/AddCategory"

export const GifApp = () => {

    const [categories, setCategories] = useState( [ 'Fast & Furious' , 'Disney'] )

    // console.log(categories)

    const onAddCategory = () => {

        setCategories( [ 'Rainbow Six', ...categories ] )
        
        // setCategories( cat => [ ...cat, 'Rainbow Six' ] )

    }

  return (
    <>
    {/* Título */}
    <h1>GifApp</h1>

    {/* Input */}
    <AddCategory setCategories={ setCategories }/>


    {/* Listado de Gifs */}
    
    <ol>
        {
            categories.map( category => {
                return <li key = { category }> {category} </li>
            } )
        }
    </ol>

        {/* Gif Item */}

    </>
  )
}

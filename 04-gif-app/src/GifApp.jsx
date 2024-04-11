import { useState } from "react"
import { AddCategory } from "./components/AddCategory"
import { GifGrid } from "./components/GifGrid"

export const GifApp = () => {

    const [categories, setCategories] = useState( [ 'Fast & Furious' ] )

    const onAddCategory = ( newCategory ) => {

        if ( categories.includes( newCategory ) ) return
    
        setCategories( [ newCategory, ...categories ] )
    }

  return (
  <>
    <h1>GifApp</h1>

    <AddCategory 
        onNewValue = { (event) =>  onAddCategory(event) }
    />
    
    {
        categories.map( ( category ) => ( 
            <GifGrid 
                key={category} 
                category={category} 
            /> 
        ))
    }

    </>
  )
}

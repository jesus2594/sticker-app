import { useState } from "react"
import { AddCategory, GrifGrid } from "./components/";

export const StickerApp = () => {

    const [categories, setCategories] = useState([''])

    const onAddCategory = ( newCategory ) => {
        
        if ( categories.includes(newCategory) ) return;

        setCategories( [ newCategory, ...categories  ])
       
    }

  return (
    <>
          <h1>StickerApp</h1>
          
          <AddCategory
              onNewCategory={onAddCategory}   
          />

              {
                categories.map((category => 
                   <GrifGrid key={ category } category={ category } />
                ))
              }
      </>
  )
}

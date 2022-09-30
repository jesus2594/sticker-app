
import { useFetchStickers } from "../hooks/useFetchStickers";
import { StickerItem } from "./StickerItem"

export const GrifGrid = ({ category }) => {

    const { images, isLoading } = useFetchStickers(category);  

  return (
      <>
          <h3>{category}</h3>
          {
              isLoading && ( <h2>Cargando...</h2> )
          }

          <div className="card-grid">
              {
                  images.map( (image) => (
                      <StickerItem
                          key={ image.id}
                          { ...image }
                          
                      />
                  ))
              }   
          </div> 
      </>
  )
}

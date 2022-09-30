

 export const getStickers = async ( category ) => {
       
    const url = `https://api.giphy.com/v1/stickers/search?api_key=tzAWoDzTlIARyKYZSGYaCV6XzkP0ZhUT&q=${category}&limit=10`;
     const resp = await fetch(url);
     const { data } = await resp.json();
     console.log(data)
    
    const stickers = data.map(img => ({
        id: img.id,
        title: img.title,
        url: img.images.downsized.url
    }));

    // console.log(stickers);
     return stickers;
}
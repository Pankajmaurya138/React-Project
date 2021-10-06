import React from "react";
import ReactDom from "react-dom";

const ImageList = (props) =>{
console.log("🚀 ~ file: ImageList.js ~ line 5 ~ ImageList ~ props", props.images)
    const imageList = props.images.map(result=>{
        return <img key={result.id} src={result.webformatURL}/>
    })
    return(
        <div>{imageList}</div>
    )
}

export default ImageList;
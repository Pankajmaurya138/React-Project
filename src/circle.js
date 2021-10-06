import React from "react";

const HemiDisplay=({latitude,lognitude}) =>{
    const hemisphere = latitude>0 ? "Northen Hemisphere ":"Southern Hemisphere"
    return (
        <div>
            Hey You are in :{hemisphere}
        </div>
    )
}


export default HemiDisplay;
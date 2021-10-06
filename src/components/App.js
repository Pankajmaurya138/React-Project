import React from "react";
import SearchInput from "./SearchInput";
import ImageList from "./ImageList";
import axios from "axios";

class App extends React.Component {
    state = {images:[]};
    async onSearchSubmit(search){
        const result = await axios.get(`https://pixabay.com/api/?key=23717984-3db2e5ca32e69599cd02a6d7e&q=${search}&image_type=photo&pretty=true`);
        this.setState({images:result.data.hits});
    }
    render(){
        return (
            <div className="ui container" style={{marginTop:"30px"}}>
                <SearchInput onSearchSubmit={this.onSearchSubmit.bind(this)}/>
                <ImageList images={this.state.images}/>
                <div>we have {this.state.images.length} images found</div>
            </div>
        )
    }
}

export default App;
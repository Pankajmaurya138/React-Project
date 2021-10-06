import React from "react";
import ReactDom from "react-dom";

class SearchInput extends React.Component{

    state = {search:''}
    onFromSubmit(event){
        event.preventDefault();
        this.props.onSearchSubmit(this.state.search);
    }

    render(){
        return (
            <div className="ui segment">
                <form onSubmit={this.onFromSubmit.bind(this)} className="ui form" action="">
                    <div className="field">
                        <div className="ui massive icon input">
                        <input
                            type="text"
                            placeholder="Seach Text"
                            onChange={(event)=>this.setState({search:event.target.value})}
                            value={this.state.search}
                        />
                        <i className="search icon"></i>
                        </div>
                    </div>
                </form>
            </div>
        )
    }
}

export default SearchInput;
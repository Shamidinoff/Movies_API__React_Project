import { Component } from "react";
import React from "react";

class Search extends Component {
    state = {
        search: '',
    }

    handleKey = (event) => {
        if (event.key === 'Enter') {
            this.props.searchMovies(this.state.search);
        }
    }

    render() {
        return <div className="row">


            <div className="input-field ">
                <input
                    className="validate"
                    placeholder="search"
                    type="search"
                    value={this.state.search}
                    onChange={(e) => this.setState({ search: e.target.value })}
                    onKeyDown={this.handleKey}
                />


            </div>

        </div>
    }

}

export { Search }
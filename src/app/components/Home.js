import React from "react";

import '../../style/home.css';
import {Summary} from "./Summary";

export class Home extends React.Component {

    constructor(urlob) {
        super(urlob);
        this.state = {
            url : '',
        };
        this.child = React.createRef();

        this.updateUrl = this.updateUrl.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    updateUrl(event){
        this.setState({url: this.refs.purl.value});
    }

    handleSubmit(event) {
        this.child.current.getList();
        event.preventDefault();
    }

    render () {
        return (
            <div className="App">
                <header className="App-header">
                    <p>
                        URL Text Summarizer
                    </p>
                    <form onSubmit={this.handleSubmit}>
                        <input type="text" ref="purl" onChange={this.updateUrl} placeholder="Enter Url.."/>
                        <button type="submit">Submit</button>
                    </form>
                    <div>
                        <Summary ref={this.child} url={this.state.url}/>
                    </div>
                </header>
            </div>
        );
    }
}

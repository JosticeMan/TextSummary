import React from "react";

export class Summary extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            sentences: []
        }
    }

    getList() {
        var state = {foo : this.props.url};
        fetch("/process", {
            method: "GET",
            headers: {"url": state["foo"]}
        })
            .then(response => {
                return response.json();
            })
            .then(data => {
                if(data.sentences == null) {
                    this.setState({sentences: []});
                    return;
                }
                let sentences = data.sentences.map((sentence, key) => {
                    return (
                      <p key={key} id={key}>
                          {sentence}
                      </p>
                    );
                });
                this.setState({sentences: sentences});
            })
            .catch(err => {
                console.log(err);
            })
    }

    render () {
        return (
            <div>
                {this.state.sentences}
            </div>
        );
    }
}
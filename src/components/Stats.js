import React from 'react';

class Stats extends React.Component{
    constructor(props){
        super();

        this.state = {
            likes: props.hearts,
            className: "fa fa-heart",
            counter: 0
        };
    }

    incrementLikes = (event) => {
        event.preventDefault();
        this.setState({
            counter: this.state.counter += 1 
        })

        if (this.state.counter === 1){
            this.setState({        
                likes: parseInt(this.state.likes) + 1,
                className:"fa fa-heart liked"
            })
        }

        if (this.state.counter === 2){
            this.setState({        
                likes: parseInt(this.state.likes) - 1,
                className:"fa fa-heart",
                counter: 0
            })
        }
    }

    render(){
        return(
            <ul className='shots__list'>
                <li><i className='fa fa-eye' />{this.props.views}</li>
                <li><i className='fa fa-comment' />{this.props.comments}</li>
                <li><a href = "#" onClick = {this.incrementLikes}><i className = {this.state.className}/>{this.state.likes}</a></li>
            </ul>
        );
    }
}

export default Stats;
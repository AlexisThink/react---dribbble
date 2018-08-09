import React from 'react';
var counter = 0;

class Stats extends React.Component{
    constructor(props){
        super();
        this.state = {
            likes: props.hearts,
            className: "fa fa-heart"
        };
    }

    incrementLikes = (event) => {
        event.preventDefault();
        counter += 1

        if (counter === 1){
            this.setState({        
                likes: parseInt(this.state.likes) + 1,
                className:"fa fa-heart liked"
            })

        } else{
            this.setState({        
                likes: parseInt(this.state.likes) - 1,
                className:"fa fa-heart"
            })
            counter = 0;
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
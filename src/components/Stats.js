import React from 'react';

class Stats extends React.Component{
    render(){
        return(
            <ul className='shots__list'>
            <li><i className='fa fa-eye' />{this.props.views}</li>
            <li><i className='fa fa-comment' />{this.props.comments}</li>
            <li><i className='fa fa-heart' />{this.props.hearts}</li>
            </ul>
        );
    }
}

export default Stats;
import React from 'react';

class Cover extends React.Component{
    render(){
        return(
            <figure>
                <img src={this.props.image} />
            </figure>
        );
    }
}

export default Cover;
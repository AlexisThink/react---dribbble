import React from 'react';
import Cover from './Cover';
import Stats from './Stats';

class Shot extends React.Component{
    render(){
        return(
            <div className='container'>
                <article className='shot'>
                    <Cover image={this.props.image} />
                <div className='shots__stats'>
                    <Stats views={this.props.views} comments={this.props.comments} hearts={this.props.hearts} />
                </div>
                </article>
            </div>
        );
    }
}

export default Shot;
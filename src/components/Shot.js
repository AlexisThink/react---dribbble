import React from 'react';
import Cover from './Cover';
import Stats from './Stats';

class Shot extends React.Component{
    render(){
        return(
            <div className='container'>
                <article className='shot'>
                    <Cover />
                <div className='shots__stats'>
                    <Stats />
                </div>
                </article>
            </div>
        );
    }
}

export default Shot;
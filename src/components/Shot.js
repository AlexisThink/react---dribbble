import React from 'react';
import Views from './Views';
import Comments from './Comments';
import Likes from './Likes';

class Shot extends React.Component{
    render(){
        return(
            <div>
                <Views />
                <Comments />
                <Likes />
            </div>
        );
    }
}

export default Shot;
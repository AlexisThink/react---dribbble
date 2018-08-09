import React from 'react';
import Shot from './Shot';
import infoShots from '../data/shots';

class Shots extends React.Component{
    render(){
        return(
            <div className="container">
            {
              infoShots.map(function(currentShot){
                return <Shot 
                    key = {currentShot.key}
                    image = {currentShot.img}
                    views = {currentShot.stats[0]}
                    comments = {currentShot.stats[1]}
                    hearts = {currentShot.stats[2]}
                />
              })  
            }
            </div>
        );
    }
}

export default Shots;
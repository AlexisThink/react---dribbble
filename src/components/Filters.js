import React from 'react';

class Filters extends React.Component{
    render(){
        return(
            <div className = "filters">
                <select>
                    <option>Popular</option>
                    <option>Recent</option>
                    <option>Debut</option>
                </select>


                    {/* <button>Popular</button>
                    <button>Recent</button>
                    <button>Debut</button> */}
               
            </div>
        );
    }
}

export default Filters;
import React from 'react';

class Filters extends React.Component{
    constructor(props){
        super();
        this.state = {
            pop: 'Popular',
            rec: 'Recent',
            deb: 'Debut'
        }
    }

    textOnEnglish = (event) => {
        this.setState({
            pop: 'Popular',
            rec: 'Recent',
            deb: 'Debut'
        })
        alert('Now this page is on English')
    }

    textOnSpanish = (event) => {
        this.setState({
            pop: 'Populares',
            rec: 'Recientes',
            deb: 'Debutantes'
        })
        alert('Ahora esta pagina esta en español')
    }
    render(){
        return(
            <div className = "filters">
                    <button>{this.state.pop}</button>
                    <button>{this.state.rec}</button>
                    <button>{this.state.deb}</button>

                    <div>
                        <button onClick = {this.textOnEnglish} >EN</button>
                        <button onClick = {this.textOnSpanish} >ES</button>
                    </div>
               
            </div>
        );
    }
}

export default Filters;
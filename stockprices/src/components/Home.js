import React from 'react';
import Companies from '../api/companies'
class Home extends React.Component{

    componentDidMount(){
        Companies.getAllSymbols().then(console.log); 
    }

    render(){
        return(
            <div>

            </div> 

        )
    }
}


export default Home
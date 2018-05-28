import React from 'react'; 
import {Segment, Header} from 'semantic-ui-react';

class MostActive extends React.Component{

       renderChange = (extendedChange, extendedChangePercent) => {
        let change = ''; 
        switch(Math.sign(extendedChange)){
            case 1:
                return <div style={{color:'green'}}>+{extendedChange} ({extendedChangePercent.toFixed(5)}%) </div>
                break;
            case -1: 
                return <div style={{color:'red'}}>-{extendedChange} ({extendedChangePercent.toFixed(5)}%) </div>
                break;
            default:
                console.log("default")
        }

    }
    renderMostActive = () => {
        let mostActive = this.props.mostActive.filter(company =>{
            return company.extendedChange !== 0 && company.extendedChangePercent !== 0
        }).map(mostActive => {
            return(
                <Segment textAlign="right">
                    {mostActive.symbol}
                </Segment>
            ) 
        })
        return mostActive
    }


    render(){
        console.log(this.props)
        return(
        <div>
            <Segment.Group>
                {this.renderMostActive()}
            </Segment.Group>
        </div>
        )
    }
}

export default MostActive; 
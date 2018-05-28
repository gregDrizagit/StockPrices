import React from 'react'; 
import {Segment, Header} from 'semantic-ui-react';

class GainersAndLosers extends React.Component{
    renderGainers = () => {
        let gainers = this.props.gainers.map(gainer => {
            return(
                <Segment>
                    <Header as='h4' floated='right'>
                        Float Right
                    </Header>
                    <Header as='h4' floated='left'>
                    Float Left
                    </Header>
                </Segment>
            ) 
        })
    }

    renderLosers = () => {

    }

    render(){
        console.log(this.props)
        return(
        <div>
            <Segment.Group>
                {/* {this.renderGainers()} */}
            </Segment.Group>
            <Segment.Group>
                {/* {this.renderLosers()} */}
            </Segment.Group>
        </div>
        )
    }
}

export default GainersAndLosers; 
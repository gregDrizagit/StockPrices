import React from 'react'
import {Icon, Segment, Header} from 'semantic-ui-react'

class Nav extends React.Component{

    render(){
        return(
            <Segment basic raised clearing>
                <Header as='h2' floated='left'>
                    <Icon size='large' onClick={() => this.props.history.push()} name="chevron left" />
                </Header>
                <Header  as='h2' floated='right'>
                    <Icon size='large' onClick={() => this.props.history.push('/chart')} name='chevron right' />
                </Header>
            </Segment>
        )
    }

}

export default Nav
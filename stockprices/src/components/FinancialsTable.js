import React from 'react';
import FinancialsTableColumn from './FinancialsTableColumn';
import {Table, Header} from 'semantic-ui-react';

const FinancialsTable = (props) => {
   
    console.log("f tables",props)
    
    return(
        <Table basic='very' celled collapsing>
            <Table.Header>
                <Table.Row>
                <Table.HeaderCell>
                        <Header as='h2'>
                            <Header.Content>
                                {props.title}
                            </Header.Content>
                        </Header>
                 </Table.HeaderCell>
                 <Table.HeaderCell>
                        <Header as='h3'>
                            <Header.Content>
                                {props.data.financials[0].reportDate}
                            </Header.Content>
                        </Header>
                 </Table.HeaderCell>
                 <Table.HeaderCell>
                        <Header as='h3'>
                            <Header.Content>
                                {props.data.financials[1].reportDate}
                            </Header.Content>
                        </Header>
                 </Table.HeaderCell>
                 <Table.HeaderCell>
                        <Header as='h3'>
                            <Header.Content>
                                {props.data.financials[2].reportDate}
                            </Header.Content>
                        </Header>
                 </Table.HeaderCell>
                 <Table.HeaderCell>
                        <Header as='h3'>
                            <Header.Content>
                                {props.data.financials[3].reportDate}
                            </Header.Content>
                        </Header>
                 </Table.HeaderCell>
                </Table.Row>
            </Table.Header>

            <Table.Body>
                <FinancialsTableColumn table={props.title} column={props.data.financials[0]}/>
                <FinancialsTableColumn table={props.title} column={props.data.financials[1]}/>
                <FinancialsTableColumn table={props.title} column={props.data.financials[2]}/>
                <FinancialsTableColumn table={props.title} column={props.data.financials[3]}/>

            </Table.Body>
        </Table>
    )
}

export default FinancialsTable; 


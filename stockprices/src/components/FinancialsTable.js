import React from 'react';
import FinancialsTableRow from './FinancialsTableRow';
import {Table, Header} from 'semantic-ui-react';

const FinancialsTable = (props) => {
    const headerCells = Object.keys(props.data).map(key => <Table.HeaderCell>{key}</Table.HeaderCell>)
    console.log(props)
    return(
        <Table basic='very' celled collapsing>
            <Table.Header>
                <Table.Row>
                <Table.HeaderCell>
                        <Header as='h4'>
                            <Header.Content>
                                {props.title}
                            </Header.Content>
                        </Header>
                    </Table.HeaderCell>
                    {headerCells}

                </Table.Row>
            </Table.Header>
              
            <Table.Body>
                <Table.Row>
                    <Table.Cell>
                        Parameter
                    </Table.Cell>
                
                    <Table.Cell>
                        45
                    </Table.Cell>

                    <Table.Cell>
                        22
                    </Table.Cell>
                    <Table.Cell>
                        2266
                    </Table.Cell>
                    <Table.Cell>
                        123454
                    </Table.Cell>
                    
                </Table.Row>

            </Table.Body>
        </Table>
    )
}

export default FinancialsTable; 
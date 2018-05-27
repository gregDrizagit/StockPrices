import React from 'react';
import FinancialsTableRow from './FinancialsTableRow';
import {Table} from 'semantic-ui-react';

const FinancialsTable = (props) => {
    console.log(props)
    return(
        <Table basic='very' celled collapsing>
            <Table.Header>
            <Table.Row>
                <Table.HeaderCell>Income Statements</Table.HeaderCell>
                <Table.HeaderCell>Date 1</Table.HeaderCell>
                <Table.HeaderCell>Date 2</Table.HeaderCell>
                <Table.HeaderCell>Date 3</Table.HeaderCell>
            </Table.Row>
            </Table.Header>
        
            <Table.Body>
            </Table.Body>
        </Table>
    )
}

export default FinancialsTable; 
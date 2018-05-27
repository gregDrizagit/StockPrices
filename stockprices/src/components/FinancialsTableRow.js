import React from 'react'; 
import {Table, Header} from 'semantic-ui-react';

const FinancialsTableRow = (props) => {
    console.log(props.data)
    return(
        <Table.Row>
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

    )
}

export default FinancialsTableRow;
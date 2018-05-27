import React from 'react'; 
import {Table, Header} from 'semantic-ui-react';

const FinancialsTableRow = (props) => {
    console.log(props.data)
    return(
        <Table.Row>
            <Table.Cell>
                <Header as='h4'>
                <Header.Content>
                    Lena
                    <Header.Subheader>Human Resources</Header.Subheader>
                </Header.Content>
                </Header>
            </Table.Cell>

            <Table.Cell>
                22
            </Table.Cell>
            <Table.Cell>
                22
            </Table.Cell>
            <Table.Cell>
                22
            </Table.Cell>
         </Table.Row>
    )
}

export default FinancialsTableRow;
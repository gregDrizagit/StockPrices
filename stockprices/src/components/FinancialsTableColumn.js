import React from 'react'; 
import {Table, Header} from 'semantic-ui-react';


class FinancialsTableColumn extends React.Component {

    state = {}

    componentDidMount() {
        const cols = this.parseTableData(this.props); 
        this.setState({columns: cols})
    }


    generateRowHeaders = () => {

       const headers = Object.keys(this.state.columns).map(col => {
            return (
                <div>
                    <Table.Row>
                        <Table.HeaderCell>
                            <Header as='h5'>
                                {col}
                            </Header>
                        </Table.HeaderCell>
                    </Table.Row>
                </div>

            )
        })

        return headers; 
        
    }

    parseTableData = (props) => {
        const columnsToRender = {}; 

        switch(props.table){
                case "Income Statement":
                
                    const incomeKeys = ["grossProfit", "costOfRevenue", 
                                        "operatingRevenue", "totalRevenue", 
                                        "operatingIncome", "netIncome", 
                                        "researchAndDevelopment", "operatingExpense"]; 

                    incomeKeys.forEach(key => {
                        columnsToRender[key] = props.column[key]
                    })
                    return columnsToRender           

                    break;
                case "Balance Sheet":
                    
                    const balanceKeys = ["currentAssets", "totalAssets", "totalLiabilities", "currentCash", 
                                        "currentDebt", "totalCash", "totalDebt", "shareholderEquity" ];

                    balanceKeys.forEach(key => {
                        columnsToRender[key] = props.column[key]
                    })     
                    return columnsToRender           
       
                    break;

                case "Cash Flow":

                    const cashFlowKeys = ["cashChange", "cashFlow"];

                    cashFlowKeys.forEach(key => {
                        columnsToRender[key] = props.column[key]
                    }) 
                    return columnsToRender           

                    break;
            }
    }

    render(){
        console.log(this.props)
        return(
            <div>
                {
                    this.state.columns ?
                        this.generateRowHeaders()
                        // this.testStructure()
                    :
                    null
                } 
            
            </div>
        )
    }
}


export default FinancialsTableColumn;
import React from 'react'; 
import {Table, Header} from 'semantic-ui-react';


const FinancialsTableColumn = (props) => {

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
            break;
        case "Balance Sheet":
            
            const balanceKeys = ["currentAssets", "totalAssets", "totalLiabilities", "currentCash", 
                                 "currentDebt", "totalCash", "totalDebt", "shareholderEquity" ];

            balanceKeys.forEach(key => {
                columnsToRender[key] = props.column[key]
            })            
            break;

        case "Cash Flow":

            const cashFlowKeys = ["cashChange", "cashFlow"];

            cashFlowKeys.forEach(key => {
                columnsToRender[key] = props.column[key]
            })            

            break;
   }

  console.log(columnsToRender)
    return(
        <Table.Row>
            
        </Table.Row>
    )
}


export default FinancialsTableColumn;
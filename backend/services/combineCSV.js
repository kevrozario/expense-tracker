const {parse} =require("csv-parse/sync");
const database=require("../database");

const headerMap= {
    tDate: ["Transaction Date", "Trans. Date"],
    pDate: ["Posted Date", "Post Date"],
    desc: ["Description"],
    amount: ["Debit", "Credit", "Amount"],
    category: ["Category"],
};



function combineCSV(files, accounts) {
    console.log("you made it to combineCSV")
    //loop through each file
    for (let i=0; i < files.length; i++) {
        const file = files[i];
        const accountName = accounts[i];

        //store the file data into an array of rows
        const rowsArr = parse(file.buffer, {
            columns:true,
            skip_empty_lines:true
        });

        //loop through each row
        for (const row of rowsArr) {
            
            const columnOrder = {
                tDate: null,
                pDate: null,
                desc: null,
                amount: null,
                category: null,
                account: accountName,
            };

            //loop through each header field
            for (const column of Object.keys(headerMap)) {
                const header = headerMap[column];

                //loop through each header values
                for (const value of header) {
                    if (row[value] !== undefined) {
                        columnOrder[column] = row[value];
                        break;
                    }
                }
            }

            database.prepare(
                `INSERT INTO transactions (tDate, pDate, description, amount, category, account) VALUES (?,?,?,?,?,?)`
            ).run(
                columnOrder.tDate, columnOrder.pDate, columnOrder.desc, columnOrder.amount, columnOrder.category, columnOrder.account
            );

        }

        
    }

}

module.exports=combineCSV;
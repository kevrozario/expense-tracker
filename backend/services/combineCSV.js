const {parse} =require(csv-parse/sync);

const HEADER_MAP= {
    tDate: ["Transaction Date", "Trans. Date"],
    pDate: ["Posted Date", "Post Date"],
    desc: ["Description"],
    amount: ["Debit", "Credit", "Amount"],
    category: ["Category"],
    acc: []
};



function combineCSV(files) {
    let rows = [];


}
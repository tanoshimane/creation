import * as awsApi from './awsApi.mjs';
import * as table from './table.mjs';
main();
async function main(){
    const awsBody = {code:"main"};
    const respAws = await awsApi.awsPost(awsBody);
    console.log(respAws);
    const respTablecreate = await table.tableCreate(respAws.week,respAws.kintoneRecord,respAws.dateKey,respAws.colTexts);
}


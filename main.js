import * as awsApi from 'awsApi.js';
import * as table from 'table.js';
main();
async function main(){
    const respAws = await awsApi.awsPost();
    console.log(respAws);
    const respTablecreate = await table.tableCreate();
}


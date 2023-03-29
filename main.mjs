import * as awsApi from './awsApi.mjs';
import * as table from './table.mjs';
main();
async function main(){
    const respAws = await awsApi.awsPost();
    console.log(respAws);
    const respTablecreate = await table.tableCreate();
}


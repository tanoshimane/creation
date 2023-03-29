import * as awsApi from './awsApi.mjs';
import * as table from './table.mjs';
main();
async function main(){
    const respAws = await awsApi.awsPost();
    console.log(respAws);
    const arr = [
        [1, 2, 3],
        [4, 5, 6]
    ];
    const respTablecreate = await table.tableCreate(arr);
}


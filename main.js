const awsApi = require(awsApi);
const table = require(table);
main();
async function main(){
    const respAws = await awsApi.awsPost();
    console.log(respAws);
    const respTablecreate = await table.tableCreate();
}


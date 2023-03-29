import * as awsApi from './awsApi.mjs';
import * as table from './table.mjs';
import dayjs from 'dayjs'
main();
async function main(){
    const now = dayjs();
    console.log(now.format("YYYY/MM/DD HH:mm:ss"));
    const respAws = await awsApi.awsPost();
    console.log(respAws);
    const respTablecreate = await table.tableCreate();
}


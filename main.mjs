import * as awsApi from './awsApi.mjs';
import * as table from './table.mjs';
import dayjs from 'https://cdn.jsdelivr.net/npm/dayjs@1/dayjs.min.js';
main();
async function main(){
    const now = dayjs();
    console.log(now.format("YYYY/MM/DD HH:mm:ss"));
    const respAws = await awsApi.awsPost();
    console.log(respAws);
    const respTablecreate = await table.tableCreate();
}


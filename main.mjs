import * as awsApi from './awsApi.mjs';
import * as table from './table.mjs';
main();
async function main(targetDay){
    targetDay = !targetDayday ? targetDay : dayjs().format('YYYY-MM-DD');
    document.getElementById('date-input').value = today;
    const awsBody = {code:"main"};
    const respAws = await awsApi.awsPost(awsBody);
    console.log(respAws);
    const respTablecreate = await table.tableCreate(respAws.week,respAws.kintoneRecord,respAws.dateKey,respAws.colTexts);
}

document.getElementById('left-arrow').addEventListener('click', async function() {
    console.log('Left arrow clicked!');
    // ここで何らかの処理を行う
});

document.getElementById('right-arrow').addEventListener('click', async function() {
    console.log('Right arrow clicked!');
    // ここで何らかの処理を行う
});

document.getElementById('date-input').addEventListener('change', async function() {
    console.log('Date input changed to ' + this.value);
    //const respTablecreate = await table.tableCreate(respAws.week,respAws.kintoneRecord,respAws.dateKey,respAws.colTexts);
});
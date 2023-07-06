import * as awsApi from './awsApi.mjs';
main();
async function main(){
    const awsBody = {code:"form"};
    const respAws = await awsApi.awsPost(awsBody);
    console.log(respAws);
    document.getElementById('reservDate').value = "test";
}
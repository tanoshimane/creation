import * as awsApi from './awsApi.mjs';
main();
async function main(){
    const awsBody = {code:"form"};
    const respAws = await awsApi.awsPost(awsBody);
    console.log(respAws);
    let urlParams = new URLSearchParams(window.location.search);
    let paramValue = urlParams.get('param');
    console.log(paramValue);
    document.getElementById('reservDate').value = paramValue;
}
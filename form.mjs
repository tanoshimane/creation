import * as awsApi from './awsApi.mjs';
main();
async function main(){
    const awsBody = {code:"form"};
    const respAws = await awsApi.awsPost(awsBody);
    console.log(respAws);
    await initialSetting();
    
}

async function initialSetting(){
    let urlParams = new URLSearchParams(window.location.search);
    let paramValue = urlParams.get('param');
    console.log(paramValue);
    const reservDate = document.getElementById('reservDate');
    reservDate.value = paramValue;
    reservDate.disabled = false;
}
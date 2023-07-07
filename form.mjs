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
    let paramValue = urlParams.get('params');
    console.log(paramValue);
    let reservDate = document.getElementById('reservDate');
    reservDate.value = paramValue;
    reservDate.disabled = true;
}

document.getElementById("myForm").addEventListener("submit", function(event) {
    const number = document.getElementById("Number").value;
    if (number.length > 4) {
      event.preventDefault();
      alert("ナンバーは4文字以内で入力してください");
    }
});

document.getElementById("textarea").addEventListener("focus", function() {
    if (this.value === "備考：") {
      this.value = "";
    }
});
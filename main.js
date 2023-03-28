async function main(){
    const respAws = await awsPost();
    console.log(respAws);
    const respTablecreate = await tableCreate();
}


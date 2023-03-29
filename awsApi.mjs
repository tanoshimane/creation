export const awsPost = async (body) => {
    try {
        const apiUrl = "https://6g4lt1qeia.execute-api.us-east-2.amazonaws.com/netlifty_api_atage";
        if(!body){
            body.code = "";
        }
        const response = await fetch(apiUrl, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(body)
        });
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const postResp = await response.json();
        console.log(postResp);
        const data = JSON.parse(postResp.body);
        return data;
    } catch (error) {
        console.error("Fetch error:", error);
    }
}
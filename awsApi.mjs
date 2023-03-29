export const awsPost = async () => {
    try {
        const apiUrl = "https://6g4lt1qeia.execute-api.us-east-2.amazonaws.com/netlifty_api_atage";
        const jsonData = {
            key1: "value1",
            key2: "value2"
        };
        const response = await fetch(apiUrl, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(jsonData)
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
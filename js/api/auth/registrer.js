import { registerUrl } from "../constants/api.js";

export async function register(userDetails) {
    
    console.log("hei hei ", JSON.stringify(userDetails))
    const response = await fetch(registerUrl, {
        method: "POST",
        headers: { 
            "Content-Type": "application/json" 

        },

        body: JSON.stringify(userDetails) 
    });
    
    if(response.ok){
        const  error = await response.json();
        throw new Error(error.message);
    }

    

    return await response.json();
}
   


import axios from "axios"

export const signUp = async (formData) => {
    console.log(formData);
    let serverResponse = await axios({
        method: "POST",
        url: "/api/users",
        data: formData
    })
    return serverResponse;
}


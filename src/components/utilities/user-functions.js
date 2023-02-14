
import axios from "axios"

export const signUp = async (formData) => {
    console.log(formData);
    let serverResponse = await axios({
        method: "POST",
        url: "/users/signup", // route to do sign up
        data: formData
    })
    return serverResponse;
}
export const logIn = async (formData) => {
    console.log(formData);
    let serverResponse = await axios({
        method: "PUT",
        url: "/users/login", // route to do sign up
        data: formData
    })
    return serverResponse;
}


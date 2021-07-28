import { client, ENDPOINTS } from "./config"
import { ErrorCustom, isSatisfactoryStatus } from "./help"

export const signin = async ({body}) => {
    try {
        const respone = await client.post(ENDPOINTS.SIGNIN, body)
        if (isSatisfactoryStatus(respone)) return respone.data
    } catch (error) {
        ErrorCustom(error)
        throw new Error(400)
    }
}

export const signup = async ({body}) => {
     try {
        const respone = await client.post(ENDPOINTS.SIGNUP, body)
        if (isSatisfactoryStatus(respone)) return respone.data
    } catch (error) {
        ErrorCustom(error)
        throw new Error(400)
    }
}
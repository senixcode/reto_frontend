import { client, ENDPOINTS } from "./config"
import { ErrorCustom, HeaderToken, isSatisfactoryStatus } from "./help"

export const findUser = async ({id,token}) => {
    try {
        const respone = await client.get(ENDPOINTS.USER(id),HeaderToken(token))
        if (isSatisfactoryStatus(respone)) return respone.data
    } catch (error) {
        ErrorCustom(error)
        throw new Error(400)
    }
}

export const findUsers = async ({token}) => {
    try {
        const respone = await client.get(ENDPOINTS.USERS,HeaderToken(token))
        if (isSatisfactoryStatus(respone)) return respone.data
    } catch (error) {
        ErrorCustom(error)
        throw new Error(400)
    }
}

export const userUpdate = async ({body,token}) => {
     try {
        const respone = await client.put(ENDPOINTS.USER_UPDATE(body.id), body, HeaderToken(token))
        if (isSatisfactoryStatus(respone)) return respone.data
    } catch (error) {
        ErrorCustom(error)
        throw new Error(400)
    }
}
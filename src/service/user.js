import { client, ENDPOINTS } from "./config"
import { ErrorCustom, isSatisfactoryStatus } from "./help"

export const findUser = async (id) => {
    try {
        const respone = await client.get(ENDPOINTS.USER(id))
        if (isSatisfactoryStatus(respone)) return respone.data
    } catch (error) {
        ErrorCustom(error)
        throw new Error(400)
    }
}

export const findUsers = async () => {
    try {
        const respone = await client.get(ENDPOINTS.USERS)
        if (isSatisfactoryStatus(respone)) return respone.data
    } catch (error) {
        ErrorCustom(error)
        throw new Error(400)
    }
}

export const userUpdate = async ({body}) => {
     try {
        const respone = await client.put(ENDPOINTS.USER_UPDATE(body.id), body)
        if (isSatisfactoryStatus(respone)) return respone.data
    } catch (error) {
        ErrorCustom(error)
        throw new Error(400)
    }
}
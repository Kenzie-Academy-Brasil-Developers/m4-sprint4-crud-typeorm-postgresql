import { Request, Response  } from "express"
import { ISessionRequest } from "../../interfaces"
import { createSessionService } from "../../services/session/createSession.service"

const createSessionController = async (req: Request, res: Response) => {
    const sessionData: ISessionRequest = req.body
    const token = await createSessionService(sessionData)
    console.log(sessionData)
    return res.status(200).json({token})
}

export { createSessionController }
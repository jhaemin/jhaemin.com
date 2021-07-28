import { HttpMethod, JhmApiRequest, JhmApiResponse } from '@/types/general'

export enum HttpStatus {
  OK = 200,
  BAD_REQUEST = 400,
  UNAUTHORIZED = 401,
  FORBIDDEN = 403,
  NOT_FOUND = 404,
  INTERNAL_SERVER_ERROR = 500,
}

type Handler = (req: JhmApiRequest, res: JhmApiResponse) => void

export const makeHandler = (
  handler: Handler,
  method: HttpMethod = HttpMethod.POST
) => {
  return (req: JhmApiRequest, res: JhmApiResponse) => {
    if (req.method === (method as unknown as string)) {
      return handler(req, res)
    } else {
      res.status(HttpStatus.NOT_FOUND).send(null)
    }
  }
}

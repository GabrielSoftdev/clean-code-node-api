import { HttpRequest, HttpResponse } from '../protocols/http'

export class SignupController {
  handle (httpRequest: HttpRequest): HttpResponse {
    if (httpRequest.body.name === undefined) {
      return {
        statusCode: 400,
        body: new Error('Missing param: name')
      }
    }
    if (httpRequest.body.email === undefined) {
      return {
        statusCode: 400,
        body: new Error('Missing param: email')
      }
    }

    return {
      statusCode: 200,
      body: ('Success')
    }
  }
}

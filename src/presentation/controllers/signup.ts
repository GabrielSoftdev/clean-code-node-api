import { HttpRequest, HttpResponse } from '../protocols/http'
import { MissingParamError } from '../errors/missing-param-error'

export class SignupController {
  handle (httpRequest: HttpRequest): HttpResponse {
    if (httpRequest.body.name === undefined) {
      return {
        statusCode: 400,
        body: new MissingParamError('Missing param: name')
      }
    }
    if (httpRequest.body.email === undefined) {
      return {
        statusCode: 400,
        body: new MissingParamError('Missing param: email')
      }
    }

    return {
      statusCode: 200,
      body: ('Success')
    }
  }
}

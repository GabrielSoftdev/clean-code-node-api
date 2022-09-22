import { HttpRequest, HttpResponse } from '../protocols/http'
import { MissingParamError } from '../errors/missing-param-error'
import { badRequest } from '../helpers/http-helper'

export class SignupController {
  handle (httpRequest: HttpRequest): HttpResponse {
    if (httpRequest.body.name === undefined) {
      return badRequest(new MissingParamError('Missing param: name'))
    }

    if (httpRequest.body.email === undefined) {
      return badRequest(new MissingParamError('Missing param: email'))
    }

    return {
      statusCode: 200,
      body: ('Success')
    }
  }
}

import { HttpRequest, HttpResponse } from '../protocols/http'
import { MissingParamError } from '../errors/missing-param-error'
import { badRequest } from '../helpers/http-helper'

export class SignupController {
  handle (httpRequest: HttpRequest): HttpResponse {
    const requiredFields: string[] = ['name', 'email']

    for (const field of requiredFields) {
      if (httpRequest.body[field] === undefined) {
        return badRequest(new MissingParamError(field))
      }
    }

    return {
      statusCode: 200,
      body: ('Success')
    }
  }
}

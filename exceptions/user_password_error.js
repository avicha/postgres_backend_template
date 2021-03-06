const {
  USER_TABLE_CODE
} = require('../constants/table_code')
const HttpStatusCode = require('../constants/http_status_code')

class UserPasswordError extends Error {
  constructor() {
    super()
    this.code = `${HttpStatusCode.HTTP_FORBIDDEN}${USER_TABLE_CODE}`
    this.message = '密码错误，请检查后重新输入！'
  }
}
module.exports = UserPasswordError
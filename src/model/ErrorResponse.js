class ErrorResponse {
  constructor(data) {
    this.code = data.code;
    this.code = data.status;
    this.message = data.message;
  }
}
export default ErrorResponse;

class ErrorHandler extends Error {
    statusCode: number;
    constructor(message: string, statusCode: number) {
        super();
        this.message = message;
        this.statusCode = statusCode;
        Error.captureStackTrace(this, this.constructor);
    }
}
export default ErrorHandler;
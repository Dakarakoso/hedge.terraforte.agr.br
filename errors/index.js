class BaseError extends Error {
  constructor({
    name,
    message,
    stack,
    action,
    statusCode,
    errorId,
    requestId,
    context,
    errorLocationCode,
    key,
    type,
    databaseErrorCode,
  }) {
    super();
    this.name = name;
    this.message = message;
    this.stack = stack;
    this.action = action;
    this.statusCode = statusCode;
    this.errorId = errorId;
    this.requestId = requestId;
    this.context = context;
    this.errorLocationCode = errorLocationCode;
    this.key = key;
    this.type = type;
    this.databaseErrorCode = databaseErrorCode;
  }
}

export class InternalServerError extends BaseError {
  constructor({
    message,
    action,
    requestId,
    errorId,
    statusCode,
    stack,
    errorLocationCode,
  }) {
    super({
      name: "InternalServerError",
      message: message || "An internal error occurred",
      action: action || "Contact support with the value in field 'error_id'",
      requestId: requestId,
      statusCode: statusCode || 500,
      errorId: errorId,
      stack: stack,
      errorLocationCode,
    });
  }
}

export class NotFoundError extends BaseError {
  constructor({
    message,
    action,
    requestId,
    errorId,
    stack,
    errorLocationCode,
    key,
  }) {
    super({
      name: "NotFoundError",
      message: message || "Not found please check the path",
      action: action || "",
      statusCode: 404,
      requestId: requestId,
      errorId: errorId,
      errorLocationCode: errorLocationCode,
      stack: stack,
      key: key,
    });
  }
}

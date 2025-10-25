// Custom error for forwarding issues
class GoApiError extends Error {
  status: number;

  constructor(message: string, status: number) {
    super(message);
    this.name = "GoApiError";
    this.status = status;
  }
}

export default GoApiError;

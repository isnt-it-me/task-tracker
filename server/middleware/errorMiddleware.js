const errorHandler = (err, req, res, next) => {
    console.error(err);

    let statusCode = res.statusCode !== 200 ? res.statusCode : 500;

    let message = err.message || "Internal Server Error";

    // Invalid MongoDB ObjectId
    if (err.name === "CastError") {
        statusCode = 400;
        message = "Invalid resource ID.";
    }

    // Mongoose Validation Error
    if (err.name === "ValidationError") {
        statusCode = 400;
        message = Object.values(err.errors)
            .map((error) => error.message)
            .join(", ");
    }

    // Duplicate Key Error
    if (err.code === 11000) {
        statusCode = 409;
        message = "Duplicate field value entered.";
    }

    res.status(statusCode).json({
        success: false,
        message,
        stack:
            process.env.NODE_ENV === "development"
                ? err.stack
                : undefined,
    });
};

export default errorHandler;
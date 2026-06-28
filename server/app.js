import express from "express";
import cors from "cors";

import taskRoutes from "./routes/taskRoutes.js";
import notFound from "./middleware/notFound.js";
import errorHandler from "./middleware/errorMiddleware.js";

const app = express();

/* Middlewares */

app.use(cors());

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

/* Health Check */

app.get("/", (req, res) => {
    res.status(200).json({
        success: true,
        message: "Task Tracker API is running ",
    });
});

/* Routes */

app.use("/api/tasks", taskRoutes);

/* 404 */

app.use(notFound);

/* Global Error Handler */

app.use(errorHandler);

export default app;
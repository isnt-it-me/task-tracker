import mongoose from "mongoose";
import Task from "../models/Task.js";

export const getTasks = async (req, res) => {
    try {
        const tasks = await Task.find().sort({ createdAt: -1 });

        res.status(200).json({
            success: true,
            count: tasks.length,
            data: tasks,
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Failed to fetch tasks.",
        });
    }
};


export const getTaskById = async (req, res) => {
    try {
        const { id } = req.params;

        if (!mongoose.Types.ObjectId.isValid(id)) {
            return res.status(400).json({
                success: false,
                message: "Invalid task ID.",
            });
        }

        const task = await Task.findById(id);

        if (!task) {
            return res.status(404).json({
                success: false,
                message: "Task not found.",
            });
        }

        res.status(200).json({
            success: true,
            data: task,
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Failed to fetch task.",
        });
    }
};


export const createTask = async (req, res) => {
    try {
        const task = await Task.create(req.body);

        res.status(201).json({
            success: true,
            message: "Task created successfully.",
            data: task,
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message,
        });
    }
};


export const updateTask = async (req, res) => {
    try {
        const { id } = req.params;

        if (!mongoose.Types.ObjectId.isValid(id)) {
            return res.status(400).json({
                success: false,
                message: "Invalid task ID.",
            });
        }

        const updatedTask = await Task.findByIdAndUpdate(id, req.body, {
            new: true,
            runValidators: true,
        });

        if (!updatedTask) {
            return res.status(404).json({
                success: false,
                message: "Task not found.",
            });
        }

        res.status(200).json({
            success: true,
            message: "Task updated successfully.",
            data: updatedTask,
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message,
        });
    }
};


export const deleteTask = async (req, res) => {
    try {
        const { id } = req.params;

        if (!mongoose.Types.ObjectId.isValid(id)) {
            return res.status(400).json({
                success: false,
                message: "Invalid task ID.",
            });
        }

        const deletedTask = await Task.findByIdAndDelete(id);

        if (!deletedTask) {
            return res.status(404).json({
                success: false,
                message: "Task not found.",
            });
        }

        res.status(200).json({
            success: true,
            message: "Task deleted successfully.",
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Failed to delete task.",
        });
    }
};
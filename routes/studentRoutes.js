import express from "express"
import studentController from "../controllers/studentController.js"


const router = express.Router()

router.post(
    "/",
    studentController.createStudent
)

router.get(
    "/",
    studentController.getAllStudent
)

router.get(
    "/:id",
    studentController.getStudentById
)

router.get(
    "/active",
    studentController.getActiveStudent
)
export default router; 

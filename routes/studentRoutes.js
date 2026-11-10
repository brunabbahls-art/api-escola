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
    "/active",
    studentController.getActiveStudent
)

router.get(
    "/search/:name",
    studentController.searchStudentsByName
)

router.get(
    "/:id",
    studentController.getStudentById
)

router.get(
    "/count/students",
    studentController.countStudents
);

router.put(
    "/:id",
    studentController.updateStudent
)

router.patch(
    "/:id/status",
    studentController.updateStatus
)

export default router; 

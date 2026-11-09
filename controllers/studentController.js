import studentService from "../services/studentService.js"
import studentServer from "../services/studentService.js"


const createStudent = async (req, res, next) => {
    try {
        const student = await studentService.createStudent(req.body)

        res.status(201).json({
            message: "Estudante criado com sucesso",
            data: student,
        })
    } catch (error) {
        next(error)
    }
}


const getAllStudent = async (req, res, next) => {
    try {
        const students = await studentService.getAllStudents()

        res.status(200).json({
            message: "Estudantes encontrados com sucesso",
            total: students.length,
            data: students
        })
    } catch (error) {
        next(error)
    }
}

const getStudentById = async (req, res, next) => {
    try {
        const student = await studentService.getStudentById(req.params.id)

        res.status(200).json({
            message: "Estudantes encontrado com sucesso",
            data: student
        })
    } catch (error) {
        next(error)
    }
}

const getActiveStudent = (req, res, next) => {
    try {
        const student = await studentService.getActiveStudent(req.params.id)

        res.status(200).json({
            message: "Estudantes encontrados com sucesso",
            data: student
        })
    } catch (error) {
        next(error)

    }
}

const searchStudentsByName = (req, res, next) => {
    try {
        const student = await studentService.searchStudentsByName(req.params.name)

        res.status(200).json({
            message: "Estudantes encontrados com sucesso",
            data: students
        })
    } catch (error) {
        next(error)
    }
}
export default {
    createStudent,
    getAllStudent,
    getStudentById,
    getActiveStudent,
    searchStudentsByName,
}

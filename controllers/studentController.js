import studentService from "../services/studentService.js"


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
        const students = await studentService.getAllStudent()

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

const getActiveStudent = async (req, res, next) => {
    try {
        const student = await studentService.getActiveStudent(req.params.active)

        res.status(200).json({
            message: "Estudantes encontrados com sucesso",
            data: student
        })
    } catch (error) {
        next(error)

    }
}

const searchStudentsByName = async (req, res, next) => {
    try {
        const student = await studentService.searchStudentsByName(req.params.name)

        res.status(200).json({
            message: "Estudantes encontrados com sucesso",
            data: student
        })
    } catch (error) {
        next(error)
    }
}

const countStudents = async (req, res, next) => {
    try {
        const total = await studentService.countStudents()

        res.status(200).json({
            message: "Quantidade de estudantes encontrada com sucesso",
            total
        })

    } catch (error) {
        next(error)
    }
}

const updateStudent = async (req, res, next) => {
    try {
        const student = await studentService.updateStudent(req.params.id, req.body)

        res.status(200).json({
            message: "Estudante editado com sucesso",
            data: student
        })
    } catch (error) {
        next(error)
    }
}

const updateStatus = async (req, res, next) => {
    try {
        const student = await studentService.updateStatus(req.params.status, req.body)

        res.status(200).json({
            message: "Estudante atualizado",
            data: student
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
    countStudents,
    updateStudent,
    updateStatus,
}

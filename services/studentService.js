
import studentController from "../controllers/studentController.js"
import Student from "../models/student.js"

const createStudent = async (data) => {
    const { nome, email, matricula, idade } = data

    if (!nome || !email) {
        const error = new Error("Nome e email são obrigatórios")
        error.statusCode = 400
        throw error
    }

    const studentExists = await Student.findOne({ email })

    if (studentExists) {
        const error = new Error("Email já utilizado")
        error.statusCode = 400
        throw error
    }

    const student = await Student.create({
        nome,
        email,
        matricula,
        idade,
    })

    return {
        _id: student._id,
        nome: student.nome,
        email: student.email,
        matricula: student.matricula,
        idade: student.idade,
        ativo: student.ativo,
        createdAt: student.createdAt,
        updatedAt: student.updatedAt
    }
}

const getAllStudent = async () => {
    return Student.find()
}

const getActiveStudent = async () => {
    const student = await Student.find({ ativo: true })

    if (!student) {
        const error = new Error("Estudante não encontrado")
        error.statusCode = 404
        throw error
    }

    return student
}

const getStudentById = async (id) => {
    const student = await Student.findById(id);

    if (!student) {
        const error = new Error("Estudante não encontrado")
        error.statusCode = 404
        throw error
    }

    return student
}

const searchStudentsByName = async (nome) => {
    const student = await Student.find({
        nome
    })

    return student
}


const countStudents = async () => {
    return Student.countDocuments()
}


const updateStudent = async (id, data) => {
    const student = await Student.findByIdAndUpdate(id, data, {
        new: true,
        runValidators: true
    })

    if (!student) {
        const error = new Error("Estudante não encontrado")
        error.statusCode = 404
        throw error

    }
    return student
}

const updateStatus = async (status, data) => {
    const { nome, email, matricula, idade } = data

    const student = await Student.findOneAndUpdate(status, data, {
        new: true,
        runValidators: true
    })

    if (!student) {
        const error = new Error("Estudante não encontrado")
        error.statusCode = 404
        throw error
    }

    return student
}

export default {
    createStudent,
    getAllStudent,
    getStudentById,
    getActiveStudent,
    searchStudentsByName,
    countStudents,
    updateStudent,
    updateStatus
}
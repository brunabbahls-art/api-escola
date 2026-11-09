import express from "express";

import dotenv from "dotenv"

import connectDB from "./config/db.js";

import studentRoutes from "./routes/studentRoutes.js"

// import teacherRoutes from "./routes/teacherRoutes.js"

// import subjectRoutes from "./routes/subjectRoutes.js"

// import enrollmentRoutes from "./routes/enrollmentRoutes.js"

dotenv.config()

const app = express();
const PORT = 3000

app.use(express.json());

app.use("/students", studentsRoutes)

// app.use("/teachers", teachersRoutes)

// app.use("/subjects", subjectRoutes)

// app.use("/enrollment", enrollmentRoutes)


const startServer = async () => {
    try {
        await connectDB()
        app.listen(PORT, () => {
            console.log("O servidor está rodando na porta: ", PORT)

        });
    } catch (error) {
        console.log("Erro ao iniciar o servidor:", error.message)
    };
};

startServer();
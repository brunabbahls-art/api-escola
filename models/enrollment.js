// import { MongoOIDCError } from "mongodb";
// import mongoose, { mongo } from "mongoose";

// const EnrollmentSchema = new mongoose.Schema(
//     {

//         studentId: {
//             type: mongoose.Schema.Types.ObjectId,
//             ref: "Student",
//             required: true
//         },

//         subjectId: {
//             type: mongoose.Schema.Types.ObjectId,
//             ref: "Subject",
//             required: true
//         },
//         dataMatricula: {
//             type: Date,
//             trim: true,

//         },

//         status: {
//             type: String,
//             required: true,

//         },

//         notaFinal: {
//             type: Number,
//             required: true
//         }
//     },
//     {
//         timestamps: true,
//         collection: "enrollment"
//     }
// )

// export default mongoose.model("Enrollment", EnrollmentSchema);
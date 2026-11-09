// import { MongoOIDCError } from "mongodb";
// import mongoose, { mongo } from "mongoose";

// const SubjectSchema = new mongoose.Schema(
//     {
//         nome: {
//             type: String,
//             required: true,
//             trim: true
//         },


//         codigo: {
//             type: String,
//             trim: true,
//             unique: true
//         },

//         cargaHoraria: {
//             type: Number,
//             required: true,
//         },

//         teacherId: {
//             type: mongoose.Schema.Types.ObjectId,
//             ref: "Teacher",
//             required: true
//         },

//         ativo: {
//             type: Boolean,
//             default: true
//         }

//     },
//     {
//         timestamps: true,
//         collection: "subjects"
//     }
// )

// export default mongoose.model("Subject", SubjectSchema);

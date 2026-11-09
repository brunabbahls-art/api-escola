import { MongoOIDCError } from "mongodb";
import mongoose, { mongo } from "mongoose";

const StudentSchema = new mongoose.Schema(
    {
        nome: {
            type: String,
            required: true,
            trim: true
        },

        email: {
            type: String,
            required: true,
            unique: true,
            lowercase: true,
            trim: true
        },

        matricula: {
            type: String,
            required: true,
            unique: true
        },

        idade: {
            type: Number,
            required: true
        },

        ativo: {
            type: Boolean,
            default: true
        }

    },
    {
        timestamps: true,
        collection: "students"
    }
)

export default mongoose.model("Student", StudentSchema);
import mongoose from "mongoose";
import AuthRoles from "../utils/authRoles"

const userSchema = mongoose.Schema(
    {
        name: {
            type: String,
            required: [true, "Name is required"],
            maxLength: [50, "Name must be less than 50"],
            trim: true
        },
    
        email: {
            type: String,
            required: [true, "Email is required"],
            unique: true
        },

        password: {
            type: String,
            required: [true, "Password is required"],
            minLength: [8, "Minimum length is 8 characters required"],
            select: false
        },

        role: {
            type: String,
            enum: Object.values(AuthRoles),
            default: AuthRoles.USER
        },

        forgotPasswordToken: String,
        forgotPasswordExpiry: Date
    },
    {
        timestamps: true
    }
);

export default mongoose.model("User", userSchema)
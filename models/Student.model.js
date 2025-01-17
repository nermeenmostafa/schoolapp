const { Schema, model } = require("mongoose");

// TODO: Please make sure you edit the User model to whatever makes sense in this case
const studentSchema = new Schema(
    {
        name: {
            type: String,
            required: [true,"Name is required"]
        },
        address: {
            type: String
        },
        phoneNumber: {
            type: String
        },
        email: {
            type: String,
            required: [true, "Email is required"],
            lowercase: true,
            trim: true
        },
        password: {
            type: String,
            required:  [true, "password is required"],
        },
        profileImg: {
            type: String
        },
    },
    {
        // this second object adds extra properties: `createdAt` and `updatedAt`    
        timestamps: true
    }
);

const Student = model("student", studentSchema);

module.exports = Student;
import mongoose, {Schema, model} from "mongoose";

const studentSchema = new Schema ({
    name: {
        type: String,
        required: true,
    },
    rollno: {
        type: Number,
        required: true
    },
    subject1: Number,
    subject2: Number,
    subject3: Number,
    subject4: Number,
    subject5: Number,
    total: Number,
    percentage: Number,
    grade: String
});

const stdSchema = model("Student", studentSchema);

export default stdSchema;
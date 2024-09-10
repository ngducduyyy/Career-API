import mongoose from "mongoose";

const obj = {
    job: String,
    earning: Number,
    location: String,
    companyName: String,
    profession: String,
    position: String,
    description: String,
    numberPeople: Number,
    date: String,
    companyImg: String
}

const JobSchema = new mongoose.Schema(obj);

const JobModel = mongoose.model("job", JobSchema, "job")

export default JobModel
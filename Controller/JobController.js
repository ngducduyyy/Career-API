import JobModel from "../Model/JobModel.js";
import {Types} from "mongoose"

const JobController = {
    registerJob: async (req, res) => {
        const { job, earning, location, companyName, date, position, description, profession, numberPeople, companyImg } = req.body;
        const newJob = await JobModel.create({
            job: job,
            earning: earning,
            location: location,
            companyName: companyName,
            position: position,
            description: description,
            numberPeople: numberPeople,
            date: date,
            profession: profession,
            companyImg: companyImg
        }
        )
        res.send({
            message: "Create success",
            data: newJob
        })
    },
    getAllJobs: async (req, res) => {
        const job = await JobModel.find()

        res.status(200).send({
            job
        })
    },
    findJob: async (req, res) => {
        const {id} = req.params
        console.log("id");
        console.log(id);
        const job = await JobModel.findOne({_id:new Types.ObjectId(id)})
        console.log(job);
        res.send(
            job
        )
    }
}
export default JobController
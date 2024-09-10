
const MiddleWare = {
    registerAccount: (req, res, next) =>{
        try{
            const {username, password, fullName} = req.body
            if (!username) throw new Error("Username must be not empty!")
            if (!password) throw new Error("Password must be not empty!")
            if (!fullName) throw new Error("FullName must be not empty!")

            next()
        } catch (err){
            res.status(400).send({
                message: err.message
            })
        }
    },
    login: (req, res, next) =>{
        try{
            const {username, password} = req.body
            if (!username) throw new Error("Username must be not empty!")
            if (!password) throw new Error("Password must be not empty!")

            next()
        } catch (err){
            res.status(400).send({
                message: err.message
            })
        }
    },
    registerJob: (req, res, next) =>{
        try{
            const {job, earning, location, companyName,position, profession, description, numberPeople} = req.body
            if (!job) throw new Error("Job must be not empty!")
            if (!earning) throw new Error("Earning must be not empty!")
            if (!location) throw new Error("Location must be not empty!")
            if (!companyName) throw new Error("Company name must be not empty!")
            if (!position) throw new Error("Position must be not empty!")
            if (!description) throw new Error("Description must be not empty!")
            if (!numberPeople) throw new Error("Number People must be not empty!")
            if (!profession) throw new Error("Profession must be not empty!")

            next()
        } catch (err){
            res.status(400).send({
                message: err.message
            })
        }
    },
};

export default MiddleWare
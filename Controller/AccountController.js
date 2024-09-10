import bcrypt, {hashSync} from "bcrypt";
import AccountModel from "../Model/AccountModel.js"
import dotenv from "dotenv"

dotenv.config()
const AccountController = {
    registerAccount: async (req, res) => {
        const {username, password, fullName} = req.body;
        const salt = bcrypt.genSaltSync(10);
        const password2 = hashSync(password, salt)
        const newAccount = await AccountModel.create({
                username: username,
                password: password2,
                fullName: fullName,
                salt: salt
            }
        )
        res.send({
            message: "Create success",
            data: newAccount
        })

    },
    login: async (req,res) => {
        const {username, password} = req.body
        const account  = await AccountModel.findOne({
            username: username
        });
        if (account ==null) {
            res.status(401).send(
                {
                    message:"Username or password incorrect!"
                }
            )
            return
        }
        const salt = account.salt
        const password2 = bcrypt.hashSync(password, salt)
        if (password2 !== account.password){
            res.status(401).send(
                {
                    message:"Username or password incorrect!"
                }
            )
            return
        }
        res.status(200).send({
            message: "Login success",
            username: username
        })
    },
    changePassword: async (req, res) => {
        const {username, password, newPassword, confirmPassword} = req.body
        if (!username || !password || !newPassword || !confirmPassword) {
            return res.status(400).send(
                {
                    message:"Ban da nhap sai"
                }
            );
          }
        
          if (newPassword !== confirmPassword) {
            return res.status(400).send({
                message: "Mat khau khong khop"
            });
          }
        
          const account  = await AccountModel.findOne({
            username: username
        })
          if (!account) {
            return res.status(404).send({
                message: "User not found"
            });
          }
          if (newPassword.length < 8) {
            return res.status(400).send({
                message: "Mat khau moi khong duoc it hon 8 ky tu"
            });
          }
    }
}

export default AccountController
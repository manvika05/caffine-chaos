const User = require('../models/User');
const bcrypt = require('bcryptjs');
exports.signup = async (req, res)=> {
    const { name, email, password} = req.body;
    try{
        const hashedpassword = await bcrypt. hash(password, 10);
        const user = new User({
            name,
            email,
            password: hashedpassword
        });
        await user.save();
        res.json({
            message: 'user created sucessfully'
        });
    } catch(error) {
        res.status(400).json({
            message: 'email already exist'
        });
    };
    }

    exports.signin = async( req, res) =>{
        const{ email, password }= req.body;
         try{
            const user = await User.findOne({email});
            if(user && await bcrypt.compare (password, user.password))  { 
                res.json({
                    message: 'user signed in sucessully',
                    user: {
                        id: user._id,
                        name: user.name,
                        email: user.email,
                      }
                     });
            }
         } else {
            res.status(400).json({
                message: 'Invalid email or password'
            });
        }
    } catch (error) {
        res.status(500).json({
            message: 'An error occurred while signing in'
        });
    }

    
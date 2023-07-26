import User from "../mongodb/models/user.js";
import bcrypt from 'bcryptjs';

const register = async (req, res) => {
    const { name, email, username, password } = req.body;

    // Check if username already exists
    const userExists = await User.findOne({ username });
    if (userExists) return res.status(400).json({ message: 'Username already exists' });

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create new user
    const newUser = await User.create({
        name, 
        email,
        username,
        password: hashedPassword,
    });

    res.status(200).json(newUser);
};

const login = async (req, res) => {
    const { username, password } = req.body;

    // Check if user exists
    const user = await User.findOne({ username });
    if (!user) return res.status(400).json({ message: 'Invalid username or password' });

    // Check password
    const validPassword = await bcrypt.compare(password, user.password);
    if (!validPassword) return res.status(400).json({ message: 'Invalid username or password' });

    // Create token
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });

    res.status(200).json({ token });
};

const getAllUsers = async (req, res) => {
    try {
        const users = await User.find({}).limit(req.query._end);


        res.status(200).json(users);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};


const createUser = async (req, res) => { //this is a function creating a user or not if already exists. try for what we want, catch for execptions
    try {
        const { name, email, avatar } = req.body;


        const userExists = await User.findOne({ email });


        if (userExists) return res.status(200).json(userExists);


        const newUser = await User.create({
            name,
            email,
            avatar,
        });


        res.status(200).json(newUser);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};


const getUserInfoByID = async (req, res) => {
    try {
        const { id } = req.params;


        const user = await User.findOne({ _id: id }).populate("allProperties");


        if (user) {
            res.status(200).json(user);
        } else {
            res.status(404).json({ message: "User not found" });
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};


export { register, login, getAllUsers, createUser, getUserInfoByID };
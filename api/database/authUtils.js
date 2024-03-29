const { AuthToken } = require("./authToken");
const { User } = require("./userModel");
const jwt = require('jsonwebtoken');
const { MongoClient } = require('mongodb');
const config = require('./dbConfig.json');
const url = `mongodb+srv://${config.userName}:${config.password}@${config.hostname}`;
const client = new MongoClient(url);
const bcrypt = require('bcrypt');
const uuid = require('uuid');

const userCollection = client.db("auth").collection("user");

/**
 * Takes a username and password and if correct returns a AuthToken
 * if not returns null
 * @param username 
 * @param password 
 * @returns AuthToken | null
 */
const authUser = async (username, password) => {
    try {
        const user = await getUser(username);
        if (user && user.password) {
            console.log(password, "---", user.password);
            const passwordMatch = await bcrypt.compare(password, user.password);
            if (passwordMatch && user.authToken && user.authToken.token) {
                return new AuthToken(user.authToken.token);
            }
        }
        return null;
    } catch (error) {
        console.error("Error during authentication:", error);
        throw new Error("Internal server error.");
    }
};

/**
 * Registers a new user with the provided username and password
 * @param username 
 * @param password 
 * @returns AuthToken | null
 */
const registerUser = async (username, password) => {
    try {
        const existingUser = await getUser(username);
        if (existingUser) {
            throw new Error("User already exists");
        } else {
            const newUser = await createUser(username, password);
            if (newUser && newUser.authToken && newUser.authToken.token) {
                return new AuthToken(newUser.authToken.token);
            }
            return null;
        }
    } catch (error) {
        console.error("Error during user registration:", error);
        throw new Error("Internal server error.");
    }
};

/**
 * Checks if the user is in the database or not
 * @param username 
 * @returns User
 */
function getUser(username) {
    return userCollection.findOne({ username: username });
}

/**
 * Creates a new user with the provided username and password
 * @param username 
 * @param password 
 * @returns Promise<User | null>
 */
const createUser = async (username, password) => {
    try {
        const hashedPassword =  await bcrypt.hash(password, 10);
        const newAuthToken = new AuthToken(uuid.v4());
        const newUser = new User(username, hashedPassword, newAuthToken);
        console.log(hashedPassword);
        await userCollection.insertOne(newUser);

        return newUser;
    } catch (error) {
        console.error("Error creating user:", error);
        throw new Error("Failed to create user");
    }
};
/**
 * Get user by Auth token
 * @param {*} authToken 
 */
const getUserByToken = async (authToken) => {
    const user = await userCollection.findOne({ authToken: {token: authToken} });
    return user;
}

const isAuthenticated = async (authToken) => {
    const user = await getUserByToken(authToken);
    if(user && user != null){
        return true;
    }
    return false;
}

module.exports = {authUser, registerUser, getUserByToken, isAuthenticated};
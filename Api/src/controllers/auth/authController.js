const { UserCredential } = require("../../db/conn")

const login = async (email, password) => {
    const userCredentials =  await UserCredential.findOne({email})
    return userCredentials
}
const logOut = async () => {

}

module.exports = {login, logOut}
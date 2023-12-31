import bcrypt from 'bcrypt'

// password hashing

export const hashPassword = async (password)=>{
    try {
        const saltRound = 10;
        const hashedPassword = await bcrypt.hash(password, saltRound)
        return hashedPassword;
    } catch (error) {
        console.log(`Error in Hash password ${error}`)
    }
}

import bcrypt from 'bcryptjs'

const users = [
    {

        name: "Ali Shan",
        email: "alishan@gmail.com",
        password: bcrypt.hashSync("alishan", 10),
        isAdmin: true
    },
    {

        name: "John",
        email: "John@gmail.com",
        password: bcrypt.hashSync("alishan", 10),

    },
    {

        name: "Clarke",
        email: "clarke@gmail.com",
        password: bcrypt.hashSync("alishan", 10),

    },
]

export default users;
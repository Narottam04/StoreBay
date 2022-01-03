import bcrypt from 'bcryptjs'

const users = [
    {
        name: 'Admin User',
        email: 'admin@storebay.com',
        password: bcrypt.hashSync('123456',10),
        isAdmin: true
    },
    {
        name: 'Naurto',
        email: 'naruto@storebay.com',
        password: bcrypt.hashSync('123456',10),
    },
    {
        name: 'Kunal',
        email: 'Kunal@storebay.com',
        password: bcrypt.hashSync('123456',10),
    },
]

export default users
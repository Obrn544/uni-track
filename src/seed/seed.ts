import bcrypt from 'bcrypt';

interface User {
  email: string;
  fullname: string;
  password: string;
}

interface seedData {
  users: User[];
}

export const initialData: seedData = {
  users: [
    {
      email: 'correo1@correo.com',
      fullname: 'Omar Obregon 1',
      password: bcrypt.hashSync('123456', 10),
    },
    {
      email: 'correo2@correo.com',
      fullname: 'Omar Obregon 2',
      password: bcrypt.hashSync('123456', 10),
    },
  ],
};

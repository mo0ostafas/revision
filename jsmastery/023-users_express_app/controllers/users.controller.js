// intial users
let users = [
    { id: 1, name: "Mona Ayman", age: 23 },
    { id: 2, name: "Moustafa Yasser", age: 23 }
];

// index users
export const getUsers = (_req, res) => {
    if (users.length === 0) {
        res.status(404).send('No users for now');
        return;
    }

    res.status(200).send(users);
}

// get user by id
export const getUser = (req, res) => {
    const { id } = req.params;

    const user = users.find((user) => user.id === Number(id));

    if (!user) {
        res.status(404).send('No user for that id');
        return;
    }

    res.status(200).send(user);
}

// create user
export const addUser = (req, res) => {
    const user = req.body;

    if (!user) {
        res.status(404).send('No user data inputed');
        return;
    }

    users.push({
        id: users.length + 1,
        ...user
    });
    res.status(200).send('User added successfully');
}

// edit user partially
export const editUser = (req, res) => {
    const { id } = req.params;

    const user_idx = users.findIndex((user) => user.id === Number(id));

    if (user_idx == -1) {
        res.status(404).send('No user Found');
        return;
    }
    
    const { name, age } = req.body;
    const user =  users[user_idx];
    users[user_idx] = {
        ...user,
        name: name ? name : user.name,
        age: age ? age : user.age
    }

    res.status(200).send('User updated successfully');
}

// export const editUser = (req, res) => {
//     const { id } = req.params;

//     const user_idx = users.findIndex((user) => user.id === Number(id));

//     if (user_idx == -1) {
//         res.status(404).send('No user Found');
//         return;
//     }
    
//     const { name, age } = req.body;
    
//     users[user_idx] = { ...users[user_idx], name, age }

//     res.status(200).send('User updated successfully');
// }

// delete user
export const deleteUser = (req, res) => {
    const { id } = req.params;

    const user_idx = users.findIndex((user) => user.id === Number(id));

    if (user_idx == -1) {
        res.status(404).send('No user for that id');
        return;
    }

    users.splice(user_idx, 1);

    res.status(200).send('User deleted successfully');
}

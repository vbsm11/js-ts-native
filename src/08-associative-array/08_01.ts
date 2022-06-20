export const usersObj = {
    '0': 'Kolya',
    '1': 'Tolya',
    '2': 'Sanya',
    '3': 'Vanya',
}

export type UsersType = {
    [key: string] : {id: number, name: string};
}

export const users: UsersType = {
    '101': {id: 101, name: 'Kolya'},
    '1121': {id: 1121, name: 'Tolya'},
    '1447876': {id: 1447876, name: 'Sanya'},
    '1': {id: 1, name: 'Vanya'}
}

// users[1];
const user = { id: 100500, name: 'Igor'};
users[user.id] = user; // копии ключей не будет
delete users[user.id];
users[user.id].name = 'Vitya';

export const usersArray = [
    {id: 101, name: 'Kolya'},
    {id: 1121, name: 'Tolya'},
    {id: 1447876, name: 'Sanya'},
    {id: 1, name: 'Vanya'}
]

// usersArray.find(u => u.id === 1);
// const usersArrayCopy = [...usersArray, user]; // возможны копии ключей, нужно фильтровать
// const usersArrayCopy2 = usersArray.filter(u => u.id !== user.id)
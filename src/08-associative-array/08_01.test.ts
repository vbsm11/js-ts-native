import {UsersType} from './08_01';

let users: UsersType;

beforeEach(() => {
    users = {
        '101': {id: 101, name: 'Kolya'},
        '1121': {id: 1121, name: 'Tolya'},
        '1447876': {id: 1447876, name: 'Sanya'},
        '1': {id: 1, name: 'Vanya'}
    }
})

test('name update', () =>{
    users['1'].name = 'Ivan';

    expect(users['1'].name).toBe('Ivan');
    expect(users['1']).toStrictEqual({id: 1, name: 'Ivan'});
})

test('delete user', () =>{
    delete users['101']

    expect(users[101]).toBeUndefined();
})
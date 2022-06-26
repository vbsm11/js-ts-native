function inreaseAge(u: UserType): void {
    u.age++
}

type UserType = {
    name: string
    age: number
    address: {
        city: string
    }
}

test('object reference test', () => {
    let user: UserType = {
        name: 'Vladimir',
        age: 24,
        address: {
            city: 'Seltso'
        }
    }

    inreaseAge(user);

    expect(user.age).toBe(25);

    const superman = user;

    superman.age = 1000;

    expect(user.age).toBe(1000);
})

test('array reference test', () => {
    let users = [
        {
            name: 'Vladimir',
            age: 24
        },
        {
            name: 'Mama',
            age: 52
        }
    ]

    let admins = users;

    admins.push({
        name: 'Bandyugan',
        age: 10
    })

    expect(users[2]).toEqual({name: 'Bandyugan', age: 10})
})

test('value type test', () => {
    let usersCount = 100;

    let adminsCount = usersCount;

    adminsCount = adminsCount + 1;

    expect(usersCount).toBe(100)
})

test('object in object reference test', () => {
    const address = {
        city: 'Seltso'
    }

    let user: UserType = {
        name: 'Vladimir',
        age: 24,
        address: address
    }


    const user2: UserType = {
        name: 'Natasha',
        age: 22,
        address: address
    }

    address.city = 'Msk';

    expect(user.address.city).toBe('Msk');
    expect(user.address.city).toBe(user2.address.city);
})

test('array in reference test', () => {
    const address = {
        city: 'Seltso'
    }

    const user = {
        name: 'Vova',
        age: 24,
        address: address
    }
    const user2 = {
        name: 'Mama',
        age: 52,
        address: address
    }

    const users = [user, user2, {name: 'Katya', age: 18, address: address}];

    const admins = [user, user2];

    admins[0].name = 'Vladimir'

    expect(users[0].name).toBe('Vladimir')
})

test('sort array test', () => {
    const letters = ['c', 'd', 'a', 'z', 'e'];

    pere(letters);

    expect(letters[0]).toBe('c')
})

function pere(letters: any) {
    const copy = [...letters];
    copy.sort();
    console.log(copy);
}
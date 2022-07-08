import {
    addNewBookToUser,
    makeHairstyle,
    moveUser,
    moveUserToOtherHouse, removeBook, updateBook, updateCompanyTitle, updateCompanyTitle2,
    upgradeUsersLaptop,
    UserType,
    UserWithBookType,
    UserWithLaptopType, WithCompaniesType
} from './10_01';

test('refrence type test', () => {
    let user: UserType = {
        name: 'Vladimir',
        hair: 24,
        address: {
            title: 'Seltso',
            house: 37
        }
    }
    const cutUser = makeHairstyle(user, 2);

    expect(user.hair).toBe(24)
    expect(cutUser.hair).toBe(12)
    expect(cutUser.address).toBe(user.address)
})

test('change address test', () => {
    let user: UserWithLaptopType = {
        name: 'Vladimir',
        hair: 24,
        address: {
            title: 'Seltso',
            house: 37
        },
        laptop: {
            title: 'ASUS'
        }
    }
    const movedUser = moveUser(user, 'Moscow');

    expect(user).not.toBe(movedUser)
    expect(user.address).not.toBe(movedUser.address)
    expect(user.laptop).toBe(movedUser.laptop)
    expect(movedUser.address.title).toBe('Moscow')
})

test('upgrade laptop to macbook', () => {
    let user: UserWithLaptopType = {
        name: 'Vladimir',
        hair: 24,
        address: {
            title: 'Seltso',
            house: 37
        },
        laptop: {
            title: 'ASUS'
        }
    }
    const userWithMacbook = upgradeUsersLaptop(user, 'Macbook');

    expect(user).not.toBe(userWithMacbook)
    expect(user.address).toBe(userWithMacbook.address)
    expect(user.laptop).not.toBe(userWithMacbook.laptop)
    expect(userWithMacbook.laptop.title).toBe('Macbook')
    expect(user.laptop.title).toBe('ASUS')
})

test('no edit books array', () => {
    let user: UserWithLaptopType & UserWithBookType = {
        name: 'Vladimir',
        hair: 24,
        address: {
            title: 'Seltso',
            house: 37
        },
        laptop: {
            title: 'ASUS'
        },
        books: ['css', 'html', 'js', 'react']
    }
    const userCopy = moveUserToOtherHouse(user, 39);

    expect(user).not.toBe(userCopy)
    expect(user.books).toBe(userCopy.books)
    expect(user.laptop).toBe(userCopy.laptop)
    expect(user.address).not.toBe(userCopy.address)
    expect(user.address.house).toBe(39)

})

test('add book to array', () => {
    let user: UserWithLaptopType & UserWithBookType = {
        name: 'Vladimir',
        hair: 24,
        address: {
            title: 'Seltso',
            house: 37
        },
        laptop: {
            title: 'ASUS'
        },
        books: ['css', 'html', 'js', 'react']
    }
    const userCopy = addNewBookToUser(user, ['ts', 'rest api']);

    expect(user).not.toBe(userCopy)
    expect(user.laptop).toBe(userCopy.laptop)
    expect(user.address).toBe(userCopy.address)
    expect(user.books).not.toBe(userCopy.books)
    expect(userCopy.books[4]).toBe('ts')
})

test('update js to ts', () => {
    let user: UserWithLaptopType & UserWithBookType = {
        name: 'Vladimir',
        hair: 24,
        address: {
            title: 'Seltso',
            house: 37
        },
        laptop: {
            title: 'ASUS'
        },
        books: ['css', 'html', 'js', 'react']
    }
    const userCopy = updateBook(user, 'js', 'ts');

    expect(user).not.toBe(userCopy)
    expect(user.laptop).toBe(userCopy.laptop)
    expect(user.address).toBe(userCopy.address)
    expect(user.books).not.toBe(userCopy.books)
    expect(userCopy.books[2]).toBe('ts')
})

test('remove js book', () => {
    let user: UserWithLaptopType & UserWithBookType = {
        name: 'Vladimir',
        hair: 24,
        address: {
            title: 'Seltso',
            house: 37
        },
        laptop: {
            title: 'ASUS'
        },
        books: ['css', 'html', 'js', 'react']
    }
    const userCopy = removeBook(user, 'js');

    expect(user).not.toBe(userCopy)
    expect(user.laptop).toBe(userCopy.laptop)
    expect(user.address).toBe(userCopy.address)
    expect(user.books).not.toBe(userCopy.books)
    expect(userCopy.books.length).toBe(3)
    expect(userCopy.books[2]).not.toBe('js')
})

test('update company', () => {
    let user: UserWithLaptopType & WithCompaniesType = {
        name: 'Vladimir',
        hair: 24,
        address: {
            title: 'Seltso',
            house: 37
        },
        laptop: {
            title: 'ASUS'
        },
        companies: [
            {id: 1, title: 'КТЗ'},
            {id: 2, title: 'BHZ'}
        ]
    }


    const userCopy = updateCompanyTitle(user, 1, 'KTZ');

    expect(user).not.toBe(userCopy)
    expect(user.laptop).toBe(userCopy.laptop)
    expect(user.address).toBe(userCopy.address)
    expect(user.companies).not.toBe(userCopy.companies)
    expect(userCopy.companies[0].title).toBe('KTZ');
})

test('edit companies', () => {

    const companies = {
        'Vladimir': [
            {id: 1, title: 'КТЗ'},
            {id: 2, title: 'BHZ'}
        ],
        'Kirill': [
            {id: 2, title: 'BHZ'}
        ]
    }

    const companiesCopy = updateCompanyTitle2(companies, 'Vladimir',1, 'KTZ');

    expect(companies['Vladimir']).not.toBe(companiesCopy['Vladimir'])
    expect(companies['Kirill']).toBe(companiesCopy['Kirill'])
    expect(companiesCopy['Vladimir'][0].title).toBe('KTZ')
})
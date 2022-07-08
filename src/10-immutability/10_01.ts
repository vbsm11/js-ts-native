export type UserType = {
    name: string
    hair: number
    address: {
        title: string
        house: number
    }
}

export type LaptopType = {
    title: string
}

export type UserWithLaptopType = UserType & {
    laptop: LaptopType
}

export type UserWithBookType = UserType & {
    books: Array<string>
}

export type WithCompaniesType = {
    companies: Array<{id: number, title: string}>
}

export type CompanyType = {
    [userName: string]: Array<{id: number, title: string}>
}

export function makeHairstyle(u: UserType, power: number) {
    return {
        ...u,
        hair: u.hair / 2
    };
}

export function moveUser(u: UserWithLaptopType, title: string) {
    return {
        ...u,
        address: {
            ...u.address,
            title: title}
    };
}

export function moveUserToOtherHouse(u: UserWithLaptopType & UserWithBookType , house: number) {
    return {
        ...u,
        address: {
            ...u.address,
            house: house}
    };
}

export function upgradeUsersLaptop(u: UserWithLaptopType, title: string) {
    return {
        ...u,
        laptop: {
            ...u.laptop,
            title: title}
    };
}

export function addNewBookToUser(u: UserWithLaptopType & UserWithBookType, books: Array<string>) {
    return {
        ...u,
        books: u.books.concat(books)
    };
}

export function updateBook(u: UserWithLaptopType & UserWithBookType, book1: string, book2: string) {
    return {
        ...u,
        books: u.books
            .map(b => b === book1
                ? book2
                : b
            )
    };
}

export function removeBook(u: UserWithLaptopType & UserWithBookType, book: string) {
    return {
        ...u,
        books: u.books
            .filter(b => b !== book)
    };
}

export function updateCompanyTitle(u: UserWithLaptopType & WithCompaniesType, number: number, title: string) {
    return {
        ...u,
        companies: u.companies
            .map(c => c.id === number? {...c, title: title}: c)
    };
}

export function updateCompanyTitle2(companies: CompanyType, userName: string, companyId: number, title: string) {
    return {
        ...companies,
        [userName]: companies[userName]
            .map(c => c.id === companyId ? {...c, title: title}: c)
    };
}

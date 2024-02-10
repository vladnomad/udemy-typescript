//@ts-nocheck
type FromPromise = Awaited<Promise<Promise<number>>>

interface User {
    name: string;
}

async function fetchUsers(): Promise<User[]> {
    const users: User[] = [
        {
            name: "Jack"
        },
        {
            name: "Alison"
        }
    ]
    
    return users
}

/* 
const users = fetchUsers()
type FetchUsersReturnType = Awaited<typeof users>
 */

type FetchUsersReturnType = Awaited<ReturnType<typeof fetchUsers>>

type UnwrappedPromise<T> = T extends Promise<infer Return> ? Return : T
type FetchUsersReturnType1 = UnwrappedPromise<ReturnType<typeof fetchUsers>>
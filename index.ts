// type FromPromise = Awaited<Promise<number>>; // Простой пример: результат будет number

type FromPromise = Awaited<Promise<Promise<number>>>; // Вложенный промис, Awaited распаковывает до number

interface User {
    name: string;
}

// Асинхронная функция возвращает промис с массивом User
async function fetchUsers(): Promise<User[]> {
    const users: User[] = [
        {
            name: "Alex",
        },
    ];

    // Возвращаем юзеров
    return users;
}

const users = fetchUsers(); // users имеет тип Promise<User[]>

// Извлекаем тип массива User после разрешения промиса
type FetchUsersReturnType = Awaited<ReturnType<typeof fetchUsers>>; // Результат: User[]

type UnwrappedPromise<T> = T extends Promise<infer Return> ? Return : T; // Кастомная утилита для распаковки промиса
type FetchDataReturnType = UnwrappedPromise<ReturnType<typeof fetchUsers>>; // Результат: User[]

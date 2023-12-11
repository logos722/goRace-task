import { User, Color } from '../types';

function generateRandomDate(from: Date, to: Date) {
  return new Date(
    from.getTime() +
      Math.random() * (to.getTime() - from.getTime()),
  );
}

export const generateMockUsers = (count: number): User[] => {
  const mockUsers: User[] = [];

  for (let i = 0; i < count; i++) {
    let randomDate = generateRandomDate(new Date(2023, 0, 2), new Date())
    console.log(randomDate.getMinutes)
    const mockUser: User = {
      color: Color.RED, // Здесь вы можете сделать цвет случайным или каким-то другим образом варьировать
      name: `User ${i + 1}`,
      speed: Math.floor(Math.random() * 100), // Пример случайной скорости
      time: Number(`${randomDate.getMinutes()}.${randomDate.getSeconds()}`), // Пример случайного времени
    };

    mockUsers.push(mockUser);
  }

  return mockUsers.sort(({time}, b) => time - b.time );
};
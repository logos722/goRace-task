import { User, Color } from '../types';

export const generateMockUsers = (count: number): User[] => {
  const mockUsers: User[] = [];

  for (let i = 0; i < count; i++) {
    const mockUser: User = {
      color: Color.RED, // Здесь вы можете сделать цвет случайным или каким-то другим образом варьировать
      name: `User ${i + 1}`,
      speed: Math.floor(Math.random() * 100), // Пример случайной скорости
      time: Math.floor(Math.random() * 10000), // Пример случайного времени
    };

    mockUsers.push(mockUser);
  }

  return mockUsers;
};
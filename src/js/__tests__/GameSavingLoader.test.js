import GameSavingLoader from "../GameSavingLoader";

test('sava obj', async () => { // Добавляем async
  const result = {
    id: 9,
    created: 1546300800,
    userInfo: {
      id: 1,
      name: "Hitman",
      level: 10,
      points: 2000,
    },
  };

  const saving = await GameSavingLoader.load(); // Ждем, пока Promise разрешится
  expect(saving).toEqual(result); // Сравниваем объекты
});
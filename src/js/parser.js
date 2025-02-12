export default function json(data) {
    return new Promise((resolve, reject) => {
      // эмуляция обработки ArrayBuffer
      setTimeout(() => {
        const str = String.fromCharCode.apply(null, new Uint16Array(data));
        const obj = JSON.parse(str); // Парсим строку в объект
        resolve(obj);
      }, 500);
    });
  }
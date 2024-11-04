// 送信するデータ
const notes = [
  {
    deckName: 'test',
    modelName: 'Basic',
    fields: {
      Front: 'front content',
      Back: 'back content',
    },
  },
];

const param = {
  notes,
};

const body = {
  action: 'addNotes',
  version: 6,
  params: param,
};

// リクエストオプション
const requestOptions = {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json', // 必要に応じてヘッダーを追加
  },
  body: JSON.stringify(body),
};

// fetchによるリクエスト送信
fetch('http://localhost:8765', requestOptions)
  .then((response) => {
    if (!response.ok) {
      throw new Error('Network response was not ok ' + response.statusText);
    }
    return response.json();
  })
  .then((data) => console.log(data))
  .catch((error) =>
    console.error('There has been a problem with your fetch operation:', error)
  );

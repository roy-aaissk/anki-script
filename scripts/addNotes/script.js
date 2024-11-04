// 送信するデータ
const deckName = 'test';
const modelName = 'Basic';

const param = {
  notes: setRequestBody(),
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

function setRequestBody() {
  const fs = require('node:fs');
  let text = fs.readFileSync(
    '/Users/sasakiryou/Documents/dev/anki-script/scripts/addNotes/data/1.json'
  );
  let notes = [];
  data = JSON.parse(text);
  data.map((item) => {
    let requestBody = {
      deckName: deckName,
      modelName: modelName,
      fields: {
        Front: item?.word,
        Back: item?.part_of_speech,
      },
    };
    notes.push(requestBody);
  });
  return notes;
}

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

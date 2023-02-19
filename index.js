const button1 = document.querySelector('.btn'); //! доступ к кнопке
button1.addEventListener('click', (event) => {
  event.preventDefault(); // чтоб страница не обновлялась

  const table = document.querySelector('.table'); // доступ к таблице
  //! Колонка 1
  const allColumn1 = document.querySelectorAll('.column1');
  const newColumn1 = document.createElement('div');
  newColumn1.className = 'column1';
  newColumn1.style.cssText = `
  border-radius:   0  0  0 8px;
  `;
  for (let i = 0; i < allColumn1.length; i += 1) {
    allColumn1[allColumn1.length - 1].style.cssText = `
    border-radius:  0 0px 0 0 ;`;
    allColumn1[0].style.cssText = `
    border-radius:  8px 0  0 0 ;`;
  }
  table.appendChild(newColumn1); // создали первую колонку

  //! Класс Word
  const newWord = document.createElement('div');
  newWord.className = 'word';
  newColumn1.appendChild(newWord);

  //! Числа
  const newNumber = document.createElement('div');
  newNumber.className = 'number';
  newWord.appendChild(newNumber);
  const allNumber = document.querySelectorAll('.number');
  newNumber.innerText = `${allNumber.length}.`; // нумерация

  //! Ввод текста при нажании на кнопку "Перевести" .btn1
  const newCyrillic = document.createElement('div');
  const addText = document.querySelector('.search').value;
  newCyrillic.className = 'cyrillic';
  newWord.appendChild(newCyrillic);
  newCyrillic.innerText = addText; // добавляем текст в новую строку колонки
  document.querySelector('.search').value = ''; // очищаем поле ввода текста

  //!  Обрезка слов в колонке
  function cutWord(str) {
    let result = '';
    if (str.length > 6) {
      result = `${str.slice(0, 6)}...`;
    }
    return result;
  }
  newCyrillic.innerText = cutWord(addText);

  //! Колонка 2
  const allColumn2 = document.querySelectorAll('.column2');
  const newColumn2 = document.createElement('div');
  newColumn2.className = 'column2';
  newColumn2.style.cssText = `
  border-radius:  0 0 8px 0;
  `;
  for (let i = 0; i < allColumn2.length; i += 1) {
    allColumn2[allColumn2.length - 1].style.cssText = `
    border-radius:  0 0px 0 0 ;`;
    allColumn2[0].style.cssText = `
    border-radius:  0 8px 0 0 ;`;
  }
  table.appendChild(newColumn2);

  const newTranslit = document.createElement('div');
  const addText2 = document.querySelector('.cyrillic');
  newTranslit.className = 'translit';
  newColumn2.appendChild(newTranslit);
  newTranslit.innerText = addText2; // добавляем текст в новую строку колонки
});

const button2 = document.querySelector('.btn2');
button2.addEventListener('click', (event) => {
  const table = document.querySelector('.table'); // доступ к таблице
  while (table.children.length > 2) {
    table.removeChild(table.lastChild); // очистить всё, кроме 2-х элементов
  }
});


// let newDiv = document.createElement("div");
// let newText = document.createTextNode("New ffdfgfgfds");
// newDiv.appendChild(newText);
// document.body.appendChild(newDiv);
//   function transliter(word) {
//     let answer = '';
//     const converter = {
//       а: 'a',
//       б: 'b',
//       в: 'v',
//       г: 'g',
//       д: 'd',
//       е: 'e',
//       ё: 'e',
//       ж: 'zh',
//       з: 'z',
//       и: 'i',
//       й: 'y',
//       к: 'k',
//       л: 'l',
//       м: 'm',
//       н: 'n',
//       о: 'o',
//       п: 'p',
//       р: 'r',
//       с: 's',
//       т: 't',
//       у: 'u',
//       ф: 'f',
//       х: 'h',
//       ц: 'c',
//       ч: 'ch',
//       ш: 'sh',
//       щ: 'sch',
//       ь: '',
//       ы: 'y',
//       ъ: '',
//       э: 'e',
//       ю: 'yu',
//       я: 'ya',

//       А: 'A',
//       Б: 'B',
//       В: 'V',
//       Г: 'G',
//       Д: 'D',
//       Е: 'E',
//       Ё: 'E',
//       Ж: 'Zh',
//       З: 'Z',
//       И: 'I',
//       Й: 'Y',
//       К: 'K',
//       Л: 'L',
//       М: 'M',
//       Н: 'N',
//       О: 'O',
//       П: 'P',
//       Р: 'R',
//       С: 'S',
//       Т: 'T',
//       У: 'U',
//       Ф: 'F',
//       Х: 'H',
//       Ц: 'C',
//       Ч: 'Ch',
//       Ш: 'Sh',
//       Щ: 'Sch',
//       Ь: '',
//       Ы: 'Y',
//       Ъ: '',
//       Э: 'E',
//       Ю: 'Yu',
//       Я: 'Ya',
//     };

//     for (let i = 0; i < word.length; ++i) {
//       if (converter[word[i]] == undefined) {
//         answer += word[i];
//       } else {
//         answer += converter[word[i]];
//       }
//     }
//     return answer;
//   }
//   newCyrillic.innerText = transliter(addText);

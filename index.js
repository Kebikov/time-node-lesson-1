const yargs = require('yargs');
const { getNote, addNote } = require('./node.controller');

//...регистрация команды
yargs.command({
    command: 'add',
// название команды
    describe: 'Добавление новой заметки в файл',
// описание команды
    builder: {
        title:{
            type: 'string',
            describe: 'Заголовок для заметки',
            demandOption: true
// обязательный параметр для работы
        }
    },
// поля которые нам необходимы
    handler({title}) {
        addNote(title);
        console.log('command > add = ', title);
    }
// функция для выполнения
});

yargs.command({
    command: 'list',
    describe: 'Вывод всех заметок',
    async handler() {
        const notes = await getNote();
        console.log(notes);
    }
});

yargs.parse();
// инициализация пакета


// [node index add] - запуск в [node.js] файлa [index] и вызев команды [add] из консоли
// [node index add --title=Hello] - присвоение значение переменной title
const fs = require('fs/promises');
const path = require('path');

const notesPath = path.join(__dirname, 'db.json');

async function addNote(title) {
    const notes = await getNote();

    const note = {
        title,
        id: Date.now().toString()
    }

    notes.push(note);
    await fs.writeFile(notesPath, JSON.stringify(notes));
}

async function getNote() {
    const notes = await fs.readFile(notesPath, {encoding: 'utf-8'});
// чтение происодит порционно и передается частями(буферами), в итоге получим данные в виде текста
    return Array.isArray(JSON.parse(notes)) ? JSON.parse(notes) : [];
}

module.exports = {
    addNote, getNote
}

// async function addNote() {
//     console.log('Run',);
//     const notes = await fs.readFile(notesPath, {encoding: 'utf-8'});

//     console.log(Array.isArray(JSON.parse(notes)));

//     const note = { title: 'Gen' };

    // notes.push(note);
    // await fs.writeFile(notesPath, JSON.stringify(notes));
// }

//addNote();
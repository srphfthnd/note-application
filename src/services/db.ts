import path from 'path';
import fs from 'fs';
import { Note } from '../model/notes.response';

const dataPath = path.join(__dirname, '..', 'data', 'data.json');

interface DB {
    notes: Note[];
}

function getTables(): DB {
    const data = fs.readFileSync(dataPath, 'utf8');
    return JSON.parse(data) as DB;
}

function getTable<Table extends keyof DB>(table: Table): DB[Table] {
    const tables = getTables();
    return tables[table];
}

function updateDb(cb: (data: DB) => DB) {
    const currentData = getTables();
    fs.writeFileSync(dataPath, JSON.stringify(cb(currentData), null, 2));
}

function updateTable<K extends keyof DB>(key: K, value: (data: DB[K]) => DB[K]) {
    const currentValue = getTable(key);
    const newValue = value(currentValue);
    updateDb((currentData) => ({ ...currentData, [key]: newValue}));

    return true;
}

export default { getTable, getTables, updateTable };
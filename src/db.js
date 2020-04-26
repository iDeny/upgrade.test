import Dexie from 'dexie';

const db = new Dexie("TodoDB");
db.version(1).stores({
	todos: '++'
});

export default db;
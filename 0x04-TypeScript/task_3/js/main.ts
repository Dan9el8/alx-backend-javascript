import { RowID, RowElement } from './interface';
import * as CRUD from 'crud.js';

const row: RowElement = {
  firstName: 'Guillaume',
  lastName: 'Salva',
};

const newRowID: RowID = CRUD.insertRow(row);
console.log(`Insert row ${newRowID}`, row);

const updatedRow: RowElement = { firstName: 'Guillaume', lastName: 'Salva', age: 23 };
CRUD.updateRow(newRowID, updatedRow);
console.log(`Update row ${newRowID}`, updatedRow);

CRUD.deleteRow(newRowID);
console.log(`Delete row id ${newRowID}`);

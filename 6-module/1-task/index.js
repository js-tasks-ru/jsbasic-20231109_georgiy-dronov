/**
 * Компонент, который реализует таблицу
 * с возможностью удаления строк
 *
 * Пример одного элемента, описывающего строку таблицы
 *
 *      {
 *          name: 'Ilia',
 *          age: 25,
 *          salary: '1000',
 *          city: 'Petrozavodsk'
 *      }
 *
 */
export default class UserTable {
  constructor(rows) {
    this.rows = rows || this.rows;
    this.elem = this.createTable();
  }

  createTable() {
    const table = document.createElement('table');
    table.innerHTML = `
      <thead>
        <tr>
          <th>Имя</th>
          <th>Возраст</th>
          <th>Зарплата</th>
          <th>Город</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        ${this.rows.map((row) => this.createTableRow(row)).join('')}
      </tbody>
    `;
    table.addEventListener('click', (event) => this.handleButtonClick(event));
    return table;
  }

  createTableRow(row) {
    const tr = document.createElement('tr');
    tr.innerHTML = `
      <td>${row.name}</td>
      <td>${row.age}</td>
      <td>${row.salary}</td>
      <td>${row.city}</td>
      <td><button data-action="remove">X</button></td>
    `;
    return tr.outerHTML;
  }

  handleButtonClick(event) {
    const target = event.target;
    if (target && target.dataset.action === 'remove') {
      target.closest('tr').remove();
    }
  }
}
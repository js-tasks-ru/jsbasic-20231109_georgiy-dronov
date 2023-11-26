function makeDiagonalRed(table) {
  const rows = table.rows

  for (let i = 0; i < rows.length; i++) {
    const cells = rows[i].cells

    for(let j = 0; j < cells.length; j++){
      //Проверка на диагональ
      if (i === j) {
        cells[j].style.backgroundColor = 'red'
      }
    }
  }
}

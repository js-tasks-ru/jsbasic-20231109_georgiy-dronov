function highlight(table) {
  const rows = table.getElementsByTagName('tr')

  for (let i = 1; i < rows.length; i++) {
    
    const cells = rows[i].getElementsByTagName('td')
    const availabilityCell = cells[3];
    const dataAvailable = availabilityCell.getAttribute('data-available')

    if (dataAvailable === 'true') {
      rows[i].classList.add('available')
    } else if (dataAvailable === 'false') {
      rows[i].classList.add('unavailable')
    } else {
      rows[i].setAttribute('hidden', '')
    }


    const genderCell = cells[2]
    const genderValue = genderCell.textContent

    if (genderValue === 'm') {
      rows[i].classList.add('male')
    } else if (genderValue === 'f') {
      rows[i].classList.add('female')
    }


    const ageCell = cells[1];
    const ageValue = parseInt(ageCell.textContent, 10)

    if (ageValue < 18) {
      rows[i].style.textDecoration = 'line-through'
    }
  }
}
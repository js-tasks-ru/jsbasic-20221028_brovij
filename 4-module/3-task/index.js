function highlight(table) {
  for (let tableRow of table.children[1].children) {
    if (tableRow.lastElementChild.dataset.available == null) tableRow.hidden = true

    if (tableRow.lastElementChild.dataset.available == 'true') tableRow.classList.add('available')

    if (tableRow.lastElementChild.dataset.available == 'false') tableRow.classList.add('unavailable')

    if (tableRow.children[2].innerHTML == 'm') {
      tableRow.classList.add('male')
    } else if(tableRow.children[2].innerHTML == 'f') {
      tableRow.classList.add('female')
    }

    if (Number(tableRow.children[1].innerHTML) < 18) tableRow.style = "text-decoration: line-through"
  }  
}

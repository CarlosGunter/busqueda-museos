// scrapping from https://sic.cultura.gob.mx/lista.php
const arrayE = document.querySelectorAll('.textolist')
const arrMuseos = []
arrayE.forEach(el => {
  let address = el.childNodes[3].textContent + ', ' + el.childNodes[5].textContent + ', ' + el.childNodes[7].textContent
  address = address.replace(/[\n]/g, ' ')
  address = address.replace(/[\s]{2,}/g, ' ')
  address = address.trim()
  arrMuseos.push({
    name: el.childNodes[1].innerText,
    address,
    url: 'https://sic.cultura.gob.mx/' + el.childNodes[1].childNodes[0].attributes[0].nodeValue
  })
})

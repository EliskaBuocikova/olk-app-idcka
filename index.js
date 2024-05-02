var letterToNumber = {
  a: 10,
  b: 11,
  c: 12,
  d: 13,
  e: 14,
  f: 15,
  g: 16,
  h: 17,
  i: 18,
  j: 19,
  k: 20,
  l: 21,
  m: 22,
  n: 23,
  o: 24,
  p: 25,
  q: 26,
  r: 27,
  s: 28,
  t: 29,
  u: 30,
  v: 31,
  w: 32,
  x: 33,
  y: 34,
  z: 35,
};

// funkce pro vygenerování kódu:
function generateCode(firstName, lastName, birthYear) {
  var code = '';

  // převedení písmen na čísla podle mapovací tabulky:
  var fullName = firstName.toLowerCase() + lastName.toLowerCase();
  for (var i = 0; i < fullName.length; i++) {
    var letter = fullName[i];
    if (letterToNumber[letter]) {
      code += letterToNumber[letter];
    } else {
      // pokud písmeno není v mapovací tabulce, použijeme 00:
      code += '00';
    }
  }

  // přidání roku narození na konec vygenerovaného kódu:
  code += birthYear;

  return code;
}

// // testování aplikace na statických datech:
// var firstName = 'Jan';
// var lastName = 'Novak';
// var birthYear = '1990';

// var code1 = generateCode(firstName, lastName, birthYear);
// console.log('Kód pro', firstName, lastName, 'je', code1);

// // Pokud zadáte stejné údaje, mělo by to vrátit stejný kód
// var code2 = generateCode(firstName, lastName, birthYear);
// console.log('Kód pro', firstName, lastName, 'je', code2);

// funkce pro použití a zobrazení číselného kódu vygenerovaného z hodnot zadaných do formuláře:
function generateAndDisplayCode() {
  var firstName = document.getElementById('jmeno').value;
  var lastName = document.getElementById('prijmeni').value;
  var birthYear = document.getElementById('datum_narozeni').value;

  var code = generateCode(firstName, lastName, birthYear);

  var kodContainer = document.getElementById('kod-container');
  kodContainer.innerHTML = `<p>ID: <strong> ${code} </strong></p>`;
}

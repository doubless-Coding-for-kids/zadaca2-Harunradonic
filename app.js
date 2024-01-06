//zadatak 2
let pozdraviNiz = [zdravo, zdravo, zdravo, zdravo, zdravo, zdravo, zdravo, zdravo,];

console.log(pozdraviNiz[7]);

//zadatak 3
let number = 8;

if (number > 0) {
  console.log("Broj 8 je veći od 0");
} else {
  console.log("Broj 8 nije veći od 0");
}

//zadatak 4
const temp = [1, 2, 3, 4, 5, 1, 2, 3, 4, 5, 1, 2, 3, 4, 5, 1, 2, 3, 4, 6];

if (temp[0] > 10) {
  console.log(temp[0]);
} else {
  console.log(temp[19] * 10);
}

//Bug u kodu je bio u console.log(temp[20] * 10). 
//20 ne postoji u nizu temp jer niz ima 20 elemenata.
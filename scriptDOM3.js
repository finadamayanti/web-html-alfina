// ===== Bagian A: getElementsByClassName =====
const buah = document.getElementsByClassName("buah");

console.log(buah);           // lihat korelasinya
console.log(buah.length);   // jumlah elemen
console.log(buah[0]);       // elemen pertama

// mengubah elemen tertentu
buah [3].style.color = "red";

// mengubah semua elemen dengan perulangan
for (let i =0; i <buah.length; i++) {
    buah[i].style.fontWight = "bold";
    buah[i].textContent = (i + 1) + ". " + buah[i].textContent;
}
 
// ===== Bagian B: getElementsByTagName =====
const semuaLi = document.getElementsByTagName("li");
 
console.log(semuaLi.length);
 
for (let i = 0; i < semuaLi.length; i++) {
  semuaLi[i].style.backgroundColor = "lightyellow";
}
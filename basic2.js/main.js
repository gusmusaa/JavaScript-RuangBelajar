//function

function pembagian(a, b){
    console.log(a / b)
  }
  
  pembagian(10, 5);
  
  function penjumlahan(a, b){
    console.log(a + b)
  }
  
  penjumlahan(10, 5);
  
  function pengurangan(a, b){
    console.log(a - b)
  }
  
  pengurangan(10, 5);
  
  function musa(num){
    if(num % 2 == 0){
      return('bilangan genap')
    }else{
      return('bilangan ganjil')
    }
  }
  
  const test = musa(10)
  console.log(test)
  
  
  const adNumber = (x, y) =>{
    console.log(x / y)
  }
  
  adNumber(100,4)
  
// Array
let miArr = ['dontol','denis','jarwo','sopo']

console.log('ngapain lu ' + miArr[0])

//pembalik urutan
miArr.reverse()

// urutan Array
console.table(miArr)

//panjang Array tersebut
console.log(miArr.length)

//menampilkan Array
for ( a = 0; a < miArr.length; a++) {
  console.log(miArr[a])
}

//pemanggilan Array multidimensi
let miArr2 = ['muso','musa','musi',['rahman','jahman','jukman']]

console.log(miArr2[3][1])
let tester = miArr2.reverse()
console.log(tester)

const sayur = ['kol','sawi','kangkung']
console.table(sayur)

//menambahkan karakter
sayur.push('wortel')
console.table(sayur)

//menghapus karakter terakhir
sayur.pop()
console.log(sayur)

//menambah karakter pertama
sayur.unshift('kacang panjang')
console.log(sayur)

//menghapus karakter pertama
sayur.shift()
console.log(sayur)

//gabungan Array
const text = sayur.join()
console.log(text)
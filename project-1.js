   let a = 10;
   let b = 20;

   const penjumlahan = (number1, number2) => {
    console.log(`Penjumlahan ${number1} + ${number2} = ${number1 + number2}`);
   }

   const pengurangan = (number1, number2) => {
    console.log(`Pengurangan ${number1} - ${number2} = ${number1 - number2}`);
   }
   
   const perkalian = (number1, number2) => {
    console.log(`Perkalian ${number1} x ${number2} = ${number1 * number2}`);
   }

   const pembagian = (number1, number2) => {
    console.log(`Pembagian ${number1} / ${number2} = ${number1 / number2}`);
   }

   const modulus = (number1, number2) => {
    console.log(`Modulus ${number1} % ${number2} = ${number1 % number2}`);
   }

   const perpangkatan= (number1, number2) => {
    console.log(`Pangkat ${number1}^${number2} = ${number1 ** number2}`);
   }

   penjumlahan(a,b)
   pengurangan(a,b)
   perkalian(a,b)
   pembagian(a,b)
   modulus(a,b)
   perpangkatan(a,b)
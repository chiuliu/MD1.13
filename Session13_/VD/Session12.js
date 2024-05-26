//Ex1: Cho người dùng nhập vào số n
// let Int = +prompt('Mời bạn nhập số tự nhiên n:');

// let tong = 0;
// //Tính tổng các dãy số a = 1+2+3+4+...+n
// for (let i = 1; i <= Int; i++) {
//     tong = tong + i;
//     console.log(tong)
// } 

// let tich = 1;
// // //Tính tích các dãy số B = 1.2.3.4....n
// for (let i = 1; i <= Int; i++) {
//     tich *=i;
//     console.log(tich)
// } 


//Tính toongrcacs dãy số C = 1^2 + 2^2 + 3^2 + ... + n^2
// let luyThua = 0;
// for (let i = 1; i <= Int; i++) {
//     luyThua = luyThua + i*i;
// } 
// console.log(luyThua);


//Ex2: In ra các dãy số từ 1 đến n
//trong quá trình in ra kiểm tra nếu số nào chia hết cho 3 thì in ra Fizz nếu chia hết cho 5 
//in ra Buzz nếu chia hết cho cả 3 và 5 thì in ra FizzBUZZ

// let Int = +prompt('Mời bạn nhập số tự nhiên n:');

// for (let i = 1; i <= Int; i++) {
//     if (i % 3 == 0 && i % 5 == 0) {
//         console.log('FizzBuzz')
//     } else if (i % 3 == 0) {
//         console.log('Fizz')
//     } else if (i % 5 == 0) {
//         console.log('Buzz')
//     } else {
//         console.log(i)
//     }
// }



let n = +prompt("Mời bạn nhập số nguyên dương bất kỳ: n>= 2");
for (let i = 1; i <= n; i++) {
    let star = "";
    for (let j = n - 1; j >= 1; j--) {
        star = star + " ";
    }
    for (let z = 1; z <= 2 * i - 1; z++) {
        star = star + "*";
    }
    document.write("<br/>");
    document.write(star);
}

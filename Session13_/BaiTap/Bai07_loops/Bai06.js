//Viết một ứng dụng hỏi người dùng mày có yêu tao không
//lặp đi lặp lại quá trình khi người dùng trả lời "yes"
//lặp đi lặp lại quá trình khi người dùng trả lời "no"

// while(true) {
//     let answer = prompt("Mời bạn nhập : 'Bạn có yêu tôi không:'");
//     if (answer === 'có') {
//         console.log('Chúc mừng bạn đã yêu tao');
//         break;
//     } else if (answer === 'không') {
//         console.log('Chúc mừng bạn đã không yêu tao');
//         break;
//     } else {
//         console.log('Mời bạn nhập lại');
//     }
// }\


// let total = 0;
// let N = 5;
// for (let i = 1; i <= 5; i++) {
//     total = total + N;
//     N = N + 5;
// }
// console.log(total);


// //Nhập số nguyên dương bất kỳ. Viết chương trình vẽ tam giác cân "*" rỗng có chiều cao n
// let n = +prompt("Mời bạn nhập số nguyên dương bất kỳ: n>= 2");
// for (let i = 1; i <= n; i++) {
//     let star = "";
//     for (let j = n - 1; j >= 1; j--) {
//         star = star + " ";
//     }
//     for (let z = 1; z <= 2 * i - 1; z++) {
//         star = star + "*";
//     }
//     console.log(star);
// }

//Vẽ hình chữ nhật rỗng:;

// for (let i = 0; i <= 8; i++) {
//     if (i === 1 || i === 8) {
//         for (let j = 1; j <= 20; j++) {
//             document.write("*");
//         }
//     } else {
//         if (i === 1 || i === 20) {
//             for (let j = 1; j <= 20; j++) {
//                 document.write("*");
//             }
//         } else {
//             document.write("&nbsp;");
//         }
//     }
//     document.write("<br/>");
// }
//Tính tổng 30 số đầu tiên chia hết cho 5

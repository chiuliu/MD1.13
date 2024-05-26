//Viết chương trình hiển thị bình phương của số chẵn từ 2 🡪 N.
//N nhập từ người dùng. Nếu N < 2 hoặc N > 100, thông báo người dùng nhập lại.
let n = +prompt("Mời bạn nhập số n");

if (n < 2 || n > 100) {
    alert("N nhập vào không hợp lệ");
}
else{

}
for (let i = 2; i <= n; i++) {
    if (i % 2 === 0) {
        console.log(`${i} x ${i} = ${i * i}`);
    }
};

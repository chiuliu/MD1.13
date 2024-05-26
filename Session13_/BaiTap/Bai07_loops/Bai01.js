// Viết chương trình hiển thị bình phương của số nguyên từ 2 
//🡪 N nhưng hiển thị các kết quả chia hết cho 2.. N nhập từ người dùng.
// Nếu N < 2 hoặc N > 100, thông báo người dùng nhập lại.
var n = +prompt('Mời bạn nhập n');
if (n < 2 || n > 100) {
    alert('N nhập vào không hợp lệ');    
}
for (let i = 2; i <= n; i++) {
    if (i % 2 == 0) {
        alert(`${i} x ${i} = ${i * i}`);
    }
}

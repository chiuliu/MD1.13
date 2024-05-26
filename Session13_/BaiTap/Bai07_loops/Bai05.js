// Viết chương trình kiểm tra số N có phải là số hoàn hảo hay không? N nhập từ browser

var n = +prompt('Mời bạn nhập số nguyên n:');
var sum = 0;
for (var i = 1; i < n; i++) {
    if (n % i == 0) {
        sum += i;
    }
}

if (sum == n) {
    alert(`${n} là số hoàn hảo`);
}

else {
    alert(`${n} không phải là số hoàn hảo`);
}



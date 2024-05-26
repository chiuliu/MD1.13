//Viết chương trình hiển thị các số từ 1 🡪 100. Nếu số đó chia hết cho 3 thì hiển thị là “Fizz”, nếu số đó chia hết cho 5 thì hiển thị là “Buzz”. Nếu số đó chia hế cho 3 và 5 thì hiển thị “FizzBuzz”.Viết chương trình hiển thị các số từ 1 🡪 100. Nếu số đó chia hết cho 3 thì hiển thị là “Fizz”, nếu số đó chia hết cho 5 thì hiển thị là “Buzz”. Nếu số đó chia hế cho 3 và 5 thì hiển thị “FizzBuzz”.
let n  = +prompt('Mời bạn nhập số từ 1 đến 100:');

for (let i = 1; i <= n; i++) {
    
    if (i % 3 == 0 && i % 5 == 0) {
        console.log('FizzBuzz')
    } else if (i % 3 == 0) {
        console.log('Fizz')
    } else if (i % 5 == 0) {
        console.log('Buzz')
    } else {
        console.log(i)
    }
}
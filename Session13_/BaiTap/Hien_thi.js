//  //Khai báo biến số nguyên numbers và nhập cho nó một giá trị từ bàn phím để lưu số lượng số nguyên tố cần in ra.
//  var numbers = parseInt(prompt("Nhập số lượng số nguyên tố cần in ra: "));
//  // Khai báo biến count và gán cho nó giá trị 0, biến này để đếm xem số lượng lượng số nguyên tố cần in ra đã bằng numbers hay chưa.
//  var count = 0;
//  // Biến cờ hiệu
//  var flag = true;
//  // Nếu n bé hơn 2 tức là không phải số nguyên tố
//  if (numbers < 2) {
//      flag = false;
//  }
//  else if (numbers == 2) {
//      flag = true;
//  }
//  else if (numbers % 2 == 0) {
//      flag = false;
//  }
//  else {
//      // lặp từ 3 tới n-1 với bước nhảy là 2 (i+=2)
//      for (var i = 3; i < Math.sqrt(numbers); i += 2) {
//          if (numbers % i == 0) {
//             flag = false;
//             break;
//          }
//      }
//  }


//  // Kiểm tra biến flag
//  if (flag == true) {
//     alert(numbers + " là số nguyên tố");
//  }
//  else {
//      alert(numbers + " không phải là số nguyên tố");
//  }


let N = 0;

let X = 2 ;

while(N < 20 ) {
    let falg = true;
    for(let i = 2;i<= Math.sqrt(X); i++) {
        if(X % i === 0){
            falg = false;
            break;
        }
    }

    if(falg === true) {
        console.log( `Số nguyên tố  thứ ${N} và ${X}`);
        N++;
    }
    X++;
}
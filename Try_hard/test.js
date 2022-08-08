//
//     var tong;
//     var dem=1;
//     var i=1;
//
//     while (dem<=30){
//         if(i%7==0)
//         {
//             dem+=1;
//             tong+=i;
//             document.write(i + "-")
//         }
//         i+=1;
//     }
// }

    // const number = parseInt(prompt('Enter a positive number: '));
    // let n1 = 0, n2 = 1, nextTerm;
    //
    // document.write('Fibonacci Series:');
    // document.write(n1 + ";"); // print 0
    // document.write(n2 + ";"); // print 1
    //
    // nextTerm= n1 + n2;
    //
    // for( let dem = 1; dem <= number;dem++)
    // {
    //     // print the next term
    //     document.write(nextTerm + ";");
    //
    //     n1 = n2;
    //     n2 = nextTerm;
    //     nextTerm = n1 + n2;
    //     nextTerm
    //
    // }






// for (let i = 1; i<=100 ;i++){
//     if(i % 3 === 0){
//         document.write("Fizz" + ";");
//     }else{
//         if(i % 5 === 0){
//             document.write("Buzz" + ";")
//         }else {
//             if(i % 15 === 0){
//                 document.write("FIZZ BUZZ")
//             } else {
//                 document.write(i + "\n");
//             }
//         }
//
//     }
//
//
// }

// function {
//     const n = parseInt(prompt('Enter a positive number: '));
//     let i,j;
//
//     let Number = [1,2,3,4,5,6,7];
//     for(i=0; i<n;i++){
//         document.write(Number[i] + ';');
//
//     }
//     let  tempSort;
//
//     for ( i = 0; i < n - 1; i++) {
//         for ( j = i + 1; j <= n - 1; j++) {
//             if (Number[i] < Number[j]) {
//                 tempSort = Number[i];
//                 Number[i] = Number[j];
//                 Number[j] = tempSort;
//             }
//         }
//     }
//     document.write("Mảng sau khi sắp xếp là: ");
//     for (let i = 0; i < n; i++) {
//         document.write(Number[i] + ';');
//     }
// }

// const N = parseInt(prompt('Enter a positive number: '));
// // let i;
// // let j;
// // let mang = new Array[i][j];
// // for(i=0;i<=N;i++){
// //     for (j=0 ;j<=i;j++){
// //         mang[i][j] = prompt("Hay nhap mang can nhap:");
// //     }
// // }
// //
// // for(i=0;i<=N;i++) {
// //     for (j = 0; j <= i; j++) {
// // document.write(mang[i][j] + " ;");
// //     }
// // }
// //
// //
// //bai1
// {
//
//  let num1 = parseInt(prompt("Điền điểm Vật lý:"));
//  let num2 = parseInt(prompt("Điền điểm Hóa Học:"));
//  let num3 = parseInt(prompt("Điền điểm Sinh học:"));
//
//   let DiemTb =((num1 + num2 + num3) / 3) ;
//   let tong = (num1+ num2 + num3);
//   alert("Điểm trung bình " + DiemTb);
//   alert(tong);
//  }

//bai 2
// {let num1;
//  let num2;
//  num1 = prompt("Hãy nhận độ C");
//  num2 = num1*1.8 + 32;
//  alert("ĐỘ F được chuyển là" + num2);}

// bai 3
//  let R;
//  R = prompt('Hãy nhận bán kình hình tròn');
//  let S = R*R*3.14;
//  alert("Diện tích hình tròn la:" + S);
//  let C = 2*R*3.14;
//  alert("Chu vi hình tròn là: " + C);

// Bai5


// var num1 = document.getElementById("num1").value;
// var num2 = document.getElementById("num2").value;

function cong(){
    var num1 = parseInt(document.getElementById("num1").value);
    var num2 = parseInt(document.getElementById("num2").value);
    let tong = num1 + num2;
    alert("tổng là :" + tong);
}
function tru(){
    var num1 = parseInt(document.getElementById("num1").value);
    var num2 = parseInt(document.getElementById("num2").value);
    let hieu = num1 - num2;
    alert("Hiệu là :" + hieu);
}
function nhan(){
    var num1 = parseInt(document.getElementById("num1").value);
    var num2 = parseInt(document.getElementById("num2").value);
    let tich = num1 * num2;
    alert("Tich là :" + tich);
}
function chia(){
    var num1 = parseInt(document.getElementById("num1").value);
    var num2 = parseInt(document.getElementById("num2").value);
    let thuong = num1 / num2;
    alert("Thương là :" + thuong);
}





function sosanh(){
    var num1 = parseInt(document.getElementById("num1").value);
    var num2 = parseInt(document.getElementById("num2").value);
    if (num1 > num2) {

        alert('số thứ nhất lớn hơn số thứ hai');
    } else {
        if (num1 == num2 ) {
            alert('số thứ nhất bằng số thứ hai');
        }
        else { alert('số thứ nhất nhỏ hơn số thứ hai');}

    }


}
function zero(){
    var num1 = parseInt(document.getElementById("num1").value);
    if (num1 > 0) {

        alert('số thứ nhất lớn hơn 0');
    } else {
        if (num1 == 0 ) {
            alert('số thứ nhất bang 0');
        }
        else { alert('số thứ nhất nhỏ hơn 0');}

    }
}
function tuoi(){
    var num1 = parseInt(document.getElementById("num1").value);
    if (num1 > 0 && num1 < 120) {

        alert('So tuoi phu hop la 1 con nguoi');
    } else {

        alert('So tuoi khong phu hop la 1 con nguoi');
    }
}
function Max(){
    var num1 = parseInt(document.getElementById("num1").value);
    var num2 = parseInt(document.getElementById("num2").value);
    var num3 = parseInt(document.getElementById("num3").value);

    if (num1 > num2 && num1 > num3){
        alert('So lon nhat la' + num1);
    }else {
        if (num3 > num2 && num3 > num2){
            alert('So lon nhat la' + num3);
        }else {alert('So lon nhat la' + num2);}
    }
}
function Hocluc(){
    var num1 = parseInt(document.getElementById("num1").value);
    var num2 = parseInt(document.getElementById("num2").value);
    var num3 = parseInt(document.getElementById("num3").value);
    let GPA = (num3 + num2 + num1)/3;
    if (GPA <= 5) {

        alert('Hoc Luc TB ');
    } else {
        if (GPA > 5 && GPA < 8 ) {
            alert('Hoc Lực Khá');
        }
        else { alert('Học lực giỏi');}

    }
}
function tamgiac(){
    var num1 = parseInt(document.getElementById("num1").value);
    var num2 = parseInt(document.getElementById("num2").value);
    var num3 = parseInt(document.getElementById("num3").value);

  if( num1+num2>num3 && num2 + num3> num1 && num1+num3>num2){
      alert('Là 1 tam giác')
  }else {alert('Không phải là tam giác')}


}
function ptn2(){
    var num1 = parseInt(document.getElementById("num1").value);
    var num2 = parseInt(document.getElementById("num2").value);
    var num3 = parseInt(document.getElementById("num3").value);
    let delta,x1,x2;
    delta=(num2*num2 - 4*num1*num3)
    if(delta ==0){
        x1=-num2/(2*num1) ;
        x2=num2/(2*num1) ;

        alert("phuong trinh co nghiem kep" + x1 +' ' + x2);

    }
    else {if(delta<0){
        alert("phuong trinh vo nghiem");
    }
    else{
        x1=(- num2- Math.sqrt(delta))/(2*num1);
        x2=(- num2+ Math.sqrt(delta))/(2*num1);
        alert("phuong trinh co hai nghiem"  + x1 +' ' + x2);


    }
    }

}



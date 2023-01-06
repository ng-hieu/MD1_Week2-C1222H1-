function plus (){
    let a = parseFloat(document.getElementById("box1").value);
    let b = parseFloat(document.getElementById("box2").value);
    console.log(a);
    console.log(b);
    let result;
    result = a + b;
    document.getElementById("result").innerHTML="Kết quả là: "+ result;
    console.log(result);
}
function minus (){
    let a = parseFloat(document.getElementById("box1").value);
    let b = parseFloat(document.getElementById("box2").value);
    console.log(a);
    console.log(b);
    let result;
    result = a - b;
    document.getElementById("result").innerHTML="Kết quả là: "+ result;
    console.log(result);
}
function multiply (){
    let a = parseFloat(document.getElementById("box1").value);
    let b = parseFloat(document.getElementById("box2").value);
    console.log(a);
    console.log(b);
    let result;
    result = a * b;
    document.getElementById("result").innerHTML="Kết quả là: "+ result;
    console.log(result);
}
function div (){
    let a = parseFloat(document.getElementById("box1").value);
    let b = parseFloat(document.getElementById("box2").value);
    console.log(a);
    console.log(b);
    let result;
    result = a / b;
    document.getElementById("result").innerHTML="Kết quả là: "+ result;
    console.log(result);
}


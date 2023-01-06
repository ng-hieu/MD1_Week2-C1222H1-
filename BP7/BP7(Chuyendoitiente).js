function Changemoney(){
    let Amount = document.getElementById("Amount").value;
    console.log(Amount);
    let From = document.getElementById("Selection1").value;
    console.log(From);
    let To = document.getElementById("Selection2").value;
    console.log(To);
    let numbers =23000
    let Result;
    if (From === "VND" && To === "USD"){
        Result = Amount/numbers;
        document.getElementById("Result").innerHTML="Sau khi quy đổi: " + Result + " USD";
    }
    else if (From === "USD" && To === "VND"){
        Result = Amount*numbers;
        document.getElementById("Result").innerHTML="Sau khi quy đổi: " + Result + " VND";
    }
    else document.getElementById("Result").innerHTML="Giá trị vẫn vậy, ngu vl, đổi làm cl gì???";
    console.log(Result);
}
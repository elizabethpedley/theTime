var HOUR = 8;
var MINUTE = 50;
var PERIOD = "AM";

if(MINUTE < 30){
    if(PERIOD === "AM"){
        console.log("It's just after " + HOUR + ' in the morning.');
    }else{
        console.log("It's just after " + HOUR + ' at night.');
    }
}else{
    if(PERIOD === "AM"){
        console.log("It's just before " + (HOUR+1) + ' in the morning.');
    }else{
        console.log("It's just before " + (HOUR+1) + ' at night.');
    }
}

var display = document.getElementById('display')
var time = new Date()
var hours = time.getHours()
var minutes = time.getMinutes()
var seconds = time.getSeconds()

setInterval(function(){
    var time = new Date()
var hours = time.getHours()
var minutes = time.getMinutes()
var seconds = time.getSeconds()
var meridiem = "AM"
if(hours == 0){
    hours = 12
} else if(hours < 10){
    hours = "0" + hours
} else if(hours > 12){
    meridiem = "PM"
    hours = hours - 12
}
if(minutes < 10){
    minutes = "0" + minutes
}
if(seconds < 10){
    seconds = "0" + seconds
}
display.innerHTML = (hours + " : " +  minutes + " : " + "<span style='color:#d90b04'>" + seconds + '</span>' + " " + meridiem ) 
}, 1000)

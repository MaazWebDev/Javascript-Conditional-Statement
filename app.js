let trafficSignals = prompt("Enter the one colour of traffic singal");
let redColor = "Must Stop" ;
let yellowColor = "Ready To Move" ;
let greenColor = "Move now" ;

document.write("<h2>Signal is " , trafficSignals , "</h2>");

if(trafficSignals === "red"){
    document.write("<h3>" , redColor ,"</h3>")
    document.write('<img src="download.jpeg">')
}
else if(trafficSignals === "yellow"){
    document.write("<h3>" , yellowColor , "</h3>")
    document.write('<img src="download.png">')
}
else if(trafficSignals === "green"){
    document.write("<h3>" , greenColor , "</h3>")
    document.write('<img src="download (1).png">')
}
else{
    alert("Colour must be red , yellow or green !")
}
function attendeeChange(){
    let seat=document.getElementById("seat").value;
    let attendee=document.querySelector(".attendee");
    
    attendee.textContent=seat;
   
}

attendeeChange()


document.getElementById("asks").addEventListener("click", function(event){
    event.preventDefault();
    messages = document.getElementById("nums");
    why = document.getElementById("why").value;
    names = 'Noah Birhanu' ;
    email = "noahbirhanu1921@gmail.com";

        if(messages.value === "" ){
            alert("Complete all field")
        }
        else{
            const templateParams = {
                to_name: "Noah",
                from_name: names,
                message:"Send me " + messages.value + " Birr " + why,
                reply_to: email
            }
            emailjs.init('eMFp3viaQME2suxva');
            emailjs.send('service_emails', 'template_nnb23', templateParams)
            alert("sent")
            }

    })
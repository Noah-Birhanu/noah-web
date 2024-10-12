document.getElementById("sends").addEventListener("click", function(event){
    event.preventDefault();
    messages = document.getElementById("messages");
    names = document.getElementById("yourname");
    email = document.getElementById("email");

        if(names.value === "" || messages.value === "" || email.value === "" ){
            alert("Complete all field")
        }
        else{
            const templateParams = {
                to_name: "Noah",
                from_name: names.value,
                message: messages.value,
                reply_to: email.value
            }
            emailjs.init('eMFp3viaQME2suxva');
            emailjs.send('service_emails', 'template_nnb23', templateParams)
            alert("sent")
            }

    })

function clearall(){
    messages = document.getElementById("messages");
    names = document.getElementById("names");
    email = document.getElementById("email");

    event.preventDefault();
    messages.value = "";
    names.value = "";
    email.value ="";
}
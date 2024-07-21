function loading(){
    event.preventDefault();
    let username = document.getElementById("username");
    let password =  document.getElementById("password");
    let text = document.getElementById("heading");
    
     

    if (username.value ==="youtube") {
        if (password.value ==="youtube22") {
           window.open("https://www.youtube.com", "_blank")
            text.style.color = "rgb(71, 35, 0)";
            text.textContent = "";
            username.style.borderColor = "none";
            password.style.borderColor = "none";
        }
    }
    
    if (username.value ==="keyboard") {
        if (password.value ==="monkey") {
            window.open("https://monkeytype.com/", "_blank")
            text.style.color = "rgb(71, 35, 0)";
            text.textContent = "";
            username.style.borderColor = "none";
            password.style.borderColor = "none";

        }
    }

    if (username.value === "chat Gpt") {
        if (password.value === "chatpoe") {
            window.open("https://poe.com/chat/3f1f59h7uh1ng7df4m2")
            text.style.color = "rgb(71, 35, 0)";
            text.textContent = "";
            username.style.borderColor = "none";
            password.style.borderColor = "none";
        }
    }  

    if (username.value ==="leetcode") {
        if (password.value ==="leetcode22") {
           window.open("https://www.leetcode.com", "_blank")
            text.style.color = "rgb(71, 35, 0)";
            text.textContent = "";
            username.style.borderColor = "none";
            password.style.borderColor = "none";
        }
    }
    
    if (username.value ==="football") {
        if (password.value ==="footbal") {
            window.open("https://www.808ball.com/", "_blank");
            text.style.color = "rgb(71, 35, 0)";
            text.textContent = "";
            username.style.borderColor = "none";
            password.style.borderColor = "none";
        }
    } 
    
    if (username.value =="sololearn") {
        if (password.value ==="python") {
            window.open("https://sololearn.com/");
            text.style.color = "rgb(71, 35, 0)";
            text.textContent = "";
            username.style.borderColor = "none";
            password.style.borderColor = "none";
        }
    }  

    if (username.value =="google") {
        if (password.value ==="search") {
            window.open("https://www.google.com", "_blank");
            text.style.color = "rgb(71, 35, 0)";
            text.textContent = "";
            username.style.borderColor = "none";
            password.style.borderColor = "none";
        }
    } 

    if (username.value =="telegram") {
        if (password.value ==="message") {
            window.open("https://web.telegram.org/k/", "_blank");
            text.style.color = "rgb(71, 35, 0)";
            text.textContent = "";
            username.style.borderColor = "none";
            password.style.borderColor = "none";
        }
    }  


    if (username.value ==="school") {
        if (password.value ==="noah1921") {
            window.open("https://eeaacademy.com/loginpage", "_blank");
            text.style.color = "rgb(71, 35, 0)";
            text.textContent = "";
            username.style.borderColor = "none";
            password.style.borderColor = "none";
                
        }  
    }
    
    if (username.value ==="github") {
        if (password.value ==="steps") {
            window.open("https://github.com", "_blank");
            text.style.color = "rgb(71, 35, 0)";
            text.textContent = "";
            username.style.borderColor = "none";
            password.style.borderColor = "none";
                
        }  
    }

    
    if (username.value ==="github") {
        if (password.value ==="githubme") {
            window.open("https://github.com/Noah-Birhanu/noah-web", "_blank");
            text.style.color = "rgb(71, 35, 0)";
            text.textContent = "";
            username.style.borderColor = "none";
            password.style.borderColor = "none";
                
        }  
    }

    if (username.value ==="instagram") {
        if (password.value ==="fikernew") {
            window.open("https://instagram.com", "_blank");
            text.style.color = "rgb(71, 35, 0)";
            text.textContent = "";
            username.style.borderColor = "none";
            password.style.borderColor = "none";
                
        }  
    }
    if (username.value ==="facebook") {
        if (password.value ==="dad!mom") {
            window.open("https://facebook.com/", "_blank")
            text.style.color = "rgb(71, 35, 0)";
            text.textContent = "";
            username.style.borderColor = "none";
            password.style.borderColor = "none";

        }
    }

}

function clears(){
    event.preventDefault();
    let username = document.getElementById("username");
    let password =  document.getElementById("password");
    let text = document.getElementById("heading");
    username.value = "";
    password.value = "";
    text.textContent = "";
}

function change(){
    let thepass = document.getElementById("password");
    let checking = document.getElementById("check1");
    if (checking.checked === true) {
        thepass.type = "text";
    } else {
        thepass.type = "password";
    }
}

function clears(){
    event.preventDefault();
    let username = document.getElementById("username");
    let password =  document.getElementById("password");
    let text = document.getElementById("heading");
    username.value = "";
    password.value = "";
    text.textContent = "";
}

function change(){
    let thepass = document.getElementById("password");
    let checking = document.getElementById("check1");
    if (checking.checked === true) {
        thepass.type = "text";
    } else {
        thepass.type = "password";
    }
}
var contain = document.getElementById("container");
    var contents = document.getElementById("content");
    var alls = document.getElementById("body");
    var boxs = document.getElementById("forms");
    var tim = document.getElementById("hour");
    var searchbox = document.getElementById("searching")
    //var years = document.getElementById("yea");

    function position(){
        if (contents.style.marginLeft === "55%") {
            contents.style.marginLeft = "0%";
            contents.style.backgroundColor = "rgb(20, 23, 23)";
            alls.style.backgroundColor = "rgb(14, 30, 57)";
            boxs.style.backgroundColor = "rgb(14, 30, 57)";
            boxs.style.color = "white";
            searchbox.style.backgroundColor = "rgb(14, 30, 57)";
            searchbox.style.color = "white";
            tim.style.backgroundColor = "rgb(14, 30, 57)";
            tim.style.color = "rgb(202, 134, 80)";
            contain.style.backgroundColor = "rgb(190, 190, 190)";

        } else {
            contents.style.marginLeft = "55%";
            contents.style.backgroundColor = "rgb(200, 200, 200)";
            boxs.style.backgroundColor = "rgb(49, 82, 250)";
            boxs.style.color = "rgb(76, 21, 0)";
            searchbox.style.backgroundColor = "rgb(49, 82, 250)";
            searchbox.style.color = "rgb(76, 21, 0)";
            alls.style.backgroundColor = "rgb(49, 82, 250)";
            //years.style.backgroundColor = "rgb(49, 82, 250)";
            tim.style.backgroundColor = "rgb(49, 82, 250)";
            tim.style.color = "rgb(73, 21, 0)";
            //years.style.color = "rgb(73, 21, 0)";
            contain.style.backgroundColor = "black";
            
        }
    }

let youtr = "https://www.youtube.com/watch?v=tVH4E0CQrK4";
function times(){
    let hour =  document.getElementById("hour")
    let date = new Date()
    let b = date.getMinutes();
    let a = date.getHours();
    let c = date.getSeconds();
    let d = date.getMilliseconds();
    let e = date.getDay();
    hour.textContent = (a)+":"+b+":"+c;
}
setInterval(times, 1)
function year(){
    let months = ["January","February","March","April",
    "May","June","July","Augest","September","October","November",
    "December"]

    let days = ["", "Monday", "Tuesday", "Wednesday", "Thursday",
            "Friday", "Saturday", "Sunday"]

    let data = new Date();
    let day = data.getDay();
    let mun = data.getMonth();
    let themonth = months[mun];
    let theday = days[day];
    let fulls = data.getFullYear();
    let ment = document.getElementById("yea");
    ment.textContent = theday+", "+themonth+" "+day+", "+fulls;


}
var url = document.getElementById("urls");
    var mainurl = document.getElementById("mainurl")
    function searchforgoogle(){
        event.preventDefault();

        if(mainurl.value === ""){
        var opening = "https://www.google.com/search?q=" + url.value;
        window.open(opening)
        }

        if(url.value === ""){
            window.open(mainurl.value)
        }

        if(mainurl.value ===""){
            if(url.value === ""){
                let noah = 100;
            }
        }
        else{
            let nnabue = 100;
        }
    }
    function clearurl(){
        event.preventDefault()
        url.value = "";
        mainurl.value = "";
    }

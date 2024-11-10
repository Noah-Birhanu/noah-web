var full = document.getElementById("mainhtml");
var body = document.getElementById("body");
var height = document.getElementById("height");
var energy = document.getElementById("energy");
var speed = document.getElementById("speed");
var acceleration = document.getElementById("acce");
var force = document.getElementById("force");
var power = document.getElementById("power");
var pressure = document.getElementById("pressure");
var theformula = document.getElementById("theformula");
var formula = document.getElementById("formula");
var calculater_div = document.getElementById("calculation");
var input_field = document.createElement("input");
var second_input_field = document.createElement("input");
var third_input_field = document.createElement("input");
var kenitic_energy = document.createElement("button");
var pont_energy = document.createElement("button");
var calculate_button = document.createElement("button");
var result_field = document.createElement("h2");

kenitic_energy.id = "ke";
pont_energy.id = "pe";
calculate_button.id = "calculate_b"
third_input_field.id = "third_input_field";
second_input_field.id = "second_input_field"; 

//height
height.addEventListener('click', function (){
    energy.style.backgroundColor = "rgb(0, 255, 0)";
    speed.style.backgroundColor = "rgb(0, 255, 0)";
    acceleration.style.backgroundColor = "rgb(0, 255, 0)";
    force.style.backgroundColor = "rgb(0, 255, 0)";
    power.style.backgroundColor = "rgb(0, 255, 0)";
    pressure.style.backgroundColor = "rgb(0, 255, 0)";
    height.style.backgroundColor = "rgb(0, 155, 0)";

    height.style.boxShadow = "0px 0px 0px black";
    energy.style.boxShadow = "3px 5px 5px rgb(151, 151, 151)";
    speed.style.boxShadow = "3px 5px 5px rgb(151, 151, 151)";
    acceleration.style.boxShadow = "3px 5px 5px rgb(151, 151, 151)";
    force.style.boxShadow = "3px 5px 5px rgb(151, 151, 151)";
    power.style.boxShadow = "3px 5px 5px rgb(151, 151, 151)";
    pressure.style.boxShadow = "3px 5px 5px rgb(151, 151, 151)";

    second_input_field.remove();
    third_input_field.remove();
    kenitic_energy.remove();
    pont_energy.remove();
    calculater_div.appendChild(theformula);
    calculater_div.appendChild(formula);
    theformula.textContent = "The formula is ";
    formula.textContent = "1/2*9.81*sqr(time)";
    calculate_button.textContent = "Calculate";
    calculater_div.appendChild(result_field);
    calculater_div.appendChild(input_field);
    input_field.value = "";
    result_field.textContent = "";
    input_field.placeholder = "Time(s)";
    calculater_div.appendChild(calculate_button);

    calculate_button.addEventListener('click',function (){
        if(input_field.value === ""){
            result_field.style.color = "red";
            result_field.textContent = "Complete the field";
        }
        else{
            result_field.style.color = "white";
            results = 1/2*9.81*(input_field.value)**2;
            result_field.textContent = results + "m";
        }
    })
})

//energy
energy.addEventListener('click', function (){
    speed.style.backgroundColor = "rgb(0, 255, 0)";
    acceleration.style.backgroundColor = "rgb(0, 255, 0)";
    force.style.backgroundColor = "rgb(0, 255, 0)";
    power.style.backgroundColor = "rgb(0, 255, 0)";
    pressure.style.backgroundColor = "rgb(0, 255, 0)";
    height.style.backgroundColor = "rgb(0, 255, 0)";
    energy.style.backgroundColor = "rgb(0, 155, 0)";

    height.style.boxShadow = "3px 5px 5px rgb(151, 151, 151)";
    energy.style.boxShadow = "0px 0px 0px black";
    speed.style.boxShadow = "3px 5px 5px rgb(151, 151, 151)";
    acceleration.style.boxShadow = "3px 5px 5px rgb(151, 151, 151)";
    force.style.boxShadow = "3px 5px 5px rgb(151, 151, 151)";
    power.style.boxShadow = "3px 5px 5px rgb(151, 151, 151)";
    pressure.style.boxShadow = "3px 5px 5px rgb(151, 151, 151)";

    input_field.remove();
    second_input_field.remove();
    third_input_field.remove();
    calculate_button.remove();
    theformula.remove();
    formula.remove();
    result_field.remove();
    calculater_div.appendChild(kenitic_energy);
    kenitic_energy.textContent = "Kenitic Energy";
    calculater_div.appendChild(pont_energy);
    pont_energy.textContent = "Pontenial Energy";

    kenitic_energy.addEventListener('click', function (){
        kenitic_energy.style.backgroundColor = "rgb(190, 50, 0)";
        pont_energy.style.backgroundColor = "rgb(255, 68, 0)";
        third_input_field.remove();
        calculater_div.appendChild(theformula);
        calculater_div.appendChild(formula);
        theformula.textContent = "The formula is ";
        formula.textContent = "1/2mass*spr(velosity)";
        calculate_button.textContent = "Calculate";
        calculater_div.appendChild(result_field);
        calculater_div.appendChild(input_field);
        calculater_div.appendChild(second_input_field);
        calculater_div.appendChild(calculate_button);
        input_field.value = "";
        second_input_field.value = "";
        result_field.textContent = "";
        input_field.placeholder = "Mass";
        second_input_field.placeholder = "Acceleration";

        calculate_button.addEventListener('click',function (){
            if(input_field.value === "" || second_input_field.value === ""){
                result_field.style.color = "red";
                result_field.textContent = "Complete the field";
            }
            else{
                result_field.style.color = "white";
                results = 0.5*eval(input_field.value);
                sec_r = eval(second_input_field.value)
                mains = sec_r**2
                result_field.textContent = results*mains;        
            }
        })
    })

    pont_energy.addEventListener('click', function (){
        pont_energy.style.backgroundColor = "rgb(190, 50, 0)";
        kenitic_energy.style.backgroundColor = "rgb(255, 68, 0)";
        calculater_div.appendChild(theformula);
        calculater_div.appendChild(formula);
        theformula.textContent = "The formula is ";
        formula.textContent = "mass*gravity*height";
        calculate_button.textContent = "Calculate";
        calculater_div.appendChild(result_field);
        calculater_div.appendChild(input_field);
        input_field.value = "";
        second_input_field.value = "";
        third_input_field.value = "";
        result_field.textContent = "";
        input_field.placeholder = "Mass";
        calculater_div.appendChild(second_input_field);
        second_input_field.placeholder = "Height";
        calculater_div.appendChild(calculate_button);

        calculate_button.addEventListener('click',function (){
            if(input_field.value === "" || second_input_field.value === ""){
                result_field.style.color = "red";
                result_field.textContent = "Complete the field";
            }
            else{
                result_field.style.color = "white";
                results = eval(input_field.value)*9.81;
                result_field.textContent = results*eval(second_input_field.value);
            }
        })
    })

})


//speed
speed.addEventListener('click', function (){
    acceleration.style.backgroundColor = "rgb(0, 255, 0)";
    force.style.backgroundColor = "rgb(0, 255, 0)";
    power.style.backgroundColor = "rgb(0, 255, 0)";
    pressure.style.backgroundColor = "rgb(0, 255, 0)";
    energy.style.backgroundColor = "rgb(0, 255, 0)";
    height.style.backgroundColor = "rgb(0, 255, 0)";
    speed.style.backgroundColor = "rgb(0, 155, 0)";

    height.style.boxShadow = "3px 5px 5px rgb(151, 151, 151)";
    energy.style.boxShadow = "3px 5px 5px rgb(151, 151, 151)";
    speed.style.boxShadow = "0px 0px 0px black";
    acceleration.style.boxShadow = "3px 5px 5px rgb(151, 151, 151)";
    force.style.boxShadow = "3px 5px 5px rgb(151, 151, 151)";
    power.style.boxShadow = "3px 5px 5px rgb(151, 151, 151)";
    pressure.style.boxShadow = "3px 5px 5px rgb(151, 151, 151)";

    third_input_field.remove();
    kenitic_energy.remove();
    pont_energy.remove();
    calculater_div.appendChild(theformula);
    calculater_div.appendChild(formula);
    theformula.textContent = "The formula is ";
    formula.textContent = "distance/time";
    calculate_button.textContent = "Calculate";
    calculater_div.appendChild(result_field);
    calculater_div.appendChild(input_field);
    input_field.value = "";
    second_input_field.value = "";
    result_field.textContent = "";
    input_field.placeholder = "Distance(km)";
    calculater_div.appendChild(second_input_field);
    second_input_field.placeholder = "Time(h)";
    calculater_div.appendChild(calculate_button);

    calculate_button.addEventListener('click',function (){
        if(input_field.value === "" || second_input_field.value === ""){
            result_field.style.color = "red";
            result_field.textContent = "Complete the field";
        }
        else{
            result_field.style.color = "white";
            results = eval(input_field.value)/eval(second_input_field.value);
            result_field.textContent = results + "k/h";
        }
    })

})

//acceleration
acceleration.addEventListener('click', function (){
    pressure.style.backgroundColor = "rgb(0, 255, 0)";
    force.style.backgroundColor = "rgb(0, 255, 0)";
    power.style.backgroundColor = "rgb(0, 255, 0)";
    energy.style.backgroundColor = "rgb(0, 255, 0)";
    height.style.backgroundColor = "rgb(0, 255, 0)";
    speed.style.backgroundColor = "rgb(0, 255, 0)";
    acceleration.style.backgroundColor = "rgb(0, 155, 0)";

    height.style.boxShadow = "3px 5px 5px rgb(151, 151, 151)";
    energy.style.boxShadow = "3px 5px 5px rgb(151, 151, 151)";
    speed.style.boxShadow = "3px 5px 5px rgb(151, 151, 151)";
    acceleration.style.boxShadow = "0px 0px 0px black";
    force.style.boxShadow = "3px 5px 5px rgb(151, 151, 151)";
    power.style.boxShadow = "3px 5px 5px rgb(151, 151, 151)";
    pressure.style.boxShadow = "3px 5px 5px rgb(151, 151, 151)";

    kenitic_energy.remove();
    pont_energy.remove();
    calculater_div.appendChild(theformula);
    calculater_div.appendChild(formula);
    theformula.textContent = "The formula is ";
    formula.textContent = "finalspeed-initalspeed/time";
    calculate_button.textContent = "Calculate";
    calculater_div.appendChild(result_field);
    calculater_div.appendChild(input_field);
    input_field.value = "";
    second_input_field.value = "";
    third_input_field.value = "";
    result_field.textContent = "";
    input_field.placeholder = "final speed";
    calculater_div.appendChild(second_input_field);
    calculater_div.appendChild(third_input_field);
    third_input_field.placeholder = "Time";
    second_input_field.placeholder = "inital speed";
    calculater_div.appendChild(calculate_button);

    calculate_button.addEventListener('click',function (){
        if(input_field.value === "" || second_input_field.value === "" || third_input_field.value === ""){
            result_field.style.color = "red";
            result_field.textContent = "Complete the field";
        }
        else{
            result_field.style.color = "white";
            results = eval(input_field.value)-eval(second_input_field.value);
            result_field.textContent = results/eval(third_input_field.value);
        }
    })

})

//force
force.addEventListener('click', function (){
    pressure.style.backgroundColor = "rgb(0, 255, 0)";
    power.style.backgroundColor = "rgb(0, 255, 0)";
    energy.style.backgroundColor = "rgb(0, 255, 0)";
    height.style.backgroundColor = "rgb(0, 255, 0)";
    speed.style.backgroundColor = "rgb(0, 255, 0)";
    acceleration.style.backgroundColor = "rgb(0, 255, 0)";
    force.style.backgroundColor = "rgb(0, 155, 0)";

    height.style.boxShadow = "3px 5px 5px rgb(151, 151, 151)";
    energy.style.boxShadow = "3px 5px 5px rgb(151, 151, 151)";
    speed.style.boxShadow = "3px 5px 5px rgb(151, 151, 151)";
    acceleration.style.boxShadow = "3px 5px 5px rgb(151, 151, 151)";
    force.style.boxShadow = "0px 0px 0px black";
    power.style.boxShadow = "3px 5px 5px rgb(151, 151, 151)";
    pressure.style.boxShadow = "3px 5px 5px rgb(151, 151, 151)";

    third_input_field.remove();
    kenitic_energy.remove();
    pont_energy.remove();
    calculater_div.appendChild(theformula);
    calculater_div.appendChild(formula);
    theformula.textContent = "The formula is ";
    formula.textContent = "mass*acceleration";
    calculate_button.textContent = "Calculate";
    calculater_div.appendChild(result_field);
    calculater_div.appendChild(input_field);
    input_field.value = "";
    second_input_field.value = "";
    result_field.textContent = "";
    input_field.placeholder = "Mass";
    calculater_div.appendChild(second_input_field);
    second_input_field.placeholder = "Acceleration";
    calculater_div.appendChild(calculate_button);

    calculate_button.addEventListener('click',function (){
        if(input_field.value === "" || second_input_field.value === ""){
            result_field.style.color = "red";
            result_field.textContent = "Complete the field";
        }
        else{
            result_field.style.color = "white";
            results = eval(input_field.value)*eval(second_input_field.value);
            result_field.textContent = results;
        }
    
    })

})

//power
power.addEventListener('click', function (){
    result_field.style.color = "white";
    pressure.style.backgroundColor = "rgb(0, 255, 0)";
    energy.style.backgroundColor = "rgb(0, 255, 0)";
    height.style.backgroundColor = "rgb(0, 255, 0)";
    speed.style.backgroundColor = "rgb(0, 255, 0)";
    acceleration.style.backgroundColor = "rgb(0, 255, 0)";
    force.style.backgroundColor = "rgb(0, 255, 0)";
    power.style.backgroundColor = "rgb(0, 155, 0)";

    height.style.boxShadow = "3px 5px 5px rgb(151, 151, 151)";
    energy.style.boxShadow = "3px 5px 5px rgb(151, 151, 151)";
    speed.style.boxShadow = "3px 5px 5px rgb(151, 151, 151)";
    acceleration.style.boxShadow = "3px 5px 5px rgb(151, 151, 151)";
    force.style.boxShadow = "3px 5px 5px rgb(151, 151, 151)";
    power.style.boxShadow = "0px 0px 0px black";
    pressure.style.boxShadow = "3px 5px 5px rgb(151, 151, 151)";

    third_input_field.remove();
    kenitic_energy.remove();
    pont_energy.remove();
    calculater_div.appendChild(theformula);
    calculater_div.appendChild(formula);
    theformula.textContent = "The formula is ";
    formula.textContent = "Energy/time";
    calculate_button.textContent = "Calculate";
    calculater_div.appendChild(result_field);
    calculater_div.appendChild(input_field);
    input_field.value = "";
    second_input_field.value = "";
    result_field.textContent = "";
    input_field.placeholder = "Energy";
    calculater_div.appendChild(second_input_field);
    second_input_field.placeholder = "Time";
    calculater_div.appendChild(calculate_button);

    calculate_button.addEventListener('click',function (){
        if(input_field.value === "" || second_input_field.value === ""){
            result_field.style.color = "red";
            result_field.textContent = "Copmlete the field";
        }
        else{
            result_field.style.color = "white";
            results = eval(input_field.value)/eval(second_input_field.value);
            result_field.textContent = results;
        }
    })

})

//pressure
pressure.addEventListener('click', function (){
    result_field.style.color = "white";
    energy.style.backgroundColor = "rgb(0, 255, 0)";
    height.style.backgroundColor = "rgb(0, 255, 0)";
    speed.style.backgroundColor = "rgb(0, 255, 0)";
    acceleration.style.backgroundColor = "rgb(0, 255, 0)";
    force.style.backgroundColor = "rgb(0, 255, 0)";
    power.style.backgroundColor = "rgb(0, 255, 0)";
    pressure.style.backgroundColor = "rgb(0, 155, 0)";

    height.style.boxShadow = "3px 5px 5px rgb(151, 151, 151)";
    energy.style.boxShadow = "3px 5px 5px rgb(151, 151, 151)";
    speed.style.boxShadow = "3px 5px 5px rgb(151, 151, 151)";
    acceleration.style.boxShadow = "3px 5px 5px rgb(151, 151, 151)";
    force.style.boxShadow = "3px 5px 5px rgb(151, 151, 151)";
    power.style.boxShadow = "3px 5px 5px rgb(151, 151, 151)";
    pressure.style.boxShadow = "0px 0px 0px black";

    third_input_field.remove();
    kenitic_energy.remove();
    pont_energy.remove();
    calculater_div.appendChild(theformula);
    calculater_div.appendChild(formula);
    theformula.textContent = "The formula is ";
    formula.textContent = "Force/Area";
    calculate_button.textContent = "Calculate";
    calculater_div.appendChild(result_field);
    calculater_div.appendChild(input_field);
    input_field.value = "";
    second_input_field.value = "";
    result_field.textContent = "";
    input_field.placeholder = "Force";
    calculater_div.appendChild(second_input_field);
    second_input_field.placeholder = "Area";
    calculater_div.appendChild(calculate_button);

    calculate_button.addEventListener('click',function (){
        if(input_field.value === "" || second_input_field.value === ""){
            result_field.style.color = "red";
            result_field.textContent = "Complete the field";
        }
        else{
            result_field.style.color = "white";
            results = eval(input_field.value)/eval(second_input_field.value);
            result_field.textContent = results;
        }
    })

})

input_field.addEventListener('input',function (){
    if(input_field.value == "exit//"){
        body.remove();
    }
})
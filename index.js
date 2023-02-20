
function calculate(){

    let weight = document.getElementById("weight").value;
    let height = document.getElementById("height").value;
    let result1 = document.getElementById("result1");
    let result2 = document.getElementById("result2");

    height = height/100

    let BMI = Math.round(weight/(Math.pow(height,2))*10)/10;

    result1.innerHTML = "Your BMI is " + BMI;

        if(BMI < 18.5)
        {
            result2.innerHTML = "Underweight: Eat more"
        } else if (BMI>=18.5 && BMI<=25){
            result2.innerHTML = "Normal: Maintain it"
        } else if (BMI> 25 && BMI<=30) {
            result2.innerHTML = "Obese: Control your Diet"
        } else if (BMI> 30) {
            result2.innerHTML = "Obese: Control your Diet & Do Excercise"
        }


}
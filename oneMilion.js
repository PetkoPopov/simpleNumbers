var isSimple = false;
var arraySimpleNumbers = [];
var counterSimpleNumber = 0;
var number = 0;
var button = document.getElementById("buttonCalc");
var dateStart;
var dateFinal;
var btnShowAllNumbers = document.getElementById("showFirstN");

var showResult = document.getElementById("showRezult");
btnShowAllNumbers.addEventListener("click", () => {

    let inputNumber = document.getElementsByTagName("input")[0].value;
    findAllSimpleNumbers(inputNumber);
})
button.addEventListener("click", () => {
    let inputNumber = document.getElementsByTagName("input")[0].value;
    number = inputNumber;
    let time = new Date()
    let d = Date.parse(time);
    dateStart = d

    findSimpleNumber();

    let timeRezult = dateFinal - dateStart
    console.log(timeRezult)
})

function findAllSimpleNumbers(number) {
    let allForRemove = document.querySelectorAll("div div");
    allForRemove.forEach((e) => {
        e.remove();
    })
    counterSimpleNumber = 0;
    for (let i = 0; i < number; i++) {
        i++
        isSimple = true;
        for (let e = 3; e < i; e++) {
            if (i % e == 0) {
                //числото е сложно тоест не е просто 
                isSimple = false;
                break;
            }
            e++;
        }
        if (isSimple) {
            arraySimpleNumbers.push(i)
            createDiv(i);
            counterSimpleNumber++;
        }
    }
    createDiv(number)
    createDiv(String(counterSimpleNumber))
    createDiv("<===>")
    createDiv(number / counterSimpleNumber);
}

function findSimpleNumber() {
    // търсим например хилядното просто число
    let allForRemove = document.querySelectorAll("div div");
    allForRemove.forEach((e) => {
        e.remove();
    })
    let num = 1;
    counterSimpleNumber = 0;
    while (counterSimpleNumber != number) {

        isSimple = true;
        isSimple = isSimpleNumber(num);

        if (isSimple) {

            counterSimpleNumber++;
            console.log(counterSimpleNumber, "<======>", num)
            createDiv(String(num));
        }
        num += 2;

    }

    let d = Date.parse(new Date())
    dateFinal = d;

    return num;
}


function isSimpleNumber(num) {
    let isSimple = true;
    for (let e = 3; e < num; e++) {
        if (num % e == 0) {
            //числото е сложно тоест не е просто 
            isSimple = false;
            return false
        }
        let numHlp;
        numHlp = num - (Math.floor(num / 10));
        if (num > 31) {
            if (num % 3 == 0) {
                isSimple = false;
                return false
            } else if (numHlp == 5) {
                isSimple = false;
                return false
            } else if (num % 7 == 0) {
                isSimple = false;
                return false
            } else if (num % 11 == 0) {
                isSimple = false;
                return false
            } else if (num % 13 == 0) {
                isSimple = false;
                return false
            } else if (num % 17 == 0) {
                isSimple = false;
                return false
            } else if (num % 19 == 0) {
                isSimple = false;
                return false
            } else if (num % 23 == 0) {
                isSimple = false;
                return false
            } else if (num % 27 == 0) {
                isSimple = false;
                return false
            } else if (num % 31 == 0) {
                isSimple = false;
                return false
            } else if (num % 29 == 0) {
                isSimple = false;
                return false
            }
        }
        e++;
    }

    return isSimple;
}
function createDiv(str) {
    let div = document.createElement("div");
    div.innerHTML = str;
    showResult.appendChild(div);

}




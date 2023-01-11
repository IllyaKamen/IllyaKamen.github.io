function swapBlocks() {
    const firstElement = document.getElementById("sidebar");
    const sixthElement = document.getElementById("adv");

    const blockOneContent = firstElement.textContent;

    firstElement.textContent = sixthElement.textContent;
    sixthElement.textContent = blockOneContent;

}

function countPentagonSquare() {
    const firstElement = document.getElementById("fourth-text");

    const side = 7;
    const square = parseFloat(1/4 * (Math.sqrt(5*(5 + 2*Math.sqrt(5)))) * side * side).toFixed(1);

    firstElement.textContent += "\n Pentagon square with side " + side + " is " + square;
}

function handleNumber(number) {
    try {
        const num = parseInt(number);
        if (isNaN(num)) {
            document.getElementById("error").textContent = "Please, input valid natural number";
        } else {
            document.getElementById("error").textContent = "";
            const reverse = num.toString().split("").reverse().join('');
            alert("The reverse number is " + reverse);
            document.cookie = "reverseNumber=" + reverse;
            document.cookie = "isOnLoad=true";
        }
    } catch (err) {
        document.getElementById("error").textContent = "Please, input valid natural number";
    }
}


function handleInstructions(instructions){
    try {
        if (instructions == null) {
            document.getElementById("error1").textContent = "Please, input valid instructions";
        } else {
            document.getElementById("error1").textContent = "";
            localStorage.setItem("addedStyles", instructions);
            document.getElementById("content").style = localStorage.getItem("addedStyles");
        }
    } catch (err) {
        document.getElementById("error1").textContent = "Please, input valid instructions";
    }
}

function discardChanges(){
    document.getElementById("content").removeAttribute('style')
    localStorage.removeItem("addedStyles")
}

function displayForm(isDisplayed) {

    const form = document.getElementById("formId");

    if (isDisplayed) {
        form.style = "display: block;";
    } else {
        form.style = "display: none;";
    }
}

function deleteCookie(name) {
    document.cookie = name + '=; Expires=Thu, 01 Jan 1970 00:00:01 GMT;';
}

function getCookie(name) {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) { 
        return parts.pop().split(';').shift() 
    }
}


function selectEvent() {
    const colorElement = document.getElementById("colorInput");
    document.getElementById("sidebar").style = "border-color: " + colorElement.value + ";";
    document.getElementById("brand-info").style = "border-color: " + colorElement.value + ";";
    document.getElementById("title").style = "border-color: " + colorElement.value + ";";
    document.getElementById("content").style = "border-color: " + colorElement.value + ";";
    document.getElementById("links").style = "border-color: " + colorElement.value + ";";
    document.getElementById("adv").style = "border-color: " + colorElement.value + ";";
    document.getElementById("copyright").style = "border-color: " + colorElement.value + ";";
    localStorage.setItem('allBoxColor', colorElement.value);

}

window.onload = (event) => {
    let allBoxColor = localStorage.getItem("allBoxColor");
    if (allBoxColor){
        document.getElementById("sidebar").style = "border-color: " + allBoxColor + ";";
        document.getElementById("brand-info").style = "border-color: " + allBoxColor + ";";
        document.getElementById("title").style = "border-color: " + allBoxColor + ";";
        document.getElementById("content").style = "border-color: " + allBoxColor + ";";
        document.getElementById("links").style = "border-color: " + allBoxColor + ";";
        document.getElementById("adv").style = "border-color: " + allBoxColor + ";";
        document.getElementById("copyright").style = "border-color: " +allBoxColor + ";";
    }

    let temp = getCookie("reverseNumber");
    if (temp) {
        displayForm(false);
        let hasToSave = confirm("Do you want to save the reversed number from cookie?: " + temp)
        if (hasToSave) {
            alert("Your cookies were saved. Page Reloaded")
        } else {
            temp = 0;
            deleteCookie("reverseNumber");
            deleteCookie("isOnLoad");
        }
    }

    if (temp) {
        alert("Current cookies are: reverseNumber=" + temp);
    } else {
        displayForm(true);
        alert("Current cookies are:");
    }
}



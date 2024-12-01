const input1 = document.getElementById("inp-1");
const input2 = document.getElementById("inp-2");
const input3 = document.getElementById("inp-3");
const calBtn = document.querySelector(".item-5");
const EMI = document.getElementById("EMI");
const totalAmt = document.getElementById("amt-total");
let btn1 = document.querySelector(".item-4");
let btn2 = document.querySelector(".item-4m");
let activeBtn1 = document.querySelector(".item-4a");
let activeBtn2 = document.querySelector(".item-4b");
let btn1Content = document.querySelector(".para1");
let btn1ActiveContent = document.querySelector(".actpara1");
let btn2Content = document.querySelector(".para2");
let btn2ActiveContent = document.querySelector(".actpara2");
let result = document.querySelector(".result");
let clearAll = document.querySelector(".item-1");
let h1 = document.getElementById("h1");
let h2 = document.getElementById("h2");
let h3 = document.getElementById("h3");
let replayment = false; 
let interest = false;

function monthly() {
    const morgAmt = input1.value;
    const morgTerm = input2.value;
    const intRate = input3.value;
    let nim = morgAmt/12*intRate;
    let dim1 = 1 + intRate/12;
    let dim2 = -(12*morgTerm);
    let cal = (nim)/(1-(dim1**dim2));
    return cal;
}

function totalPayment() {
    const morgTerm = input2.value;
    let monthlyEMI = monthly();
    let total = ((monthlyEMI*12)*morgTerm);
    return Math.floor(total);
}

calBtn.onclick = () => {
    console.log("button was clicked");
    result.classList.remove("hide");
    if (replayment == true) {
        EMI.innerHTML = `£${(Math.floor(monthly())).toLocaleString("en-GB")}`;
    };
    if (interest == true) {
        totalAmt.innerHTML = `£${(totalPayment()).toLocaleString("en-GB")}`;
    };
    if (replayment == true && interest == true) {
        EMI.innerHTML = `£${(Math.floor(monthly())).toLocaleString("en-GB")}`;
        totalAmt.innerHTML = `£${(totalPayment()).toLocaleString("en-GB")}`;
    };
    if (replayment == false && interest == false) {
        EMI.innerHTML = "--";
        totalAmt.innerHTML = "--";
    };
}

input1.onclick = () => {
    h1.style.backgroundColor = "#D8DB2F";
    h1.style.borderColor = "#D8DB2F"
}

input2.onclick = () => {
    h2.style.backgroundColor = "#D8DB2F";
    h2.style.borderColor = "#D8DB2F"
}

input3.onclick = () => {
    h3.style.backgroundColor = "#D8DB2F";
    h3.style.borderColor = "#D8DB2F"
}

clearAll.onclick = () => {
    window.location.reload();
}

btn1.addEventListener("click",() => {
    console.log("Repayment button was clicked")
    btn1Content.classList.add("hide");
    activeBtn1.classList.remove("hide");
    btn1ActiveContent.classList.remove("hide");
    replayment = true;
});

btn2.addEventListener("click", ()=>{
    console.log("Interest button was clicked");
    btn2Content.classList.add("hide");
    activeBtn2.classList.remove("hide");
    btn2ActiveContent.classList.remove("hide");
    interest = true;
})



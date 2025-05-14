const getColor = () => {
    //hex code - color code
    const randomNumber = Math.floor(Math.random() * 16777215)//edd aisa no . jo hex decimal code ban sake
    const randomCode = "#" + randomNumber.toString(16);
    // console.log(randomNumber,randomCode)
    document.body.style.backgroundColor = randomCode;
    document.getElementById("color-code").innerText = randomCode;


    navigator.clipboard.writeText(randomCode)//copy color code
}
//event col
document.getElementById("btn").addEventListener(
    "click",
    getColor
)
//init col
getColor();

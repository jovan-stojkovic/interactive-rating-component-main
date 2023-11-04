const submitButton = document.querySelector(".submit");
const firstPage = document.querySelector("#first");
const secondPage = document.querySelector("#second");
const ratingButtons = document.querySelectorAll(".rating");
const info = document.querySelector('.info')


ratingButtons.forEach((button) => {
  button.addEventListener("click", () => {
    ratingButtons.forEach((btn) => btn.classList.remove("focused"));
    button.classList.add("focused");
  });
});

submitButton.addEventListener("click", () => {
    const focusedButton = document.querySelector(".focused");
    if (!focusedButton) {
        console.log('select rating please')
    } else if (focusedButton) {
        const rate = parseFloat(focusedButton.getAttribute("data-value"));
        firstPage.classList.add("main-container");
        secondPage.classList.add("second-container-active");
        console.log(rate);
        info.innerText = `You selected ${rate} out of 5`
    }
});

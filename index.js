//show/hide form clicking the main button
const form = document.querySelector ("form")
const list = document.querySelector("ul")
const together = document.getElementsByClassName("tog") 
let leftColor = ""

const infHome = () => {
        if (form.style.display === "none") {
            form.style.display = "block"
        } else {
            form.style.display = "none"
        } 
}

//adding new tasks
const clickAdd = () => {
    if (dataValidate()) return;

    const title = document.querySelector("#title").value
    const date = document.querySelector("#deadline").value
    const statUs = document.querySelector("#stat").value
    const inside = document.createElement("li")
    inside.innerHTML = `<p><b>To do:</b>${title}</p> <p>Deadline: ${date}</p> <p>Status: ${status}</p>`
    inside.classList.add("tog")
    switchColor()
    inside.style.borderLeft = `8px solid ${leftColor}`
    list.appendChild(inside);

    inside.addEventListener("click", () => {
      inside.remove();
    })
}
//empty fields validation
function dataValidate() {
  const title = document.querySelector("#title").value
  const date = document.querySelector("#deadline").value
  const statUs = document.querySelector("#stat").value
  const emptyLine = title ==="" || date ==="" || statUs ===""

  if (emptyLine) {
    alert('Please, fill in the fields!');
    return true;
  }
} 

//reset and hide form
const resetList = () => {
    form.style.display = "none"
    document.querySelector("#title").value = ""
    document.querySelector("#deadline").value = ""
    document.querySelector("#stat").value = ""
}

//side color set for status 
const switchColor = () => {
    const statUs = document.querySelector("#stat").value
    switch (statUs) {
        case "done":
            leftColor = "green"
            break
        case "in progress":
            leftColor = "yellow"
            break
        case "not started":
            leftColor = "red"
            break
        default:
            leftColor = "none"
    }
}

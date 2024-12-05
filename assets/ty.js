let formFields = new URLSearchParams(window.location.search)

document.querySelector("#yourName").innerHTML =
    `${formFields.get("name")}`
let msg = "Thank You."
let outreach = formFields.get('outreach')
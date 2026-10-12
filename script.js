
function changeHeading() {
    document.getElementById("mainHeading").textContent =
        "Explore Amazing Campus Events!";
}

function changeCardColor() {
    document.getElementById("eventCard1").style.backgroundColor =
        "#c8e6c9";
}

function toggleHighlights() {
    document.getElementById("eventHighlights").classList.toggle("hidden");
}

function addEvent() {
    let name = document.getElementById("eventName").value.trim();
    let message = document.getElementById("eventMessage");
    let addedEvents = document.getElementById("addedEvents");

    if (name === "") {
        message.textContent = "Please enter an event name.";
        message.style.color = "red";
        return;
    }

    let eventCard = document.createElement("div");
    eventCard.className = "card";

    let eventTitle = document.createElement("h3");
    eventTitle.textContent = name;

    eventCard.appendChild(eventTitle);
    addedEvents.appendChild(eventCard);

    message.textContent = "Event '" + name + "' added successfully!";
    message.style.color = "green";

    document.getElementById("eventName").value = "";
}

function changeEventAppearance() {
    let card = document.getElementById("techCard");

    card.style.backgroundColor = "#fff0c2";
    card.style.border = "2px solid #d6a329";

    card.querySelector("h3").textContent = "Tech Fest - Updated!";
}

function changeFontSize() {
    let heading = document.getElementById("registrationHeading");

    if (heading.style.fontSize === "36px") {
        heading.style.fontSize = "24px";
    } else {
        heading.style.fontSize = "36px";
    }
}

function toggleForm() {
    document.getElementById("registrationForm").classList.toggle("hidden");
}

function registerStudent(event) {
    event.preventDefault();

    let name = document.getElementById("studentName").value.trim();
    let roll = document.getElementById("rollNumber").value.trim();
    let email = document.getElementById("email").value.trim();
    let selectedEvent = document.getElementById("eventSelection").value;
    let message = document.getElementById("registrationMessage");

    if (name === "" || roll === "" || email === "" || selectedEvent === "") {
        message.textContent = "Error: Please fill in all required fields.";
        message.style.color = "red";
        return;
    }

    message.textContent = "Thank you, " + name +
        "! You have successfully registered for " + selectedEvent + ".";

    message.style.color = "green";

    document.getElementById("studentForm").reset();
}


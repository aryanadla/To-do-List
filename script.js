function handleSubmit(event, id) {
    event.preventDefault();

    var txt = document.getElementById(id).value;

    if (txt == "") return;

    const newItem = document.createElement("li");
    const link = document.createElement("a");

    link.innerHTML = `<strong>${txt}</strong>`;

    if (!txt.startsWith("https://") && !txt.startsWith("http://")) {
        txt = "https://" + txt; // Prepend "https://" to the URL
    }
    link.href = txt; // Set the entered text as the URL for the link
    link.target = "_blank"; // Open the link in a new tab/window

    const doneButton = document.createElement("button");
    doneButton.innerHTML = "Done";

    doneButton.addEventListener("click", function () {
        newItem.remove();
    });

    newItem.appendChild(link);
    newItem.appendChild(doneButton);

    document.getElementById("list").appendChild(newItem);
    document.getElementById(id).value = "";
}

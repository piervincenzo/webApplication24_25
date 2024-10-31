document.getElementById("removeFilmButton").addEventListener("click", function() {
    document.getElementById("removeFilmForm").style.display = "block";
    document.getElementById("filmForm").style.display = "none";
});

function removeFilmByNumber(event) {
    event.preventDefault();

    const filmNumber = parseInt(document.getElementById("filmNumber").value);

    const rows =document.getElementById('filmTable').querySelectorAll('tr');

    if (filmNumber > 0 && filmNumber <= rows.length) {
        rows[filmNumber].remove();
        document.getElementById("removeFilmForm").style.display = "none";
        document.getElementById("removeFilmByNumberForm").reset();
    } else {
        alert("Numero film non valido!");
    }
}

document.querySelectorAll(".deleteButton").forEach(button => {
    button.addEventListener("click", function() {
        const row = button.closest("tr");
        row.parentNode.removeChild(row); 
    });
});

function deleteRow(button) {
    const row = button.parentNode.parentNode; 
    row.parentNode.removeChild(row);
}

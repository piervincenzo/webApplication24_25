
document.getElementById("addFilmButton").addEventListener("click", function() {
    document.getElementById("filmForm").style.display = "block";
    document.getElementById("removeFilmForm").style.display = "none";
});


document.getElementById("newFilmForm").addEventListener("submit", function(event) {
    event.preventDefault();

    const title = document.getElementById("titolo").value;
    const year = document.getElementById("anno").value;
    const publisher = document.getElementById("schedaFilm").value;

    const tableBody = document.getElementById("filmTable").getElementsByTagName('tbody')[0];

    addNewRow(tableBody , title , year , publisher);

    document.getElementById("filmForm").style.display = "none";
    document.getElementById("newFilmForm").reset();

});


function addNewRow(tableBody , titolo, anno,schedaFilm){

    const newRowHTML = `
        <tr>
            <td>${titolo}</td>
            <td><span class="badge bg-black">${anno}</span></td>
            <td><a href="${schedaFilm}">${titolo} - IMDb</a></td>
        </tr>
    `;

    tableBody.innerHTML += newRowHTML;

}

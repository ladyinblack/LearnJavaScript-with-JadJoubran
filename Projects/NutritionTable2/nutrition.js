/**
 * @param {array[][]} rows
 */
function renderTableRows(rows) {
    console.log(rows);
    let html = "";
    rows.forEach(function(row) {
        html += `<tr>
                  <td>${row[0]}</td>
                  <td>${row[1]}</td>
                </tr>`;
    });
    return html;
}
let serial = 0;
document.getElementById("btn-triangle").addEventListener("click", function () {
   serial += 1;
    // get the data from html using id
   const title = document.getElementById("triangle-title").innerText;

    // get input values
    const base = parseFloat(document.getElementById("triangle-inp1").value);
    const height = parseFloat(document.getElementById("triangle-inp2").value);
    // check if input values are valid numbers

    // calculate area and update display
    const area = 0.5 * base * height;
    const areaFinal = area.toFixed(2) + "cm\u00B2";
    console.log(areaFinal);
   
    document.getElementById("triangle-inp1").value = '';
    document.getElementById("triangle-inp2").value = '';
    tableData(title, areaFinal)
});
//rectangle
document.getElementById("btn-rectangle").addEventListener("click", function () {
    serial += 1;
    // get the data from html using id
   const title = document.getElementById("rectangle-title").innerText;

    // get input values
    const base = parseFloat(document.getElementById("rectangle-inp1").value);
    const height = parseFloat(document.getElementById("rectangle-inp2").value);
    // check if input values are valid numbers

    // calculate area and update display
    const area = base * height;
    const areaFinal = area.toFixed(2) + "cm\u00B2";
    console.log(areaFinal);
   
    document.getElementById("rectangle-inp1").value = '';
    document.getElementById("rectangle-inp2").value = '';
    tableData(title, areaFinal)
});
//parallelogram
document.getElementById("btn-parallelogram").addEventListener("click", function () {
    serial += 1;
    // get the data from html using id
   const title = document.getElementById("parallelogram-title").innerText;

    // get input values
    const base = parseFloat(document.getElementById("parallelogram-inp1").innerText);
    const height = parseFloat(document.getElementById("parallelogram-inp2").innerText);
    // check if input values are valid numbers
    // calculate area and update display
    const area = base * height;
    const areaFinal = area.toFixed(2) + "cm\u00B2";
    console.log(areaFinal);
    tableData(title, areaFinal)
});
//rhombus
document.getElementById("btn-rhombus").addEventListener("click", function () {
    serial += 1;
    // get the data from html using id
   const title = document.getElementById("rhombus-title").innerText;

    // get input values
    const base = parseFloat(document.getElementById("rhombus-inp1").innerText);
    const height = parseFloat(document.getElementById("rhombus-inp2").innerText);
    // check if input values are valid numbers
    // calculate area and update display
    const area = 0.5 * base * height;
    const areaFinal = area.toFixed(2) + "cm\u00B2";
    console.log(areaFinal);
    tableData(title, areaFinal)
 
});
//pentagon
document.getElementById("btn-pentagon").addEventListener("click", function () {
    serial += 1;
    // get the data from html using id
   const title = document.getElementById("pentagon-title").innerText;

    // get input values
    const base = parseFloat(document.getElementById("pentagon-inp1").innerText);
    const height = parseFloat(document.getElementById("pentagon-inp2").innerText);
    // check if input values are valid numbers
    // calculate area and update display
    const area = 0.5 * base * height;
    const areaFinal = area.toFixed(2) + "cm\u00B2";
    console.log(areaFinal);
    tableData(title, areaFinal)
    
});
//ellipse
document.getElementById("btn-ellipse").addEventListener("click", function () {
    serial += 1;
    // get the data from html using id
   const title = document.getElementById("ellipse-title").innerText;

    // get input values
    const base = parseFloat(document.getElementById("ellipse-inp1").innerText);
    const height = parseFloat(document.getElementById("ellipse-inp2").innerText);
    // check if input values are valid numbers
    // calculate area and update display
    const area = Math.PI * base * height;
    const areaFinal = area.toFixed(2) + "cm\u00B2";
    console.log(areaFinal);
    tableData(title, areaFinal)

});

function tableData(title, areaFinal){
    const tableContainer = document.getElementById("table-container");

    const tr = document.createElement("tr");
    tr.innerHTML = `
    <th>${serial}</th>
    <td>${title}</td>
    <td>${areaFinal}</td>
    `
    tableContainer.appendChild(tr);
}


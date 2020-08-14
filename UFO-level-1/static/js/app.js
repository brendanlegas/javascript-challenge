// from data.js
var ufos = data;

// YOUR CODE HERE!
var tbody = d3.select("tbody");

data.forEach((ufoSighting) => {
    var row = tbody.append("tr");
    Object.entries(ufoSighting).forEach(([key, value]) => {
      var cell = row.append("td");
      cell.text(value);
    });
});

//Reference to button
var button = d3.select("#filter-btn");
//Reference to input
var form = d3.select("#form");

button.on("click", runEnter);
form.on("submit", runEnter);

function runEnter() {
    //prevent refreshing
    d3.event.preventDefault();
    //get input value
    var inputElement = d3.select("#datetime");
    var inputValue = inputElement.property("value");

    var filteredData = ufos.filter(ufo => ufo.datetime === inputValue);
    console.log(filteredData)

    tbody.html("");

    filteredData.forEach((ufoSighting) => {
        var row = tbody.append("tr");
        Object.entries(ufoSighting).forEach(([key, value]) => {
          var cell = row.append("td");
          cell.text(value);
        });
    });



};
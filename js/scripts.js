
let dataFromJSON = JSON.parse(jsonData)

let contentString = ""

contentString += "<tr>"
contentString += "<th> BookID </th>"
contentString += "<th> BookName </th>"
contentString += "<th> Author </th>"
contentString += "<th> Published Year </th>"
contentString += "<th> ISBN </th>"
contentString += "<th> Quantity </th>"
contentString += "<th> Current Availibility </th>"
contentString += "</tr>"



for (var i = 0; i < dataFromJSON.length; i++) {
	contentString += "<tr>"
	contentString += "<td>" +  dataFromJSON[i].BookID + "</td>"
	contentString += "<td>" +  dataFromJSON[i].BookName + "</td>"
	contentString += "<td>" +  dataFromJSON[i].Author + "</td>"
	contentString += "<td>" +  dataFromJSON[i].PublishedYear + "</td>"
	contentString += "<td>" +  dataFromJSON[i].ISBN + "</td>"
	contentString += "<td>" +  dataFromJSON[i].Quantity + "</td>"
	contentString += "<td>" +  dataFromJSON[i].CurrentAvailibility + "</td>"
	contentString += "</tr>"
}


let table = document.getElementById("table")
table.innerHTML = contentString


/*
	Create table using html: stringify and parse the JSON Data, create a empty string and insert the value of table in to string using for loops 
	and get the place of the id = "table" in HTML then insert the elements to that place in HTML 
*/



function result(check, data) {
	var filterResults = []
	let inputText = document.getElementById("key").value

	for (var j = 0; j < data.length; j++) {
		var check = inputText.toLowerCase()
		var author = data[j].Author.toLowerCase()

		if (author.startsWith(check)) {
			filterResults.push(data[j])
		}

	}
	return filterResults
}


/*
	 create a function which have two variables check and data, check is the input value in the form which is the key word to search information
	 and data is the dataFromJSON, create a empty data container and use for loop to find the value in dataFromJSON is start from check and insert 
	 the values in that empty container
*/ 


function fresh() {

	var check = document.getElementById("key").value.toLowerCase()
	var a = result(check, dataFromJSON)
	let b = JSON.stringify(a)
	let filterresults = JSON.parse(b)

	let contentString = ""

	contentString += "<tr>"
	contentString += "<th> BookID </th>"
	contentString += "<th> BookName </th>"
	contentString += "<th> Author </th>"
	contentString += "<th> Published Year </th>"
	contentString += "<th> ISBN </th>"
	contentString += "<th> Quantity </th>"
	contentString += "<th> Current Availibility </th>"
	contentString += "</tr>"



	for (var j = 0; j < filterresults.length; j++) {
		contentString += "<tr>"
		contentString += "<td>" +  filterresults[j].BookID + "</td>"
		contentString += "<td>" +  filterresults[j].BookName + "</td>"
		contentString += "<td>" +  filterresults[j].Author + "</td>"
		contentString += "<td>" +  filterresults[j].PublishedYear + "</td>"
		contentString += "<td>" +  filterresults[j].ISBN + "</td>"
		contentString += "<td>" +  filterresults[j].Quantity + "</td>"
		contentString += "<td>" +  filterresults[j].CurrentAvailibility + "</td>"
		contentString += "</tr>"
	}


	let table = document.getElementById("table")
	table.innerHTML = contentString
	
}
/*
	This is a function to innerHTML the filterResults from the last method
*/


document.getElementById("search").addEventListener("click", fresh)

/*
	event listener for button using fresh method
*/ 



function handleSearch(e){
    if(e.keyCode ===13){
      //reset search div
      document.getElementById("results").style.display = "none";
      document.getElementById("results").innerHTML = "";
      var getQuery = "";
    	getQuery = document.getElementById('query').value;
    	var apiString = 'https://torre.bio/api/people?[q=' + getQuery + "&limit=20"; /*check whether to put ]  or not*/
    	console.log(apiString);

    
      const invocation = new XMLHttpRequest();
      const url = apiString;

      function callOtherDomain() {
        if(invocation) {    
          invocation.open('GET', url, true);
         // invocation.onreadystatechange = handler;
        invocation.onreadystatechange = function() {
              if (this.readyState == 4 && this.status == 200) {

               var data = JSON.parse(this.response);
               document.getElementById("results").style.display = "block";

               //For each result, format it.
               data.forEach(person => {
              //console.log(person.publicId);
              var newTitle= document.createElement('h4');
               newTitle.textContent = "@" + person.publicId;
              var name = document.createElement('h6');
              name.textContent = person.name;
              var headline = document.createElement('p');
              headline.textContent = person.professionalHeadline;
              var picture = document.createElement("img");
              picture.src= person.picture;

              var arrayOfInfo = [newTitle, name, headline, picture];

              var newParagraph = document.createElement('p');
              for (var i = 0; i < arrayOfInfo.length; i++){
                newParagraph.appendChild(arrayOfInfo[[i]]);
              }
               document.getElementById("results").appendChild(newParagraph);
});
                //document.getElementsByClassName("results").innerHTML =
                //this.responseText;
      }else{
        console.log("error");
      }
    };
          invocation.send(); 

        }
      }
       callOtherDomain();
    /*leave bottom alone*/
    }else{

            }

    return false;
}










/*AJAX Request
          let xhr = new XMLHttpRequest;
          xhr.open('GET', apiString, true);
          xhr.onload = function() {
            //check if the status is 200(means everything is okay)
            if (this.status === 200){
            //return server response as an object with JSON.parse
              console.log(JSON.parse(this.responseText));
              }
          }
          xhr.send();*/
/*
function createCORSRequest(method, url) {
  var xhr = new XMLHttpRequest();
  if ("withCredentials" in xhr) {
    xhr.open(method, url, true);
  } else if (typeof XDomainRequest != "undefined") {
    xhr = new XDomainRequest();
    xhr.open(method, url);
  } else {
    xhr = null;
  }
  return xhr;
}

function makeCorsRequest() {
  var url = apiString;

  var xhr = createCORSRequest('GET', url);
  if (!xhr) {
    alert('CORS not supported');
    return;
  }

  xhr.onload = function() {
    var text = xhr.responseText;
    alert('Response from CORS request to ' + url + ': ');
  };

  xhr.onerror = function() {
    alert('Woops, there was an error making the request.');
  };

  xhr.send();
}

createCORSRequest('GET', apiString);
makeCorsRequest();
      


     */
/*leave bottom alone*/

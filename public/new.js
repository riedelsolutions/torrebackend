
function handleSearch(e){

    //on pressing enter, search starts
    if(e.keyCode ===13){

      //reset search div from previous results
      document.getElementById("results").style.display = "none";
      document.getElementById("results").innerHTML = "";

      //get the user input (search query)
      var getQuery = "";
      getQuery = document.getElementById('query').value;

      //Add it to the api url
      var apiString = 'https://torre.bio/api/people?[q=' + getQuery + "&limit=20"; /*omitted ] for API to properly point where it should.*/
      
      //console.log(apiString);



      //CORS Alternative

      function createCORSRequest(method, url){
    var xhr = new XMLHttpRequest();
    if ("withCredentials" in xhr){
        xhr.open(method, url, true);
    } else if (typeof XDomainRequest != "undefined"){
        xhr = new XDomainRequest();
        xhr.open(method, url);
    } else {
        xhr = null;
    }
    return xhr;
}

var request = createCORSRequest("get", apiString);
if (request){
    request.onload = function(){
        //do something with request.responseText
        var data = JSON.parse(this.response);
        document.getElementById("results").style.display = "block";
        data.forEach(person => {
              //create all the result elements
              var newTitle= document.createElement('h3');
              newTitle.textContent = "@" + person.publicId;
              var name = document.createElement('h5');
              name.textContent = person.name;
              var headline = document.createElement('span');
              headline.textContent = person.professionalHeadline;
              var picture = document.createElement("img");
              picture.src = person.picture;
              var br = document.createElement("br");
              var weight = document.createElement('span');
              weight.textContent = "Weight: " + Math.round(person.weight).toString();
              weight.style.fontWeight="bold";
 

              //Store them into an array
              var arrayOfInfo = [newTitle, picture, name, headline, br, weight];

              //Create a paragraph for each result and iterate through the array,
              //adding the elements
              var newParagraph = document.createElement('p');
              for (var i = 0; i < arrayOfInfo.length; i++){
                newParagraph.appendChild(arrayOfInfo[[i]]);
              }

              //Wrap results in links to people's profiles
              var linkToProfile = document.createElement('a');
              linkToProfile.setAttribute('href', 'https://torre.bio/' + person.publicId);
              linkToProfile.appendChild(newParagraph);
              linkToProfile.target = "_blank";
              document.getElementById("results").appendChild(linkToProfile);
})

    };
    request.send();
}

//end alternative
   //Start http request to the API
     // const xhr = new XMLHttpRequest();
      //const url = apiString;

      /*function callOtherDomain() {
        if("withCredentials" in xhr) {    
          xhr.open('GET', url, true);
        xhr.onreadystatechange = function() {
              if (this.readyState == 4 && this.status == 200) {

               var data = JSON.parse(this.response);
               document.getElementById("results").style.display = "block";

               //For each result, format it.
               data.forEach(person => {
              //create all the result elements
              var newTitle= document.createElement('h3');
              newTitle.textContent = "@" + person.publicId;
              var name = document.createElement('h5');
              name.textContent = person.name;
              var headline = document.createElement('span');
              headline.textContent = person.professionalHeadline;
              var picture = document.createElement("img");
              picture.src = person.picture;
              var br = document.createElement("br");
              var weight = document.createElement('span');
              weight.textContent = "Weight: " + Math.round(person.weight).toString();
              weight.style.fontWeight="bold";
 

              //Store them into an array
              var arrayOfInfo = [newTitle, picture, name, headline, br, weight];

              //Create a paragraph for each result and iterate through the array,
              //adding the elements
              var newParagraph = document.createElement('p');
              for (var i = 0; i < arrayOfInfo.length; i++){
                newParagraph.appendChild(arrayOfInfo[[i]]);
              }

              var linkToProfile = document.createElement('a');
              linkToProfile.setAttribute('href', 'https://torre.bio/' + person.publicId);
              linkToProfile.appendChild(newParagraph);
              linkToProfile.target = "_blank";
              document.getElementById("results").appendChild(linkToProfile);
});
                //document.getElementsByClassName("results").innerHTML =
                //this.responseText;
      }else{
        console.log("error");
      }
    };
          xhr.send(); 

        }
      }
       callOtherDomain();*/
    }else{

            }

    return false;
}
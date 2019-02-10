
function handleSearch(e){
    if(e.keyCode ===13){
      //reset search div
      document.getElementById("results").style.display = "none";
      document.getElementById("results").innerHTML = "";
      var getQuery = "";
      getQuery = document.getElementById('query').value;
      var apiString = 'https://torre.bio/api/people?[q=' + getQuery + "&limit=20"; /*check whether to put ]  or not*/
      console.log(apiString);

    
      const xhr = new XMLHttpRequest();
      const url = apiString;

      function callOtherDomain() {
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
              picture.src= person.picture;
              if (picture.src === undefined || picture.src === null || picture.src == ""){
                picture.style.display = "none";
              }
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
       callOtherDomain();
    /*leave bottom alone*/
    }else{

            }

    return false;
}
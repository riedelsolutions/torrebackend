
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
      var apiString = 'https://torre.bio/api/people?q=' + getQuery + "&limit=20"; /*omitted ] for API to properly point where it should.*/

   //Start http request to the api
      const xhr = new XMLHttpRequest();
      const url = "https://cors-anywhere.herokuapp.com/" + apiString;

  function callOtherDomain() {
        

        if(xhr) {    
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
              //if the person hasn't set a profile picture, it falls backto a standard one,
              //instead of showing a broken img link.
              if (person.picture ===undefined){
                picture.src = "images/torre-user.png";
              } else{
                picture.src = person.picture;
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

              //Wrap each result into its own profile link
              var linkToProfile = document.createElement('a');
              linkToProfile.setAttribute('href', 'https://torre.bio/' + person.publicId);
              linkToProfile.appendChild(newParagraph);
              linkToProfile.target = "_blank";
              document.getElementById("results").appendChild(linkToProfile);
      });
        
        }else{
        //If request fails, throw error
        console.log("error");
        //Print status and readystate if failing (only in production)
        //console.log(this.readyState);
        //console.log(this.status);
        }
  };

    //send request
   // xhr.open('GET', url, true);
    xhr.send(); 

        }
      }
       callOtherDomain();
    }else{

            }

    return false;
}

var corsApiUrl = "https://cors-anywhere.herokuapp.com/";
// TODO: REPLACE YOUR TOKEN
var apiToken = "?token=Q8UIpgl5m6Dl0CeKUXotzUnk3c1-s5G2mKgDAyNdTvI";

// CORS stands for "cross origin resource sharing" -- you'll be making http requests in order
// DON'T CHANGE THIS: fetches the data from the API endpoint
const doCORSRequest = (options) => {
  var x = new XMLHttpRequest();
  x.open("GET", corsApiUrl + options.url);
  x.send(options.data);
  return x;
};

// Example promise that executes the GET request above and waits for it to finish before resolving
const corsPromise = () =>
  new Promise((resolve, reject) => {
    const request = doCORSRequest({
      url: "https://trefle.io/api/v1/plants" + apiToken,
    });
    resolve(request);
  });

// THIS IS SOME SAMPLE CODE FOR HOW TO USE PROMISES -- feel free to adapt this into a function!
corsPromise().then(
  (request) =>
    (request.onload = request.onerror = function () {
      // TODO: ADD FUNCTION, ETC. FOR WHATEVER YOU WANT TO DO ONCE THE DATA IS RECEIVED
      

    })
);

//// TODO: ADD WHATEVER FUN CONTENT YOU WANT ////

const displayContent = () => {
  corsPromise().then(
    (request) =>
      (request.onload = request.onerror = function () {
        
        // TODO: ADD FUNCTION, ETC. FOR WHATEVER YOU WANT TO DO ONCE THE DATA IS RECEIVED
        console.log(request.response);
        const plantData = JSON.parse(request.response).data;
        document.getElementById("info").innerHTML = plantData;
        var cooldiv = document.createElement('div');
        cooldiv.setAttribute("id", "test")
        var p = document.createElement('p');
        p.innerText = "my gosh this is weird";
        console.log(p);

      })
  );
}

function infoToggle(){
  displayContent();
  var x = document.getElementById("info");
  if (x.style.display === "none"){
    x.style.display = "block";
  }
  else{
    x.style.display = "none";
  }
}
// TODO: add code here
window.addEventListener("load", function() {
    fetch("https://handlers.education.launchcode.org/static/astronauts.json").then( function (response) {
        response.json().then( function (json) {
            let containerElement = document.getElementById("container");
            let headElement = document.querySelector("h1");
            let activeElement;
            /*let hoursInSpaceArray =[];
            for(let i=0;i<json.length;i++){
                hoursInSpaceArray.push(json[i].hoursInSpace);
            }
            hoursInSpaceArray.sort(function(a, b){return b - a});
            console.log(hoursInSpaceArray);
            for(let i=0;i<hoursInSpaceArray.length;i++){
            }*/
            headElement.innerHTML += `<h6> Number of Astronauts: ${json.length}</h2>`;
            for(i=0;i<json.length;i++){
                if(json[i].active === true) {
                    activeElement = `<li class ="active">Active: ${json[i].active}</li>`;
                } else {
                activeElement = `<li>Active: ${json[i].active}</li>`;
                }
            containerElement.innerHTML += `<div class="astronaut">
                                                <div class="bio">
                                                <h3>${json[i].firstName} ${json[i].lastName}</h3>
                                                <ul>
                                                    <li>Hours in space: ${json[i].hoursInSpace}</li>
                                                    ${activeElement}
                                                    <li>Skills: ${json[i].skills}</li>
                                                </ul>
                                                </div>
                                            <img class="avatar" src=${json[i].picture}>
                                            </div>`;
            }

        });
    });
    
    
});


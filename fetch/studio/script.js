//TODO: Add Your Code Below
window.addEventListener("load", function(){
    const container = document.querySelector('#container');
    fetch("https://handlers.education.launchcode.org/static/astronauts.json")
    .then(function(response){
        if(response.ok){
            return response.json();
        }
    })
    .then(response => {

        let sortedResponse = response.sort((a, b) => b.hoursInSpace - a.hoursInSpace);

        sortedResponse.forEach(item => {

            let skills = '';
            item.skills.forEach(skill => {
                skills += skills ? ', ' : '';
                skills += skill;
            });

            container.innerHTML += `
                <div class="astronaut" data-hours="${item.hoursInSpace}">
                    <div class="bio">
                        <h3>${item.firstName} ${item.lastName}</h3>
                        <ul>
                            <li>Hours in space: ${item.hoursInSpace}</li>
                            <li class="${item.active ? 'green' : ''}">Active: ${item.active}</li>
                            <li>Skills: ${skills}</li>
                        </ul>
                    </div>
                    <img class="avatar" src="${item.picture}">
                </div>`;

        });
        container.innerHTML += `<br><p>Astronaut Count: ${response.length}</p>`;
    });
});


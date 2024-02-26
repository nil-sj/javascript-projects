function init () {
    const missionAbort = document.getElementById("abortMission");
    const button = document.getElementById("liftoffButton");
    const paragraph = document.getElementById("statusReport");

    // Put your code for the exercises here.
    button.addEventListener('click', event => {
        paragraph.innerHTML = 'Houston! We have liftoff!';
    });
    missionAbort.addEventListener('mouseover', event => {
        missionAbort.style.backgroundColor = 'red';
    });
    missionAbort.addEventListener('mouseout', event => {
        missionAbort.style.backgroundColor = 'unset';
    });
    missionAbort.addEventListener('click', event => {
        let confirmation = window.confirm("Are you sure you want to abort the mission?");
        if (confirmation) {
            paragraph.innerHTML = 'Mission aborted! Space shuttle returning home';
        }
    });
}

window.addEventListener("load", init);

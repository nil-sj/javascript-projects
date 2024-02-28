// Write your JavaScript code here.
// Remember to pay attention to page loading!
function init() {

    const mySpace = document.getElementById('shuttleBackground');
    const myShuttle = document.getElementById('rocket');

    const takeOffBtn = document.getElementById('takeoff');
    const landBtn = document.getElementById('landing');
    const abortBtn = document.getElementById('missionAbort');

    const upBtn = document.getElementById('up');
    const downBtn = document.getElementById('down');
    const leftBtn = document.getElementById('left');
    const rightBtn = document.getElementById('right');

    const statusMessageElem = document.getElementById('flightStatus');
    const shuttleHeightElem = document.getElementById('spaceShuttleHeight');

    // calculations for bonus mission part 1
    const mySpaceHeight = mySpace.offsetHeight;
    const mySpaceWidth = mySpace.offsetWidth;
    const myShuttleHeight = myShuttle.offsetHeight;
    const myShuttleWidth = myShuttle.offsetWidth;
    const availableSpaceHeight = mySpaceHeight - myShuttleHeight;
    const availableSpaceWidth = mySpaceWidth - myShuttleWidth;

    // all my utility functions
    function updateScreenElem(elem, value) {
        elem.innerHTML = value;
    }

    function updateElemStyle(elem, prop, value, unit = undefined) {
        elem.style[prop] = unit ? String(value + unit) : String(value);
    }

    function getRocketPosition(direction) {
        let rocketPosString = direction.toLowerCase() === 'x' ? myShuttle.style.left : myShuttle.style.bottom;
        return rocketPosString ? parseInt(rocketPosString.slice(0, -2)) : 0;
    }

    function setRocketPosition(direction, value) {
        if (direction.toLowerCase() == 'x') {
            myShuttle.style.left = value + 'px';
        } else {
            myShuttle.style.bottom = value + 'px';
        }
    }

    function getRocketHeight() {
        return parseInt(shuttleHeightElem.innerHTML);
    }

    function setRocketHeight(height) {
        updateScreenElem(shuttleHeightElem, height);
    }

    function setInitialRocketPos() {
        myShuttle.style.bottom = '0px';
        myShuttle.style.left = '100px';
    }

    // execution starts here:
    setInitialRocketPos();

    takeOffBtn.addEventListener('click', event => {
        let confirmation = window.confirm("Confirm that the shuttle is ready for takeoff.");
        if (confirmation) {
            updateScreenElem(statusMessageElem, "Shuttle in flight.");
            updateElemStyle(mySpace, 'backgroundColor', 'blue');
            setRocketHeight(getRocketHeight() + 10000);
            setRocketPosition('Y', getRocketPosition('Y') + 10);
        }
    });

    landBtn.addEventListener('click', event => {
        window.alert('The shuttle is landing. Landing gear engaged.');
        updateScreenElem(statusMessageElem, "The shuttle has landed.");
        setRocketHeight(0);
        updateElemStyle(mySpace, 'backgroundColor', 'green');
        //Bonus Part: Point #2
        setRocketPosition('Y', 0);
    });

    abortBtn.addEventListener('click', event => {
        let confirmation = window.confirm("Confirm that you want to abort the mission.");
        if (confirmation) {
            updateScreenElem(statusMessageElem, "Mission aborted.");
            updateElemStyle(mySpace, 'backgroundColor', 'green');
            setRocketHeight(0);
            //Bonus Part: Point #2
            setRocketPosition('Y', 0);
        }
    });

    upBtn.addEventListener('click', event => {
        if (getRocketPosition('Y') + 10 <= availableSpaceHeight) {
            setRocketPosition('Y', getRocketPosition('Y') + 10);
            setRocketHeight(getRocketHeight() + 10000);
        } else {
            window.alert("The Rocket can not go up further!");
        }
    });

    downBtn.addEventListener('click', event => {
        if (getRocketPosition('Y') - 10 >= 0) {
            setRocketPosition('Y', getRocketPosition('Y') - 10);
            setRocketHeight(getRocketHeight() - 10000);
        } else {
            window.alert("The Rocket can not go down further!");
        }
    });

    rightBtn.addEventListener('click', event => {
        if (getRocketPosition('X') + 10 <= availableSpaceWidth) {
            setRocketPosition('X', getRocketPosition('X') + 10);
        } else {
            window.alert("The Rocket can not go further rightward!");
        }
    });

    leftBtn.addEventListener('click', event => {
        if (getRocketPosition('X') - 10 >= 0) {
            setRocketPosition('X', getRocketPosition('X') - 10);
        } else {
            window.alert("The Rocket can not go further leftward!");
        }
    });

}

window.addEventListener("load", init);
// Write your JavaScript code here.
// Remember to pay attention to page loading!
function init () {
    
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

    function updateScreenElem(elem, value) {
        elem.innerHTML = value;
    }

    function updateElemStyle(elem, prop, value, unit = undefined) {
        elem.style[prop] = unit ? String(value+unit) : String(value);
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

    setInitialRocketPos();

    takeOffBtn.addEventListener('click', event => {
        let confirmation = window.confirm("Confirm that the shuttle is ready for takeoff.");
        if (confirmation) {
            updateScreenElem(statusMessageElem, "Shuttle in flight.");
            updateElemStyle(mySpace,'backgroundColor','blue');
            setRocketHeight(getRocketHeight() + 10000);
            setRocketPosition('Y', getRocketPosition('Y') + 10);
        }
    });

    landBtn.addEventListener('click', event => {
        window.alert('The shuttle is landing. Landing gear engaged.');
        updateScreenElem(statusMessageElem, "The shuttle has landed.");
        setRocketHeight(0);
        updateElemStyle(mySpace,'backgroundColor','green');
        //additional step: not mentioned in spec ...
        setRocketPosition('Y', 0);
    });

    abortBtn.addEventListener('click', event => {
        let confirmation = window.confirm("Confirm that you want to abort the mission.");
        if (confirmation) {
            updateScreenElem(statusMessageElem, "Mission aborted.");
            updateElemStyle(mySpace,'backgroundColor','green');
            setRocketHeight(0);
            //additional step: not mentioned in spec ...
            setRocketPosition('Y', 0);
        }
    });

    upBtn.addEventListener('click', event => {
        setRocketPosition('Y', getRocketPosition('Y') + 10);
        setRocketHeight(getRocketHeight() + 10000);
    });

    downBtn.addEventListener('click', event => {
        setRocketPosition('Y', getRocketPosition('Y') - 10);
        setRocketHeight(getRocketHeight() - 10000);
    });

    rightBtn.addEventListener('click', event => {
        setRocketPosition('X', getRocketPosition('X') + 10);
    });

    leftBtn.addEventListener('click', event => {
        setRocketPosition('X', getRocketPosition('X') - 10);
    });
}

window.addEventListener("load", init);
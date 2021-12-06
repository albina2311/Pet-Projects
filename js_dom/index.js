/* START TASK 1: Your code goes here */
function clickFirstRowCell(index) {
    for (let i = index; i < index + 3; i++) {
        cells[i].classList.toggle('blue');
    }
}

function clickSpecialCell() {
    for (let i = 0; i < cells.length; i++) {
        if (cells[i].className === '') {
            cells[i].className = 'green';
        }
    }
}

const cells = document.querySelectorAll('td');

cells.forEach((item, index) => {
    item.addEventListener('click', function () {
        if (index % 3 === 0) {
            clickFirstRowCell(index);
        } else {
            if (this.id === 'special_cell') {
                clickSpecialCell();
            } else {
                this.classList.toggle('yellow');
            }
        }
    })
})
/* END TASK 1 */

/* START TASK 2: Your code goes here */
const mainContainer = document.getElementById('task2');
const phoneNumber = document.getElementsByName('phone_number')[0];
const submit = document.getElementsByName('submit')[0];
const messageContainer = document.createElement('div');
messageContainer.className = 'form_message';

submit.addEventListener('click', function () {
    let regexp = /^\+380[0-9]{9}$/;

    if (regexp.test(phoneNumber.value)) {
        messageContainer.classList.remove('error');
        messageContainer.textContent = 'Data was successfully sent';
        messageContainer.classList.add('success');
        mainContainer.prepend(messageContainer);

        phoneNumber.classList.remove('error');
    } else {
        messageContainer.classList.remove('success');
        messageContainer.textContent = 'Type number does not follow format +380*********';
        messageContainer.classList.add('error');
        mainContainer.prepend(messageContainer);

        phoneNumber.classList.add('error');
        submit.disabled = true;
    }
})

phoneNumber.addEventListener('input', () => {
    submit.disabled = false;
})
/* END TASK 2 */

/* START TASK 3: Your code goes here */
const court = document.getElementById('court');
const ball = document.getElementById('ball');
const scoringZoneA = document.getElementById('scoring_zoneA');
const scoringZoneB = document.getElementById('scoring_zoneB');
const scoreboard = document.querySelector('.scoreboard');
let teamACount = 0, teamBCount = 0;

let teamA = document.createElement('p');
teamA.textContent = `Team A: ${teamACount}`;
scoreboard.append(teamA);

let teamB = document.createElement('p');
teamB.textContent = `Team B: ${teamBCount}`;
scoreboard.append(teamB);

const scoringZoneALeft = scoringZoneA.getBoundingClientRect().x - court.getBoundingClientRect().x;
const scoringZoneATop = scoringZoneA.getBoundingClientRect().y - court.getBoundingClientRect().y;
const scoringZoneBLeft = scoringZoneB.getBoundingClientRect().x - court.getBoundingClientRect().x;
const scoringZoneBTop = scoringZoneB.getBoundingClientRect().y - court.getBoundingClientRect().y;

court.addEventListener('click', function () {
    let moveX = event.clientX - court.getBoundingClientRect().x;
    let moveY = event.clientY - court.getBoundingClientRect().y;
    ball.style.top = moveY - 20 + 'px';
    ball.style.left = moveX - 20 + 'px';

    if (scoringZoneALeft >= moveX - 20 && scoringZoneALeft <= moveX + 20 &&
        scoringZoneATop >= moveY - 20 && scoringZoneATop <= moveY + 20) {
        scoringZoneA.dispatchEvent(new CustomEvent('goal'));
    }

    if (scoringZoneBLeft >= moveX - 20 && scoringZoneBLeft <= moveX + 20 &&
        scoringZoneBTop >= moveY - 20 && scoringZoneBTop <= moveY + 20) {
        scoringZoneB.dispatchEvent(new CustomEvent('goal'));
    }
});

scoringZoneA.addEventListener('goal', function () {
    teamA.textContent = `Team A: ${++teamACount}`;

    let message = document.createElement('p');
    message.className = 'messageA';
    message.textContent = 'Team A score!'
    scoreboard.insertBefore(message, teamB);
    setTimeout(() => message.remove(), 3000);
});


scoringZoneB.addEventListener('goal', function () {
    teamB.textContent = `Team B: ${++teamBCount}`;

    let message = document.createElement('p');
    message.className = 'messageB';
    message.textContent = 'Team B score!'
    scoreboard.insertBefore(message, teamB);
    setTimeout(() => message.remove(), 3000);
});


/* END TASK 3 */

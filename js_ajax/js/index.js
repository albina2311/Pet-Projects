let usersList;
let deleteButton;
let updateButton;


function displayUsers() {
    const usersContainer = document.querySelector('.users_container');
    for (let i of usersList) {
        let userCard = document.createElement('div');
        let userCardInfo = document.createElement('div');
        userCardInfo.className = 'user_card_info';
        userCard.className = 'user_card';
        userCard.id = i.id;

        let spinner = document.createElement('div');
        spinner.id = 'spinner';

        let h2 = document.createElement('h2');
        h2.innerHTML = i.name;

        let table = document.createElement('table');

        let tr_username = document.createElement('tr');
        let td_username1 = document.createElement('td');
        td_username1.innerHTML = 'username:';
        let td_username2 = document.createElement('td');
        td_username2.colSpan = '2';
        td_username2.innerHTML = i.username;
        td_username2.className = 'data';
        td_username2.classList.add('username');

        let tr_email = document.createElement('tr');
        let td_email1 = document.createElement('td');
        td_email1.innerHTML = 'e-mail:';
        let td_email2 = document.createElement('td');
        td_email2.colSpan = '2';
        td_email2.innerHTML = i.email;
        td_email2.className = 'data';
        td_email2.classList.add('email');

        let tr_street = document.createElement('tr');
        let td_address1 = document.createElement('td');
        td_address1.rowSpan = '4';
        td_address1.innerHTML = 'address:';
        let td_street2 = document.createElement('td');
        td_street2.innerHTML = 'street:';
        let td_street3 = document.createElement('td');
        td_street3.innerHTML = i.address.street;
        td_street3.className = 'data';
        td_street3.classList.add('street');

        let tr_suite = document.createElement('tr');
        let td_suite2 = document.createElement('td');
        td_suite2.innerHTML = 'suite:';
        let td_suite3 = document.createElement('td');
        td_suite3.innerHTML = i.address.suite;
        td_suite3.className = 'data';
        td_suite3.classList.add('suite');

        let tr_city = document.createElement('tr');
        let td_city2 = document.createElement('td');
        td_city2.innerHTML = 'city:';
        let td_city3 = document.createElement('td');
        td_city3.innerHTML = i.address.city;
        td_city3.className = 'data';
        td_city3.classList.add('city');

        let tr_zipcode = document.createElement('tr');
        let td_zipcode2 = document.createElement('td');
        td_zipcode2.innerHTML = 'zipcode:';
        let td_zipcode3 = document.createElement('td');
        td_zipcode3.innerHTML = i.address.zipcode;
        td_zipcode3.className = 'data';
        td_zipcode3.classList.add('zipcode');

        let tr_phone = document.createElement('tr');
        let td_phone1 = document.createElement('td');
        td_phone1.innerHTML = 'phone:';
        let td_phone2 = document.createElement('td');
        td_phone2.colSpan = '2';
        td_phone2.innerHTML = i.phone;
        td_phone2.className = 'data';
        td_phone2.classList.add('phone');

        let tr_website = document.createElement('tr');
        let td_website1 = document.createElement('td');
        td_website1.innerHTML = 'website:';
        let td_website2 = document.createElement('td');
        td_website2.colSpan = '2';
        td_website2.innerHTML = i.website;
        td_website2.className = 'data';
        td_website2.classList.add('website');

        let tr_company_name = document.createElement('tr');
        let td_company1 = document.createElement('td');
        td_company1.rowSpan = '3';
        td_company1.innerHTML = 'company:';
        let td_company_name2 = document.createElement('td');
        td_company_name2.innerHTML = 'name:';
        let td_company_name3 = document.createElement('td');
        td_company_name3.innerHTML = i.company.name;
        td_company_name3.className = 'data';
        td_company_name3.classList.add('company_name');

        let tr_company_catchPhrase = document.createElement('tr');
        let td_company_catchPhrase2 = document.createElement('td');
        td_company_catchPhrase2.innerHTML = 'catch phrase:';
        let td_company_catchPhrase3 = document.createElement('td');
        td_company_catchPhrase3.innerHTML = i.company.catchPhrase;
        td_company_catchPhrase3.className = 'data';
        td_company_catchPhrase3.classList.add('company_catchPhrase');

        let tr_company_bs = document.createElement('tr');
        let td_company_bs2 = document.createElement('td');
        td_company_bs2.innerHTML = 'bs:';
        let td_company_bs3 = document.createElement('td');
        td_company_bs3.innerHTML = i.company.bs;
        td_company_bs3.className = 'data';
        td_company_bs3.classList.add('company_bs');

        // tr_id.append(td_id1, td_id2);
        tr_username.append(td_username1, td_username2);
        tr_email.append(td_email1, td_email2);
        tr_street.append(td_address1, td_street2, td_street3);
        tr_suite.append(td_suite2, td_suite3);
        tr_city.append(td_city2, td_city3);
        tr_zipcode.append(td_zipcode2, td_zipcode3);
        tr_phone.append(td_phone1, td_phone2);
        tr_website.append(td_website1, td_website2);
        tr_company_name.append(td_company1, td_company_name2, td_company_name3);
        tr_company_catchPhrase.append(td_company_catchPhrase2, td_company_catchPhrase3);
        tr_company_bs.append(td_company_bs2, td_company_bs3)
        table.append(tr_username, tr_email, tr_street,
            tr_suite, tr_city, tr_zipcode, tr_phone,
            tr_website, tr_company_name, tr_company_catchPhrase,
            tr_company_bs);


        let buttons = document.createElement('div');
        buttons.className = 'buttons';

        let updateButton = document.createElement('button');
        updateButton.className = 'update';
        updateButton.innerHTML = 'update';

        let deleteButton = document.createElement('button');
        deleteButton.className = 'delete';
        deleteButton.innerHTML = 'delete';

        buttons.append(updateButton, deleteButton);

        userCardInfo.append(h2, table, buttons);
        userCard.append(userCardInfo, spinner);
        usersContainer.append(userCard);
    }

    function showSpinner(el) {
        let spinner = el.querySelector('#spinner');
        spinner.className = 'show';
        setTimeout(() => {
            spinner.className = spinner.className.replace('show', '');
        }, 5000);
    }

    function hideSpinner(el) {
        let spinner = el.querySelector('#spinner');
        spinner.className = spinner.className.replace('show', '');
    }

    deleteButton = document.querySelectorAll('.delete');
    deleteButton.forEach(element => {
        element.addEventListener('click', function () {
            let card = this.parentElement.parentElement.parentElement;
            let userCardInfo = card.querySelector('.user_card_info');
            userCardInfo.style.display = 'none';
            showSpinner(card);
            fetch(`https://jsonplaceholder.typicode.com/users/${card.id}`, {
                method: 'DELETE'
            })
                .then(response => response.json())
                .then(() => {
                    hideSpinner(card);
                    card.style.display = 'none';
                });
        });
    });

    updateButton = document.querySelectorAll('.update');
    let updateFlag = false;
    updateButton.forEach(element => {
        element.addEventListener('click', function () {
            let card = this.parentElement.parentElement.parentElement;
            let updateData = card.querySelectorAll('.data');
            if (!updateFlag) {
                updateData.forEach(element => {
                    element.contentEditable = 'true';
                })
            } else {
                let updateUser = {
                    id: card.id,
                    name: card.querySelector('h2').textContent,
                    username: card.querySelector('.username').textContent,
                    email: card.querySelector('.email').textContent,
                    address: {
                        street: card.querySelector('.street').textContent,
                        suite: card.querySelector('.suite').textContent,
                        city: card.querySelector('.city').textContent,
                        zipcode: card.querySelector('.zipcode').textContent,
                        geo: {
                            lat: usersList[card.id - 1].address.geo.lat,
                            lng: usersList[card.id - 1].address.geo.lng
                        }
                    },
                    phone: card.querySelector('.phone').textContent,
                    website: card.querySelector('.website').textContent,
                    company: {
                        name: card.querySelector('.company_name').textContent,
                        catchPhrase: card.querySelector('.company_catchPhrase').textContent,
                        bs: card.querySelector('.company_bs').textContent
                    }
                }


                usersList[card.id - 1] = updateUser;
                console.log(usersList[card.id - 1]);

                updateData.forEach(element => {
                    element.contentEditable = 'false';
                })


                let userCardInfo = card.querySelector('.user_card_info');
                userCardInfo.style.display = 'none';
                showSpinner(card);
                fetch(`https://jsonplaceholder.typicode.com/users/${card.id
                    }`, {
                    method: 'PUT',
                    body: JSON.stringify(usersList[card.id - 1]),
                    headers: {
                        'Content-type': 'application/json; charset=UTF-8'
                    }
                })
                    .then((response) => response.json())
                    .then((json) => console.log(json))
                    .then(() => {
                        hideSpinner(card);
                        userCardInfo.style.display = 'flex';
                    });
            }
            updateFlag = !updateFlag;
        });

    });
}



const url = 'https://jsonplaceholder.typicode.com/users';

async function getUser() {
    const responce = await fetch(url);
    usersList = await responce.json();

    return usersList;
}

getUser().then(() => {
    displayUsers();
});





const root = document.getElementById('root');

const tweetItems = document.getElementById('tweetItems');
const addTweet = document.getElementsByClassName('addTweet')[0];
const alertMessage = document.getElementById('alertMessage');
const modifyItem = document.getElementById('modifyItem');
const tweets = document.getElementById('list');

for (let i = 0; i < localStorage.length; i++) {
    let key = localStorage.key(i);
    let li = document.createElement('li');
    li.name = key;
    let p = document.createElement('p');
    p.textContent = localStorage.getItem(key);

    let formButtons = document.createElement('div');
    let removeItem = document.createElement('button');
    removeItem.textContent = 'remove';
    removeItem.className = 'removeItem';

    let likeItem = document.createElement('button');
    likeItem.textContent = 'like';
    likeItem.className = 'likeItem';

    formButtons.append(removeItem, likeItem);
    li.append(p, formButtons);
    tweets.append(li);
}

const modifyItemButton = document.querySelectorAll('p');
modifyItemButton.forEach(function (item, index) {
    item.addEventListener('click', function () {
        location.hash = `#/edit/:${index}`;
        tweetItems.classList.add('hidden');

        modifyItem.classList.remove('hidden');
        let modifyItemInput = document.getElementById('modifyItemInput');
        let cancelModification = document.getElementById('cancelModification');
        let saveModifiedItem = document.getElementById('saveModifiedItem');

        let key = +item.name;
        modifyItemInput.value = localStorage.getItem(key);

        cancelModification.addEventListener('click', function () {
            history.back();
            tweetItems.classList.remove('hidden');
            modifyItem.classList.add('hidden');
        });

        saveModifiedItem.addEventListener('click', function () {
            let isAdded = false;
            for (let i = 0; i < localStorage.length; i++) {
                let key = localStorage.key(i);
                if (modifyItemInput.value === localStorage.getItem(key) || modifyItemInput.value.length >= 140) {
                    isAdded = true;
                }
            }

            if (!isAdded) {
                if (modifyItemInput.value.length > 0) {
                    localStorage.setItem(key, modifyItemInput.value);

                    history.back();
                    modifyItem.classList.add('hidden');
                    tweetItems.classList.remove('hidden');
                    location.reload();
                }
            } else {
                alertMessage.classList.remove('hidden');
                alertMessage.textContent = 'Error! You can\'t tweet about that';
                setTimeout(() => alertMessage.classList.add('hidden'), 2000);
            }
        })
    })
});

addTweet.addEventListener('click', function () {
    location.hash = '#/add';
    tweetItems.classList.add('hidden');

    /* Create elements for Add page */
    let addItem = document.createElement('div');
    addItem.id = 'addItem';

    let addHeader = document.createElement('h1');
    addHeader.id = 'addItemHeader';
    addHeader.textContent = 'Add tweet';

    let addTextarea = document.createElement('textarea');
    addTextarea.id = 'addItemInput';

    let formButtons = document.createElement('div');
    formButtons.className = 'formButtons';

    let cancelAdding = document.createElement('button');
    cancelAdding.id = 'cancelAdding';
    cancelAdding.textContent = 'Cancel'

    let saveAddingItem = document.createElement('button');
    saveAddingItem.id = 'saveAddingItem';
    saveAddingItem.textContent = 'Save';

    formButtons.append(cancelAdding, saveAddingItem);
    addItem.append(addHeader, addTextarea, formButtons);
    root.append(addItem);

    /* Create events for Add page */
    cancelAdding.addEventListener('click', function () {
        history.back();
        tweetItems.classList.remove('hidden');
        addItem.classList.add('hidden');
    });

    saveAddingItem.addEventListener('click', function () {
        let isAdded = false;
        for (let i = 0; i < localStorage.length; i++) {
            let key = localStorage.key(i);
            if (addTextarea.value === localStorage.getItem(key) || addTextarea.value.length >= 140) {
                isAdded = true;
            }
        }

        if (!isAdded) {
            if (addTextarea.value.length > 0) {
                localStorage.setItem(localStorage.length, addTextarea.value);

                history.back();
                addItem.classList.add('hidden');
                tweetItems.classList.remove('hidden');
                location.reload();
            }
        } else {
            alertMessage.classList.remove('hidden');
            alertMessage.classList.add('error');
            alertMessage.textContent = 'Error! You can\'t tweet about that';
            setTimeout(() => alertMessage.classList.add('hidden'), 2000);
        }
    })
});

const removeItem = document.querySelectorAll('.removeItem');
removeItem.forEach(function (item) {
    item.addEventListener('click', function () {
        for (let i = 0; i < localStorage.length; i++) {
            let key = localStorage.key(i);
            if (this.parentNode.parentNode.name === key) {
                localStorage.removeItem(key);
            }
        }

        location.reload();
    })
});

const likeItem = document.querySelectorAll('.likeItem');
let likeCount = 0;
let navigationButtons = document.getElementById('navigationButtons');
let likeButton = document.createElement('button');
likeButton.textContent = 'Go to liked';
likeButton.id = 'likedButton';
likeItem.forEach(function (item) {
    item.addEventListener('click', function () {
        if (this.textContent === 'like') {
            this.parentNode.parentNode.classList.add('liked');
            this.textContent = 'unlike';
            this.parentNode.parentNode.id = 'liked';
            likeCount++;

            alertMessage.classList.remove('hidden');
            alertMessage.classList.add('liked');
            alertMessage.textContent = `Hooray! You liked tweet with id ${this.parentNode.parentNode.name}`;
            setTimeout(() => alertMessage.classList.add('hidden'), 2000);
        } else {
            this.parentNode.parentNode.classList.remove('liked');
            this.textContent = 'like';
            likeCount--;

            alertMessage.classList.remove('hidden');
            alertMessage.classList.add('liked');
            alertMessage.textContent = `Sorry you no longer like tweet with id ${this.parentNode.parentNode.name}`;
            setTimeout(() => alertMessage.classList.add('hidden'), 2000);
        }

        if (likeCount !== 0) {
            navigationButtons.append(likeButton);
        } else {
            likeButton.remove();
        }
    })
});

likeButton.addEventListener('click', function () {
    location.hash = '#/liked';

    let li = document.getElementsByTagName('li');
    let h1 = document.getElementsByTagName('h1');
    h1.textContent = 'Liked Tweets';
    let navigationButtons = document.getElementById('navigationButtons');
    addTweet.remove();
    likeButton.remove();
    let button = document.createElement('button');
    button.textContent = 'back';
    navigationButtons.append(button);

    for (let i = 0; i < li.length; i++) {
        if (li[i].id !== 'liked') {
            li[i].remove();
        }
    }

    button.addEventListener('click', function () {
        history.back();
        location.reload();
    })
})



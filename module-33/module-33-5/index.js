function loadUsers() {
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then(data => displayUser(data));
}
function displayUser(data) {
    const ul = document.getElementById('users-list');
    for (const user of data) {
        // console.log(user.name);
        const li = document.createElement('li');
        li.innerText = user.name
        ul.appendChild(li)

    }

}
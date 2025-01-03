function loadPost() {
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response => response.json())
        .then(data => displayPost(data));
}


function displayPost(posts) {
    const postsContainer = document.getElementById('post-container')
    for (const post of posts) {
        const div = document.createElement('div');
        div.classList.add('post');
        div.innerHTML = `
        <h3>user-${post.userId}</h3>
        <h2>Post:${post.title}</h2>
        <p>Post Description: ${post.body}</p>
        `;
        postsContainer.appendChild(div);

    }
}
loadPost();
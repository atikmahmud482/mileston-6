const loadComments = () => {
    fetch('https://jsonplaceholder.typicode.com/comments')
        .then(res => res.json())
        .then(data => displayComments(data))
        .catch(error => console.log(error));

}
const displayComments = comments => {
    console.log(comments);
}

const loadComments2 = async () => {
    try {
        const res = await fetch('https://jsonplaceholder.typicode.com/comments');
        const data = await res.json();
        displayComments(data);
    } catch (error) {
        console.log(error);
    }

}

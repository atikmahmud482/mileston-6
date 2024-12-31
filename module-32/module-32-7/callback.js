function greeting(greetingHandler, name) {
    greetingHandler(name);
}

function greetingHandler(name) {
    console.log('good morning', name)
}

greeting(greetingHandler, 'atik')


// function submitButton() {
//     console.log('submit button')
// }
// document.getElementById('btn-submit').addEventListener('click', submitButton) 
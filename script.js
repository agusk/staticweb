document.addEventListener('DOMContentLoaded', (event) => {
    let heading = document.querySelector('h1');
    heading.addEventListener('click', () => {
        alert('Hello from the static app!');
    });
});
window.addEventListener('DOMContentLoaded', (event) => {

    let button = document.getElementById('HeaderMenuButton');

    button
        .addEventListener('click', event => {
            document.getElementById('HeaderMenuBlock')
                .classList.toggle('active')
        });

});


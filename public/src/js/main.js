window.addEventListener('DOMContentLoaded', (event) => {

    let button = document.getElementById('HeaderMenuButton');

    button
        .addEventListener('click', event => {

            document.getElementById('main-article-content-container')
                .classList.add('active')
            document.getElementById('HeaderMenuButton')
                .classList.add('active')

        });

    let button2 = document.getElementById('HeaderMenuButton2');

    button2
        .addEventListener('click', event => {
            document.getElementById('main-article-content-container')
                .classList.remove('active')
            document.getElementById('HeaderMenuButton')
                .classList.remove('active')
        });

});

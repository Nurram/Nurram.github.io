const firebaseConfig = {
    apiKey: "AIzaSyBaWutMZ_Df05WHLgAbWXX_W8BNg8OLRg0",
    authDomain: "nurram-projects.firebaseapp.com",
    databaseURL: "https://nurram-projects-default-rtdb.firebaseio.com",
    projectId: "nurram-projects",
    storageBucket: "nurram-projects.appspot.com",
    messagingSenderId: "67835346400",
    appId: "1:67835346400:web:0b59be15e9d59d73a5ff85",
    measurementId: "G-T6CNGSRKR5"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const database = firebase.database();
const ref = database.ref('comments');
ref.child('7').child('1').get().then((snapshot) => {
    if (snapshot.exists()) {
        const data = snapshot.val();

        for (let [key, value] of Object.entries(data)) {
            const name = document.createElement('h3');
            name.textContent = value['name'];;

            const comments = document.createElement('p');
            comments.textContent = value['comment'];

            const date = document.createElement('p');
            date.style.fontSize = '.8rem';
            date.style.opacity = '.6';
            date.style.padding = '0.3rem 0'
            date.textContent = value['date'];

            const div = document.getElementById('comment-list');
            div.appendChild(name);
            div.appendChild(comments);
            div.appendChild(date);
            div.appendChild(document.createElement('hr'));
        }
    } else {
        console.log("No data available");
    }
});
postComment = (name, comment) => {
    const datetime = new Date().toLocaleString();

    ref.child(datetime).set({
        name: name,
        comment: comment,
        date: datetime
    }).then(() => { console.log('haha') });
}
window.onload = () => {
    window.scrollTo(0, 0);

    const openBtn = document.getElementById('openBtn');
    const popUp = document.getElementById('popUp');
    const audio = document.getElementById('audio');
    openBtn.addEventListener('click', () => {
        popUp.removeAttribute('data-aos')
        popUp.classList.remove('aos-animate');
        popUp.setAttribute('data-aos', 'fade-down');
        audio.play();

        setTimeout(function () {
            AOS.init();
            popUp.style.display = 'none';
            document.body.style.overflowY = 'auto';
        }, 500);
    });

    const submitBtn = document.getElementById('submitBtn');
    submitBtn.addEventListener('click', async () => {
        const name = document.getElementById('name').value;
        const comment = document.getElementById('comment').value;

        if (name === '' || comment === '') {
            return;
        } else {
            await postComment(name, comment);
            location.reload();
        }
    })
}
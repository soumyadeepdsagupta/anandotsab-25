document.getElementById('hamburger').addEventListener('click', () => {
    const menu = document.getElementById('nav-menu');
    menu.classList.toggle('active');
});

document.getElementById('togglePostForm').addEventListener('click', () => {
    const form = document.getElementById('socialPostForm');
    form.classList.toggle('active');
});

document.getElementById('postToFacebook').addEventListener('click', async (e) => {
    e.preventDefault();
    const content = document.getElementById('postContent').value;
    const image = document.getElementById('postImage').files[0];
    alert('Posting to Facebook requires server-side integration with the Facebook Graph API. Please implement using a server-side script.');
});
function openLoginForm() {
    document.getElementById('id01').style.display = 'block';
}

function closeLoginForm() {
    document.getElementById('id01').style.display = 'none';
}

function openSignUpForm() {
    document.getElementById('id02').style.display = 'block';
}

function closeSignUpForm() {
    document.getElementById('id02').style.display = 'none';
}

function openSignUp() {
    document.getElementById('id01').style.display = 'none';
    openSignUpForm();
}

function createPost() {
    document.getElementById('id03').style.display = 'block';
}

function closeCreatePost() {
    document.getElementById('id03').style.display = 'none';
}
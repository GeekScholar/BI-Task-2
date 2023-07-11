
function viewPost(obj) {
    // var post = findPost(obj).children;
    // user = post[0].getElementsByTagName('p')[0].innerHTML;
    // console.log(user);
    // var postDetails = post[1].children;
    // content = postDetails[1].innerHTML;
    // var cheading = postDetails[0].children;
    // heading = cheading[0].innerHTML;
    // window.localStorage.setItem('heading', heading);
    // console.log(window.localStorage.getItem('heading'));
    // redirect();

    window.location = "post.html";
}

// function findPost(obj) {
//     var post = obj.parentElement.parentElement.parentElement;
//     return post;
// }


function editPost() {
    var editBtn = document.getElementById('edit-btn');
    editBtn.innerHTML = 'Save ';
    var saveIcon = document.createElement("i");
    saveIcon.setAttribute("class", "fas fa-save");
    editBtn.appendChild(saveIcon);
    var postData = document.getElementById("post-data");
    postData.contentEditable = "true";
    postHead = document.getElementById("post-head");
    postHead.contentEditable = "true";
    postData.style.border = "2px solid pink";
    postHead.style.border = "2px solid pink";
    editBtn.id = "save-btn";
    editBtn.className = "btn edit-btn";

    editBtn.addEventListener("click", () => {
        postData.contentEditable = "false";
        postHead.contentEditable = "false";
        postData.style.border = "none";
        postHead.style.border = "none";
        editBtn.id = "edit-btn";
        editBtn.className = "btn edit-btn";
        editBtn.innerHTML = 'Edit ';
        var editIcon = document.createElement("i");
        editIcon.setAttribute("class", "fa fa-edit");
        editBtn.appendChild(editIcon);
        editBtn.addEventListener("click", editPost);
    });

}
var clickCount = 0;
// function likePost() {
//     let BtnEle = document.querySelector("#like-btn");
//     let resEle = document.querySelector("#no-likes");
//     if (clickCount == 1) {
//         resEle.innerHTML = "1 person likes this!";
//     }
//     BtnEle.addEventListener("click", () => {
//         clickCount += 1;
//         resEle.innerHTML = clickCount + " people like this! ";
//     });
// }

function likePost() {
    var BtnEle = document.getElementById("like-btn");
    let resEle = document.querySelector("#no-likes");
    BtnEle.innerHTML = '<i class="fas fa-thumbs-up"></i> Liked';
    clickCount++;
    if (clickCount == 1) {
        resEle.innerHTML = "1 person likes this!";
    } else {
        resEle.innerHTML = clickCount + " people like this! ";
    }
}

function addComment() {
    var comment = document.getElementById('commnt').value;
    var ul = document.getElementById("comment-list");
    var li = document.createElement("li");
    li.appendChild(document.createTextNode(comment));
    // ul.appendChild(li);
    ul.insertBefore(li, ul.childNodes[0]);
    document.getElementById('commnt').value = "";
}

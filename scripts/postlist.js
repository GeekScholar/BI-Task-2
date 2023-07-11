var postNum;
function confirmDelPost(obj) {
    postNum = findPostNo(obj);
    document.getElementById('id04').style.display = 'block';
}

function findPostNo(obj) {
    var postNo = obj.parentElement.parentElement.parentElement.getAttribute("id");
    return postNo;
}

function yesDel(elementId) {
    console.log(postNum);
    document.getElementById('id04').style.display = 'none';
    document.getElementById(postNum).style.display = "none";
}

function noDel() {
    document.getElementById('id04').style.display = 'none';
}
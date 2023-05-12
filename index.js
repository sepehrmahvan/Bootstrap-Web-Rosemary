let a = document.querySelector("h6.older");
let posts = document.querySelector("div.posts-1");
let flag = true;

a.addEventListener("click", olderPost);

function olderPost() {
    posts.classList.remove("d-none");
    a.classList.add("d-none")
}

const posts = [
    {
        name: "Vincent van Gogh",
        username: "vincey1853",
        location: "Zundert, Netherlands",
        avatar: "images/avatar-vangogh.jpg",
        post: "images/post-vangogh.jpg",
        comment: "just took a few mushrooms lol",
        likes: 21
    },
    {
        name: "Gustave Courbet",
        username: "gus1819",
        location: "Ornans, France",
        avatar: "images/avatar-courbet.jpg",
        post: "images/post-courbet.jpg",
        comment: "i'm feelin a bit stressed tbh",
        likes: 4
    },
        {
        name: "Joseph Ducreux",
        username: "jd1735",
        location: "Paris, France",
        avatar: "images/avatar-ducreux.jpg", 
        post: "images/post-ducreux.jpg",
        comment: "gm friends! which coin are YOU stacking up today?? post below and WAGMI!",
        likes: 152
    }
]

// let avatar = document.getElementById('avatar');
// let username = document.getElementById('username');
// let location = document.getElementById('location');
// let likeBtn;
window.onload=function(){
    // let addLikeBtn;
    let main = document.getElementById('main');
    
    for(let count=0; count<posts.length; count++){
        main.innerHTML+= `
        <section class="section-header">
        <img id="avatar" class="user-image" src="${posts[count].avatar}" alt="per when he is smilling">
        <div class="title">
        <h3 id="username">${posts[count].name}</h3>
        <p id="location">${posts[count].location}</p>
        </div>
        
        </section>
        <section class="section-main">
        <img class="main-image" src="${posts[count].post}" alt="ducreux when he look straight to camera">
        </section>
        <section class="section-footer">
        <div class="icons">
        <img id="${"addLikeBtn"+count}" onclick="addLike(${count},${posts[count].likes});" class="icon" src="images/icon-heart.png" alt="">
        <img class="icon" src="images/icon-comment.png" alt="">
        <img  class="icon" src="images/icon-dm.png" alt="">
        </div>
        <h4 id="${"likes"+count}" value="${posts[count].likes}">${posts[count].likes} likes</h4>
        <h3>${posts[count].username} <span class="title-description">${posts[count].comment}</span></h3>
        
        </section>`
        
    }
    
    // addLike();
    
    
    
}
function addLike(count,like){
    let addLikeBtn = document.getElementById(`addLikeBtn${count}`);
    let likes = document.getElementById(`likes${count}`);
    like=like+1;
    likes.innerHTML=like+" likes";
    addLikeBtn.style.background="red";
    
}




// likeBtn.addEventListener(("click"),()=>{
//     console.log("ok");
// })
// // function addLike(){

// likeBtn.style.background="red";
    
// }



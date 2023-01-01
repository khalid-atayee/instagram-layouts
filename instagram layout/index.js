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


let main = document.getElementById('main')
    
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
        <img id="${"addLikeBtn"+count}" onclick="like(${count});" class="icon" src="images/icon-heart.png" alt="">
        <img class="icon" src="images/icon-comment.png" alt="">
        <img  class="icon" src="images/icon-dm.png" alt="">
        </div>
        <h4 id="${"likes"+count}" value="${posts[count].likes}">${posts[count].likes} likes</h4>
        <h3>${posts[count].username} <span class="title-description">${posts[count].comment}</span></h3>
        
        </section>`
        
    }




// this function is responsible for increment and decrementing of likes it accept a parameter like count, count is the unique key that makes
// unique ids for like buttons and like contents
function like(count){
    
    // this decleartion help us to access to specific like buttons when we click
    let addLikeBtn = document.getElementById(`addLikeBtn${count}`);

    // this declartion help us to access the specific likes content that we want to increment or decrement 
    let likesContent = document.getElementById(`likes${count}`)


    // here we check if background-color-icon class exist in to addLikeBtn or not, if not exist we will increment the likes by 1
    // and add this class to addLikeBtn
    if(!addLikeBtn.classList.contains('background-color-icon')){
        
        let likeCount = checkLikes(likesContent)+1
        likesContent.textContent=likeCount+' likes'
        addLikeBtn.classList.add('background-color-icon')
    }

    // here we check if background-color-icon class , if not exist in addLikeBtn we will decrement the likes by 1
    // and remove this class from addLikeBtn
    else{
        let likeCount = checkLikes(likesContent)-1
        likesContent.textContent=likeCount+' likes'
        addLikeBtn.classList.remove('background-color-icon')
        
    }
}
// this function receive likes content as a parameter and split it to get the likes and then change the dataType to integer using Number
// and the will return to like function
function checkLikes(likesContent){
    let likesValues = likesContent.textContent
        

    // split function used to split likes number from likes text for example likesValues = 224 likes so split function split this from space
    // between 224 and likes and will make it an array with two item, now i need first value then i used [0] in likesValues
        likesValues = likesValues.split(' ')
    
        return Number(likesValues[0])
}

// note: you can use console.log() function in any where for debug and if you feel any confusion


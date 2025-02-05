const posts = [
    {
        name: "Vincent van Gogh",
        username: "vincey1853",
        location: "Zundert, Netherlands",
        avatar: "images/avatar-vangogh.jpg",
        post: "images/post-vangogh.jpg",
        comment: "just took a few mushrooms lol",
        likes: 21,
    },
    {
        name: "Gustave Courbet",
        username: "gus1819",
        location: "Ornans, France",
        avatar: "images/avatar-courbet.jpg",
        post: "images/post-courbet.jpg",
        comment: "i'm feelin a bit stressed tbh",
        likes: 4,
    },
        {
        name: "Joseph Ducreux",
        username: "jd1735",
        location: "Paris, France",
        avatar: "images/avatar-ducreux.jpg",
        post: "images/post-ducreux.jpg",
        comment: "gm friends! which coin are YOU stacking up today?? post below and WAGMI!",
        likes: 152,
    }
]
const main = document.getElementById("main")

main.innerHTML = posts.map(post => 
    `<section>
                <div class="contanier">
                    <div class="avatar-info">
                        <div class="avater-box">
                            <img src=${post.avatar} class="avatar-img">
                            <div class="info">
                                <h1>${post.name}</h1>
                                <address>${post.location}</address>
                            </div>
                        </div>
                    </div>
                        <img src=${post.post} class="post-img" id="img">
                        <div class="icon-box">
                            <img src="images/icon-heart.png" class="icon">
                            <img src="images/icon-comment.png" class="icon">
                            <img src="images/icon-dm.png" class="icon">
                        </div>
                        <p class="p1" id="likes">${post.likes}</p>
                        <p class="p2"><span>${post.username}</span>${post.comment}</p>
                         <div class="divider"></div>
                </div>
            </section>`
)





    

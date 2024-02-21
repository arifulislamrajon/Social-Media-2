const media600 = window.matchMedia("(max-width: 600px)");
const html = document.querySelector("html");
const body = document.querySelector("body");
const shortcut = document.querySelector(".shortcut-icon");
const shortcutActive = document.querySelectorAll(".shortcut-icon a");
const dark = document.querySelector(".dark-mode");
const darkMode = document.querySelector(".dark-mode span");
const messageCount = document.querySelector(".msg-count");
const notiCount = document.querySelector(".noti-count");
const msg = document.querySelector(".msg-count span");
const noti = document.querySelector(".noti-count span");
const themeIcon = document.querySelector(".theme-icon");
const friendIcon = document.querySelector(".friend-icon");
const storyUser = document.querySelector(".story-user");
const message = document.querySelector(".message");
const msgShortcut = document.querySelectorAll(".msg-shortcut p")
const msgSearch = document.getElementById("msg-search");
const singleChat = document.querySelectorAll(".single-chat");
const friend = document.querySelector(".friend")
const singleFnd = document.querySelectorAll(".single-fnd");
const root = document.querySelector(":root")
const theme = document.querySelector(".theme");
const fontSizes = document.querySelectorAll(".font-value span");
const setColor = document.querySelectorAll(".color-value span");
const lightTheme = document.querySelector(".light")
const lightThemeSpan = lightTheme.querySelector("span");
const darkTheme = document.querySelector(".dark");
const darkThemeSpan = darkTheme.querySelector("span");
const dimTheme = document.querySelector(".dim");
const dimThemeSpan = dimTheme.querySelector("span");
const storyName = document.querySelectorAll(".single-story h5");
const user = document.querySelector(".user");
const button2 = document.querySelectorAll(".btn-2");
const createPost = document.querySelector(".create-post");
const createPostDiv = document.querySelector(".create-post div");
const createPostOpen = document.getElementById("create-post-open");
const createPostShow = document.querySelector(".create-post-section");
const closePost = document.querySelector(".create-post-top i")
const newPost = document.querySelector(".new-post");
const postValue = document.getElementById("new-post-value");
const newPostForm = document.getElementById("new-post-form");
const addPost = document.getElementById("post")
const singlePost = document.querySelectorAll(".single-post")
const postThreeDot = document.querySelectorAll(".post-top a");
const reactImg = document.querySelectorAll(".post-react span i img")
const profileBox = document.querySelector(".profile-box img");
const inputBox = document.querySelector(".input-box input");
const ul = document.getElementById("ul");
const rightSec = document.querySelector(".right-section")
const postReact = document.querySelectorAll(".post-react span .fa-heart");
const profileChange = document.querySelector(".change-profile")
const profileChange1 = document.getElementById("changeProfile-1");
const profileChange2 = document.getElementById("changeProfile-2");
const profileChange3 = document.getElementById("changeProfile-3");
const profileChange4 = document.getElementById("changeProfile-4");
const file = document.getElementById("file")
const acceptButtons = document.querySelectorAll(".accept");
const removeButtons = document.querySelectorAll(".remove");

const border = "1px solid var(--primary-color-1)"

// const label = document.querySelector("label");
// const input = document.getElementById("file");
// const images = document.querySelectorAll("img[id^='changeProfile']")


/*********global window ends form here********/
window.addEventListener("click", (event) => {
    if (!theme.contains(event.target) && event.target !== themeIcon) {
        theme.style.display = "none";
    }

    if (!createPostShow.contains(event.target) && event.target !== createPostOpen) {
        createPostShow.style.display = "none";
    }

    if(!profileChange.contains(event.target) && event.target !== user && event.target !== profileBox){
        profileChange.style.display = "none"
    }

    if(!message.contains(event.target) && event.target !== messageCount){
        message.style.border = "none"
    }
});

window.addEventListener("scroll", (event) => {
    if (!theme.contains(event.target) && event.target !== themeIcon) {
        theme.style.display = "none";
    }

    if (!createPostShow.contains(event.target) && event.target !== createPostOpen) {
        createPostShow.style.display = "none";
    }

    if(!profileChange.contains(event.target) && event.target !== user){
        profileChange.style.display = "none"
    }

    if(media600.matches){
        rightSec.style.display = "none"
    }else{
        rightSec.style.display = "block"
    }
});
/*********global window start form here********/

/*********swiper start form here********/
var swiper = new Swiper(".mySwiper", {
    breakpoints: {
        600: {
          slidesPerView: 3.8,
          spaceBetween: 8,
        },
        1600: {
            slidesPerView: 5.5,
            spaceBetween: 10,
        }
      },
  });
/*********swiper ends form here********/

/*********dark mode toggle btn start form here********/
darkMode.addEventListener("click", () => {
    darkMode.classList.toggle("dark-mode-toggle");
    dark.classList.toggle("active")
    if(darkMode.classList.contains("dark-mode-toggle")){
    button2.forEach(button2 => {
        button2.style.color = "white"
    })
    lightThemeSpan.style.backgroundColor = 'white'
    darkThemeSpan.style.backgroundColor = 'white'
    dimThemeSpan.style.backgroundColor = 'white'
    dimTheme.style.color = "white"
    document.querySelector("body").style.backgroundColor = "black"
    root.style.setProperty("--white-color", "black")
    root.style.setProperty("--text-color-1", "white")
    storyName.forEach(story => {
        story.style.color = "white"
    })
    shortcutActive.forEach(shortcut => {
        shortcut.classList.add("hover-color")
    })
    singleFnd.forEach(chat => {
        chat.style.border = border;
    })
    singlePost.forEach(post => {
        post.style.border =  border;
    })
    message.style.border = border;
    shortcut.style.border = border;
    user.style.border = border;
}else{
    darkTheme.style.color = "white"
    button2.forEach(button2 => {
        button2.style.color = "var(--text-color-1)"
    })
    lightThemeSpan.style.backgroundColor = 'white'
    darkThemeSpan.style.backgroundColor = 'white'
    dimThemeSpan.style.backgroundColor = 'white'
    dimTheme.style.color = "white"
    document.querySelector("body").style.backgroundColor = "var(--input-color)"
    root.style.setProperty("--white-color", "white")
    root.style.setProperty("--text-color-1", "rgb(61,61,61)")

    shortcutActive.forEach(shortcut => {
        shortcut.classList.remove("hover-color")
    })
    singleFnd.forEach(chat => {
        chat.style.border = "none"
    })

    singlePost.forEach(post => {
        post.style.border =  "none"
    })
    message.style.border = "none"
    shortcut.style.border = "none"
    user.style.border = "none"
}
})
/*********dark mode toggle btn ends form here********/

/*********left section start form here********/
const shortcutActiveRemove = () => {
    shortcutActive.forEach(item => {
        item.classList.remove("active");
    });
}

shortcutActive.forEach(item => {
    item.addEventListener("click", () => {
        shortcutActiveRemove()
        item.classList.add("active")
    })
});

messageCount.addEventListener("click", () => {
    msg.style.display = "none"
    if(media600.matches){
        rightSec.classList.toggle("right-section")
    }else{
        rightSec.style.display = "block"
    }
    message.style.display = "block";
    message.style.border = border;
    friend.style.marginTop = "1rem"
})

notiCount.addEventListener("click", () => {
    noti.style.display = "none"
})

const msgSrtRemove = () => {
    msgShortcut.forEach(item => {
        item.classList.remove("msg-srt-active")
    })
}

msgShortcut.forEach(item => {
    item.addEventListener("click", () => {
        msgSrtRemove()
        item.classList.add("msg-srt-active")
    })
});
/*********left section ends form here********/

/*********right section start form here********/
msgSearch.addEventListener("keyup", () => {
    const val = msgSearch.value.toLowerCase();
    singleChat.forEach(item => {
        let name = item.querySelector("h5").textContent.toLowerCase();
        if(name.indexOf(val) != -1){
            item.style.display = "flex"
        }else{
            item.style.display = "none"
        }
    });
})
/*********left section ends form here********/


inputBox.addEventListener("keyup", () => {
    const val = inputBox.value.toLowerCase();
    singleFnd.forEach(fnd => {
        let name = fnd.querySelector(".fnd-top p").textContent.toLowerCase();
        if(name.indexOf(val) != -1){
            fnd.style.display = "block";
        }else{
            fnd.style.display = "none"
        }
    })
})

/*********theme start form here********/
themeIcon.addEventListener("click", () => {
    theme.style.display = "initial"
    theme.classList.toggle("theme")
})

fontSizes.forEach(font => {
    font.addEventListener("click", () => {
         let fontSize ;

    if(font.classList.contains('font-size-1')){
        fontSize = "10px";
    }else if(font.classList.contains('font-size-2')){
        fontSize = "13px"
    }else if(font.classList.contains('font-size-3')){
        fontSize = "15px"
    }else if(font.classList.contains('font-size-4')){
        fontSize = "18px"
    }else if(font.classList.contains('font-size-5')){
        fontSize = "20px"
    }
    document.querySelector("html").style.fontSize = fontSize;   
})
})

setColor.forEach(color => {
    color.addEventListener("click", () => {
        let setColor;
        if(color.classList.contains('color-1')){
            setColor = "var(--primary-color-1)"
        }else if(color.classList.contains('color-2')){
            setColor = "var(--primary-color-2)"
        }else if(color.classList.contains('color-3')){
            setColor = "var(--primary-color-3)"
        }else if(color.classList.contains('color-4')){
            setColor = "var(--primary-color-4)"
        }else if(color.classList.contains('color-5')){
            setColor = "var(--primary-color-5)"
        }else if(color.classList.contains('color-6')){
            setColor = "var(--primary-color-6)"
        }

        root.style.setProperty("--primary-color-1", setColor)
    })
})

lightTheme.addEventListener('click', () => {
    root.style.setProperty("--white-color", "white")
    root.style.setProperty("--text-color-1", "black")
    document.querySelector("body").style.backgroundColor = "var(--input-color)";
    storyUser.style.border = "none"
    createPost.style.border =  "none";
    message.style.border = "none"
    shortcut.style.border = "none"
    user.style.border = "none"
    createPostOpen.style.color = "black";
    createPostOpen.style.background = "white"
    singleFnd.forEach(fnd => {
        fnd.style.border = "none"
    })
    singlePost.forEach(fnd => {
        fnd.style.border = "none"
    })
    postThreeDot.forEach(threeDot => {
        threeDot.style.color = ""
    })
    profileChange3.style.border = "none";
    postReact.style.color = "none"
})

dimTheme.addEventListener("click",  () => {
    root.style.setProperty("--white-color", "rgb(27, 0, 50)")
    root.style.setProperty("--text-color-1", "white")
    document.querySelector("body").style.backgroundColor = "rgb(27, 0, 50)";

    createPost.style.border =  border;
    message.style.border = border
    shortcut.style.border = border
    user.style.border = border
    darkTheme.style.color = "white"
    dimTheme.style.color = "white"
    singleFnd.forEach(fnd => {
        fnd.style.border = border
    })
    removeButtons.forEach(remove => {
        remove.style.color = "white"
    })

    singlePost.forEach(post => {
        post.style.border =  border
    })

    storyName.forEach(story => {
        story.style.color = "white"
    })

    createPostDiv.style.color = "white";
    lightThemeSpan.style.background = "white";
    dimThemeSpan.style.background = "white"
    darkThemeSpan.style.background = "white"
    storyUser.style.border = border
    dimTheme.style.border = "1px solid white"
    darkTheme.style.border = "1px solid white"
    createPostOpen.style.background = "rgb(27, 0, 50)"
    createPost.style.color = "white"
    postThreeDot.forEach(threeDot => {
        threeDot.style.color = "white"
    })
    shortcutActive.forEach(shortcut => {
        shortcut.classList.add("hover-color")
    })
    profileChange3.style.border = border;
    postReact.style.color = "white"
})

darkTheme.addEventListener("click", () => {
    darkTheme.style.color = "white"
    button2.forEach(button2 => {
        button2.style.color = "white"
    })

    createPostDiv.style.color = "white";
    createPost.style.border =  border;
    lightThemeSpan.style.backgroundColor = 'white'
    darkThemeSpan.style.backgroundColor = 'white'
    dimThemeSpan.style.backgroundColor = 'white'
    dimTheme.style.color = "white"
    document.querySelector("body").style.backgroundColor = "black"
    root.style.setProperty("--white-color", "black")
    root.style.setProperty("--text-color-1", "white")
    storyName.forEach(story => {
        story.style.color = "white"
    })
    shortcutActive.forEach(shortcut => {
        shortcut.classList.add("hover-color")
    })
    singleFnd.forEach(chat => {
        chat.style.border = border;
    })

    singlePost.forEach(post => {
        post.style.border =  border;
    })

    message.style.border = border;
    shortcut.style.border = border;
    user.style.border = border;
    storyUser.style.border = border;
    dimTheme.style.border = "1px solid white";
    darkTheme.style.border = "1px solid white";
    createPostOpen.style.background = "black";
    createPost.style.color = "white";
    postReact.style.color = "white"
    postThreeDot.forEach(threeDot => {
        threeDot.style.color = "white"
    })
    profileChange3.style.border = border;
})
/*********theme ends form here********/

/*********create post start form here********/
createPostOpen.addEventListener("click", () => {
    createPostShow.style.display = "initial"
})

closePost.addEventListener("click", () => {
    createPostShow.style.display = "none"
})


const handleNewPost = () => {
    const inputData = postValue.value;
    const list = document.createElement("li")
    list.innerHTML= `${inputData}`
    ul.appendChild(list)
    createPostShow.style.display = "none"
    newPost.style.display = "block"
}
addPost.addEventListener("click", handleNewPost)

postReact.forEach(reactHeart => {
    reactHeart.addEventListener("click", () => {
        if(reactHeart.style.color === "red"){
            reactHeart.style.color = ""
        }else{
            reactHeart.style.color = "red"
            reactHeart.style.fontWeight = "800"
        }
    })
})
/*********create post ends form here********/

/*********profile change start form here********/
file.onchange = () => {
    const files = file.files[0]

    profileChange1.src = URL.createObjectURL(files)
    profileChange2.src = URL.createObjectURL(files)
    profileChange3.src = URL.createObjectURL(files)
    profileChange4.src = URL.createObjectURL(files)

    profileChange.style.display = "none"
}

// label.addEventListener("click", () => {
//     input.addEventListener("change", () => {
//         const selectedFile = input.files[0]
//         const imgURL = URL.createObjectURL(selectedFile)
//         for(const image of images) {
//             image.src = imgURL;
//         }
//     })
// })
/*********left section start form here********/


user.addEventListener("click", () => {
    profileChange.style.display = "block"
})

profileBox.addEventListener("click", () => {
    profileChange.style.display = "block"
})

/*********friend start form here********/
removeButtons.forEach(removeFnd => {
    removeFnd.addEventListener("click", function () {
        removeFnd.innerHTML = "..."
        setTimeout(() => {
            const singleFndRemove = this.closest(".single-fnd");
            singleFndRemove.style.display = "none";
        }, 1500);
    })
})

acceptButtons.forEach(acceptBtn => {
    acceptBtn.addEventListener("click", () => {
        acceptBtn.innerHTML = "...";
        setTimeout(() => {
            const fndBtn = acceptBtn.closest(".fnd-btn")
            fndBtn.innerHTML = "<p>Now you're friend</p>"
        }, 1500);
    })
})

friendIcon.addEventListener("click", () => {
        message.style.display = "none";
        friend.style.margin = "0"
})
/*********friend ends form here********/
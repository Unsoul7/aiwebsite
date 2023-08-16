

// Initialize Firebase
const firebaseConfig = {
    apiKey: "AIzaSyBg5EfS3La1DNXQRZM-ORAtokDNKUShJig",
    authDomain: "aiblog-c6736.firebaseapp.com",
    databaseURL: "https://aiblog-c6736-default-rtdb.firebaseio.com",
    projectId: "aiblog-c6736",
    storageBucket: "aiblog-c6736.appspot.com",
    messagingSenderId: "1082170591883",
    appId: "1:1082170591883:web:2ed7dbfd98deeb8c59628e"
  };
  
  firebase.initializeApp(firebaseConfig);
  
  const database = firebase.database();
  
  const blogGrid = document.getElementById("blogGrid");
  
  function createBlogPostCard(blogPost) {
    const blogPostCard = document.createElement("article");
    blogPostCard.classList.add("blog-post");
  
    const imageElement = document.createElement("img");
    imageElement.src = blogPost.image;
    imageElement.alt = blogPost.title;
    blogPostCard.appendChild(imageElement);
  
    const titleLink = document.createElement("a");
    titleLink.href = blogPost.url; // Set the URL here
    titleLink.textContent = blogPost.title;
    blogPostCard.appendChild(titleLink);

  
    const contentElement = document.createElement("p");
    contentElement.textContent = blogPost.description;
    blogPostCard.appendChild(contentElement);
  
    blogGrid.appendChild(blogPostCard);
  }
  
  function fetchBlogPosts() {
    database.ref("blogPosts").on("value", (snapshot) => {
      const blogPosts = snapshot.val();
      for (const post of Object.values(blogPosts)) {
        createBlogPostCard(post);
      }
    });
  }
  
  document.addEventListener("DOMContentLoaded", fetchBlogPosts);
  
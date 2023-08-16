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
  
  const adminForm = document.getElementById("adminForm");
  
  adminForm.addEventListener("submit", function (e) {
    e.preventDefault();
  
    const postTitle = adminForm.postTitle.value;
    const postImage = adminForm.postImage.value;
    const postDescription = adminForm.postDescription.value;
    const postUrl = adminForm.postUrl.value;
  
    // Push data to Firebase
    database.ref("blogPosts").push({
      title: postTitle,
      image: postImage,
      description: postDescription,
      url: postUrl
    });
  
    // Clear form fields
    adminForm.reset();
  });
  
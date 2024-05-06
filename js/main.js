const postBtn = document.getElementById('post-btn');
const postThing = document.getElementById('post-thing');
const mainPost = document.getElementById('main-post');

var postArray = [];

function addPost(){
    let date = new Date();
    var post = postThing.value;
    if (post !== '') {
        var postDiv = document.createElement('div');
        postDiv.className = 'main-inner border-gray-100 shadow-md w-4/5 px-5 py-10 rounded-md';
        postDiv.appendChild(document.createTextNode(post));
        postDiv.appendChild(document.createElement('br'));
        postDiv.appendChild(document.createElement('br'));
        // create a div for the date with tainwinds class
        var dateDiv = document.createElement('div');
        dateDiv.className = 'text-gray-500 text-sm';
        dateDiv.appendChild(document.createTextNode('Posted on: ' + date.toDateString() + date.toLocaleTimeString()));
        postDiv.appendChild(dateDiv);
        mainPost.appendChild(postDiv);
        postArray.push(mainPost.innerHTML);
        postThing.value = '';
        if (postArray.length>=10) {
            location.replace('https://www.youtube.com/watch?v=dQw4w9WgXcQ')
        }
    }
}

postBtn.addEventListener('click', () => {
    addPost()
});

postThing.addEventListener('keydown', (e) => {
    console.log(e.key)
    if (e.key == 'Enter' && !e.isComposing) addPost();
});
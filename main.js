var url = "https://api.themoviedb.org/3/movie/now_playing?api_key=eba8b9a7199efdcb0ca1f96879b83c44"
var imgPath = " https://image.tmdb.org/t/p/w500"
var row = document.getElementById("rowData");
var allMovies = document.getElementById('allMovies');
var allData = [];
var word = document.getElementById('word');
var email = document.getElementById('email');
var emailalert = document.getElementById('emailalert');
var name = document.getElementById('name');
var namealert = document.getElementById('namealert');
var phone = document.getElementById('phone');
var phonealert = document.getElementById('phonealert');
var age = document.getElementById('age');
var agealert = document.getElementById('agealert');
var password = document.getElementById('password');
var passwordalert = document.getElementById('passwordalert');
var rePassword = document.getElementById('rePassword');
var repasswordalert = document.getElementById('repasswordalert');

getMovies();


function getMovies() {

    var r = new XMLHttpRequest();
    r.open("get", url),
        r.send(),
        r.onreadystatechange = function () {
            let data = JSON.parse(r.response)
            allData = data.results
            displayData(data.results);

        }


}
function displayData(data) {
    for (var i = 0, content = ""; i < data.length; i++) {
        content += `
        <div class="col-md-6 col-lg-4 my-3 myM  shadow">
        <div class="movie shadow rounded position-relative">
        <div class="post">
        <img src="${imgPath + data[i].poster_path}" class="img-fluid rounded">
        <div class="layer d-flex align-items-center ">
        <div class="info p-0">
        <h2>${data[i].original_title}</h2>
        <p>${data[i].overview}</p>
        <p>rate:${data[i].vote_average}</p>
        <p>${data[i].release_date}</p>
        </div>
        </div>
        </div>
        </div>
        </div>
        `
        row.innerHTML = content;
    }
}
function mysearch(search) {
    let searchUrl = `https://api.themoviedb.org/3/search/movie?query=${search}&api_key=eba8b9a7199efdcb0ca1f96879b83c44&language=en-US&include_adult=false`
    var r = new XMLHttpRequest();
    r.open("get", searchUrl),
        r.send(),
        r.onreadystatechange = function () {
            let data = JSON.parse(r.response)
            displayData(data.results);
        }

}
allMovies.onkeyup = function () {
    allMovies.value.toLowerCase() === "" ?
        displayData(allData)
        : mysearch(allMovies.value.toLowerCase())
}

function localSearch(search) {
    var result = allData.filter(x => x.original_title.toLowerCase().includes(search))
    displayData(result);
}
word.onkeyup = function () {
    word.value.toLowerCase() === "" ?
        displayData(allData)
        : localSearch(word.value.toLowerCase())
}



function validateEmail(email) {
    /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/.test(email) == 1 ?
        emailalert.style.display = "none"
        :
        emailalert.style.display = "block"

}
email.onkeyup = function () {
    validateEmail(email.value)
}

function validateName(name) {
    /^(([A-Za-z]+[\-\']?)*([A-Za-z]+)?\s)+([A-Za-z]+[\-\']?)*([A-Za-z]+)?$/.test(name) == 1 ?
        namealert.style.display = "none"
        :
        namealert.style.display = "block"

}
name.onkeyup = function () {
    validateName(name.value)
}
function validatePhone(phone) {
    /^[+]*[(]{0,1}[0-9]{1,3}[)]{0,1}[-\s\./0-9]*$/g.test(phone) == 1 ?
        phonealert.style.display = "none"
        :
        phonealert.style.display = "block"

}
phone.onkeyup = function () {
    validatePhone(phone.value)
}
function validateage(age) {
    /^[1-9]?\d$/.test(age) == 1 ?
        agealert.style.display = "none"
        :
        agealert.style.display = "block"

}
age.onkeyup = function () {
    validateage(age.value)
}
function validatepassword(password) {
    /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password) == 1 ?
        passwordalert.style.display = "none"
        :
        passwordalert.style.display = "block"

}
password.onkeyup = function () {
    validatepassword(password.value)
}
function validateRepassword(password,repassword) {
        password === repassword ?
         repasswordalert.style.display = "none"
        :
        repasswordalert.style.display = "block"

}
rePassword.onkeyup = function () {
    validateRepassword(password.value,rePassword.value)
}

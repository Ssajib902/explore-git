

function loadUsers2(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => displayUsers2(data))
}

function displayUsers2(data){
        // console.log(data);
        for(const user of data){
            console.log(user.name);
            console.log(user.email);
        }
}
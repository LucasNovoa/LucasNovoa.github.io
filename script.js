let night = true;
document.getElementById('btnModo').onclick = ()=> {
    night ? document.body.style.backgroundColor = '#292928' : document.body.style.backgroundColor = '#E0DEDA';
    const text = document.getElementsByClassName('text');
    for(let i = 0; i < text.length; i++) {
        night ? text[i].style.color = '#E0DEDA' : text[i].style.color = '#292928'
    };
    night ? 
        document.getElementById('btnModo').innerHTML = '<i class="fas fa-sun fa-2x"></i>' :
        document.getElementById('btnModo').innerHTML = '<i class="fas fa-moon fa-2x"></i>';
    night = !night;
};

fetch('https://randomuser.me/api/?gender=male')
      .then(response => response.json())
      .then(user => {
        console.log(user.results[0])
        document.getElementById('name').innerHTML = user.results[0].name.first + ' ' + user.results[0].name.last
        document.getElementById('profileImg').src = user.results[0].picture.large
        document.getElementById('email').innerHTML = '<i class="fas fa-envelope"></i> ' + user.results[0].email
        document.getElementById('phone').innerHTML = '<i class="fas fa-phone"></i> ' + user.results[0].phone
        document.getElementById('city').innerHTML = '<i class="far fa-earth-americas"></i> ' + user.results[0].location.city + ', ' + user.results[0].location.country
        document.getElementById('birthday').innerHTML = user.results[0].dob.date.slice(8,10)+' / '+user.results[0].dob.date.slice(5,7)+' / '+user.results[0].dob.date.slice(0,4)
        // localStorage.user = user.name
      });

document.getElementById('profileImg').src

document.getElementById('arrowUp').onclick = () => window.scrollTo({top: 0, behavior: 'smooth'})
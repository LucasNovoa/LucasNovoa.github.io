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

let user;
fetch('https://randomuser.me/api/?gender=male')
      .then(response => response.json())
      .then(user => {
        user = user.results[0]
        // console.log(user)
        document.getElementById('name').innerHTML = user.name.first + ' ' + user.name.last;
        document.getElementById('profileImg').src = user.picture.large;
        document.getElementById('email').innerHTML = '<i class="fas fa-envelope"></i> ' + user.email;
        document.getElementById('phone').innerHTML = '<i class="fas fa-phone"></i> ' + user.phone;
        document.getElementById('city').innerHTML = user.location.city + ', ' + user.location.country;
        document.getElementById('birthday').innerHTML = user.dob.date.slice(8,10)+' / '+user.dob.date.slice(5,7)+' / '+user.dob.date.slice(0,4);
        document.getElementById('emailReferencias').href = `mailto:${user.email}?Subject=Hola ${user.name.first}, me enviarías tus referencias laborales?`;
        let address = document.getElementById('address');
        address.onclick = () => address.innerHTML === '( Ver dirección )' ? address.innerHTML = `${user.location.street.name} ${user.location.street.number}` : address.innerHTML = '( Ver dirección )';
    });

document.getElementById('profileImg').src;

document.getElementById('arrowUp').onclick = () => {
    window.scrollTo(0,0)
};
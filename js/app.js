const elDarkModeBtn = document.querySelector('.dark-mode-btn');

elDarkModeBtn.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
});

const elSearchInput = document.querySelector('.search__input');
const elSearchForm = document.querySelector('.search__form');
const elSearchBtn = document.querySelector('.search__btn');
const firstname = document.querySelector('.firstname');
const username = document.querySelector('.username');
const elFollowersCount = document.querySelector('.followers-count');
const elFollowingCount = document.querySelector('.following-count');
const elReposCount = document.querySelector('.repos-count');
const elUserBio = document.querySelector('.user__bio');
const elUserImg = document.querySelector('.user-img');
const elJoinedYear = document.querySelector('.joined-year');
const elJoinedMonth = document.querySelector('.joined-month');
const elJoinedDay = document.querySelector('.joined-day');
// SOCIAL NETWORK
const elUserLocation = document.querySelector('.user-location');
const elUserTwitter = document.querySelector('.user-twitter');
const elUserLink = document.querySelector('.user-link');
const elUserEmail = document.querySelector('.user-email');

const getData = async (user) => {
  const result = await fetch(`https://api.github.com/users/${user}`);
  return result.json();
}

elSearchForm.addEventListener('submit', (e) => {
  e.preventDefault();
  username.innerHTML = elSearchInput.value;
  elSearchInput.value = ''
  
  getData(username.innerHTML)
    .then((data) => elFollowersCount.innerHTML = data.followers)
  
  getData(username.innerHTML)
    .then((data) => elFollowingCount.innerHTML = data.following);
  
  getData(username.innerHTML)
    .then((data) => elReposCount.innerHTML = data.public_repos);
  
  getData(username.innerHTML)
    .then((data) => elUserBio.innerHTML =  data.bio != null ? data.bio : 'This is profile has no bio');
  
  getData(username.innerHTML)
    .then((data) => firstname.innerHTML = data.name);
  
    getData(username.innerHTML)
    .then((data) => elUserImg.src = data.avatar_url);
  
    getData(username.innerHTML)
    .then((data) => elJoinedYear.innerHTML = getYear(data.created_at));
  
  getData(username.innerHTML)
    .then((data) => elJoinedMonth.innerHTML = getMonth(data.created_at));
  
  getData(username.innerHTML)
    .then((data) => elJoinedDay.innerHTML = getDay(data.created_at));

  getData(username.innerHTML)
    .then((data) => elUserTwitter.innerHTML = data.twitter_username != null ? data.twitter_username : 'Not Avialable');
  
  getData(username.innerHTML)
    .then((data) => elUserLocation.innerHTML = data.location != null ? data.location : 'Not Avialable');

  getData(username.innerHTML)
    .then((data) => elUserEmail.innerHTML = data.email != null ? data.email : 'Not Avialable');
  
  getData(username.innerHTML)
    .then((data) => elUserLink.innerHTML = data.html_url);
});

function getYear(time) {
  let year = [];
  for(let i = 0; i < 4; i++) {
    year.push(time[i]);
  }
  return year.join('');
}

function getMonth(time) {
  let month = [];
  for(let i = 5; i < 7; i++) {
    month.push(time[i]);
  }
  month = month.join('');
  switch(month) {
    case '01': month = 'January'; break;
    case '02': month = 'February'; break;
    case '03': month = 'March'; break;
    case '04': month = 'April'; break;
    case '05': month = 'May'; break;
    case '06': month = 'Juny'; break;
    case '07': month = 'July'; break;
    case '08': month = 'August'; break;
    case '09': month = 'September'; break;
    case '10': month = 'October'; break;
    case '11': month = 'November'; break;
    case '12': month = 'December'; break;
  }
  return month;
}

function getDay(time) {
  let day = [];
  for(let i = 8; i < 10; i++) {
    day.push(time[i]);
  }
  return day.join('');
}
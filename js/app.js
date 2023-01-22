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

const getData = async (user) => {
  const result = await fetch(`https://api.github.com/users/${user}`);
  return result.json();
}

elSearchForm.addEventListener('submit', (e) => {
  e.preventDefault();
  username.innerHTML = elSearchInput.value;
  
  getData(username.innerHTML)
    .then((data) => elFollowersCount.innerHTML = data.followers)
  
  getData(username.innerHTML)
    .then((data) => elFollowingCount.innerHTML = data.following)
  
  getData(username.innerHTML)
    .then((data) => elReposCount.innerHTML = data.public_repos)
  
  getData(username.innerHTML)
    .then((data) => elUserBio.innerHTML =  data.bio != null ? data.bio : 'This is profile has no bio')
  getData(username.innerHTML)
    .then((data) => firstname.innerHTML = data.name);
});

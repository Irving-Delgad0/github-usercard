import axios from "axios";

/*
  STEP 1: using axios, send a GET request to the following URL
    (replacing the placeholder with your Github name):
    https://api.github.com/users/<your name>
*/

/*
  STEP 2: Inspect and study the data coming back, this is YOUR
    github info! You will need to understand the structure of this
    data in order to use it to build your component function

    Skip to STEP 3 (line 34).
*/


/*
  STEP 5: Now that you have your own card getting added to the DOM, either
    follow this link in your browser https://api.github.com/users/<Your github name>/followers,
    manually find some other users' github handles, or use the list found at the
    bottom of the page. Get at least 5 different Github usernames and add them as
    Individual strings to the friendsArray below.

    Using that array, iterate over it, requesting data for each user, creating a new card for each
    user, and adding that card to the DOM.
*/

const followersArray = ["Akami-Slayer","Irving-Delgad0","tetondan", "dustinmyers", "justsml", "luishrd", "bigknell"];

/*
  STEP 3: Create a function that accepts a single object as its only argument.
    Using DOM methods and properties, create and return the following markup:

    <div class="card">
      <img src={image url of user} />
      <div class="card-info">
        <h3 class="name">{users name}</h3>
        <p class="username">{users user name}</p>
        <p>Location: {users location}</p>
        <p>Profile:
          <a href={address to users github page}>{address to users github page}</a>
        </p>
        <p>Followers: {users followers count}</p>
        <p>Following: {users following count}</p>
        <p>Bio: {users bio}</p>
      </div>
    </div>
*/
function createCard(cardObj) {

  //Create Elements
  const card = document.createElement("div");
  const userImg = document.createElement("img");
  const userInfo = document.createElement("div");
  const name = document.createElement("h3");
  const userName = document.createElement("p")
  const userLocation = document.createElement("p")
  const profile = document.createElement("p");
  const profileLink = document.createElement("a");
  const followers = document.createElement("p");
  const following = document.createElement("p");
  const bio = document.createElement("p");

  //Add all classes
  card.classList.add("card");
  userInfo.classList.add("card-info")
  name.classList.add("name");
  userName.classList.add("username");

  //Add all content
  userImg.src = cardObj.data.avatar_url;
  name.textContent = cardObj.data.name;
  userName.textContent = cardObj.data.login;
  userLocation.textContent = `Location: ${cardObj.data.location}`;
  profileLink.href = cardObj.data.html_url;
  profileLink.textContent = cardObj.data.html_url;
  followers.textContent = `Followers: ${cardObj.data.followers}`;
  following.textContent = `Following: ${cardObj.data.following}`;
  bio.textContent = `Bio: ${cardObj.data.bio}`;

  //Append everything
  card.appendChild(userImg);
  card.appendChild(userInfo);
  userInfo.appendChild(name);
  userInfo.appendChild(userName);
  userInfo.appendChild(userLocation);
  userInfo.appendChild(profile);
  userInfo.appendChild(followers);
  userInfo.appendChild(following);
  userInfo.appendChild(bio);
  profile.appendChild(profileLink);

  return card;
}

/*
  STEP 4: Pass the data received from Github into your function,
    and append the returned markup to the DOM as a child of .cards
*/
const cards = document.querySelector(".cards");

// axios.get("https://api.github.com/users/Irving-Delgad0")
//   .then(resp => {
//     const userCard = createCard(resp);
//     cards.appendChild(userCard)
//   })
//   .catch(err => {
//     console.error(err)
//   })
//   .finally(() => console.log("DONE"))



  function getProfiles(array){
    for (let i = 0; i < array.length; i++) {
      axios.get(`https://api.github.com/users/${array[i]}`)
  .then(resp => {
    const userCard = createCard(resp);
    cards.appendChild(userCard)
  })
  .catch(err => {
    console.error(err)
  })
  .finally(() => console.log("DONE"))
    }
  }

  getProfiles(followersArray);
/*
  List of LS Instructors Github username's:
    tetondan
    dustinmyers
    justsml
    luishrd
    bigknell
*/

let user = document.getElementById("input");

async function fetchUser(userId) {
  let response = await fetch(`https://api.github.com/users/${userId}`);
  let result = await response.json();
  document.getElementById("secDiv").classList.add("secDiv");
  displayUser(result);
}

document.getElementById("btn").addEventListener("click", () => {
  document.getElementById("secDiv").innerHTML = `<span class="loader"></span>`;
  let userId = user.value;
  document.getElementById("secDiv").classList.remove("secDivDisplay");
  fetchUser(userId);
});

function displayUser({
  avatar_url,
  name,
  bio,
  followers,
  following,
  public_repos,
  html_url,
}) {
  // const{avatar_url,name,bio,followers,following,public_repos}=result     //destructure
  if (!avatar_url) {
    document.getElementById("secDiv").innerHTML = `<h1>User Not Found</h1>`;
    return;
  }
  if (!bio) bio = "";
  if (!name) {
    document.getElementById("secDiv").innerHTML = `<h1>User Not Found</h1>`;
    return;
  }
  document.getElementById("secDiv").innerHTML = `
    <div class="userInfo">
                <img src=${avatar_url} class="userImg " alt="">
                <div class="">
                    <p class="userName">${name}</p>
                    <p class="userBio">${bio}</p>
                </div>
            </div>
            <div class="userFollow">
                <div class="Follower">
                    <div  class="repo">
                        <p>Followers</p>
                        <p>${followers}</p>
                    </div>
                    <div class="repo">
                        <p>Following</p>
                        <p>${following}</p>
                    </div>
                    <div class="repo">
                        <p>Repo</p>
                        <p>${public_repos}</p>
                    </div>
                </div>
                <a href=${html_url} target="blank">
                <div class="visitProfile" id="visitProfile">View Profile
                </div>
                </a>
            </div>`;
}

let keyword = document.getElementById("keyword");
let val;
let page;
document.getElementById("btn").addEventListener("click", (e) => {
  e.preventDefault();
  document.getElementById("allImg").innerHTML = "";
  page = 1;
  val = keyword.value;
  keyword.value = "";
  if(!val) document.getElementById("allImg").innerHTML = `<h2>Not Found</h2>`;
  else fetchImg(val);
});
const ACCESS_TOKEN = "NQ5aIbKdzshvD0junQWukbMr7w_dHnWG_IQ6G5DtKbo";
async function fetchImg(keyword) {
  let response = await fetch(
    `https://api.unsplash.com/search/photos?query=${keyword}&client_id=${ACCESS_TOKEN}&page=${page}`
  );
  let result = await response.json();
  if (result.results.length < 1) {
    document.getElementById("allImg").innerHTML = `<h2>Not Found</h2>`;
    document.getElementById("clearBtn").innerHTML = "";
    document.getElementById("clearBtn").classList.remove("clearBtn");
    document.getElementById("loadMoreBtn").innerHTML = "";
    document.getElementById("loadMoreBtn").classList.remove("loadMoreBtn");
  } else display(result);
}
function display(res) {
  res.results.map((data) => {
    let div = document.createElement("div");
    div.setAttribute("class", "singleImg");
    div.innerHTML = `
                   <div class="firstDiv">
                        <img src=${data.user.profile_image.large} alt="" class="userImg">
                        <p class="userName">${data.user.name}</p>
                    </div>
                    <div class="secDiv">
                        <a href=${data.links.html} target="blank"><img src=${data.urls.regular} alt="" class="mainImg"></a>
                        <p class="imgDis">${data.alt_description}</p>
                    </div>`;
    document.getElementById("allImg").appendChild(div);
  });
  document.getElementById("loadMoreBtn").classList.add("loadMoreBtn");
  document.getElementById("loadMoreBtn").innerText = "load More";
  document.getElementById("clearBtn").classList.add("clearBtn");
  document.getElementById("clearBtn").innerText = "Clear All";
}
document.getElementById("clearBtn").addEventListener("click", () => {
  document.getElementById("allImg").innerHTML = "";
  document.getElementById("clearBtn").innerHTML = "";
  document.getElementById("clearBtn").classList.remove("clearBtn");
  document.getElementById("loadMoreBtn").innerHTML = "";
  document.getElementById("loadMoreBtn").classList.remove("loadMoreBtn");
});
document.getElementById("loadMoreBtn").addEventListener("click", () => {
  document.getElementById("loadMoreBtn").classList.remove("loadMoreBtn");
  page++;
  fetchImg(val);
});

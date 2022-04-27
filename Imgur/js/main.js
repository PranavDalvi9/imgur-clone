let data = [
  {
    img_url:
      "https://cdn.pixabay.com/photo/2017/08/30/01/05/milky-way-2695569__340.jpg",
    title: "backgrounds",
    post: "1,294 Posts",
    color: "#dda0dd",
  },
  {
    img_url:
      "https://cdn.pixabay.com/photo/2017/05/13/12/40/fashion-2309519__340.jpg",
    title: "fashion",
    post: "1,594 Posts",
    color: "#87cefa",
  },
  {
    img_url:
      "https://cdn.pixabay.com/photo/2018/06/30/09/29/monkey-3507317__340.jpg",
    title: "music",
    post: "3,694 Posts",
    color: "#2E8B57",
  },
  {
    img_url:
      "https://cdn.pixabay.com/photo/2015/12/01/20/28/road-1072821_960_720.jpg",
    title: "nature",
    post: "2,194 Posts",
    color: "#90ee90",
  },
  {
    img_url:
      "https://cdn.pixabay.com/photo/2019/08/06/22/48/artificial-intelligence-4389372__340.jpg",
    title: "science",
    post: "1,194 Posts",
    color: "#f5deb3",
  },
  {
    img_url:
      "https://cdn.pixabay.com/photo/2017/08/30/01/05/milky-way-2695569__340.jpg",
    title: "education",
    post: "2,294 Posts",
    color: "#4682b4",
  },
  {
    img_url:
      "https://cdn.pixabay.com/photo/2016/12/27/16/01/romantic-1934223__340.jpg",
    title: "feelings",
    post: "2,354 Posts",
    color: "#bc8f8f",
  },
  {
    img_url:
      "https://cdn.pixabay.com/photo/2018/01/01/01/56/yoga-3053488__340.jpg",
    title: "health",
    post: "1,294 Posts",
    color: "#d3d3d3",
  },
  {
    img_url:
      "https://cdn.pixabay.com/photo/2017/04/08/22/26/buddhism-2214532__340.jpg",
    title: "religion",
    post: "1,594 Posts",
    color: "#f08080",
  },
  {
    img_url:
      "https://cdn.pixabay.com/photo/2017/01/14/10/56/people-1979261__340.jpg",
    title: "people",
    post: "1,694 Posts",
    color: "#cd5c5c",
  },
  {
    img_url:
      "https://cdn.pixabay.com/photo/2017/08/30/01/05/milky-way-2695569__340.jpg",
    title: "places",
    post: "1,194 Posts",
    color: "#8fbc8f",
  },
  {
    img_url:
      "https://cdn.pixabay.com/photo/2017/08/30/01/05/milky-way-2695569__340.jpg",
    title: "animals",
    post: "4,294 Posts",
    color: "#7fffd4",
  },
  {
    img_url:
      "https://cdn.pixabay.com/photo/2020/11/12/16/58/worker-5736096__340.jpg",
    title: "industry",
    post: "2,694 Posts",
    color: "#6495ed",
  },
  {
    img_url:
      "https://cdn.pixabay.com/photo/2015/07/17/22/43/student-849822__340.jpg",
    title: "computer",
    post: "7,694 Posts",
    color: "#deb887",
  },
  {
    img_url:
      "https://cdn.pixabay.com/photo/2017/09/16/19/21/salad-2756467__340.jpg",
    title: "food",
    post: "1,294 Posts",
    color: "#BDB76B",
  },
  {
    img_url:
      "https://cdn.pixabay.com/photo/2015/01/26/22/40/child-613199__340.jpg",
    title: "sports",
    post: "1,594 Posts",
    color: "",
  },
  {
    img_url:
      "https://cdn.pixabay.com/photo/2012/10/10/05/04/train-60539__340.jpg",
    title: "transportation",
    post: "2,694 Posts",
    color: "#7CFC00",
  },
  {
    img_url:
      "https://cdn.pixabay.com/photo/2020/05/25/17/03/travel-5219496__340.jpg",
    title: "travel",
    post: "5,194 Posts",
    color: "#7FFFD4",
  },
  {
    img_url:
      "https://cdn.pixabay.com/photo/2018/03/10/12/00/teamwork-3213924__340.jpg",
    title: "business",
    post: "6,294 Posts",
    color: "#DEB887",
  },
];
let main_div = document.getElementById("tags-div");
import { showData1,calldata } from "../js/showdata.js";

function showData(data) { 
    main_div.innerHTML = "";
    data.forEach((el) => {
      const divEl = document.createElement("div")
      divEl.classList.add("tags");
      let { title } = el
      divEl.addEventListener("click", (...title) => { 
        datatags(...title);
      })
                  divEl.innerHTML = `
                    <div class="tags">
                    <div class="tag-img">
                        <img src=${el.img_url} alt="">
                    </div>
                    <div style="background-color: ${el.color}"  class="tag-desc">
                        <p  class="tag-title">${el.title}</p>
                        <p>${el.post}</p>
                    </div>
        `;
        main_div.appendChild(divEl)
    })
}
showData(data);
 
let more_tag_div = document.getElementById("more-tag")
more_tag_div.addEventListener("click", function () {
    if (main_div.attributes.active.value === "true") {
        main_div.style.overflow = "visible"
        main_div.style.height = "auto";
        main_div.attributes.active.value = "false";
    } else {
        main_div.attributes.active.value = "true";
        main_div.style.height = "201px";
        main_div.style.overflow = "hidden";
    }
})

let a
let count 
count = 2;
export async function datatags(el) { 
  a = arguments[0].path[2].innerText.split("\n")[0]
  count = 2
  await showData1(1,a)
}

// input box

let right_div = document.querySelector(".right");
let left_div = document.querySelector(".left");
let num = document.getElementById("num");

right_div.addEventListener("click", function () {
  if (a != undefined) {
    showData1(count, a);
  } else {
    showData1(count, "all");
  }
  num.innerText = count;
  ++count;
});

left_div.addEventListener("click", function () {
  if (count > 1) count = count - 1;
  if (a != undefined) {
    showData1(count, a);
  } else { 
        showData1(count, "all");
  }
  num.innerText = count;
});

const input_box = document.querySelector(".input-box")
const input = document.getElementById("input-tag")
// debounce fn.
input.addEventListener("keypress", debounce(async (e) => {
  console.log(input.value)
  if (input.value.length >= 1) {
    input_box.style.display = "block";
    let div = document.createElement('div')
    let d = await calldata(1, input.value)
    d.forEach((el,i) => {
      div.id = i
      div.classList.add("input-elem")
      div.innerText = el.tags
      div.addEventListener("click", function (...args) { 
        elemTagFun(...args);
      })
      input_box.appendChild(div)
    })
    if (div.innerText.length == 0) { 
      div.innerText = "No Results";
      input_box.appendChild(div);
      setTimeout(() => { 
        input_box.removeChild(div)
      },2000)
    }
  } else { 
    input_box.style.display = "hidden";
  }
},200))
function debounce(fun, delay) { 
  let timeId
  return function (...agrs) { 
    if (timeId) { 
      clearTimeout(timeId)
    }
   timeId= setTimeout(() => { 
      fun(...agrs)
    },delay)
  }
}

let body = document.querySelector("body")
body.addEventListener("click", function () { 
  console.log("fksd")
})

function elemTagFun(args) { 
  console.log(arguments[0].path);
}
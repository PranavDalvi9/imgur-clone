
export const getdata = async (api) => {   

    try {
        let res = await fetch(api)
        let data = await res.json()
        return data
    } catch (err) { 
        console.log("api-error:",err.message)
    }
}
"";
export async function calldata(n,query) { 
    let { hits } = await getdata(
      `https://pixabay.com/api/?key=25998297-9ea7f81fe4d66b005b332525b&q=${query}&image_type=photo&page=${n}`
    );
    return hits
}
let container = document.querySelector(".container");
 export const showData1 = async(n,query) =>{
    let data = [...await calldata(n,query)];
    container.innerHTML = "";
        data.forEach((el) => {
            const div_container = document.createElement("div")
            div_container.classList.add("container-child");
            div_container.innerHTML = `
                <div>
                    <img src=${el.previewURL} alt="">
                </div>
                <div class="container-desc">
                <p class="p-title">${el.user}</p>
                <i class="fa fa-upload"></i>&nbsp;
                   <span>${el.downloads}</span>&nbsp;
                   <i class="fa fa-download"></i> &nbsp;&nbsp;
                   <i class="fa fa-comment"></i>
                   <span>${el.comments}</span> &nbsp;
                   <i class="fa fa-eye"></i>
                   <span>${el.views}</span>
                </div>
            `;
            container.appendChild(div_container)
        })

    }
showData1(1,"all");



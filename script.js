const btn = document.getElementById("btn");
const result = document.getElementById("fox-result");

const url = "https://randomfox.ca/floof/";

btn.addEventListener("click", async function() {
   fox_result.innerHTML = `<h1>Loading...</h1>`;
   try {
      let res = await fetch(url);
      let obj = await res.json();
      // console.log(obj);
      fox_result.innerHTML = `<img src="${obj.image}" alt="fox" id="image">`; 
   } 
   catch (error) {
      console.error(error);  
   }   
});

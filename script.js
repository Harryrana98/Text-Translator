const form = document.querySelector("form");
const sourceSelect = document.querySelector("#sourceSelect");
const targetSelect = document.querySelector("#targetSelect");
const input = document.querySelector("input");
const results=document.querySelector(".results")

form.addEventListener("click", async function (e) {
  e.preventDefault();
  const URL = "https://text-translator2.p.rapidapi.com/translate";
  const data = `?source_language=${sourceSelect.value}&target_language=${targetSelect.value}&text=${input.value}`;
  //   const headers = {
    //     "x-rapidapi-key": "08c525f37bmsh8a4c5ee2b28fd11p1ed1fdjsn7db831f26e35",
    //     "x-rapidapi-host": "google-translator9.p.rapidapi.com",
    //     "Content-Type": "application/x-www-form-urlencoded",
    //   };
    
    const headers = {
      'x-rapidapi-key':'fcc2337bc8msh42ed8779cd4654cp181e15jsn3854dedb9b02',
      'x-rapidapi-host': 'text-translator2.p.rapidapi.com',
      'Content-Type': 'application/x-www-form-urlencoded'
    }
    
    const response = await fetch(URL, {
      method: "POST",
      headers: headers,
      body: data,
    });
    
    const result = await response.json();
    console.log(result.data);
    getDisplayData(result.data)
    results.style.display="block"
    sourceSelect.value=""
    targetSelect.value=""
    input.value=""
});

function getDisplayData(obj){
  results.innerHTML=""
    const translateText=document.createElement("h4")
    translateText.innerText=obj.translatedText
    results.appendChild(translateText)
}

const background = document.getElementById("background");

async function getBackground() {
const url = "https://api.nasa.gov/planetary/apod?api_key=mndnURjg5KGa2nMMHaD4ZL7Sk4npfbD25U3A91HE";

try {
    const response = await fetch(url);
if (!response.ok) {
    throw new Error(`Response Status: ${response.status}`);
}
const result = await response.json();
console.log(result);

if (result.media_type !== "image") {
console.log("APOD returned a non-image media type. Please try again later, sorry.");
return null;
}
return result.url;
} catch (error) {
    console.log(error.message);
    return null;
}
window.onload = function() {
    getBackground().then(function(imageUrl) {
    if (!imageUrl) return;

        console.log(imageUrl);

    if (background) {
    background.style["background-image"] = `url(${imageUrl})`;
    }
    });
};

}

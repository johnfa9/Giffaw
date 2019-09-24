document.addEventListener("DOMContentLoaded", function() {
    const container = document.querySelector('.container');
  
    document.querySelector('.btn-primary').addEventListener('click', function(){
    txt=document.querySelector('.gif-input').value;
    //console.log(txt);
    const myNode = document.getElementById('gif_item');
    //clear existing retrieval
    while (myNode.firstChild) {
      console.log("entered while");
      myNode.removeChild(myNode.firstChild);
    }  

    fetch(`http://api.giphy.com/v1/gifs/search?q=${txt}&api_key=9q3pTLCmxuk11q29u144znQRzR4Vz8PY`)
    .then((response)=>{
      return response.json();
     })
     .then((data2)=> {
         let image;
         let url;
        data2.data.forEach(item=>{
            //console.log(item);
            image = document.createElement("img");
            url=item.images.fixed_height.url;
            //console.log(url);
            image.setAttribute("src",url);
            document.getElementById('gif_item').appendChild(image);
        }) ;
    })
  });
})

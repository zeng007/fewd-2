
function displayArticle(articleObj){
  let newHTML =`
    <div class= "article">
      <h4> ${articleObj.title} </h4>
      <p> ${articleObj.description}</p>
      <img src="${articleObj.urlToImage}">
      </div>
  `;
  $('#container').append(newHTML);

}

function handleNewsData(newsData){
  // todo for each article, create a link with the article title
  console.log(newsData);
  console.log(newsData.article[0]);

  newsData.article.forEach(displayArticle);
}

let source = "the-verge";
let apiKey = "f7b9aa8378ba48f18457274efa571856";
$.ajax({
  url: `https://newsapi.org/v2/top-headlines?sources=${source}&apiKey=${apiKey}`,
  success: handleNewsData,
});

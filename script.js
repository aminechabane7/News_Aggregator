document.addEventListener('DOMContentLoaded', function () {
    // Get the container where news articles will be displayed
    const newsContainer = document.getElementById('news-container');
  
    // Replace 'YOUR_API_KEY' with your News API key
    const apiKey = '81b78538013441ad998273c699a079b0';
    const apiUrl = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${apiKey}`;
  
    // Fetch news data from the News API
    fetch(apiUrl)
      .then(response => response.json())
      .then(data => {
        if (data.articles) {
          // Iterate through the articles and display them
          data.articles.forEach(article => {
            const articleCard = createArticleCard(article);
            newsContainer.appendChild(articleCard);
          });
        }
      })
      .catch(error => {
        console.error('Error fetching news:', error);
      });
  
    // Function to create a card for each news article
    function createArticleCard(article) {
      const card = document.createElement('div');
      card.className = 'bg-white p-6 rounded-lg shadow-md';
      card.innerHTML = `
        <img src="${article.urlToImage}" alt="${article.title}" class="mb-4 w-full h-56 object-cover rounded">
        <h2 class="text-xl font-bold">${article.title}</h2>
        <p class="text-gray-600 text-sm mt-2">${article.description}</p>
        <a href="${article.url}" target="_blank" rel="noopener noreferrer" class="text-blue-500 mt-4 block">Read More</a>
      `;
      return card;
    }
  });  
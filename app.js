document.addEventListener('DOMContentLoaded', function () {
  fetch('data.json')
    .then((response) => response.json())
    .then((data) => {
      const resultsList = document.getElementById('results-list');

      data.forEach((item) => {
        const listItem = document.createElement('li');
        listItem.className = item.category.toLowerCase();
        listItem.innerHTML = `
            <div>
                <img src="${item.icon}" alt="${item.category} Icon" />
                <p>${item.category}</p>
            </div>
            <p class="percentage"><b>${item.score}</b> / 100</p>
        `;

        resultsList.appendChild(listItem);
      });
    })
    .catch((error) => console.error('Error:', error));
});

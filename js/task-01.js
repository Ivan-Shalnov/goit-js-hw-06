const categoriesRef = document.querySelectorAll('#categories>li');
console.log('Number of categories: ', categoriesRef.length);
categoriesRef.forEach(element => {
  console.log('Category:', element.querySelector('h2').textContent);
  console.log('Elements: ', element.querySelectorAll('ul>li').length);
});

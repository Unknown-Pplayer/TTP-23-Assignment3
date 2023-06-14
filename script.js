//Select the section with an id of container without using querySelector.
var containerSection = document.getElementById('container');

//Select the section with an id of container using querySelector.
var containerSection = document.querySelector('#container');

//Select all of the list items with a class of "second".
var secondItems = document.querySelectorAll('.second');

//Select a list item with a class of third, but only the list item inside of the ol tag.
var thirdListItem = document.querySelector('ol .third');

//Give the section with an id of container the text "Hello!".
// var containerSection = document.querySelector('#container');
// containerSection.innerText = 'Hello!';

//Add the class main to the div with a class of footer.
var footerDiv = document.querySelector('.footer');
footerDiv.classList.add('main');

//Remove the class main on the div with a class of footer.
footerDiv.classList.remove('main');

//Create a new li element.
var liElement = document.createElement('li');

//Give the li the text "four".
liElement.innerText = 'four';

//Append the li to the ul element.
var ulElement = document.querySelector('ul');
ulElement.appendChild(liElement);

//Loop over all of the lis inside the ol tag and give them a background color of "green".
var olElement = document.querySelector('ol');
var liElements = olElement.querySelectorAll('li');

liElements.forEach(function(li) {
  li.style.backgroundColor = 'green';
});

// Remove the div with a class of footer.
var footerDiv = document.querySelector('.footer');
footerDiv.remove();


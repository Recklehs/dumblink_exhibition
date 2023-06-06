var xhr = new XMLHttpRequest();
xhr.open('GET', 'dummy.json', true);
xhr.responseType = 'json';
var jsonData;
xhr.onload = function () {
  if (xhr.status === 200) {
    // file loaded successfully
    jsonData = xhr.response;
    console.log(jsonData); // display the loaded JSON data
    console.log(jsonData.length);
    var parentElement = document.getElementById('items_section');

    for (var i = 0; i < jsonData.length; i++) {
      // create a new div element
      var divElement = document.createElement('div');
      divElement.setAttribute('id', 'items');
      // divElement.style.backgroundImage = "url('sample_img.jpeg')";
      divElement.style.backgroundRepeat = 'no-repeat'
      // create a new inner div element with id="items_content"
      var innerDivElement = document.createElement('div');
      innerDivElement.setAttribute('id', 'items_content');

      // create a span element to wrap the title node
      var titleSpan = document.createElement('span');
      titleSpan.style.dispaly = 'inline'; // 디스플레이 블록
      titleSpan.style.fontWeight = 'bold'; // make the title bold
      titleSpan.style.fontSize = '20px'; // set the font size of the title
      titleSpan.textContent = jsonData[i].title;

      // create a span element to wrap the url node
      var urlSpan = document.createElement('span');
      urlSpan.style.dispaly = 'inline'; // 디스플레이 블록
      urlSpan.style.fontSize = '10px'; // set the font size of the url
      urlSpan.textContent = jsonData[i].url.substring(0, 15);

      // append the text nodes to their corresponding span elements
      innerDivElement.appendChild(titleSpan);
      innerDivElement.appendChild(document.createElement('br'));
      innerDivElement.appendChild(urlSpan);

      // append the inner div element to the outer div element
      divElement.appendChild(innerDivElement);

      // append the new div element to the parent element
      parentElement.appendChild(divElement);
    }

  }
  else {
    console.log('Error loading file');
  }

// display: inline-block;를 display: block;으로 변경하는 코드
var items = document.querySelectorAll("#items"); // 해당 요소 선택

for (var i = 0; i < items.length; i++) {
  items[i].style.display = "block"; // display 속성 변경
}
// 여기까지 코드 수정

};
xhr.send();
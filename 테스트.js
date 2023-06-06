var xhr = new XMLHttpRequest();
xhr.open('GET', 'dummy.json', true);
xhr.responseType = 'json';
var jsonData;
var parentElement = document.getElementById('items_section');

xhr.onload = function () {
  if (xhr.status === 200) {
    // file loaded successfully
    jsonData = xhr.response;
    console.log(jsonData); // display the loaded JSON data
    console.log(jsonData.length);

    //더미파일 배치
    function renderItems(layoutType) {
      // Clear existing items
      parentElement.innerHTML = '';

      for (var i = 0; i < jsonData.length; i++) {
        // create a new div element
        var divElement = document.createElement('div');
        divElement.setAttribute('id', 'items');
        divElement.style.backgroundImage = layoutType === 1 ? "url('sample_img.jpeg')" : 'none';
        divElement.style.backgroundRepeat = 'no-repeat';
  
        // create a new inner div element with id="items_content"
        var innerDivElement = document.createElement('div');
        innerDivElement.setAttribute('id', 'items_content');
  
        // create a span element to wrap the title node
        var titleSpan = document.createElement('span');
        titleSpan.style.fontWeight = 'bold'; // make the title bold
        titleSpan.style.fontSize = '20px'; // set the font size of the title
        titleSpan.textContent = jsonData[i].title;
  
        // create a span element to wrap the url node
        var urlSpan = document.createElement('span');
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

    renderItems(1); // Render initial items with layout type 1

    //레이아웃 변경 코드
    var icLayout1 = document.getElementById('ic_layout1');
    var icLayout2 = document.getElementById('ic_layout2');

    var layout1OriginalSrc = icLayout1.src;
    var layout2OriginalSrc = icLayout2.src;

    icLayout1.addEventListener('click', function() {
      removeItems();
      if (this.src === layout1OriginalSrc) {
        this.src = 'header/ic_layout1_1.svg';
        icLayout2.src = 'header/ic_layout2_2.svg';
        renderItems(1);
      } 
      else {
        this.src = layout1OriginalSrc;
        icLayout2.src = layout2OriginalSrc;
        renderItems(2);
      }
    });

    icLayout2.addEventListener('click', function() {
      removeItems();
      if (this.src === layout2OriginalSrc) {
        this.src = 'header/ic_layout2_2.svg';
        icLayout1.src = 'header/ic_layout1_1.svg';
        renderItems(2);
      } 
      else {
        this.src = layout2OriginalSrc;
        icLayout1.src = layout1OriginalSrc;
        renderItems(1);
      }
    });
    // 레이아웃 변경
  }
  else {
    console.log('Error loading file');
  }

  function removeItems() { //요소 삭제 함수
    var items = parentElement.querySelectorAll('#items');
    for (var i = 0; i < items.length; i++) {
      items[i].remove();
    }
  }

};

xhr.send();

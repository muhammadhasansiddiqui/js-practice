var list = [
    { name: "Monday" },
    { name: "Tuesday" },
    { name: "Wednesday" },
    { name: "Thursday" },
    { name: "Friday" },
    { name: "Saturday" },
    { name: "Sunday" },
  ];
  var cartlist = [];
  
  
  function displayItems(id, array) {
    var selectedList = document.getElementById(id);
    selectedList.innerHTML = "";
    
    for (let index = 0; index < array.length; index++) {
      selectedList.innerHTML += `<li>
          <p>${array[index].name}</p>
          <button onclick={HandleaddToCart(${index})}>Add To Cart</button>
      </li>`;
    }
  }
  
  function HandleaddToCart(index) {
    cartlist.push({ name: list[index].name });
    displayItems("cart", cartlist);
  }
  
  displayItems("list", list); 

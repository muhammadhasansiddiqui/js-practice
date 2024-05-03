var userCustomize = [
  { title: "Hasan", phone: "0678" },
  { title: "Rahim", phone: "0191" },
  { title: "zeeshan", phone: "8464" }
];

function handleSearch(params) {
  var searchedValue = params.target.value.toLowerCase();

  var filteredList = userCustomize.filter(item => {
    return item.title.toLowerCase().includes(searchedValue) || item.phone.includes(searchedValue);
  });

  console.log(filteredList , "filteredList");
user = filteredList
  renderList();


}

function renderList() {
  var userList = document.getElementById("userList");
  userList.innerHTML = "";



  for (var i = 0; i < user.length; i++) {
    userList.innerHTML += `<div>
        <p>${user[i].title}</p>
        <span>${user[i].phone}</span>
        <hr />
    </div>`;
  }
}

renderList()


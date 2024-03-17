function openDeleteData() {
  document.getElementById('myModalDelete').style.display = 'block';

  const dataInput = `
      <div class="input_box">
        <i class="bx bx-envelope-open email"></i>
        <input id="typeInput" placeholder="Users or Products" required />
      </div>
  
      <div class="input_box">
        <i class="bx bx-envelope-open email"></i>
        <input id="typeID" placeholder="Type ID" required />
      </div>
      <button class="button-9" onclick='deleteData()'>Delete</button>

    `;
  modalDeleteBody.innerHTML = dataInput;
}

function deleteData() {
  var inputIdValue = document.getElementById('typeInput').value.trim().toLowerCase();
  var typeID = document.getElementById('typeID').value;

  if (inputIdValue !== 'products' && inputIdValue !== 'users') {
    alert('Only type "products" or "users"');
    return;
  }

  deleteDataAPI(inputIdValue, typeID);
}

const deleteDataAPI = async (typeValue, typeID) => {
  const response = await fetch(`${BASE_API_LINK}/${typeValue}/${typeID}`, {
    method: 'DELETE',
  });
  alert(`Đã xoá ID: ${typeID} từ ${typeValue}`);
  closeModalDelete();
  return response.ok;
};

console.log('File deleteData.js is running');
console.log('------------------------------');

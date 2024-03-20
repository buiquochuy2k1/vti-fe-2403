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
  var inputIdValue = document.getElementById('typeInput').value;
  var typeID = document.getElementById('typeID').value;

  if (inputIdValue.toLowerCase() !== 'products' && inputIdValue.toLowerCase() !== 'users') {
    alert('Only type "products" or "users"');
    return;
  }

  deleteDataAPI(inputIdValue, typeID).catch((err) => {
    console.log('Lỗi ', err);
  });
}

const deleteDataAPI = async (typeValue, typeID) => {
  try {
    const response = await fetch(`${BASE_API_LINK}/${typeValue}/${typeID}`, {
      method: 'DELETE',
    });

    if (response.ok) {
      alert(`Đã xoá ID: ${typeID} từ ${typeValue}`);
      closeModalDelete();
      return true;
    } else {
      alert(`Có lỗi xảy ra khi xoá dữ liệu: ${typeID} từ ${typeValue}, bạn có chắc là dữ liệu tồn tại ?`);
    }
  } catch (error) {
    console.error(error);
    return false;
  }
};

console.log('File deleteData.js is running');
console.log('------------------------------');

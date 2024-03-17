function createData(dataType) {
  if (dataType == 'users') {
    document.getElementById('myModalCreate').style.display = 'block';
    const dataInput = `
      <div class="input_box">
        <i class="bx bx-envelope-open email"></i>
        <input id="userId" placeholder="Type ID" required />
      </div>
  
      <div class="input_box">
        <i class="bx bx-envelope-open email"></i>
        <input id="userName" placeholder="Type username" required />
      </div>
  
      <div class="input_box">
        <i class="bx bx-envelope-open email"></i>
        <input id="userAvatar" placeholder="Type link avatar" required />
      </div>
  
      <div class="input_box">
        <i class="bx bx-envelope-open email"></i>
        <input id="useripv4" placeholder="Type IPv4" required />
      </div>
  
      <div class="input_box">
        <i class="bx bx-envelope-open email"></i>
        <input id="useripv6" placeholder="Type IPv6" required />
      </div>

      <div class="input_box">
        <i class="bx bx-envelope-open email"></i>
        <input id="userCreateTime" placeholder="Type user create time" required />
      </div>
  
      <div class="input_box">
        <i class="bx bx-envelope-open email"></i>
        <input id="userWorkplace" placeholder="Type user workplace" required />
      </div>
  
  
      <button class="button-9" onclick='createDataProduct("users")'>Create</button>
  
      `;
    modalCreateBody.innerHTML = dataInput;
  } else if (dataType == 'products') {
    document.getElementById('myModalCreate').style.display = 'block';

    const dataInput = `
      <div class="input_box">
        <i class="bx bx-envelope-open email"></i>
        <input id="productId" placeholder="Type ID" required />
      </div>
  
      <div class="input_box">
        <i class="bx bx-envelope-open email"></i>
        <input id="productName" placeholder="Type product name" required />
      </div>
  
      <div class="input_box">
        <i class="bx bx-envelope-open email"></i>
        <input id="productType" placeholder="Type product type" required />
      </div>
    
      <div class="input_box">
        <i class="bx bx-envelope-open email"></i>
        <input id="productImage" placeholder="Type product image link" required />
      </div>

      <div class="input_box">
      <i class="bx bx-envelope-open email"></i>
      <input id="productPrice" placeholder="Type price" required />
      </div>
  
      <div class="input_box">
        <i class="bx bx-envelope-open email"></i>
        <input id="productUsed" placeholder="Type used or not (true/false)" required />
      </div>
  
      <div class="input_box">
        <i class="bx bx-envelope-open email"></i>
        <input id="productStock" placeholder="Type stock" required />
      </div>
  
      <div class="input_box">
        <i class="bx bx-envelope-open email"></i>
        <input id="productDiscount" placeholder="Type discount (0-100)" required />
      </div>
  
      <button class="button-9" onclick='createDataProduct("products")'>Create</button>
      `;
    modalCreateBody.innerHTML = dataInput;
  }
}

// TẠO DATA KHI BẤM NÚT CREATE
function createDataProduct(data) {
  if (data == 'users') {
    var id = document.getElementById('userId').value;
    var name = document.getElementById('userName').value;
    var avatar = document.getElementById('userAvatar').value;
    var createdAt = document.getElementById('userCreateTime').value;
    var ipv4 = document.getElementById('useripv4').value;
    var ipv6 = document.getElementById('useripv6').value;
    var workplace = document.getElementById('userWorkplace').value;

    if (!id || !name || !avatar || !createdAt || !ipv4 || !ipv6 || !workplace) {
      return alert('Please fill in all fields');
    }

    var allData = {
      id,
      name,
      avatar,
      createdAt,
      ipv4,
      ipv6,
      workplace,
    };

    console.log(JSON.stringify(allData));

    createUserAPI(allData);

    closeModalCreate();
  } else if (data == 'products') {
    var id = document.getElementById('productId').value;
    var productName = document.getElementById('productName').value;
    var productType = document.getElementById('productType').value;
    var productImage = document.getElementById('productImage').value;
    var price = document.getElementById('productPrice').value;
    var isUsed = document.getElementById('productUsed').value.toLowerCase();
    var countInStock = document.getElementById('productStock').value;
    var discount = document.getElementById('productDiscount').value;

    if (!id || !productName || !productType || !productImage || !price || !isUsed || !countInStock || !discount) {
      return alert('Please fill in all fields');
    }

    if (isUsed !== 'true' && isUsed !== 'false') {
      return alert('productUsed only true and false');
    }

    var allData = {
      id,
      productName,
      productType,
      price,
      productImage,
      isUsed,
      countInStock,
      discount,
    };

    console.log(JSON.stringify(allData));

    createProductAPI(allData);

    closeModalCreate();
  }
}

const createProductAPI = async (data) => {
  const response = await fetch(`${BASE_API_LINK}/products`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });

  return response.json();
};

const createUserAPI = async (data) => {
  const response = await fetch(`${BASE_API_LINK}/users`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });

  return response.json();
};

console.log('File createData.js is running');

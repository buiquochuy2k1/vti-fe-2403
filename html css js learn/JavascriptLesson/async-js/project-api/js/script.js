const BASE_API_LINK = 'https://65e8640b4bb72f0a9c4f2b4a.mockapi.io/api';

const getAllProducts = async () => {
  const response = await fetch(`${BASE_API_LINK}/Shops`);
  const data = response.json();
  return data;
};

const getProductDetail = async (id) => {
  const response = await fetch(`${BASE_API_LINK}/Shops/${id}`);
  const data = response.json();
  return data;
};

const createProduct = async (data) => {
  const response = await fetch(`${BASE_API_LINK}/Shops`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });
  return response.json();
};

const updateProduct = async (data) => {};

const deleteProduct = async (id) => {
  const response = await fetch(`${BASE_API_LINK}/Shops/${id}`, {
    method: 'DELETE',
  });
  return response.ok;
};

const ProducListContainerDiv = document.querySelector('.product-list-container');

/// HIỆN LOADING SAU ĐÓ HIỆN DATA
ProducListContainerDiv.innerHTML = '<h1>Loading...</h1>';

// -----------------------------------------\\
const ProductForm = document.querySelector('.product-form');

// --------------------------------------\\
function OpenProductForm() {
  // MỞ FORM
  ProductForm.classList.add('show');
}

function CancleAdd() {
  // BẤM NÚT HUỶ KHÔNG THÊM NỮA THÌ SẼ XOÁ HẾT CÁC TRƯỜNG ĐANG NHẬP
  ProductForm.classList.remove('show');
  document.getElementById('name').value = '';
  document.getElementById('type').value = '';
  document.getElementById('price').value = '';
  document.getElementById('img').value = '';
}

function handleAdd() {
  // LẤY THÔNG TIN CÁC TRƯỜNG ĐANG NHẬP SAU ĐÓ LOG VÀO DATA
  var productName = document.getElementById('name').value;
  var productType = document.getElementById('type').value;
  var price = document.getElementById('price').value;
  var productImage = document.getElementById('img').value;

  //XUẤT RA DATA
  const data = {
    productName,
    productType,
    price,
    productImage,
  };

  createProduct(data);

  ProductForm.classList.remove('show');
  document.getElementById('name').value = '';
  document.getElementById('type').value = '';
  document.getElementById('price').value = '';
  document.getElementById('img').value = '';
  //   console.log(data);
  return false;
}

// --------------------------------------\\
const handleViewDetail = async (ProducId) => {
  //   console.log(ProducId);
  return await getProductDetail(ProducId);
  //   console.log(productDetail);
};

const handleDeleteDetail = async (id) => {
  alert(`Đã xoá thông tin của id ${id}`);
  await deleteProduct(id);
  return location.reload();
};

// -------------------------------------------\\
function GenerateProductList(listItem) {
  return `
        <div class="product-list-content">
            ${listItem.map((product, index) => GenerateProductCard(product, index)).join('')}
        </div>
    `;
}

function GenerateProductCard(productItem, index) {
  return `
        <div class="product-card">
            <h2>${index + 1}</h2
            <img src='${productItem.productImage}' alt="" srcset="">
            <p>Product Name: ${productItem.productName}</p>
            <p>Product Type: ${productItem.productType}</p>
            <p>Product Price: ${productItem.price}</p>
            <p>Product Condition: ${productItem.isUsed && '<h4>Is Used</h4>'}</p>
            <button onclick='handleViewDetail(${JSON.stringify(productItem.id)})'>View Details</button>
            <button onclick='handleEditDetail(${JSON.stringify(productItem.id)})'>Edit Details</button>
            <button onclick='handleDeleteDetail(${JSON.stringify(productItem.id)})'>Detele Details</button>

        </div>
    `;
}

getAllProducts()
  .then((data) => {
    console.log(data);
    ProducListContainerDiv.innerHTML = GenerateProductList(data);
  })
  .catch((err) => {
    ProducListContainerDiv.innerHTML = `<h1>Something went wrong: </h1>${err}`;
  });

const editItem = async (typeItem, idOfItem) => {
  const response = await fetch(`${BASE_API_LINK}/${typeItem}/${idOfItem.id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(idOfItem),
  });
  return response.json();
};

function openEditData(typeItem, idOfItem) {
  closeModal();
  document.getElementById('myModalEdit').style.display = 'block';
}

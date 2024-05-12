import { useEffect, useState } from 'react';

const UserData = () => {
  const API_LINK = 'http://localhost:3000';
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isEditMode, setIsEditMode] = useState(false);

  const fetchDataFromAPI = async () => {
    try {
      const response = await fetch(`${API_LINK}/users`);
      const data = await response.json();
      setUsers(data);
    } catch (error) {
      console.log('Error:', error);
    }
  };

  useEffect(() => {
    fetchDataFromAPI();
  }, []);

  const handleShowClick = (user) => {
    handleEditClick();
    setSelectedUser(user);
    setIsModalOpen(true);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
    setSelectedUser(null);
    setIsEditMode(false);
  };

  const handleEditClick = () => {
    setIsEditMode(true);
  };

  const handleChangeClick = async () => {
    try {
      await fetch(`${API_LINK}/users/${selectedUser.id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(selectedUser),
      });
      setIsEditMode(false);
    } catch (error) {
      console.log('Error:', error);
    }
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setSelectedUser((prevUser) => ({
      ...prevUser,
      [name]: value,
    }));
  };

  return (
    <div className="container mx-auto">
      <h1>Danh sách Account</h1>

      <div className="border rounded border-gray-300 shadow-lg">
        <table className="min-w-full divide-y divide-gray-300">
          <thead className="bg-gray-50">
            <tr>
              <th scope="col" className="px-4 py-2">
                ID
              </th>
              <th scope="col" className="px-4 py-2">
                Username
              </th>
              <th scope="col" className="px-4 py-2">
                Full Name
              </th>
              <th scope="col" className="px-4 py-2">
                Email
              </th>
              <th scope="col" className="px-4 py-2">
                Department
              </th>
              <th scope="col" className="px-4 py-2">
                Position
              </th>
              <th scope="col" className="px-4 py-2">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-300 text-center">
            {users.map((user) => (
              <tr key={user.id} className="bg-white">
                <td className="px-4 py-2 whitespace-nowrap">{user.id}</td>
                <td className="px-4 py-2 whitespace-nowrap">{user.username}</td>
                <td className="px-4 py-2 whitespace-nowrap">{user.fullName}</td>
                <td className="px-4 py-2 whitespace-nowrap">{user.email}</td>
                <td className="px-4 py-2 whitespace-nowrap">{user.department}</td>
                <td className="px-4 py-2 whitespace-nowrap">{user.position}</td>
                <td className="px-4 py-2 flex items-center justify-center gap-2">
                  <button
                    className="bg-red-950 text-red-400 border border-red-400 border-b-4 font-medium overflow-hidden relative px-4 py-2 rounded-md hover:brightness-150 hover:border-t-4 hover:border-b active:opacity-75 outline-none duration-300 group"
                    onClick={() => {
                      fetch(`${API_LINK}/users/${user.id}`, {
                        method: 'DELETE',
                      })
                        .then(() => {
                          setUsers(users.filter((u) => u.id !== user.id));
                        })
                        .catch((error) => {
                          console.log('Error:', error);
                        });
                    }}
                  >
                    <span className="bg-blue-500 shadow-blue-400 absolute -top-[150%] left-0 inline-flex w-80 h-[5px] rounded-md opacity-50 group-hover:top-[150%] duration-500 shadow-[0_0_10px_10px_rgba(0,0,0,0.3)]"></span>
                    Delete
                  </button>
                  <button
                    className="bg-blue-950 text-blue-400 border border-blue-400 border-b-4 font-medium overflow-hidden relative px-4 py-2 rounded-md hover:brightness-150 hover:border-t-4 hover:border-b active:opacity-75 outline-none duration-300 group"
                    onClick={() => handleShowClick(user)}
                  >
                    <span className="bg-blue-500 shadow-blue-400 absolute -top-[150%] left-0 inline-flex w-80 h-[5px] rounded-md opacity-50 group-hover:top-[150%] duration-500 shadow-[0_0_10px_10px_rgba(0,0,0,0.3)]"></span>
                    Edit
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div className="bg-white p-8 rounded shadow-lg">
            <div className="flex items-center justify-end">
              <button
                className="text-gray-400 hover:text-gray-700 transition duration-150"
                onClick={handleModalClose}
              >
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
            <h2 className="text-2xl font-bold mb-4">Information of User</h2>
            {selectedUser && (
              <form className="mb-4">
                {Object.keys(selectedUser)
                  .filter((key) => key !== 'id')
                  .map((key) => (
                    <div key={key} className="mb-4">
                      <label className="block text-gray-700 font-bold mb-2">
                        {key.charAt(0).toUpperCase() + key.slice(1)}
                      </label>
                      <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        type="text"
                        name={key}
                        value={selectedUser[key]}
                        onChange={handleInputChange}
                        readOnly={!isEditMode}
                      />
                    </div>
                  ))}
                <button
                  className="bg-[#292929] border-2 border-[#3e3e3e] rounded-lg text-white px-6 py-3 text-base hover:border-[#fff] cursor-pointer transition"
                  onClick={handleChangeClick}
                >
                  Change
                </button>
              </form>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default UserData;

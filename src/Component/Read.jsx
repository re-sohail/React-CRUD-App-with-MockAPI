import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function Read() {
  let [data, setData] = useState([]);

  let getData = () => {
    try {
      axios
        .get("https://663a67171ae792804bef3b8b.mockapi.io/crud")
        .then((res) => {
          setData(res.data);
        });
    } catch (error) {
      console.error(error);
    }
  };

  let deletData = (id)=>{
    try {
        axios.delete(`https://663a67171ae792804bef3b8b.mockapi.io/crud/${id}`)
        .then(()=>{
            getData()
        })
    } catch (error) {
        console.error(error);
    }
  }
  useEffect(() => {
    getData();
  }, []);

  let putLocalStorage = (id, name, email)=>{
    localStorage.setItem("id", id)
    localStorage.setItem("name", name)
    localStorage.setItem("email", email)
  }
  return (
    <>
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            <th
              scope="col"
              className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
            >
              ID
            </th>
            <th
              scope="col"
              className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
            >
              Name
            </th>
            <th
              scope="col"
              className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
            >
              Email
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {data.map((item, id) => {
            return (
              <tr key={id}>
                <td className="px-6 py-4 whitespace-nowrap">{item.id}</td>
                <td className="px-6 py-4 whitespace-nowrap">{item.name}</td>
                <td className="px-6 py-4 whitespace-nowrap">{item.email}</td>
                <td>
                    <Link to='/update'>
                  <button className="px-6 py-4 whitespace-nowrap hover:text-blue-700" onClick={()=>{putLocalStorage(item.id, item.name, item.email)}}>Edit</button>
                    </Link>
                </td>
                <td>
                  <button className="px-6 py-4 whitespace-nowrap hover:text-red-600" onClick={()=> {deletData(item.id)}}>
                    Delete
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
}

export default Read;

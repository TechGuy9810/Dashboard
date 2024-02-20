import img from './components/image/admin1.png';
import sap from './components/image/sapines.jpg';
import apple from './components/image/apple.jpg';
import keyboard from './components/image/keyboard.jpg';
import trim from './components/image/treamer.jpg';
import lap from './components/image/download.jpg'
export const userColumns = [
    { field: "id", headerName: "ID", width: 70 },
    {
      field: "user",
      headerName: "User",
      width: 230,
      renderCell: (params) => {
        return (
          <div className="cellWithImg">
            <img className="cellImg" src={params.row.img} alt="avatar" />
            {params.row.username}
          </div>
        );
      },
    },
    {
      field: "email",
      headerName: "Email",
      width: 230,
    },
  
    {
      field: "age",
      headerName: "Age",
      width: 100,
    },
    {
      field: "status",
      headerName: "Status",
      width: 160,
      renderCell: (params) => {
        return (
          <div className={`cellWithStatus ${params.row.status}`}>
            {params.row.status}
          </div>
        );
      },
    },
  ];

  export const productColumns = [
    { field: "id", headerName: "ID", width: 70 },
    {
      field: "name",
      headerName: "Name",
      width: 230,
      renderCell: (params) => {
        return (
          <div className="cellWithImg">
            <img className="cellImg" src={params.row.img} alt="product img" />
            {params.row.name}
          </div>
        );
      },
    },
  
    {
      field: "quantity",
      headerName: "Quantity",
      width: 100,
    },
    {
      field: "Price",
      headerName: "Price",
      width: 160,
      renderCell: (params) => {
        return (
          <div className={`cellWithPrice ${params.row.price}`}>
            {params.row.price}
          </div>
        );
      },
    },
  ];
  //temporary data


  export const productRows = [
    {
      id: 1,
      name: "Treamer",
      img: trim,
      quantity: "10",
      price: "₹700"
    },
    {
      id: 2,
      name: "Apple 15Pro",
      img: apple,
      quantity: "30",
      price: "₹100000"
    },
    {
      id: 3,
      name: "Sapiens",
      img: sap,
      quantity: "10",
      price: "₹250"
    },
    {
      id: 4,
      name: "Lenovo k1",
      img: lap,
      quantity: "10",
      price: "₹60000"
    },
    {
      id: 5,
      name: "keyboard",
      img: keyboard,
      quantity: "10",
      price: "₹600"
    }
  ];

  export const userRows = [
    {
      id: 1,
      username: "Abhishek",
      img: img,
      status: "active",
      email: "1abc@gmail.com",
      age: 35,
    },
    {
      id: 2,
      username: "Ajay",
      img: img,
      email: "2abc@gmail.com",
      status: "passive",
      age: 42,
    },
    {
      id: 3,
      username: "Himanshu",
      img: img,
      email: "3abc@gmail.com",
      status: "pending",
      age: 45,
    },
    {
      id: 4,
      username: "Uttam",
      img: img,
      email: "4snow@gmail.com",
      status: "active",
      age: 16,
    },
    {
      id: 5,
      username: "Rajesh",
      img: img,
      email: "5abc@gmail.com",
      status: "passive",
      age: 22,
    },
    {
      id: 6,
      username: "Sunil",
      img: img,
      email: "6abc@gmail.com",
      status: "active",
      age: 15,
    },
    {
      id: 7,
      username: "Manish",
      img: img,
      email: "7abc@gmail.com",
      status: "passive",
      age: 44,
    },
    {
      id: 8,
      username: "Amrit",
      img: img,
      email: "8abc@gmail.com",
      status: "active",
      age: 36,
    },
    {
      id: 9,
      username: "Ranvijay",
      img: img,
      email: "abc@gmail.com",
      status: "pending",
      age: 65,
    },
    {
      id: 10,
      username: "Shyam",
      img: img,
      email: "abc@gmail.com",
      status: "active",
      age: 65,
    },
  ];
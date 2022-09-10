let users = [
  {
    id: 1,
    gender: "male",
    name: "Opi Barua",
    contact: "01300023918",
    address: "shahamirpur, karnaphuli, chattogram",
    photoUrl: "https://i.ibb.co/L6YWFQC/William.jpg",
  },
  {
    id: 2,
    gender: "male",
    name: "Arefinul Jahan Arju (Raihan)",
    contact: "01620658274",
    address: "Hathajari, modon hut, chattogram",
    photoUrl: "https://i.ibb.co/L6YWFQC/William.jpg",
  },
  {
    id: 3,
    gender: "male",
    name: "Faijur Rahaman Nahim",
    contact: "01833985111",
    address: "kotwali, chattogram",
    photoUrl: "https://i.ibb.co/L6YWFQC/William.jpg",
  },
  {
    id: 4,
    gender: "male",
    name: "Akash Nath",
    contact: "01632461571",
    address: "Hathajari, merakhil, chattogram",
    photoUrl: "https://i.ibb.co/L6YWFQC/William.jpg",
  },
  {
    id: 5,
    gender: "male",
    name: "Wazed Uddin",
    contact: "01851326177",
    address: "Bowakhali, chattogram",
    photoUrl: "https://i.ibb.co/L6YWFQC/William.jpg",
  },
  {
    id: 6,
    gender: "male",
    name: "Md Tanvir",
    contact: "01609515351",
    address: "Hathajari, merakhil, chattogram",
    photoUrl: "https://i.ibb.co/L6YWFQC/William.jpg",
  },
];

module.exports.getAllUsers = (req, res, next) => {
  res.json(users);
};

module.exports.getRandomsingleUser = (req, res, next) => {
  const randomId = Math.round(Math.random() * (users.length - 1)) + 1;
  const randomSingleUser = users.find((user) => user.id === randomId);
  res.json(randomSingleUser);
};

module.exports.saveAUser = (req, res) => {
  console.log(req.body);
  users.push(req.body);
  res.send(users);
};

function updateUsers(Id, data) {
  for (let i = 0; i < data.length; i++) {
    const id = Id ? Id : data[i].id;
    const updateUser = users.find((user) => user.id === Number(id));
    updateUser.id = id;
    updateUser.gender = data[i].gender ? data[i].gender : updateUser.gender;
    updateUser.name = data[i].name ? data[i].name : updateUser.name;
    updateUser.contact = data[i].contact ? data[i].contact : updateUser.contact;
    updateUser.address = data[i].address ? data[i].address : updateUser.address;
    updateUser.photoUrl = data[i].photoUrl
      ? data[i].photoUrl
      : updateUser.photoUrl;
    console.log(updateUser);
  }
}

module.exports.updateUser = (req, res) => {
  const { id } = req.params;
  updateUsers(id, req.body);
  // const updateUser = users.find((user) => user.id === Number(id));
  // updateUser.id = id;
  // updateUser.gender = req.body.gender ? req.body.gender : updateUser.gender;
  // updateUser.name = req.body.name ? req.body.name : updateUser.name;
  // updateUser.contact = req.body.contact ? req.body.contact : updateUser.contact;
  // updateUser.address = req.body.address ? req.body.address : updateUser.address;
  // updateUser.photoUrl = req.body.photoUrl
  //   ? req.body.photoUrl
  //   : updateUser.photoUrl;
  res.send(users);
};

module.exports.updateMultipleUsers = (req, res) => {
  const data = req.body;
  updateUsers(null, data);

  // for (let i = 0; i < data.length; i++) {
  //   const id = data[i].id;
  //   const updateUser = users.find((user) => user.id === Number(id));
  //   updateUser.id = id;
  //   updateUser.gender = data[i].gender ? data[i].gender : updateUser.gender;
  //   updateUser.name = data[i].name ? data[i].name : updateUser.name;
  //   updateUser.contact = data[i].contact ? data[i].contact : updateUser.contact;
  //   updateUser.address = data[i].address ? data[i].address : updateUser.address;
  //   updateUser.photoUrl = data[i].photoUrl
  //     ? data[i].photoUrl
  //     : updateUser.photoUrl;
  //   console.log(updateUser);
  // }
  res.send(users);
};

module.exports.deleteUser = (req, res) => {
  const { id } = req.params;
  users = users.filter((user) => user.id !== Number(id));
  res.send(users);
};

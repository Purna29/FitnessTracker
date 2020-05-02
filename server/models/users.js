const Users = [
    { firstname: "Purna", no:"0934343434", lastname:"Vellala", height:"6.1" , sex:"male" , age:'23' , password: "567899", email: "purna@gmail.com", Id: 0, weight:'45kg', img:"data:image/jpeg;base64,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" },
    { firstname: "Mike", no:"0933743888", lastname:"Watson", height:"6.4" , sex:"male" , age:'33', password: "654321", email: "watto@gmail.com", Id: 1, weight:'76kg', img:"https://i.imgur.com/SkCkQw2.jpg" },
    { firstname: "Vamsi", no:"0934111000", lastname:"Roy", height:"5.10" , sex:"male" , age:'43', password: "123456", email: "vroy@gmail.com", Id: 3 ,  weight:'63kg' , img:'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcT9Z0brDF3e5_rQITHxaYwcn4bB0cRA4PjI7EJ7LGSsTpwetLUA&usqp=CAU'},
  ];
  
  module.exports = {
    Login(email, password) {
      const user = Users.find((user) => user.email == email);
      if (!user) throw Error("User not found");
      if (user.password != password) throw Error("Password enter is incorrect");
      return user;
    },
  };
  
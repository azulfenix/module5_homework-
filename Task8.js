let users = new Map();
users.set("car CHEVROLET", "class D");
users.set("car LAMBORGHINI", "class A");
users.set("car ASTON MARTIN", "class B");

for (let user of users.keys()){
    console.log(user + " is " + users.get(user));
}
/*var userOne = {
     email: 'deep@yahoo.com',
     name:   'Deep',
     login(){
        console.log(this.email, 'has logged in');
     },
     logout(){
        console.log(this.email, 'has logged out');
     }
};
//console.log(userOne.name);

userOne.name = 'Rita';

var userTwo = {
    email: 'deep@yahoo.com',
    name:   'Deep',
    login(){
       console.log(this.email, 'has logged in');
    },
    logout(){
       console.log(this.email, 'has logged out');
    }
};*/

/*class User {
    constructor(email, name){
        this.email = email;
        this.name = name;
        this.score = 0; 
    }
    login(){
        console.log(this.email, 'just logged in');
        return this;
    }
    logout(){
        console.log(this.email, 'just logged out');
        return this;
    }
        updateScore(){
         this.score++;
         console.log(this.email, 'score is now', this.score);
         return this;
        }
}

class Admin extends User {
    deleteUser(user){
      users = users.filter(u => {
        return u.email != user.email;
      })
    }

}*/
function User(email, name){
    this.email = email;
    this.name - name;
    this.online = false;
    this.login = function(){
        console.log(this.email, 'has logged in');
    }

}

User.prototype.login = function(){
    this.online = true;
    console.log(this.email, 'has logged in');
}

User.prototype.logout = function(){
    this.online = false;
    console.log(this.email, 'has logged out');
}

function Admin(...args){
//console.log(args);
 User.apply(this, args);
 this.role = 'super admin';


}

Admin.prototype = Object.create(User.prototype);
Admin.prototype.deleteUser = function(u){
 user = user.filter(user => {
    return user.email != u.email;
 });
};

var userOne = new User('deep@yahoo.com', 'Deep');
var userTwo = new User('rita@yahoo.com', 'Rita');
var admin = new Admin('tommy@yahoo.com', 'Tommy');

var user = [userOne, userTwo, admin];
//console.log(userOne);
//userTwo.login();

console.log(admin);


/*var admin = new Admin('tommy@yahoo.com', 'Tommy');



var users = [userOne, userTwo, admin];

//admin.deleteUser(userOne);
userOne.deleteUser(userTwo);

console.log(users);


userOne.login().updateScore().updateScore().logout();

userOne.login();
userTwo.logout();
 

  console.log(userOne);
  console.log(userTwo);

 the new keyword
creats a new empty object()
 sets the value of 'this' to be the new empty object
calls the constructor method*/

var UserBuilder = /** @class */ (function () {
    function UserBuilder() {
    }
    UserBuilder.prototype.setName = function (name) {
        this.name = name;
        return this;
    };
    UserBuilder.prototype.setAge = function (age) {
        this.age = age;
        return this;
    };
    UserBuilder.prototype.setAddress = function (address) {
        this.address = address;
        return this;
    };
    UserBuilder.prototype.setPhone = function (phone) {
        this.phone = phone;
        return this;
    };
    UserBuilder.prototype.setSchool = function (school) {
        this.school = school;
        return this;
    };
    UserBuilder.prototype.setSex = function (sex) {
        this.sex = sex;
        return this;
    };
    UserBuilder.prototype.setCompany = function (company) {
        this.company = company;
        return this;
    };
    UserBuilder.prototype.build = function () {
        return new User(this);
    };
    return UserBuilder;
}());
var User = /** @class */ (function () {
    function User(builder) {
        this.name = builder.name;
        this.age = builder.age;
        this.address = builder.address;
        this.phone = builder.phone;
        this.school = builder.school;
        this.sex = builder.sex;
        this.company = builder.company;
    }
    return User;
}());
var user = new UserBuilder().setName("Quy").setAge(21).setSex("Men").build();
console.log(user);

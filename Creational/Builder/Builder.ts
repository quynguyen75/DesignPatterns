interface IUserBuilder {
  setName(name: string): this;
  setAge(age: number): this;
  setAddress(string: string): this;
  setPhone(phone: string): this;
  setSchool(school: string): this;
  setSex(sex: string): this;
  setCompany(company: string): this;
  build(): User;
}

class UserBuilder implements IUserBuilder {
  name: string;
  age: number;
  address: string;
  phone: string;
  school: string;
  sex: string;
  company: string;

  setName(name: string): this {
    this.name = name;
    return this;
  }

  setAge(age: number): this {
    this.age = age;
    return this;
  }

  setAddress(address: string): this {
    this.address = address;
    return this;
  }

  setPhone(phone: string): this {
    this.phone = phone;
    return this;
  }

  setSchool(school: string): this {
    this.school = school;
    return this;
  }

  setSex(sex: string): this {
    this.sex = sex;
    return this;
  }

  setCompany(company: string): this {
    this.company = company;
    return this;
  }

  build(): User {
    return new User(this);
  }
}

class User {
  private name: string;
  private age: number;
  private address: string;
  private phone: string;
  private school: string;
  private sex: string;
  private company: string;

  constructor(builder: UserBuilder) {
    this.name = builder.name;
    this.age = builder.age;
    this.address = builder.address;
    this.phone = builder.phone;
    this.school = builder.school;
    this.sex = builder.sex;
    this.company = builder.company;
  }
}

const user = new UserBuilder().setName("Quy").setAge(21).setSex("Men").build();

console.log(user);

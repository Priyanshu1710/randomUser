// const URL = 'https://randomuser.me/api/';
const URL = 'https://randomuser.me/api/?gender=female';

const getUser = async () => {
    const response = await fetch(URL);
    const data = await response.json()

    const person = data.results[0];
    // console.log(data);

    // console.log(person);
    const { large: image } = person.picture;
    const { first, last } = person.name;
    const email = person.email;
    const { dob: { age } } = person;
    // const age = person.dob.age;
    const { street: { number, name }, country } = person.location;
    const phone = person.cell;
    const { password: password } = person.login;
    // console.log(first, last);
    // console.log(email);
    // console.log(age);
    // console.log(number, name, country);
    // console.log(phone);
    // console.log(password);
    // console.log(image);
    return {
        image,
        phone,
        email,
        age,
        password,
        street: `${number} ${name}`,
        country,
        name: `${first} ${last}`,
    };
}

export default getUser;
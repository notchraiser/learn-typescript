
type StringOrNum = string | number;
type Objectwithname = {uid: StringOrNum, name: string};

const greet = (user: Objectwithname) => {
  console.log(`${user.uid} for ${user.name}`)  
}

const greetAgain = (id: StringOrNum) => {
  console.log('Hello user ', id);
}
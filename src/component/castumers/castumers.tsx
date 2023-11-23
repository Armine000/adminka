import { LocalGasStation } from "@mui/icons-material";
import { dataList, library, pagesname } from "../../columns/columns";
import Header from "../header/header";
import Todos from "./toDoList";

const Castumers = () => {
  // 1.
  const filterInner = dataList.filter((el: any) => el.inner);
  console.log("1111111", filterInner);

  // 2.
  const innerAdd = dataList.reduce((acc: any, el: any) => {
    if (el.incDec && el.incDec.inc) {
      const decValue = el.incDec.dec || 0;
      return acc + el.incDec.inc - decValue;
    }
    return acc;
  }, 0);

  console.log("22222222222", innerAdd);
  //3
  const addValu = dataList.map((el: any) => {
    el.newKey = "value";
  });
  console.log("333333333333", dataList);
  //4
  let allTextIds: string = "";

  for (let i = 0; i < dataList.length; i++) {
    allTextIds += dataList[i].id + ",";
  }

  console.log("444444", allTextIds);
//
interface MyObject {
  [key: string]: any;
}
// 1. Напишите программу JavaScript для вывода списка свойств объекта JavaScript.
let Student:MyObject = {
  name: "David Rayy",
  sclass: "«VI»",
  rollno: 12 
};

const stunents = Object.keys(Student);
console.log(stunents);
// 2. Write a JavaScript program to delete the rollno property from the following object. Also print the object before or after deleting the property.
console.log(Student);
 delete  Student.rollno;
 console.log(Student);

//  3. Напишите программу JavaScript, чтобы получить длину объекта JavaScript.
const objsize = (Myobj: MyObject): number => {
  let osize = 0;
  for (const key in Myobj) {
    if (Myobj.hasOwnProperty(key)) osize++;
  }
  return osize;
};
const sizeOfStudentObject: number = objsize(Student);
console.log('Size of the current object: ' + sizeOfStudentObject);

for (let i = 0; i < library.length; i++) {
  const book = `${library[i].title} by ${library[i].author}`;
  if (library[i].readingStatus) {
      console.log(`Already read ${book}.`);
  } else {
      console.log(`You still need to read ${book}.`);
  }
}

const filterBook = library.filter((el:any)=> {
 return  el.readingStatus === true;
})
console.log("Alredy redd" , filterBook);

  return (
    <div>
      <Header pagesname={pagesname[2]} />
      <Todos />
    </div>
  );
};

export default Castumers;

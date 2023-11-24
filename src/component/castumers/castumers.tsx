import { LocalGasStation } from "@mui/icons-material";
import { dataList, library, pagesname } from "../../columns/columns";
import Header from "../header/header";
import Todos from "./toDoList";
import Form from "./todo";

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
  let Student: MyObject = {
    name: "David Rayy",
    sclass: "«VI»",
    rollno: 12,
  };

  const stunents = Object.keys(Student);
  console.log(stunents);
  // 2. Write a JavaScript program to delete the rollno property from the following object. Also print the object before or after deleting the property.
  console.log(Student);
  delete Student.rollno;
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
  console.log("Size of the current object: " + sizeOfStudentObject);

  for (let i = 0; i < library.length; i++) {
    const book = `${library[i].title} by ${library[i].author}`;
    if (library[i].readingStatus) {
      console.log(`Already read ${book}.`);
    } else {
      console.log(`You still need to read ${book}.`);
    }
  }

  const filterBook = library.filter((el: any) => {
    return el.readingStatus === true;
  });
  console.log("Alredy redd", filterBook);

  // const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
  // const result: number[][] = [];

  // for (let i = 0; i < array.length; i += 5) {
  //   const subarray = array.slice(i, i + 5);
  //   result.push(subarray);
  // }

  // console.log(result);
  const arrays = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
  ];
  let number: number[] = [];

  for (let i = 0; i < arrays.length; i++) {
    number.push(arrays[i]);
    if (number.length === 5) {
      console.log(number);
      number.length = 0;
    }
  }

  // function bubbleSort(array: number[]): number[] {
  //   let swapped;
  //   do {
  //     swapped = false;
  //     for (let i = 0; i < array.length; i++) {
  //       if (array[i] !== undefined && array[i + 1] !== undefined && array[i] > array[i + 1]) {
  //         [array[i], array[i + 1]] = [array[i + 1], array[i]];
  //         swapped = true;
  //       }
  //     }
  //   } while (swapped);
  //   return array;
  // }

  // console.log(bubbleSort([2, 1, 5, 4, 8, 7, 3, 0]));
  // function bubbleSort(array: number[]): number[] {
  //   let swapped = true;
  //   for (; swapped;) {
  //     swapped = false;

  //     for (let i = 0; i < array.length - 1; i++) {
  //       if (array[i] !== undefined && array[i + 1] !== undefined && array[i] > array[i + 1]) {
  //         [array[i], array[i + 1]] = [array[i + 1], array[i]];
  //         swapped = true;
  //       }
  //     }
  //   }

  //   return array;
  // }

  // console.log(bubbleSort([2, 1, 5, 4, 8, 7, 3, 0]));

  function bubbleSort(array: number[]): number[] {
    for (let i = 0; i < array.length; i++) {
      for (let j = 0; j < array.length - 1; j++) {
        if (array[j] > array[j + 1]) {
          [array[j], array[j + 1]] = [array[j + 1], array[j]];
        }
      }
    }
    return array;
  }
  console.log(bubbleSort([2, 1, 5, 4, 8, 7, 3, 0]));
  const arrayss = [1, -2, 3, 0, 5, 6, 9, 8];

  const redus = arrayss.reduce((array, el, index) => {
    if (
      array[index] !== undefined &&
      array[index + 1] !== undefined &&
      array[index] > array[index + 1]
    ) {
      [array[index], array[index + 1]] = [array[index + 1], array[index]];
    }
    return array;
  }, arrayss.slice());

  console.log(redus);
  console.log("slise", arrays.slice());
  return (
    <div>
      <Header pagesname={pagesname[2]} />
      <Todos />
      <Form/>
    </div>
  );
};

export default Castumers;

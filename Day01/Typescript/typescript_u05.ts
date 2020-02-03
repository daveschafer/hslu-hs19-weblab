
class Student {
  name: string;
  klasse: number
}
export default class School {
  //Your code goes here
  classarray: Array<Student>;

  classlist() {
    let size = this.classarray.length;
    return size;
  }

  addStudent(name: string, klasse: number) {
    this.classarray.push({ name, klasse });
  }

}


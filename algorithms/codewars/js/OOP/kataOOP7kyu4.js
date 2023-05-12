class File {
  constructor(fileName, fileDate) {
    this.fileName = fileName;
    this.fileDate = fileDate;
    this.valueGets = 0;
    this.valueGetc = 0;
  }
  get fullName() {
    return this.fileName
  }
  get filename() {
    let answer = this.fileName.split(".")
    answer.pop()
    return answer.join('.')
  }
  get extension() {
    return this.fileName.split(".")[this.fileName.split(".").length -1]
  }
  getContents() {
    return this.fileDate
  }
  write(value) {
    if(this.fileDate) {
      this.fileDate = `${this.fileDate}\n${value}`;
    } else {
      this.fileDate = value
    }
  }
  gets() {
    let answer = this.fileDate.split("\n")[this.valueGets];
    this.valueGets += 1;
    return answer
  }
  getc() {
    let answer = this.fileDate.split("")[this.valueGetc];
    this.valueGetc += 1;
    return answer
  }
}
//better solution:
class File {
  constructor(fullName,contents){
    var _fullName = fullName;
    this.countWords=0;
    this.countSym=0;
    this.contents=contents;
    this.getName = () =>  _fullName; 
    this.getContents = () => this.contents;
    this.write = (str) => this.contents!='' ? this.contents=`${this.contents}\n${str}` : this.contents=`${str}`
    this.gets = () => this.contents.split('\n')[this.countWords++];
    this.getc = () => this.contents.split('')[this.countSym++];
    this.arr = this.getName().split('.');
  }
  get fullName(){
    return this.getName();
  }
  get filename(){
    return this.arr.filter( (item,i) => i!=this.arr.length-1).join('.');
  }
  get extension(){
    return this.arr[this.arr.length-1];
  }
}
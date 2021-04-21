export class Course{
    courseName!:string;
  courseType!:string;
  courseVideourl!:string;
  courseYear!:string;
  coursePdfurl!:string;
  courseImg!:string;
    constructor(){

    }
    store(
        courseName:string,
        courseType:string,
        courseVideourl:string,
        courseYear:string,
        coursePdfurl:string,
        courseImg:string
    ){
        this.courseName=courseName;
        this.courseType=courseType;
        this.courseVideourl=courseVideourl;
        this.courseYear=courseYear;
        this.coursePdfurl=coursePdfurl;
        this.courseImg=courseImg;
    }

}
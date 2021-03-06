import { Component, OnInit } from '@angular/core';
import { course } from './course';
import {CoursesService } from './courses.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {
details!:course[];
courseName!:string;
courseType!:string;
courseVideourl!:string;
courseYear!:string;
coursePdfurl!:string;
courseImg!:string;
data:any=[];
  constructor(private c:CoursesService,private router:Router) { }
  ngOnInit(): void {
    this.c.getData().subscribe(
      (response : course[] )=>{
         this.data = response;
      }
    
    );
 }

// constructor(private router:Router){

// }
// courseName!:string;
// data:any=[];
// ngOnInit():void{

//   this.data = [
    
    
//       {
//         "courseImg" : "data:image/png;base64,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",
//         "courseName":"ANGULAR",
//         "courseType":"Frontend",
//         "courseYear":"2020",
//         "courseVideourl":"",
//         "coursePdfurl":""
//       },
//       {
//         "courseImg" : "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAASwAAACoCAMAAABt9SM9AAAA81BMVEX///8AAAD///5i2vz//f/9//////z///v//P///f3AwMD8//36//////no6Ohh2/o2NjakpKTNzc1g2/1i2f/i4uL4+Phh2/dqamr0///w8PB6enpl1vpl1//5//vq//9f3fXZ2dmCgoKcnJyzs7OUlJRISEhq1vPE8vhhYWGMjIwXFxdAQEDc+v6j6fFi2fJ82PKP5PTS8/zS+Pu07PIpKSlaWlpz2+9ycnKm5vWb6/W46fWG4vBf3Or5//Wy5fiN3vic3vKT6e/e//x+3fDp9v696fPD8/V21PMgICCB4e6R6/4uLi6K2fba8/ur6Piq7vBJB8JuAAAWpElEQVR4nO1da3fbtrKlAQIkTSCoDcQIE76cF5kHTVFSo6pqXLlRYrfn1D7//9fcGUqyaUte565143Rdi/tDIpKQIuzMDPYAA8hxevTo0aNHjx49evTo0aNHjx49evTo0aNHjx49evTo0aNHjx49evTo0aNHjx67BOYQgn+7q0u2vNwCQhhr3wCN4F38vnaPGMyBXofEYUKGgoVARCi2tiMeZ74ThiyANg7jfM3vDkFi1wMO8IA1juxtJUGG8IBL6fElXB8b7xpYICWrxtPpryezy4hwuNzWLHAcTwZONBpPz87OriohPfajv+o/j9ATo99qpU1iVP75jzLip1tasYhxFpVNrmJlrVJ5U4FT7hp8Gf1eUE2pssoYk9DJLCIMwzlE+qXtcAhYLAii2cBSY6ClUtToeJqCH+5WlPflSaKg/8CXsloX1NBJyWToOiFfURGEjAVhOdDYgMaGAldKGTsN/WCn4haRZR6rnMaTZjEorDU2V0nSZJIwIcgyeolU+tW8zmOwJ2Xr+Xw+qRNTfFZjLt2dYisqNBjWYiQYJ9HwDJiieW7icQrRnC0tCygri0TpRNu6GUYhJ6JaaFUkcZbuFllTm+TxmZCnLgNhIKNxrY1NVD3PHB4um7hZQ2muTT0ZZ35wGpLAdaMzaEZPmBP+s1//xwEEaQRxXdcZC5jrMKCBiWxam9waPahIiIqLONUkiSFM2ZOvxPMC3yEsZH62SCydfOVbFewjBBGuLJVRpuzcFA4bDXKI9hrjPMrUsjbU6ngx6qpQSUpQG/lM7oplgZuFZzFVRda5KbgPPqZ0rE08k27Kx2BT1qg/Ij/1bpq5QTRJqD3zdoYs6UQDo/WvnXsuC3nAyLDWKqGff4+caZ4oa+jQCVLRUaEsJX9QrQbRrpBFOMsKMKDxrRGNCRI6pBqAUk/0dEoTEBaDysOcsROfIL6NwVVVtitkMe5kCgyo6pAVQhrt+ylzo4EGN0tyZTSdZ6cBY7wr1wPmVBD11WXw47/3PwJQVhUFBZBtHdGiBlW9BRnRZFzcmYmATIhXFMeGXcl3gKwhhfCdbe1wIEBd4eMGZOhdOYVkZTtFFnR5SEE6RFs7LPkMNBhN8hPHC5zw9nwMhDueFbtFFhtqyAajrSmLmH1WFGI4LcaRy+7MXQFZ3i6SRe8hC+UqNXWe6Lp0mH+HLc+RSBbdFbJIEDqVAvlZ3X3C/DCo6kTnumnyxKpi5HHmuqxDjPTDDKSqLnckkSbOmqw7wz/hgn8ptM3VIHUXea5skXmcEOZ2mrhtgKfDXSKroDYe3dVKvhQLQ3NdZDzMFhCZ9CJyuBd2FbzDRzHVxYZVPlqETgZkmdnGEmDYQI6j6kqCFP1aoAWdRYzcMiKPjEGHFdmuiFInDHDqT19hgsxbKhhOvzveTIF75iOPySB1z5OcxvYbqLJlkA9bajk5UcoU0c6Q5QRyDgp+LgmStQQLOBldaEikx3CvXbYYg5EZOyIOuiFjges6OEHagEZrdmg5LJBTIOsikuiIQggmRHh6mk2UtWZ6zQM7gQwxH0RSQgu8EXqSO9EALGt672L/owMoS1RTRcU8KdGsAnAqlp0lBrywHJbfxi2GJaUWrCiC4ZBwjziu6xJSxaDvv3k7Q5YUvFIQtEoc6qI0qkbnJ00z0SammAaZRBtcSqwxZiXU/t388et4WEVgWNLh5yDAaLULM6UwtEFElyKIrFJ06kTD2dmgKHD1lFJtldaQQicqBgujOBiqBJSE1onB9ehBMxtm4sRAKMtSxtuqmsccu1yHO67veB5fgH0Uk5oCFWBFQMxycVrXCmjJFQLogz9jZSBTNMYaDcZYTwpNdeOmuNIR8sfNFoNQnXInKwdoSQlwFVtr28w5jo3VmOQALi7wTxrHsaUJ2FeiVGLaxf4cMvB4McxCN0jDx131EIRpyKPytxocDVwL7IaCj6m6uAArsqr8Mqqia2RZVV3OPpvE5pNJbXOrqYmBOgj7tp6PM+IEDIaGR2tbwveHJ3GsVa4VxWX5ul4041GVLcANVSNk6reqywOEKLcccgJ5M22yr+XsbG5zeJ9NYAhItL6YjlLB7pJ19HyNo6N/qJP/N0BC52FG6HBRAisWjQpUAlXFuIogswmcsgYPHISBK7xl1gwqwcX4HZ6KgQa1NeYgMkR2OYtVAUHMthGtGJxHMF4wwW8Y29+7wdv3T79vR46OHv5/AMiShIUyukJXAj+CUFQsgK94iDITsp8JJM3xqPuONVw5BJVhJlnAcQ2tiiHiL+oaR0+s7ZqMgS4ked2+Sxbg2Xft3Lu9vZ+/5+dtg2wHLT6cQLCGAB3byXQYfZnonP7qp2Bx4ZTS2HSXEfn1OBcI5wQrjabcY8IjU0jAaZSNpqDKDK2tMYNSBv52y0L8/D3Zera399N3/LitICzweDZPEmAqiW1TRlx6ogHjmPgQpPyqMDQvss7sAlnnycRzeVSYWscV95kf4WzFHBV/9K1BlQFWapuv/PR6XESyDtBdnj/Z/9Ta1nfsyI8gy2EQrC5qnag8z08ugSnCOPmGAmrksSCag2/W552VHCLYenqUONIvQUDohQBiz0FpxKUQnkdO+eUUrCzP42RS3rasg/XFG2TryffrxwOThV1mTLKrQhuVm4tZxEPImpG/qKaUNo7wylhbvWA4IdquqTrZcDYbZcLxHB98NPTFQsEAWvKUNDAqxJnvAjm+I0Mxro3R1sZXkF+KlrFbZDlv4erV9+vNQ1sWzqEzOY5Br1M1/SIC3hoBARbmypr8K08HuJQzcmBMczh4ZTm/KAzWr5Ug05fWVtUqsYOURTE0bbozDhlYV1Lb+ATtbpOsV3D1ovNtnrx+//LF+wMYJI9Wjg5/HR23d18dHrWX3eb78ODlq8Pn+ODo+AkE+J+ePG3xEFxhwQfnM0iJE1UPuevz1UqgG8oSNERe8jFwZn91UgZ0pY44AxVB24pbO01PV9PvU0yIZs4YFWl3rcL3wvJCQ8DT49BrqwFvk4VX766vnr5bh/13T1a0BM7hsw/rux9uG+HxdfO9d0DO0+648eEhyPJDL3BGmMjovzIehsDVMha7qYwmoEoXWQFkYVmbz5gXiD+MzZfqgmrTiGWXZIY1uJNsAcliEXUqkLAMLlsYk4NpEpdsJes6wh90e7u/vvtz9+7bztj5pvvg4A5Zfz4EWbjzJoJh3qomkk6YErZaq4EkWM6Aw7hR8HDKW1qImOaQDCZAF4h1rKZZfogkYyBL/Ybp9VV3JwYIrFSKJla5mkQy2CALO/yyy9Wng/39g3aUPF7d/gns5tVruPvL7bGz5ernN6/3X7/61H7k8/evPgJLr94gvmMgvAEjLpuBn9C5cCHZcdz1InNImMyw/kNrqutMBky4jI8+Q86cwzCJMzVgRvnQaQsc/GgCatRCmFdggzcfD0OF78uooZACzbaQ9dONDR2jPawYOuzYxqf9tTU9x+HgcHXR6rXXq4ujg+WrXx42wEPyBgHc3K7yu0ZjcuAlN7NlGArSeTuRtYQGe8znzGWQAREIV+0DNQ83ikWkA66s1EWEV7fIetEh5W1XReyvmbgV0I/+3Nv7ZfX6Q9dV13jg0RDMqIppkl9tndkc5QZzxEm0vORZrCy9hkqwlNLFrWM8BF9u75UyvfspgQh/xyBfrS3r1fMnT548PTxAu1qbyuEti3PAs95ufh/w1A9LO9vv+O8NHlxn8W8UyNpefCb+Aj5sMl7NqMshzq/fkAUaSo0cICcMPX9scaJwEG2S5ab8K9inKtej4bZA/hJed6L369uXK2AMX4qCZ9evunhYsgg4yZXCIWzbli/ildBHeLhSThwuaQdgS3ocnIIkEBw0LBa5lZJsLtzzANKgfLloe5usV9eEvL1tSse3yHh6+PrgFeD9deAHL/y4+YUfmCzueGNQ3Rdpaw+dqSfcrMTkN0imaR2xlbWMQLneAJSpisdgWaEbBqloH82kcO/yDkljdGGsmaGr7283rCN4/dPLF9d4duOgz99/6L6jvft877aYXeGB3RC+/znWEFUclfuNURDPh2wmGhic90RCEMFIJR03hHhm4xGEJFAZzJu1tjYR4d2dKFgsAqm4NcNbo+HR8ZsOW0d7m1g+OrxztyXrCbx4s9mbBybLbVe98mQqUZF2FBJnXDol9BHIWk84yK+F7lgWzu/RiHuCgGlFq0cl34h+5JRMsWT+8q6Cb3lYjoD3koX+uPfxzevDw+Pj4/01WRi8tkipBydLRgMNAqFy/duF/gJk6cImFnfQjds7RLqN6pKFiSDu+yWcueMlV/o3Ju8uUzB5CXlTsmil/S3pgGH8U/sKyXqBg2QHbTx725UIT7tu+H6zNw9MFnc4LyH304PMD7pkcRa4VZG3y6ogStt7zB/dMi2ri0tcO+OBm9UrGlUl765QkGwAbePynlmHtvdHH9a03caTWyZ0eN18r5tTXuOhYxbIJLEwtTULSA2ZSzhfbVNljExBVRUNUGmmDp5H4LrplTa4lIFLiTj4TSFbgmRc8BNjrf4XzrxPvfUUMk6n4l8RSFn434iCTbKw98tRDYTVhy3yZX+vO+H16jrsY2JztNH+R0z+VYWOLW6XCNLQWQ39nIi0AKNqskGbSAepz8DaojParq1Sg5XyZ7jJECgIsgKcssgWVNuLVWmWYNzxXU+yahLr2BRVu4f/DlnI0dLLXu1tUeTL5s+vrz5ek/V+a3NId/79vUi5D15Zg23peOZxFrLlpAGT5DyGwW9IyhiywzMufe9UBDw6KUB85rh8E19FWNUGIJgXgZ99Aw0bl+0HENyoEoSSzKzGzy5FwNY6q0PW8dq00N/+vWla+3s3KXUb4lZkYfNNI0IKvycx2+CKbzXmNcX8UpyuQ44MG40mJaO/cfJh5As0InDTqqnrJImLpsJdrgzPfRhRGFAXQgqsimhWOsMNuOSjv2yMG+1K3Ia+xbJuTAsl/DuM6SvGDtu7GNLX6eDxjXRYSvjO9P3SVV/vbdP13xmClBeJsbWum2rFFQsyCrLhhIR8GOdUL3CfFwQulqYsyqpRlsplTALpEC00NB0FIUgEbVdVzhFxouqsxo12tB6CCxK+GbOWDCxNBDPFP18vJf3Tg7crHYWe97LlEBPDG7JwRNj7aWVmB6uPRHv78wBFxrHzQCCnPkmrgTW4uhM37bZoN3DHpjZ2CIpSziENjkGbMw9sw3elbCtkHOF7qUvALmdK10lDAl9cxirXMyeUnHAxagpwWJUkf1cpTt5vJevGtJ63efXevz99Wr5YkrXUpG+fvW2t6oas9Vzfx09vP9x85C9rjfYgM6U3iKa1TQqrjRrMsjANYIxUdCJOiZBVrXAZtTWku7oAGEDZoIoKVC3kPFqbBYyD4utsEScGmNL5NPNuMqANstC0liujRy9uadLVZNXr6xsfjq91FuLJp83GR2u2Hnit1XMgGGla51gC0syyLwNj9BUIUSbc/9SJys9IwDcP7yGpmFtQESftYTXkxCSJzbJxU5t2OkfbpsJtndftD989e3d7GHv/7Nm7ldc8ffNx2de3L1dTfkHgPF1y+PHgyHny7rpp+1m//Ll89P7m5pPX7188e/ZsS+L4PeGnnJUDpVVeY4pcXFgN5kIkkT6IfNAKxTkLvA2yAmekY1oXEU9D6FkV57mawPBnLPi0MYvzNMATRv7XVZPPr7X7DY7g1vOtrfHJPY8eFAwCjSOqpkiwKs3qBJRk/keZiYiF/qiGgFbcEfktwuxCxbSA6C4h8A+nEKQoWJfBM2zq+VBwKZkgW+Zt/n9jNWlVXV1A0qchK1QmoUUxmU9nwy//gsidnES3Ot3uKRBT0Bz5v6pheTYfWDArELIWBWs9ucpCGbhYTeiRR1qkRUg6+vUitianJscqUo35DQgobYrpt7LKOqiGwymof4zvwNjSprCaLf58MR1Fm6PBI4QkfvRloLEoDQ8vasskcVW1rW+r42vgEVA6QS7bk2rMsugUrpM51mV53n//px4BMIWBIc5MFlionLSM4VRf6543WM7/AZlYh9teaj0BbaXsHHyPCcF2oRget1Rg0fEUNHj5+2JS5y0VNFZx0vrlEmhyqo5x4QLMrJ78dlJWkXMF1MURc30fRMc/3ZOHh8cDPsIC5RI3TkhHQGwqr84ajGGJKgwWxNc4g1rHuKmVzs+uyrL6igGKpLLEQ8eGnKQ7ELCc9mwGOWtrh27uScGjKc4k23I4HI6GiMsSDE3paSRu6mZAz+OOgjHfgR0WSxBHTqHHRXRzS4ZSRguaWN2kUoJ+ZVKGDRYnLyLc53RjRtEF7s3YhWi1Aq7TU93dB+eCZnUy4MaYKxBNnggCdqJMQWnlBeSaK5yImUOj38Su7DdkhGQXFNO97j3GSHBeG5rHZRhIJtNvGNrz0uPixoxwHXIK2mGyM5szGQ8yiE7q1vFZKN05n8JgaIoRD4Q3rHHjE/hb0BnzCAn5N6xAzR5bfnMfQGZV1Ma2utthxqPGAo2TKpCgWqnSzR1xAGQ5lzBqxtXWE2AfIdqDe8CyNsgKga2JbctqokmeJHYS3VkjRLIqYDEe/rBv+w8DLGuIqcvXTVc6lRUodGUXC5yCqbONWiwIWhXwTMuNtz5SMO4MtVF243S1ICUOH+LpKbi/Jy+GnG2ccsSdzEJytDNkhZwNIemrxV2yWBr4XJY1bddYi5J7YmNHIW/L/Oj5rpxzzu4li/CQhXyG9Q9GXXHhio04Hi7J2hnLcjgZxpD6bZyf5THBpJs2Gqdn7BlE97szoKQlS+8UWbwdDTdqcrnwfZL9rRUeO23yRSbTu6MhkHWJaeVwZ/Kdpc7acshhCGPdQhsL8V0lGvQWu2tZLp6QRHdIZzkkyHAr67f2txiWJgKBnbh+Gg4nxn6Ok9n4c6KMLS5TxvEQluvcEMib4cHo2c6Q5ZB0gPKcEcFWPOD5KVyyWR3jcTQzFs3w8Hdaz3BtujN/zIIQC94G6W7MKSNYONV4TBbhqVhtuGDMkVkTJ8BRXKaSOWVBcXN0E/EU3XU18SBkhisYU3d3YhbzhjQ3duwEPFwKJlD1UYmDoEk+V1jql8oRWJkyelI6aciC9S5gOY5jbUsn2o2JUsf1hBcN1HJVdZUpe6KaFxpXJuZZ6PLQCUAjLGI8kpT+Nkqv7QjSIVBhRcTFjpCF9aRkBiZkzrJ2wZ5zUZ3FRufG1NPIDdKAc9eFrPqkxuk/ZacVI8SFsdCJGhwpr8jdPOhxI8IfrtCDMmIiqmZ/t0tfiZ10xSZP2XCS2Dw2ed2UWSRlNJpgRWCRBWJX5rNayPM8wXWaYjCY1BbPtbA6n0a8Iwm4lCRqCkMhWUziGg+oyXHpPh+GmwUkjxqh87vKc5oY2/6kDrzC3xQIuruYhE/CgI8W7VYLbWK0vVrpeAyjwU55oeMG/HyAkws5mBRE9vqvUgSrYu0VQua6IpThsMlxDbbdiZibovSlu2u/FxZKkjUTi6UecVH8DpmNh2rq1o4VAZecOOzyaoDbLcBXL84qHuzcLzq14NFofHLynzIDWgi/Xwx4XlQNZ1dXszIThET3tnvUwFNksL5KSjSh++OQCEMpwzD05ClWZO0m8Jcw0+uj6O6PQxzPiMJd9+0PQu5YvFoj9DwvaA8Vk7gMfW87Dla1tDsfvHW3ZEMHS6tiDAPWfwnauC0Fq91/xNfq0aNHjx49evTo0aNHjx49evTo0aNHjx49evTo0aNHjx49evTo0aNHjx49Hhf+BySwLZlnGsttAAAAAElFTkSuQmCC",
//         "courseName":"React",
//         "courseType":"Frontend",
//         "courseYear":"2020",
//         "courseVideourl":"",
//         "coursePdfurl":""
//       },
//       {
//         "courseImg" : "https://image.flaticon.com/icons/png/512/919/919825.png",
//         "courseName":"Node",
//         "courseType":"Backend",
//         "courseYear":"2020",
//         "courseVideourl":"",
//         "coursePdfurl":""
//       }, {
//         "courseImg" : "data:image/png;base64,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",
//         "courseName":"MySql",
//         "courseType":"Backend",
//         "courseYear":"2019",
//         "courseVideourl":"",
//         "coursePdfurl":""
//       }, {
//         "courseImg" : "https://miro.medium.com/proxy/1*rDDUaNlx2uJT_DWCSa_o1Q.png",
//         "courseName":"Spring",
//         "courseType":"Backend",
//         "courseYear":"2019",
//         "courseVideourl":"",
//         "coursePdfurl":""
//       }
//     ]

    
  
// }
gotologout(){
  this.router.navigate(['login']);
}
goToCourse(){
  console.log("clicked");
}
createData:any=[];
search(){
  if(this.courseName != ""){
    this.data=this.data.filter((res:any)=>{
      return res.courseName.toLocaleLowerCase().match(this.courseName.toLocaleLowerCase());
    })
  }
  else if(this.courseName == ""){
    this.ngOnInit();
  }

}
}


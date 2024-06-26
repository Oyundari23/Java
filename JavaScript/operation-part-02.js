// 1. 936-г 12д хуваагаад гарсан хариуг 9д хуваахад гарах үлдэгдлийг хэвлэнэ үү.
let a = 936; 
let b = 12; 
let z = a / b;
console.log (z % 9);

// 2. Гараас 0-100 хооронд тоон утга авч 90-100-н хооронд байвал true, бусад утгад false буцаа.

let x = 98
let var1 = 90
let var2 = 100
if (x < 100 && x >90) {console.log ("true")}
else (console.log ("false"))

// 3. Он, сараа гараас оруулахад тухайн сар хэд хоногтой болохыг харуул.
let year = 2000
let month = 2

// 4. Өгөгдсөн эерэг тоо нь 3 эсвэл 7-ын үржвэр эсэхийг шалгана уу.

let y = 40
if (y % 3==0 || y % 7==0) {console.log("true")}
    else console.log ("false")

// 5. Өгөгдсөн тооны тэгш эсвэл сондгой эсэхийг шалгана уу.

let u = 93
if (u % 2==0) {console.log("even")}
else console.log ("odd")

// 6. Өгөгдсөн тооны эерэг тоо эсвэл сөрөг тоо болохыг шалгаад хэвлэж харуулна уу.

let p = -9
if (p > 0) {console.log ("positive number")}
else console.log ("negative number")

// 7. 4 н хувьсагч зарлан тоон утга өг. Өгөгдсөн 4 тооны 80-аас их тоонуудын нийлбэрийг ол.

let o = 60 
let i = 70 
let t = 110
let r = 100 
if (o < 80) 
    {console.log (o = 0)}
    else if (i < 80) 
        {console.log (i = 0) }
    else if (t < 80)
        {console.log (t = 0 )}
    else if (r < 80)
    {console.log (r = 0)}
    console.log (o+i+t+r) 

<!-- arrayOfNumbers гэсэн variable зарлаад дараах тоонуудыг оруул.
43, 56, 23, 89, 88, 90, 99, 652, 15, 290, 11
Дээрх array доторх тоонуудын нийлбэрийг ол.
Дээрх аrray - ийн хамгийн их тоог ол.
Дээрх аrray - ийн хамгийн бага тоог ол.
Дээрх аrray - ийн эхэнд дурын 1 тоог нэм.
Дээрх аrray - ийн төгсгөлд дурын 1 тоог нэм.
Дээрх array доторх тоонуудын тэгш болон сондгой тоо тус тус хэд байгааг ол. -->

<script>
    const numbers = [43, 56, 23, 89, 88, 90, 99, 652, 15, 290, 11];
    // let sum = 0; 
    // for (i=0; i< numbers.length; i++){
    // sum += numbers[i]; 
    // }
    // console.log ("The sum of the numbers is:", sum);
    const numbers = [43, 56, 23, 89, 88, 90, 99, 652, 15, 290, 11];
    let max =numbers[0]; 
    for (i=0; i=numbers.length; i++){
        if (numbers[i]> max ){
        max = numbers[i];
    }
}
console.log ("The biggest number is:", max)
</script>

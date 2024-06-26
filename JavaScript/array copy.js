// <!-- arrayOfNumbers гэсэн variable зарлаад дараах тоонуудыг оруул.
// 43, 56, 23, 89, 88, 90, 99, 652, 15, 290, 11
// Дээрх array доторх тоонуудын нийлбэрийг ол.
// Дээрх аrray - ийн хамгийн их тоог ол.
// Дээрх аrray - ийн хамгийн бага тоог ол.
// Дээрх аrray - ийн эхэнд дурын 1 тоог нэм.
// Дээрх аrray - ийн төгсгөлд дурын 1 тоог нэм.
// Дээрх array доторх тоонуудын тэгш болон сондгой тоо тус тус хэд байгааг ол. -->

<script>
    const arrayOfNumbers = [43, 56, 23, 89, 88, 90, 99, 652, 15, 290, 11];
    let sum = arrayOfNumbers.reduce((accumulator,currentValue)=>{
        return accumulator + currentValue
    }
     ,0   );
     console.log (sum)
     const arrayOfNumbers = [43, 56, 23, 89, 88, 90, 99, 652, 15, 290, 11];
     function arrayOfNumbers(arr) {
  return Math.min.apply(null, arr);
}
</script>
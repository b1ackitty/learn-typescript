// --------------------------------------------------------------------------
// ✅ TypeScript에서 객체 타입
// --------------------------------------------------------------------------

// 질문 1: 다음과 같은 속성을 가진 책(book)을 객체 리터럴로 만드세요.
// - title: string
// - author: string
// - pages: number
let book = {
  title: '치즈 이야기',
  author: '조예은',
  pages: 850
}

// 질문 2: book 객체 리터럴에 다른 속성을 추가하려고 하면 TypeScript가 허용할까요?
book = {price: 17000}

// 질문 3: 다음과 같은 속성을 가진 `Car` 인터페이스를 정의하세요.
// - make: string
// - model: string
// - year: number
// 그런 다음 이 인터페이스를 따르는 객체를 만드세요.
interface Car {
  make: string
  model: string
  year: number
}

const kiaCar: Car = {
  make: 'KIA',
  model: 'Sorento',
  year: 2026
}

// 질문 4: `Car`와 동일한 형태를 가진 타입 별칭 `Car2`를 정의하세요.
// 그리고 이 타입 별칭을 따르는 객체를 만드세요.
type Car2 = {
  make: string
  model: string
  year: number
}

const hyundaiCar: Car2 = {
  make: 'HYUNDAI',
  model: 'IONIQ',
  year: 2025
}

// 질문 5: `Car`와 동일한 형태를 가지면서,
// 추가적인 어떤 프로퍼티도 허용하는 `Car3` 인터페이스를 만드세요.
interface Car3 {
  make: string
  model: string
  year: number
  [key: string]: any
}
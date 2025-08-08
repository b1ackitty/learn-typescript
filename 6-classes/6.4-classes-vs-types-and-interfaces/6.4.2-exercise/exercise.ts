// --------------------------------------------------------------------------
// ✅ 클래스 vs. 타입과 인터페이스
// --------------------------------------------------------------------------

// 문제 1
// 아래 클래스의 인스턴스를 생성하세요.

class Book {
  title: string
  author: string

  constructor(title: string, author: string) {
    this.title = title
    this.author = author
  }

  describe() {
    console.log(`이 책의 제목은 "${this.title}"이고, 저자는 ${this.author}입니다.`)
  }
}

const book = new Book('가공범', '히가시노 게이고')
book.describe() // '이 책의 제목은 "가공범"이고, 저자는 히가시노 게이고입니다.'

// 문제 2 
// 아래 Tree 타입의 새 객체를 생성하세요.

type Tree = {
  height: number
  age: number
}

const tree: Tree = {
  height: 15,
  age: 4
}

// 문제 3
// 아래 Car 인터페이스의 새 객체를 생성하세요.

interface Car {
  make: string
  model: string
  year: number
}

const car: Car = {
  make: 'KIA',
  model: 'Sorento',
  year: 2025
}
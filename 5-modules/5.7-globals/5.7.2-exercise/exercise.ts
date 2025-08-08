// --------------------------------------------------------------------------
// ✅ TypeScript에서의 글로벌(global)
// --------------------------------------------------------------------------

// 문제 1
// string[] 타입의 전역 변수 `cart`를 선언하고 빈 배열로 할당하세요.
declare global {
  interface Window {
    cart: string[]
  }
}

window.cart = []

// 문제 2
// 문자열 타입의 message를 받아 반환값이 없는 전역 함수 `log`를 만드세요.
declare global {
  interface Window {
    log: (message: string) => void
  }
}

window.log = function(message: string): void {
  console.log(message)
}

// 문제 3
// number 타입의 전역 상수 `GLOBAL_CONSTANT`를 선언하고 값으로 42를 할당하세요.
declare global {
  interface Window {
    GLOBAL_CONSTANT: number
  }
}

window.GLOBAL_CONSTANT = 42

// 문제 4
// 전역 `Window` 인터페이스를 확장하여 문자열을 받아 반환값이 없는 `customAlert` 메서드를 포함하도록 하세요.
// 그리고 `customAlert` 메서드를 구현하여, 전달받은 메시지로 alert를 호출하세요.
declare global {
  interface Window {
    customAlert: (string) => void
  }
}

window.customAlert = function(message: string): void {
  alert(message)
}

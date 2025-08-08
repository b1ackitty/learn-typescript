// --------------------------------------------------------------------------
// ✅ TypeScript의 `any` 타입
// --------------------------------------------------------------------------

import { log } from "console"

// 1. `any` 타입으로 변수를 선언하고 문자열 값을 할당하세요.
let year: any
year = "올해"

// 2. 그 변수를 숫자로 다시 할당하세요.
year = 2025

// 3. 그 변수를 name 프로퍼티가 "TS"인 객체로 다시 할당하세요.
year = { name: "TS" }

// 4. 매개변수 타입이 `any`인 함수를 만들고, 그 타입과 값을 로그로 출력하세요.
function logTypeValue(value: any) {
  console.log(typeof(value))
  console.log(value)
}

// 5. 그 함수를 문자열, 숫자, 객체, 배열 등 다양한 타입의 인자로 호출하세요.
logTypeValue('25')  // 'string' '25'
logTypeValue(25)  // 'number' 25
logTypeValue({ year: 25 }) // 'object' { year: 25 }
logTypeValue([ 25, 20 ]) // 'object' [ 25, 20 ]
logTypeValue(true) // 'boolean' true

// 6. TypeScript에서 `any`를 사용하는 것이 왜 유용할 수도 있고, 동시에 문제가 될 수도 있는지 설명하세요.
// `any`를 사용하면 어떤 타입이든 할당할 수 있지만, 타입 오류를 잡을 수 없게 되기 때문이다.
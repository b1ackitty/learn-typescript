// --------------------------------------------------------------------------
// ✅ 네임스페이스(Namespaces)
// --------------------------------------------------------------------------

// 문제 1
// 두 숫자를 받아 합을 반환하는 `add` 함수를 포함하는 `MathOperations` 네임스페이스를 만드세요.
namespace MathOperations {
  export function add(num1: number, num2: number): number {
    return num1 + num2
  }
}

// 문제 2
// 두 숫자를 받아 차를 반환하는 `subtract` 함수를 `MathOperations` 네임스페이스에 추가하세요.
namespace MathOperations {
  export function subtract(num1: number, num2: number): number {
    return num1 - num2
  }
}

// 문제 3
// `MathOperations` 네임스페이스를 사용하여 두 숫자를 더하고 빼서, 결과를 콘솔에 출력하세요.
console.log(MathOperations.add(3, 7)) // 10
console.log(MathOperations.subtract(9, 2)) // 7
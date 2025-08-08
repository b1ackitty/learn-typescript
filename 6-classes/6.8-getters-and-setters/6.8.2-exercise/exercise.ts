// --------------------------------------------------------------------------
// ✅ TypeScript의 클래스 게터와 세터
// --------------------------------------------------------------------------

// 문제
// BankAccount 클래스를 만들고, number 타입의 private 프로퍼티 balance를 추가하세요.
// balance에 접근하고 수정할 수 있도록 게터(getBalance)와 세터(setBalance)를 구현하세요.
// balance는 음수로 설정될 수 없도록 하세요.
class BankAccount {
  private _balance: number

  constructor(balance:number) {
    this._balance = balance
  }

  get balance() {
    return this._balance
  }

  set balance(value: number) {
    if (value < 0) {
      throw new Error('음수로 설정할 수 없습니다.')
    }
    this._balance = value
  }
}

const bankAccount = new BankAccount(0)
bankAccount.balance = 90
console.log(bankAccount.balance) // 90
bankAccount.balance = -100 // 음수로 설정할 수 없습니다.

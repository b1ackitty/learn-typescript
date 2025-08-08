export type Person = {
  name: string
  age: number
  email: string
}

export type Employee = Person & {
  employeeId: number
  department: string
}
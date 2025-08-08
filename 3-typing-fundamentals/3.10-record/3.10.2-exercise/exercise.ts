// --------------------------------------------------------------------------
// ✅ Record 유틸리티 타입
// --------------------------------------------------------------------------

import { User } from "../../../5-modules/5.3-exporting-and-importing-types/5.3.1-examples/models"

// 문제 1
// 키(key)는 사용자 ID(문자열), 값(value)은 역할(문자열)인 Record 타입 `UserRoles`를 만드세요.
type UserRoles = Record<string, string>

// 문제 2
// `UserRoles` 타입을 사용해서 `roles`라는 변수를 만들고, 아래와 같이 역할을 할당하세요.
// - ID가 'user1'인 사용자는 'admin' 역할
// - ID가 'user2'인 사용자는 'editor' 역할
// - ID가 'user3'인 사용자는 'viewer' 역할
const roles: UserRoles = {
  user1: 'admin',
  user2: 'editor',
  user3: 'viewer'
}

// 문제 3
// `getUserRole`이라는 함수를 만드세요.
// 이 함수는 사용자 ID(문자열)와 `UserRoles` 객체를 받아서 해당 사용자의 역할을 반환합니다.
function getUserRole(userId: string, UserRoles: UserRoles): string {
  return `${userId}의 역할은 ${UserRoles[userId]}입니다.`
}
// getUserRole 함수 테스트
console.log(getUserRole('user2', roles)) // 

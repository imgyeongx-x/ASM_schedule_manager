// 아이콘 생성 스크립트 (Node.js로 실행: node create-icons.js)
// canvas 없이 단순 SVG → PNG 변환용 (Sharp 설치 필요 없는 방법)
// 실제로는 아무 PNG 파일 3개(16x16, 48x48, 128x128)를 icons/ 폴더에 넣어도 됨

// 빠른 방법: 아이콘 없이 테스트하려면 manifest.json의 "icons" 항목 삭제 후 로드
console.log("icons/ 폴더에 icon16.png, icon48.png, icon128.png 를 넣어주세요.");
console.log("임시로는 manifest.json 에서 icons 항목을 삭제해도 확장 프로그램 로드 가능합니다.");

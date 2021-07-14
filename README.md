## 📆 프로젝트 기간
- 2021.05.24 ~ 2021.06.04 (약 2주)

## 📌 Keywords
- 자체프로젝트 | 크라우드펀딩 | 상세페이지 | 모바일 반응형


## 🔨 사용한 기술 스택
- React | Hooks | Styled-components | Github | Trello

## 👪 팀원구성
- Front-end: 노선경, 송가람, 임유진
- Back-end:  이승무, 최준식

## 🔗 프로젝트 링크
- [블로그](https://velog.io/@sgr2134/2%EC%B0%A8-%ED%94%84%EB%A1%9C%EC%A0%9D%ED%8A%B8-%ED%9A%8C%EA%B3%A0%EB%A1%9D-1%EB%B6%80) ,[프로젝트 영상](https://www.youtube.com/watch?v=OAnJsVrR2Is&t=107s), [떡볶닷컴](http://tteokbok.com/)


## 🧐 프로젝트 개요

- 문화예술 프로젝트를 크라우드 펀딩을 통해 밀어주는 텀블벅 사이트를 모티브로 분식 메뉴의 다양화를 위한 프로젝트 펀딩 사이트로 새롭게 재구성

## 🎯 프로젝트 목표

- 함수형 React를 통한 페이지 구현, Styled-Components를 이용한 스타일을 적용 및 Sass와의 비교
- 모바일 반응형 사이트를 베이스로 소셜 로그인, 필터, 정렬, 좋아요 기능들을 구현
- AWS를 이용하여 실제 사이트의 배포 (사이트 주소: [떡볶닷컴](http://tteokbok.com/))

## 🎉 프로젝트 진행

### 업무 관리

- Back-end와 통신을 위한 Key값 공유 및 Issue 설정을 통하여 Trello 사용을 극대화 시킴
- 매일 스크럼 회의를 통하여 Trello의 Issue들을 해결하고자 함
- Git rebase를 이용하여 연속된 commit을 묶어 진행 상황을 잘 파악할 수 있도록 함

### 프로젝트 상세페이지 구현 사항

❗**자세한 코드 설명은 [여기](https://velog.io/@sgr2134/2%EC%B0%A8-%ED%94%84%EB%A1%9C%EC%A0%9D%ED%8A%B8-%ED%9A%8C%EA%B3%A0%EB%A1%9D-2%EB%B6%80) 클릭해주세요.**

1. **프로젝트 밀어주기**
    - 모바일과 PC에서 같은 버튼을 눌렀을 때, 실행되는 이벤트의 차이를 개별 state값을 통해 구현
    - 윈도우 사이즈를 이용해 PC에서는 버튼이 하단 후원 옵션 부분으로 스크롤 이동하도록 구현
    - 모바일에서는 애니메이션을 통해 후원 옵션 부분이 생성 될 수 있도록 구현
2. **좋아요 상태 유지** 
    - 로그인한 이용자가 좋아요 버튼을 토글 시 페이지를 벗어나도 그 상태가 유지될 수 있도록 함
    - Fetch 사용시 PATCH 메소드를 이용 header안의 이용자 정보가 추가되고 삭제되면서 좋아요 상태를 유지시킴
3. **모바일 반응형 구현**
    - Styled-components를 통해 Break point를 담은 파일 생성 후 전역으로 이용 할 수 있도록 설정
    - PC 화면과 모바일에서 다르게 보이는 컨텐츠의 순서를 구현하기 위해 flex속성의 order 이용

## 🤓 무엇을 배웠을까?

- **새로운 기술 스택을 받아들이는 자세**: 프로젝트를 진행하며 접했던 React Hooks와 Styled-components는 기존에 배웠던 기술과는 다른 형태였습니다. 따라서 초반에 이해하는 과정에서 시간이 걸리기도 했습니다. 이해하기 위해 가장 단순하지만 적극적으로 시행한 방법은 **공식문서를 훑어보는 것**이었습니다. 또한 팀원들과 **여러 방법을 이야기하며 어떻게 적용 시키면 좋을 지에 대한 논의**를 통해 조금씩 원하는 화면을 그려낼 수 있었습니다. 포기하고 싶었던 순간도 있었지만 하나씩 이해해 나가며 결국 원하는 기능을 구현한 것처럼 앞으로 개발자의 길에서도 포기하지 않고 끈기를 가진다면 이해하는 순간이 올 것이라는 사실을 배운 프로젝트였습니다.
- **데이터를 받아오는 여러가지 방법**: Back-end와 데이터를 주고받기 위해 GET과 POST 메소드만 알고 있었던 저번 프로젝트와는 달리 좋아요 기능을 구현하기 위해서는 해당 사용자가 버튼을 눌렀지 판단만 내릴 수 있으면 충분했습니다. 이는 새로운 입력값을 보내는 것이 아니기 때문에 POST는 적합한 메소드가 아니었습니다. 대신 PATCH라는 부분적으로만 정보가 변경될 때 사용되는 메소드 안에 headers에 사용자의 정보만 담아 보낸다면 토글 이벤트와 동일하게 부분적으로만 정보를 추가하거나 삭제할 수 있었습니다.

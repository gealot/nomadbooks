# Nomad Books

![Nomad Books Logo](https://assets-global.website-files.com/61f9082050036c6c4b4899f8/640b31799fbf4da056198aaf_12%20Books%20Every%20Designer%20Will%20Love%20-%20main.svg)

> Additional information or tagline

A brief description of your project, what it is used for and how does life get
awesome when someone starts to use it.

## Goals

- 새 NextJS 프로젝트를 만들고, New York Times Best Seller 목록 탐색 App을 빌드하세요

## Requirements

- 홈페이지 (/) : 베스트셀러 전체 리스트를 보여주세요
- 상세 페이지 (/list/[id]) : 베스트셀러 각 카테고리별 책 리스트를 보여주세요
- 어바웃 페이지 (/about) : About 페이지
- Layout Component를 사용해야 합니다
- CSS Modules를 이용해 꾸며주어야 합니다.
- 포기하지 마세요!

## Notes

- 베스트셀러 목록 가져오는 API <https://books-api.nomadcoders.workers.dev/lists>
- 하드커버 커버 분야 이미지 목록을 가져올 때 <https://books-api.nomadcoders.workers.dev/list?name=hardcover-fiction>
- [category] here <https://books-api.nomadcoders.workers.dev/list?name=[category]>

## Preview

<!-- <video src='https://i.imgur.com/bj0qN1z.mp4' controls /> -->

## Submit

- #4.0 ~ #4.6 을 시청하고 Vercel에 작업물을 배포하세요
- 제출 URL 형태는 다음과 같습니다 [project-name].vercel.app
- 제출기간 : 04/01(월) 06:00 까지

## Logbook [of Day 39 ~ 42]

### Day 39 (03/28)

#### Project Structure 뼈대잡기

- 가장 기본적인 app 디렉터리 외에 구조화할 폴더 구조를 참고하고 싶어서 찾아보게 되었다
- NextJS 기본 폴더 규칙 <https://nextjs.org/docs/getting-started/project-structure>
- How to structure scalable Next.js project architecture <https://blog.logrocket.com/structure-scalable-next-js-project-architecture/>
- NextJS 14 Folder Structure <https://medium.com/@mertenercan/nextjs-13-folder-structure-c3453d780366>
![Project Structure](https://miro.medium.com/v2/resize:fit:4800/format:webp/1*XmOAHrdcqIzsnSmRoQjimg.png)

#### CSS Reset 라이브러리 선정

- 여러 CSS Reset 라이브러리 종류 <https://www.webfx.com/blog/web-design/css-reset-stylesheets/>
- CSS Reset 라이브러리별 트렌드 <https://npmtrends.com/modern-normalize-vs-normalize.css-vs-reset-css-vs-sanitize.css>
- Normalize.css에서 Sanitize.css로 갈아탄 이유 <https://iamdtms.medium.com/css-reset-to-normalize-css-to-sanitize-css-e74ed173ae6>
- New CSS Reset <https://elad2412.github.io/the-new-css-reset/>
- A (more) Modern CSS Reset <https://piccalil.li/blog/a-more-modern-css-reset/>
- Enhancing Web Applications with CSS Resets: A Guide For Next.js <https://medium.com/@bryomajor/enhancing-web-applications-with-css-resets-a-guide-for-next-js-9417624a5eb9>
- [Next.js] css 적용 방법들 <https://velog.io/@iberis/Next.js-css-%EC%A0%81%EC%9A%A9-%EB%B0%A9%EB%B2%95%EB%93%A4>
- Next.js 13 프론트엔드 구성하기 <https://velog.io/@gwak2837/Next.js-13-%ED%94%84%EB%A1%A0%ED%8A%B8%EC%97%94%EB%93%9C-%EA%B5%AC%EC%84%B1%ED%95%98%EA%B8%B0>
- 여러 CSS Reset 라이브러리를 비교한 결과, 가장 널리 사용되면서 Update가 이루어지고 있고, 크게 건드릴 필요가 없는 sanitize.css를 선택하기로 결정

  ```zsh
  $ pnpm add sanitize.css

  1) /app/globals.css 파일 내용을 /styles/global.css로 옮기기
  2) /styles/global.css 최상단에 아래 내용 import
  @import '~sanitize.css';
  @import '~sanitize.css/forms.css';
  @import '~sanitize.css/typography.css';
  ```

- 추가로 cssnano 관련 패키지 추가

  ```zsh
  $ pnpm add -D cssnano cssnano-preset-advanced

  💡 cssnano : PostCSS 기반의 모듈식 CSS 최적화 도구
  1) CSS 코드를 분석하고, 여러 최적화 기법을 적용하여 최종 결과물을 최대한 작게 만들어 줍니다.
  2) 프로덕션 환경에서 웹사이트의 로딩 시간을 줄이고, 성능을 향상시키는 데 도움이 됩니다.
  3) CSS 파일 크기 줄이기, 불필요한 공백 제거, 색상 코드를 압축하며, 주석을 제거하는 등 최적화 기법을 제공합니다.
  4) 프로젝트의 요구사항에 맞게 최적화 수준을 조정할 수 있습니다
  ```

#### Vercel 계정 생성

- vercel 홈페이지 <https://vercel.com/>

#### 인터페이스 만들기 귀찮은 자 여기로 오라

- JSON to Typescript <https://json-5.com/json-to-typescript/>

### Day 40 (03/29)

#### Naming Convention

- References : <https://basarat.gitbook.io/typescript/styleguide>
- 변수 : camelCase
- 상수 : SCREAM_SNAKE_CASE
- 함수 : camelCase
- 클래스 : PascalCase
  - 클래스의 멤버 변수 : camelCase
  - 클래스의 메서드 : camelCase
- 인터페이스 : PascalCase
  - 인터페이스의 멤버 변수 : camelCase
  - 인터페이스를 알리는 I를 사용하지 마십시오!(헝가리안 표기법 안써도 인터페이스임이 명확함)
- 타입
  - 타입 이름 : PascalCase
  - 타입의 멤버 변수 : camelCase
- 네임스페이스 : PascalCase
- 열거형(enum)
  - 열거형 이름 : PascalCase
  - 열거형의 멤버 변수 : PascalCase
- 파일
  - 일반적으로 : camelCase
  - 리액트 컴포넌트 : PascalCase
- 모듈 : snake_case
- URL : kebab-case
- HTML Tag : kebab-case

#### 언제 Server/Client 컴포넌트를 사용해야 하는가?

- References : <https://nextjs.org/docs/app/building-your-application/rendering/composition-patterns#when-to-use-server-and-client-components>

| 행위                                                           | 서버 컴포넌트 | 클라이언트 컴포넌트 |
| ------------------------------------------------------------- | :---------: | :-----------: |
| 데이터 가져오기                                                   |     ✅      |       ❌       |
| 백엔드 리소스에 (직접) 액세스                                        |     ✅      |       ❌       |
| 민감 정보(Access Token, API Key 등) 저장                          |     ✅      |       ❌       |
| 서버에 대한 큰 의존성 유지 / 클라이언트 측 JavaScript 감소               |     ✅      |       ❌       |
| 상호작용 및 이벤트 리스너(onClick(), onChange()등) 추가              |     ❌      |       ✅       |
| 상태 및 수명주기 효과 사용(useState(), useReducer(), useEffect()등) |     ❌      |       ✅       |
| 브라우저 전용 API 사용                                             |     ❌      |       ✅       |
| 상태, 효과 또는 브라우저 전용 API에 따라 달라지는 사용자 정의 후크를 사용      |     ❌      |       ✅       |
| React 클래스 구성요소 사용                                          |     ❌      |       ✅       |

### Day 41 (03/30)

#### Component 전략

- NextJS 정리 : <https://velog.io/@bicco2/%EC%8B%A4%EC%A0%84%EC%97%90%EC%84%9C-%EB%B0%94%EB%A1%9C-%EC%93%B0%EB%8A%94-Next-js-%EC%A0%95%EB%A6%AC-1>
- Next.js에서 Script Component 효과적으로 사용하기 : <https://velog.io/@parksil0/Next.js%EC%97%90%EC%84%9C-Script-Component-%ED%9A%A8%EA%B3%BC%EC%A0%81%EC%9C%BC%EB%A1%9C-%EC%82%AC%EC%9A%A9%ED%95%98%EA%B8%B0>
- NextJS 서버 컴포넌트의 이해 : <https://ui-log.github.io/docs/Nextjs/2024-02-11-Nextjs%EC%9D%98-%EC%84%9C%EB%B2%84%EC%BB%B4%ED%8F%AC%EB%84%8C%ED%8A%B8-%EC%9D%B4%ED%95%B4%ED%95%98%EA%B8%B0/>

#### Dark Mode in NextJS with TailwindCSS

- next-themes를 이용한 다크모드 관리 : <https://dev.to/topboyasante/setting-up-dark-mode-in-next-js-with-tailwindcss-1bk1>
- TailwindCSS와 NextJS에서 다크모드 : <https://daniloleal.co/my-world/thinking/darkmode-next-tailwind>
- 웹에서 다크모드 지원하기 : <https://fe-developers.kakaoent.com/2021/211118-dark-mode/>
- 관련 패키지 설치

  ```zsh
  $pnpm i next-themes react-icons
  ```

- tailwind.config.ts 파일 수정

  ```zsh
  const config: Config = {
  ~~~~ 중략 ~~~~
  theme: {
    extend: {
      darkMode: 'class' // 👈 이 부분 추가
  ~~~~ 후략 ~~~~
  }
  ```

- 팁 1. VSCode 보랴, 화면 확인하러 크롬 들어가는게 불편할 때

  ```zsh
  VSCode 보기 - 명령 팔레트(shift+cmd+a / 윈도우는 ctrl+shift+p)에서
  > Simple Browser: Show 선택 - URL 입력(http://localhost:3000 등)
  👏 간단한 브라우저 창을 드래그하여 수정사항 미리보기 가능
  ```

- 팁 2. TailwindCSS 기본 컬러셋 말고 내가 고른 컬러 팔레트 만들고 싶을 때
  Material Design V2 Color Palettes : <https://m2.material.io/design/color/the-color-system.html#tools-for-picking-colors>

### Day 42 (03/31)

#### Deployment

- Vercel Client 설치

  ```zsh
  $ pnpm i -g vercel
  또는
  $ brew install vercel-cli
  ```

- Vercel Build

  ```zsh
  $cd ~/{ProjectDirectory} && vercel build
  ```

- Vercel Deploy

  ```zsh
  $cd ~/{ProjectDirectory} && vercel deploy
  💡 이미 Deploy 된 것을 최신 Build 버전으로 선택하려면 deploy 대신 아래 사용
  $vercel --prod
  ```

- Connect Github Repository

  - 프로젝트 파일 스테이징 영역에 추가

    ```zsh
    $cd ~/{ProjectDirectory} && git add .
    ```

  - 프로젝트 파일 커밋

    ```zsh
    gitmoji가 없을 경우 설치
    $ brew install gitmoji
    $ gitmoji -c
    > 🚀 Deploy Stuff 선택
    커밋 제목, 타이틀 입력 후 commit!
    ```

  - Github Repository 연결

    ```zsh
    프로젝트 생성 시 원격 Repository 연결이 없었다면 추가
    $ git remote add origin <원격 저장소 URL>
    원격 Repository에 변경사항 반영
    $ git push origin main
    ```

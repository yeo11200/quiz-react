# React Web / App


## react npm 설명
```npm
npm install --save react-router-dom // 웹 전용 router
npm install --save react-router // 웹 / 앱 전용 rotuer(둘다 가능)
npm install --save react-native-router // 앱 전용 router
```
1. 4버전 이상은 browserHistory를 지원안함
2. npm install --save react-router-dom@3 으로 추가 후 작업



## react 에서 전역으로 데이터를 사용하기

1. 리액트에서는 2가지로 state 관리를 한다
 - swr : (npm i swr)
 - redux : (npm i redux)


2. redux vs swr
 - redux :
    - 전역으로 state를 관리하기 위해서 나타낸 library
    - 학습이 많이 필요한 상태
    - useSelector, useCallback 등을 사용해서 redux의 내용을 가지고 온다.
    - useSelector를 통해서 redux 데이터를 리턴
    ```npm
      npm install --save redux react-redux
      npm install --save redux-actions
    ```
 - swr : 
    - api의 재원을 조금 더 효율적으로 사용하기 위해서 사용하는 라이브러리, Next를 만든 곳에서 같이 만든 라이브러리 임으로 axios, fetch 등 API 통신을 할 경우 효율적으로 사용이 가능하다.
    - 초 단위, 혹은 end-point 단위, 포커스가 될 경우 API 통신이 가능하고, 해당 하는 경우 실시간으로 처리하는 것처럼 보일 수 있다. <br>
    return data 
    - mutate : end point 단위로 해당 할 경우 캐시 된 데이터를 변경이 가능하다.<br>
    option 
    - refreshWhenOffline : 브라우저가 offline일 경우 발생(revalidateOnReconnect : 네트워크 연결이 다시 시도되면 자동으로 재 검증)
    - shouldRetryOnError : 에러가 있을 경우 자동 적으로 실행
    - revalidateOnFocus : 창이 맞춰지면 자동으로 재 검증


### react typescript 도입

- typescript 란
   - javascript의 동적인 변수 할당을 정적으로 변경해주는 역할을 한다.
   - javascript는 runtime시 알수있었던 에러를 compile or 실행과정에서 알수있다.
   - babel 등 compile을 통해서 es5로 전환 가능

- typescript : type, interface의 차이
   - type : 변수에 대해서 직접 입력
   - interface : 객체로 만들 때 사용
   - 차이점 
      - type은 상속이 안된다. (요즘에는 되는 것으로 판단됨)
      - 요즘은 type은 중복선언이 안되고, interface는 중복 선언이 된다.
      
```npm
// react project typescript로 생성
create-react-app my-app --template typescript

// react project 생성후 typescript 적용
npm install --save typescript @types/node @types/react @types/react-dom @types/jest
```

```js
type GreetingsProps = {
  name: string;
  mark: string;
};

const App: React.FC<GreetingsProps> = () => {} // react type React.FC
```

### react seo(검색 엔진 최적화)
- seo 란
   - 다양한 검색 사이트에, 검색을 할 경우 상위 노출을 하게 되는 개념이다
   - 검색 결과를 만드는 3가지는 크롤링 -> 인덱싱 -> 랭킹 -> 상위 노출
   - 요약문, 설명문, 키워드, 로보트 순으로 적용이 된다.

```js
         // 요약문 : 홈페이지의 대한 요약을 하는 설정을 하는 곳
			<meta name="description" content={description} />
         // 키워드 : 해당하는 검색 키워드를 선별해준다.
			<meta name="keywords" content={keywords} />
         // 타이틀 : 해당하는 웹페이지의 타이틀
         <meta name="title" content={keywords} />
			<title>{title}</title>

         // open graph 태그 링크에 대한, 제목, 설명, 이미지
			<meta property="og:title" content={title} />
			<meta property="og:image" content={favicon} />
			<meta property="og:site_name" content="" />
			<meta property="og:description" content={description} />
```

### eslint, prettier 사용하는 이유
- eslint
   - 잘못된 문법이나, 팀 스타일에 대한 문법을 확인
   - 가이드 라인을 제시
      - 유지보수가 쉬움
      - 가독성이 편함
      - 버그를 최소화 할 수 있다.

- prettier
   - 팀원들과 코드에 대한 품질을 맞추기 위해서 사용

```npm

npm install -g eslint

eslint --init


eslint-config-prettier
eslint-plugin-prettier
```

### styled-components 
- styled-components란
   - React에서 style에 관한 Component를 만들기 위한 라이브러리
   - style를 지정해 놓으면 자동으로 css 사용
   - class name에 대한 오류가 없다
   - 정적인 css가 아니라, props에 따라 동적으로 사용이 가능하다.
   - styled에 대한 확장도 쉽게할 수 있다.
```js
// The Button from the last section without the interpolations
const Button = styled.button`
  color: palevioletred;
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
`;
// A new component based on Button, but with some override styles
const TomatoButton = styled(Button)`
  color: tomato;
  border-color: tomato;
`;
```
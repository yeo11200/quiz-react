import './App.css';
import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import ReactHelmet from './component/_include/helmet';
import NotLogin from './component/state/NotLogin';
import Login from './component/state/Login';

function App(props) {
  const { loginData } = useSelector(state => ({ loginData: state.loginRedux }));
  // 함수가 선언될 경우 postMessage로 해당하는 메세지리를 보낸다.
  const sendPostMessageToRN = async () => {
		const value = {
			type: 'OnClick',
			state: 'web -> rn',
		};
		await (window['ReactNativeWebView'] || window).postMessage(JSON.stringify(value));
	};
	/**
	* message 이벤트 RN에서 webView로 데이터를 넘길 때 사용하는 이벤트
	* ios = window, android = document 차이가 있다.
	*/
  const isUIWebView = () => {
	// 정규식을 통해서 os 버전을 확인한다.
	return navigator.userAgent.toLowerCase().match(/\(ip.*applewebkit(?!.*(version|crios))/);
};
	useEffect(() => {
		sendPostMessageToRN();
		if (window['ReactNativeWebView'] || window) {
			const receiver = isUIWebView() ? window : document;
			/** android */
			receiver.addEventListener('message', webLog);
		} else {
			// 모바일이 아니라면 모바일 아님을 alert로 띄웁니다.
			alert('error');
		}
	}, []);

	useEffect(
		prevState => {
			console.log(prevState);

			if (loginData.loginYn === false) {
				props.history.push('/login');
			} else {
				// ip 로그쌓을 API
				props.history.push('/quiz');
			}
		},
		[loginData],
	);

	const webLog = e => {
		const event = JSON.parse(e.data);
		alert(event.data);
	};

	return (
		<div className="App">
			<ReactHelmet>Quiz-Js</ReactHelmet>
			{ loginData.loginYn === false ? <NotLogin {...props} /> : <Login {...props} />}
		</div>
	);
}

export default App;

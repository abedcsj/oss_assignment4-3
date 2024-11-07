import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  // 사용자 입력을 저장할 상태 추가
  const [input, setInput] = useState('');
  const [submittedText, setSubmittedText] = useState('');

  // 입력이 변경될 때마다 호출되는 함수
  const handleInputChange = (event) => {
    setInput(event.target.value);
  };

  // 폼 제출 시 호출되는 함수
  const handleSubmit = (event) => {
    event.preventDefault(); // 폼이 새로고침되지 않도록 방지
    setSubmittedText(input); // 입력 내용을 저장
    setInput(''); // 입력 필드 초기화
  };

  return (
      <div className="App">
        <header className="App-header">
          {/* 로고 */}
          <img src={logo} className="App-logo" alt="logo" />

          {/* 사용자 입력 폼 */}
          <form onSubmit={handleSubmit}>
            <input
                type="text"
                value={input}
                onChange={handleInputChange}
                placeholder="Enter some text"
            />
            <button type="submit">Submit</button>
          </form>

          {/* 제출된 텍스트 표시 */}
          {submittedText && <p>You entered: {submittedText}</p>} {/* 조건부 렌더링 */}
        </header>
      </div>
  );
}

export default App;

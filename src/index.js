import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals


// npm run 으로 시작 스타트, 빌드 ... 등등
// node_modules 없을때는 npm install 그다음 npm run start
// Json server 사용하므로, 다른 터미널을 열어서...
// npx json-server --watch data/db.json --port 8000

// Json server Endpoints
// /blogs       GET  Fetch all blogs
// /blogs/{id}  GET  fetch a single blog
// /blogs       POST Add a new blogs
// /blogs/{id}  POST Delete a blog
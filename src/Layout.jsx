// Layout.jsx
import React from 'react';
import Header from './Header'; // 헤더 컴포넌트 임포트

function Layout({ children }) {
  return (
    <>
      <Header /> {/* 헤더를 포함 */}
      <div className="content">
        {children} {/* 자식 컴포넌트들을 렌더링 */}
      </div>    </>
  );
}

export default Layout;

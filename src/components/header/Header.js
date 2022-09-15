import React from 'react';
import './Header.css';

export default function Header() {
    return (
        <div className="header">
            <img className='logo' src="logo.png"/>
            <text className='worldcup' >이상형 월드컵</text>
            <text className='make'>이상형 월드컵 만들기</text>
            <text className='login'>Login</text>
        </div>
    );
}
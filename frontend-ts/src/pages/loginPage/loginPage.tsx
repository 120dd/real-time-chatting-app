import React from 'react';
import styles from './loginPage.module.scss';

const LoginPage = ( ) => {
    return (
        <div className={styles.loginPage}>
            <div className={styles.logos}>
                <div className={styles.logo}>✉️</div>
                <span className={styles.logoName}>Realtime<br/>chatting</span>
            </div>
            {/*로그인박스*/}
            <div className={styles.loginBox}>
                <span className={styles.boxTitle}>Log in your account</span>
                <form>
                    <label className={styles.labels}>Email address</label>
                    <input type="text" placeholder='Email address'/>
                    <label className={styles.labels}>Pass word</label>
                    <input type="text" placeholder='Password'/>
                    <button>Log in</button>
                </form>
                <span className={styles.signUp}>new id register? <a href="##">Sign up</a></span>
            </div>
            <a href="##" className={styles.forgetPassword}>Forget your password?</a>
            <footer>
                <span>Tech: React/Redux/Express</span>
                <a href="https://github.com/120dd">개발자 깃허브 바로가기</a>
            </footer>
        </div>
    )
};

export default LoginPage;
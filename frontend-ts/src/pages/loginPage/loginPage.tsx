import React, {useRef} from 'react';
import styles from './loginPage.module.scss';
import {useAppDispatch} from "../../redux/hooks/hooks";
import {getLogin} from "../../redux/modules/user";
import {Cookies} from "react-cookie";

const LoginPage = () => {

    const dispatch = useAppDispatch();
    const cookies = new Cookies();

    const idRef = useRef<HTMLInputElement>(null);
    const pwRef = useRef<HTMLInputElement>(null);

    const onLogin = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!idRef.current || !pwRef.current) {
            console.log("입력값을 확인하세요");
            return
        }
        console.log({id: idRef.current.value, pw: pwRef.current.value});
        try {
            await dispatch(getLogin({id: idRef.current.value, pw: pwRef.current.value}));
            console.log(cookies)
        }catch (err){
            console.error(err);
        }
    }

    return (
        <div className={styles.loginPage}>
            <div className={styles.logos}>
                <div className={styles.logo}>✉️</div>
                <span className={styles.logoName}>Realtime<br/>chatting</span>
            </div>
            {/*로그인박스*/}
            <div className={styles.loginBox}>
                <span className={styles.boxTitle}>Log in your account</span>
                <form onSubmit={onLogin}>
                    <label className={styles.labels}>Email address</label>
                    <input ref={idRef} type="text" placeholder='Email address'/>
                    <label className={styles.labels}>Pass word</label>
                    <input ref={pwRef} type="text" placeholder='Password'/>
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
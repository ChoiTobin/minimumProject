
import React, { useState, useEffect } from 'react';
import styled from "styled-components";
import Layout from '../components/Layout';
import './action.css'
import useInput from '../hooks/useInput';
import { useDispatch, useSelector } from "react-redux";
import { __insertMember, __userIdCheck } from '../redux/modules/members';
import { __userLogin } from "../redux/modules/members";




const Login = () => {
 //현홍님 시작
    const { isInsert, error, isIdCheck } = useSelector(state => state.members)
    const dispatch = useDispatch();
    const [join, setJoin, joinHandle] = useInput({
        id: "",
        confirmId: "",
        pw: "",
        confirmPw: "",
        name: "",
        checkedBox: false
    });

    //회원가입
    const signUp = () => {
        if (join.id.trim() === "" || join.pw.trim() === "" || join.confirmPw.trim() === "" || join.name.trim() === "") return;

        if (isIdCheck.success === false || join.id !== join.confirmId) {
            alert("ID를 중복확인해 주세요.");
            return;
        }

        dispatch(__insertMember(join));
    }

    //회원가입 res
    useEffect(() => {
        if (isInsert !== undefined) {
            if (isInsert.success) {
                alert(`${join.name}님 회원가입 성공`);
                setJoin({
                    id: "",
                    confirmId: "",
                    pw: "",
                    confirmPw: "",
                    name: "",
                    checkedBox: false
                });
            } else {
                //회원가입 실패
            }
        }
    }, [dispatch, isInsert])
    
    
    //토빈님 시작



const check = useSelector((state) => state);
const dispatch = useDispatch();

//useEffect로 get요청을 해서 url 데이터를 가지고 오고
//
const [email, setEmail] = useState("");
const [password, setPassword] = useState("");

//키보드 입력시 값들은 잘들어온다.


//왔다갔다



const onEmailHandler = (event) => {
    const emailCurrent = event.target.value;
    setEmail(emailCurrent);
    
};
const onPasswordHandler = (event) => {
    const passwordCurrent = event.target.value;
    setPassword(passwordCurrent);
};

const onLoginHandler = () => {
    dispatch(__userLogin({ 
        userid:email,  
        pw:password 
        
    }));
};

const onKeyUp = (e) => {
    if (e.key === "Enter") {
    onLoginHandler();
    }
};

    return (
        <Layout>
            <StLoginWrap>
                <h6 className="mb-0 pb-3"><span>Log In </span><span>Sign Up</span></h6>
                <input className="checkbox" checked={join.checkedBox} onClick={() => { setJoin({ ...join, checkedBox: !join.checkedBox }) }} type="checkbox" id="reg-log" name="reg-log" />
                <label htmlFor="reg-log"></label>
                <div className='card-3d-wrap'>
                    <div className="card-3d-wrapper">
                        <div className="card-front">
                            <div className="center-wrap">
                                <div className="section text-center">
                                    <h4 className="mb-4 pb-3">Log In</h4>
                                    <div className="form-group">
                                        <input type="email" name="id" value={email} onChange={onEmailHandler} className="form-style" placeholder="Your Email" id="logemail" autocomplete="off" />
                                        <i className="input-icon uil uil-at"></i>
                                    </div>
                                    <div className="form-group mt-2">
                                        <input type="password" name="ow" value={password} onChange={onPasswordHandler} onKeyUp={onKeyUp} className="form-style" placeholder="Your Password" id="logpass" autocomplete="off" />
                                        <i className="input-icon uil uil-lock-alt"></i>
                                    </div>
                                    <StSubmitBtn onClick={onLoginHandler} href="#" className="btn mt-4">Login</StSubmitBtn>
                                </div>
                            </div>
                        </div>
                        <div className="card-back">
                            <div className="center-wrap">
                                <div className="section text-center">
                                    <h4 className="mb-4 pb-3">Sign Up</h4>
                                    <div className="form-group">
                                        <StIdCheckWrap>
                                            <input type="text" name="id" value={join.id || ""} onChange={joinHandle} className="form-style" placeholder="Your ID" autocomplete="off" />
                                            <StSubmitBtn onClick={() => {
                                                //유저 아이디 체크
                                                if (join.id !== "") {
                                                    setJoin({ ...join, confirmId: join.id });
                                                    dispatch(__userIdCheck(join.id))
                                                };
                                            }} className="btn">confirm</StSubmitBtn>
                                        </StIdCheckWrap>
                                        <Valitext textColor={"#f96854"}>{join.id === "" ? 'ID를 입력해주세요.' : ""}</Valitext>
                                        <Valitext textColor={"#22B14C"}>{isIdCheck !== undefined && isIdCheck.success ? '사용 가능한 ID입니다.' : ""}</Valitext>
                                        <Valitext textColor={"#f96854"}>{isIdCheck !== undefined && !isIdCheck.success ? '중복된 ID입니다.' : ""}</Valitext>
                                    </div>
                                    <div className="form-group mt-2">
                                        <input type="password" name="pw" value={join.pw || ""} onChange={joinHandle} className="form-style" placeholder="Your Password" autocomplete="off" />
                                        <Valitext textColor={"#f96854"}>{join.pw === "" ? '비밀번호를 입력해주세요.' : ""}</Valitext>
                                    </div>
                                    <div className="form-group mt-2">
                                        <input type="password" name="confirmPw" value={join.confirmPw || ""} onChange={joinHandle} className="form-style" placeholder="Confirm Password" autocomplete="off" />
                                        <Valitext textColor={"#f96854"}>{join.confirmPw !== join.pw ? '비밀번호가 일치 하지 않습니다.' : ""}</Valitext>
                                        <Valitext textColor={"#22B14C"}>{join.confirmPw !== "" && join.confirmPw === join.pw ? '비밀번호가 일치 합니다.' : ""}</Valitext>
                                    </div>
                                    <div className="form-group mt-2">
                                        <input type="text" name="name" value={join.name || ""} onChange={joinHandle} className="form-style" placeholder="Your Name" autocomplete="off" />
                                        <Valitext textColor={"#f96854"}>{join.name === "" ? '이름을 입력해주세요.' : ""}</Valitext>
                                    </div>
                                    <StSubmitBtn onClick={signUp} className="btn mt-4">Join</StSubmitBtn>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </StLoginWrap>
        </Layout>
    );
};

export default Login;

const StLoginWrap = styled.div`    
    display:flex;
    flex-direction : column;
    justify-content: center;
    align-items :center;
    height : 51rem;
    @media screen and (max-width: 900px) {
        height : 38rem;
    }
`
const StSubmitBtn = styled.a`
    color: #c4c3ca;
    background-color : #1f2029;
    &:hover {
        background-color : #c4c3ca;
        color: #1f2029;
        box-shadow: 0 8px 24px 0 rgba(255,235,167,.2);
    }
`
const Valitext = styled.div`
width: 100%;
margin-left: 10px;
padding: 0px;
font-size: 0.7rem;
color: ${props => props.textColor};
`

const StIdCheckWrap = styled.div`
    display : flex;
    flex-direction : row;
    align-items :center;
    gap : 10px;
`
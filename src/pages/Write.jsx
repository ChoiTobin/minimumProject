import React from 'react';
import styled from "styled-components";
import Layout from '../components/Layout';

const Write = () => {



    
    return (
        <Layout>
            <StWritePagelWrap>
                <StWritePage>작성페이지</StWritePage>
                <StWriteContainer>
                    <StWriteWrap>
                        <StWriteTitle>
                            <div className="form-floating mb-3">
                                <input type="text" className="form-control" id="floatingInput" placeholder="game title" />
                                <label for="floatingInput">게임 이름</label>
                            </div>
                        </StWriteTitle>
                        <StWriteBody />
                        <StWriteGameId >
                            <div className="form-floating mb-3">
                                <input type="text" className="form-control text-center" id="floatingInput" placeholder="game id" />
                                <label className='text-center' for="floatingInput">게임 아이디</label>
                            </div>
                            <div className="form-floating mb-3">
                                <input type="number" className="form-control text-center" id="floatingInput" placeholder="person number" />
                                <label className='text-center' for="floatingInput">모집 인원수</label>
                            </div>
                        </StWriteGameId>
                    </StWriteWrap>
                    <StBtnWrap>
                        <StWriteBtn className="btn mt-4">이전으로</StWriteBtn>
                        <StWriteBtn className="btn mt-4">참가 신청</StWriteBtn>
                    </StBtnWrap>
                </StWriteContainer>
            </StWritePagelWrap>
        </Layout>
    );
};

export default Write;


const StWritePagelWrap = styled.div`
width: 69%;
    display:flex;
    flex-direction : column;
    justify-content: center;
    align-items :center;
    max-height : 100%;
    height : 800px;
    gap : 10px;
    @media screen and (max-width: 900px) {
        height : 38rem;
    }
`

const StWritePage = styled.div`
    text-align : center;
    color: white;
    width : 80%;
    height : 40px;
    font-weight : 1000;
    font-size : 28px;
    background-color: #2a2b38;
    border-radius : 1rem;
    box-shadow: 0 19px 38px rgba(0,0,0,0.30), 0 15px 12px rgba(0,0,0,0.22);
`

const StWriteContainer = styled.div`
    text-align : center;
    color: #c4c3ca;
    display:flex;
    flex-direction : column;
    align-items :center;
    width : 80%;
    background-color: #2a2b38;
    border-radius : 1rem;
    box-shadow: 0 19px 38px rgba(0,0,0,0.30), 0 15px 12px rgba(0,0,0,0.22);
`

const StWriteWrap = styled.div`
    display:flex;
    flex-direction : column;
    justify-content : space-around;
    gap : 10px;
    width : 80%;
    
`

const StWriteTitle = styled.div`
    width : 100%;
    margin : 10px auto;
    background-color: #2a2b38;
`

const StWriteBody = styled.textarea`
    min-height : 200px;
    width : 100%;
    margin : 10px auto;
    background-color : white;
    color: #1f2029;
    border-radius : 5px;
`

const StWriteGameId = styled.div`
    width : 30%;
    height : 100%;
    margin : 0 auto;
    background-color: #2a2b38;
`
const StBtnWrap = styled.div`
    display : flex;
    flex-direction : row;
    gap : 10px;
`

const StWriteBtn = styled.a`
    margin-bottom : 10px;
    color: white;
    background-color : #1f2029;
    &:hover {
        color: white;
        color: #1f2029;
        box-shadow: 0 8px 24px 0 rgba(255,235,167,.2);
    }
`

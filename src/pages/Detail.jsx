import React from 'react';
import styled from "styled-components";
import Layout from '../components/Layout';

const Detail = () => {
    return (
        <Layout>
            <StDetailPagelWrap>
                <StDetailPage>상세페이지</StDetailPage>
                <StDetailContainer>
                    <StDetailWrap>
                        <StDetailTitle>게임이름</StDetailTitle>
                        <StDetailBody>모집 내용</StDetailBody>
                        <StDetailPerson>모집인원 1/?
                            <div>작성자 게임아이디</div>
                        </StDetailPerson>
                        <StDetailGameId >
                            <div className="form-floating mb-3">
                                <input type="text" className="form-control text-center" id="floatingInput" placeholder="game id" />
                                <label className='text-center' for="floatingInput">게임 아이디</label>
                            </div>
                        </StDetailGameId>
                    </StDetailWrap>
                    <StBtnWrap>
                        <StDetailBtn className="btn mt-4">이전으로</StDetailBtn>
                        <StDetailBtn className="btn mt-4">참가 신청</StDetailBtn>
                    </StBtnWrap>
                </StDetailContainer>
            </StDetailPagelWrap>
        </Layout>
    );
};

export default Detail;

const StDetailPagelWrap = styled.div`
width:69%;
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

const StDetailPage = styled.div`
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

const StDetailContainer = styled.div`
    text-align : center;
    color: white;
    display:flex;
    flex-direction : column;
    align-items :center;
    width : 80%;
    background-color: #2a2b38;
    border-radius : 1rem;
    box-shadow: 0 19px 38px rgba(0,0,0,0.30), 0 15px 12px rgba(0,0,0,0.22);
`

const StDetailWrap = styled.div`
    display:flex;
    flex-direction : column;
    justify-content : space-around;
    gap : 10px;
    width : 80%;
    
`

const StDetailTitle = styled.div`
    width : 100%;
    height : 30px;
    margin-top : 10px;
        border-radius : 5px;
        background-color : white;
        color: #1f2029;
        
`

const StDetailBody = styled.div`
    width : 100%;
    min-height : 200px;
    background-color : white;
        color: #1f2029;
        border-radius : 5px;
`

const StDetailPerson = styled.div`
    width : 100%;
    height : 30px;
    min-height : 200px;
    background-color : white;
        color: #1f2029;
        border-radius : 5px;;
`

const StDetailGameId = styled.div`
    width : 30%;
    height : 50px;
    margin : 0 auto;
    background-color : white;
        color: #1f2029;
        border-radius : 5px;
`
const StBtnWrap = styled.div`
    display : flex;
    flex-direction : row;
    gap : 10px;
`

const StDetailBtn = styled.a`
    margin-bottom : 10px;
    color: white;
    background-color : #1f2029;
    &:hover {
        color: white;
        color: #1f2029;
        box-shadow: 0 8px 24px 0 rgba(255,235,167,.2);
    }
`
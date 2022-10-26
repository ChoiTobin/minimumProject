import React, { useRef } from 'react';
import styled from "styled-components";
import Layout from '../components/Layout';
import useInput from '../hooks/useInput';
import { useDispatch, useSelector } from "react-redux";
import { __getMyPost } from '../redux/modules/contents'

const Detail = () => {
    const dispatch = useDispatch();
    const [content, setContent, contentHandle] = useInput({
        gamename: "",
        content: "",
        inGameNickname: "",
        numberOfPeople: 2
    });

    const test = () => {
        dispatch(__getMyPost());
    }

    return (
        <Layout>
            <StDetailPagelWrap>
                <StDetailPage>상세페이지</StDetailPage>
                <StDetailContainer>
                    <StDetailWrap>
                        <StCard className="card" >
                            <div className='cardWrap'>
                                <img src={process.env.PUBLIC_URL + "/img/noImg.jpg"} className="card-img-top" alt="game image" />
                            </div>
                            <div className="card-body cardWrap d-grid gap-2">
                                <input type="text" name='gamename' value={"모집 제목"} className="form-control text-center" id="floatingInput" placeholder="game name" readOnly />
                                <StDetailBody name='content' value={"모집인원 1/?\n모집내용"} placeholder="game contents" readOnly />
                                <input type="text" name='inGameNickname' value={''} onChange={contentHandle} className="form-control text-center" id="floatingInput" placeholder="game id" />
                            </div>
                        </StCard>
                    </StDetailWrap>
                    <StBtnWrap>
                        <StDetailBtn className="btn mt-4">이전으로</StDetailBtn>
                        <StDetailBtn onClick={test} className="btn mt-4">참가 신청</StDetailBtn>
                    </StBtnWrap>
                </StDetailContainer>
            </StDetailPagelWrap>
        </Layout >
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
        background-color: white;
        color: #1f2029;
        box-shadow: 0 8px 24px 0 rgba(255,235,167,.2);
    }
`

const StCard = styled.div`
    display : flex;
    flex-direction : row;
    align-items :center;
    width:100%;
    height : 25rem;
    margin :10px;
    color: black;
    .cardWrap{
        width : 50%;
    }
    .cardWrap img{
        height : 220px;
    }
`

const StDetailBody = styled.textarea`
    min-height : 200px;
    width : 100%;
    margin : 10px auto;
    background-color : white;
    color: #1f2029;
    border-radius : 5px;
    resize: none;
`
import React, { useEffect, useState } from 'react';
import styled from "styled-components";
import Layout from '../components/Layout';
import useInput from '../hooks/useInput';
import { useDispatch, useSelector } from "react-redux";
import { __getMyPost, __deleteContent, getMyPost } from '../redux/modules/contents'



const MyList = () => {
    const dispatch = useDispatch();
    const { myPost, myRecruit, isLoading } = useSelector(state => state.contents);
    const [swap, setSwap] = useState(true);

    useEffect(() => {
        dispatch(__getMyPost());
        //dispatch(getMyPost());
    }, [])

    const contentSW = () => {
        setSwap(!swap);
    }

    return (
        <Layout>
            <StListPagelWrap>
                <StListPage onClick={contentSW}>{swap ? "나의 글" : "참여한 글"}</StListPage>
                <StListContainer>
                    {console.log(myPost)}
                    {isLoading === undefined ? "" :
                        isLoading ? "" :
                            swap ?
                                myPost.map((val, i) => {
                                    return (
                                        <StCard className="card" key={i}>
                                            <div className='cardWrap'>
                                                <img src={val.imgUrl} className="card-img-top" alt="game image" />
                                                <StWriteBtn onClick={() => { dispatch(__deleteContent(val.gamePostId)); }} className="btn mt-4">글 삭제</StWriteBtn>
                                            </div>
                                            <div className="card-body cardWrap">
                                                <p className="card-text">{val.countTime}</p>
                                                <h5 className="card-title">{val.gameName}</h5>
                                                <p className="card-text">{val.content}</p>
                                                <p className="card-text">모집 인원 {val.numberOdRecruited}/{val.numberOfPeople}</p>
                                            </div>
                                        </StCard>
                                    )
                                })
                                :
                                myRecruit.map((val, i) => {
                                    return (
                                        <StCard className="card" key={i}>
                                            <div className='cardWrap'>
                                                <img src={val.imgUrl} className="card-img-top" alt="game image" />
                                                {/* <StWriteBtn onClick={() => { dispatch(__getDetailOne(val.gamePostId));}} className="btn mt-4">자세히 보기</StWriteBtn> */}
                                            </div>
                                            <div className="card-body cardWrap">
                                                <p className="card-text">{val.countTime}</p>
                                                <h5 className="card-title">{val.gameName}</h5>
                                                <p className="card-text">{val.content}</p>
                                                <p className="card-text">모집 인원 {val.numberOdRecruited}/{val.numberOfPeople}</p>
                                            </div>
                                        </StCard>
                                    )
                                })
                    }
                </StListContainer>
            </StListPagelWrap>
        </Layout>
    );
};

export default MyList;


const StListPagelWrap = styled.div`
width:69%;
    display:flex;
    flex-direction : column;
    justify-content: center;
    align-items :center;
    gap : 10px;
    min-height : 800px;
    @media screen and (max-width: 900px) {
        height : 38rem;
    }
 
`
const StListPage = styled.div`
    text-align : center;
    color: white;
    width : 100%;
    height : 50px;
    line-height : 1.6;
    font-weight : 1000;
    font-size : 28px;
    cursor: pointer;
    background-color: #2a2b38;
    border-radius : 1rem;
    box-shadow: 0 9px 19px rgba(0,0,0,0.15), 0 7px 6px rgba(0,0,0,0.11);
    &:hover {
        background-color: #F7F7F7;
        color: #1f2029;
        box-shadow: 0 8px 24px 0 rgba(255,235,167,.2);
    }
`
const StListContainer = styled.div`
    display:flex;
    flex-direction : row;
    flex-wrap : wrap;
    text-align : center;        
    width : 100%;
    min-height : 400px;
    background-color: #2a2b38;
    border-radius : 1rem;
    box-shadow: 0 19px 38px rgba(0,0,0,0.15), 0 15px 12px rgba(0,0,0,0.11);
`
const StCard = styled.div`
    display : flex;
    flex-direction : row;
    align-items :center;
    flex-wrap: wrap;
    width:26rem;
    height : 13rem;
    margin :10px;
    color: black;
    .cardWrap{
        width : 50%;
    }
    .cardWrap img{
        height : 110px;
    }
`
const StWriteBtn = styled.a`
    margin-bottom : 10px;
    color: white;
    background-color : #1f2029;
    &:hover {
        background-color: #F7F7F7;
        color: #1f2029;
        box-shadow: 0 8px 24px 0 rgba(255,235,167,.2);
    }
`
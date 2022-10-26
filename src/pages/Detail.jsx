import React, { useRef,useEffect,useState } from 'react';
import styled from "styled-components";
import Layout from '../components/Layout';
import useInput from '../hooks/useInput';
import {__getDetailOne, __delete} from "../redux/modules/contents"
import { useDispatch, useSelector } from "react-redux";
import { Link } from 'react-router-dom';
import {___Join} from "../redux/modules/contents"



const Detail = () => {
    const getDetail = useSelector((state) => state.contents)
    const getDetailDone = useSelector((state) => state)
    const dispatch = useDispatch();

    const [content, setContent, contentHandle] = useInput({
        gamename: "",
        content: "",
        inGameNickname: "",
        numberOfPeople: 2
    });


    useEffect(() => {
        // dispatch(__getListDone())
        dispatch(
            __getDetailOne()  
        );
    }, [dispatch]);
   


    const joinHandler = () =>{

       dispatch(
        ___Join({
            Nickname:content.inGameNickname,
            postId:getDetail.getDetailOne.gamePostId,
        }    
)
        //gamePostid도 던져줘야함.  
        );
    }

    
    const deleteHandler = () =>{
        
        dispatch(
            __delete({
            postId:getDetail.deleteJoin.gamePostId
        }
            )
        );

    }


    


    return (
        <Layout>
            <StDetailPagelWrap>
                <StDetailPage>상세페이지</StDetailPage>
                <StDetailContainer>
                    <StDetailWrap>
                        <StCard className="card" >
                            <div className='cardWrap'>
                                <img src={getDetail.contents.imgUrl} className="card-img-top" alt="game image" />
                            </div>
                            <div className="card-body cardWrap d-grid gap-2">
                                <input type="text" name='gamename' value={`${getDetail.contents.gameName}`} className="form-control text-center" id="floatingInput" placeholder="game name" readOnly />
                                <p>{`현재인원:${getDetail.contents.numberOfPeople}`}</p>
                                <StDetailBody name='content' value={getDetail.contents.content} placeholder="game contents" readOnly />
                                <input type="text" name='inGameNickname' value={content.inGameNickname || ""} onChange={contentHandle} className="form-control text-center" id="floatingInput" placeholder="game id" />
                            </div>
                        </StCard>
                    </StDetailWrap>
                    <StBtnWrap>
                        <StDetailBtn className="btn mt-4" ><StyledLink to={"/list"}>이전으로</StyledLink></StDetailBtn>
                        
                        <StDetailBtn className="btn mt-4" onClick={()=>{joinHandler() }}>참가 신청</StDetailBtn>
                        
                        <StDetailBtn className="btn mt-4" onClick={()=>{deleteHandler() }}>참가 취소</StDetailBtn>
                            
                        
                        
                        {/* 조건에 따라서 함수도 취소로 */}
                        
                    
                    </StBtnWrap>
                </StDetailContainer>
            </StDetailPagelWrap>
        </Layout>
    );
};

export default Detail;
const StyledLink = styled(Link)`
	box-sizing: border-box;
	display: block;
	padding: 4px 8px;
	margin: 0 auto;
    color:white;
    text-decoration:none;
	text-align: center;
`;

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
import React, { useState, useEffect } from 'react';
import styled from "styled-components";
import Layout from '../components/Layout';
import './action.css'
import { useDispatch, useSelector } from "react-redux";
import {__getList} from '../redux/modules/contents'
import {__getListDone} from '../redux/modules/contents'
import  {Link,useParams}  from 'react-router-dom';
import useInput from '../hooks/useInput';
import { __getSearch } from '../redux/modules/contents';
import{__getDetailOne} from '../redux/modules/contents';
//params로 보내고 url로 보낸다는뜻 =>그리고 엔터로친거를 보내고 페이로드로 그리고 데이터 보낸것과 비교해서
//filter써서 보여주기?
/*
axios.get(`${process.env.REACT_APP_API_URL}/api/showpost/search?gameName=${payload}`)
.then((res)=>{
return thunkAPI.fulfillWithValue(res.data)
})
*/

const List = () => {
    //const listDone = useSelector((state) => state.contents.contentsDone.data)
    const list2 = useSelector((state) => state.contents.contents)
    const listDone = useSelector((state) => state.contents.contentsDone)
    


    const dispatch = useDispatch();

    const [gameName,setSerch,loginHandle] = useInput({
        gameName: "",
    });
    let [done, setDone] = useState(true)

    const onLoginHandler = () => {
        dispatch(__getSearch(gameName));
    };
    //여긴 아직안함

    useEffect(() => {

        dispatch(
            __getList()  
        );
    }, [dispatch]);

    useEffect(() => {
        dispatch(__getListDone());
    }, [dispatch]);
    



    function handlerDispatch (id){
        dispatch(__getDetailOne(id));
    }




    return (
        <Layout>
            
            <StListPagelWrap> 
            <StListPage onClick={()=>{setDone(!done)}}>{done ? '모집중':'모집완료'} </StListPage>
                <StSearch>
                    <div className="input-group mb-3">
                        <input name="gameName" onChange={loginHandle} value={gameName.gameName || ""}type="text" className="form-control" placeholder="Recipient's username" aria-label="Recipient's username" aria-describedby="button-addon2" />
                        <button  onClick={onLoginHandler} className="btn btn-outline-secondary" type="button" id="button-addon2">search</button>
                    </div>
                </StSearch>
                <StListContainer>
                { 
                //filter((item) => item.recruitStatus == true)
            done?
                list2.map((item,a) =>
                <StCard className="card" key={a}>
                    <div className='cardWrap'>
                        <img src={item.imgUrl} className="card-img-top" alt="..." />
                        <StWriteBtn className="btn mt-4"><StyledLink 
                        onClick={()=>{handlerDispatch(item.gamePostId)}}
                        to={`/detail/${item.gamePostId}`}>참가 신청</StyledLink></StWriteBtn>
                    </div>
                    <div className="card-body cardWrap">
                        <h5 className="card-title">{item.gameName}</h5>
                        <p className="card-text">{item.content}</p>
                        <p className="card-text">작성시간</p>
                        <p className="card-text">{item.countTime}</p>
                        <p className="card-text">모집 인원 {item.numberOfPeople}/8</p>
                    </div>
                </StCard>
                )
                :
                listDone.map((item,v) =>
                <StCard className="card" key={v}>
                    <div className='cardWrap'>
                        <img src={item.imgUrl} className="card-img-top" alt="..." />
                        <StWriteBtn className="btn mt-4">
                                <StyledLink 
                                onClick={()=>{handlerDispatch(item.gamePostId)}} 
                                to={`/detail/${item.gamePostId}`}>참가 신청</StyledLink>
                        </StWriteBtn>
                    </div>
                    <div className="card-body cardWrap">
                        <h5 className="card-title">{item.gameName}</h5>
                        <p className="card-text">{item.content}</p>
                        <p className="card-text">작성시간</p>
                        <p className="card-text">{item.postTime}</p>
                        <p className="card-text">모집 인원 {item.numberOfPeople}?</p>
                    </div>
                </StCard>
                )
        }
    
                </StListContainer>  
            </StListPagelWrap>
        </Layout>
    );
};

export default List;
const StyledLink = styled(Link)`
	box-sizing: border-box;
	display: block;
	padding: 4px 8px;
	margin: 0 auto;
    color:white;
    text-decoration:none;
	text-align: center;
`;


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
    &:hover{
        color: #2a2b38;
        background-color:white;
    }
`
const StSearch = styled.div`
    width : 100%;
    height : 38px;
    border-radius : 8px;
    background-color: #2a2b38;
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
        color: white;
        color: #1f2029;
        box-shadow: 0 8px 24px 0 rgba(255,235,167,.2);
    }
`
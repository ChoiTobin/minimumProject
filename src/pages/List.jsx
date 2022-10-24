import React from 'react';
import styled from "styled-components";
import Layout from '../components/Layout';

const List = () => {
    return (
        /*
        오늘 끝낼것. 
        API잘읽어보기   
        */
        <Layout>
            <StListPagelWrap>
                <StListPage>모집중</StListPage>
                <StSearch>
                    <div class="input-group mb-3">
                        <input type="text" class="form-control" placeholder="Recipient's username" aria-label="Recipient's username" aria-describedby="button-addon2" />
                        <button class="btn btn-outline-secondary" type="button" id="button-addon2">search</button>
                    </div>
                </StSearch>

                <StListContainer>
                    <StCard className="card" >
                        <div className='cardWrap'>
                            <img src="https://www.leagueoflegends.co.kr/upload/EditorImages/20141111115353_5XNsfyM6.png" class="card-img-top" alt="..." />
                            <StWriteBtn className="btn mt-4">참가 신청</StWriteBtn>
                        </div>
                        <div className="card-body cardWrap">
                            <h5 className="card-title">리그오브 레전드</h5>
                            <p className="card-text">브론즈 파티 구해요</p>
                            <p className="card-text">모집 인원 1/?</p>
                        </div>
                    </StCard>
                    <StCard className="card" >
                        <div className='cardWrap'>
                            <img src="http://cdn.bizwatch.co.kr/news/photo/2018/04/12/00ed4bd7af9121117d2b3a70ac47f6e7122206.jpg" class="card-img-top" alt="..." />
                            <StWriteBtn className="btn mt-4">참가 신청</StWriteBtn>
                        </div>
                        <div className="card-body cardWrap">
                            <h5 className="card-title">피파 할사람</h5>
                            <p className="card-text">피파 할사람 구해요</p>
                            <p className="card-text">모집 인원 1/?</p>
                        </div>
                    </StCard>
                    <StCard className="card" >
                        <div className='cardWrap'>
                            <img src="https://file.mk.co.kr/meet/neds/2015/04/image_readtop_2015_379113_14295840311884987.jpg" class="card-img-top" alt="..." />
                            <StWriteBtn className="btn mt-4">참가 신청</StWriteBtn>
                        </div>
                        <div className="card-body cardWrap">
                            <h5 className="card-title">메이플 할사람</h5>
                            <p className="card-text">메이플 할사람 구해요</p>
                            <p className="card-text">모집 인원 1/?</p>
                        </div>
                    </StCard>
                    <StCard className="card" >
                        <div className='cardWrap'>
                            <img src="https://file.mk.co.kr/meet/neds/2015/04/image_readtop_2015_379113_14295840311884987.jpg" class="card-img-top" alt="..." />
                            <StWriteBtn className="btn mt-4">참가 신청</StWriteBtn>
                        </div>
                        <div className="card-body cardWrap">
                            <h5 className="card-title">메이플 할사람</h5>
                            <p className="card-text">메이플 할사람 구해요</p>
                            <p className="card-text">모집 인원 1/?</p>
                        </div>
                    </StCard>
                    <StCard className="card" >
                        <div className='cardWrap'>
                            <img src="https://img.hankyung.com/photo/202106/61241_201145_2219.jpg" class="card-img-top" alt="..." />
                            <StWriteBtn className="btn mt-4">참가 신청</StWriteBtn>
                        </div>
                        <div className="card-body cardWrap">
                            <h5 className="card-title">로아 할사람</h5>
                            <p className="card-text">로아 할사람 구해요</p>
                            <p className="card-text">모집 인원 1/?</p>
                        </div>
                    </StCard>
                </StListContainer>
            </StListPagelWrap>

        </Layout>
    );
};

export default List;

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
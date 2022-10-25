import React, { useRef, useState } from 'react';
import styled from "styled-components";
import Layout from '../components/Layout';
import useInput from '../hooks/useInput';
import { useDispatch, useSelector } from "react-redux";
import { __insertContent } from '../redux/modules/contents'

const Write = () => {

    const [content, setContent, contentHandle] = useInput({
        gamename: "",
        content: "",
        inGameNickname: "",
        numberOfPeople: 2
    });
    const dispatch = useDispatch();

    const [imageUrl, setImageUrl] = useState(null);
    const [imgFile, setImgFile] = useState("")
    const imgRef = useRef();

    const onChangeImage = () => {
        const reader = new FileReader();

        const file = imgRef.current.files[0];
        reader.readAsDataURL(file);
        reader.onloadend = () => {
            setImageUrl(reader.result);
            setImgFile(file)
        };
    }

    const onSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData();

        formData.append("file", imgFile);
        formData.append("gamename", content.gamename);
        formData.append("content", content.content);
        formData.append("inGameNickname", content.inGameNickname);
        formData.append("numberOfPeople", Number(content.numberOfPeople));

        dispatch(__insertContent(formData));
    }

    return (
        <Layout>
            <StWritePagelWrap>
                <StWritePage>작성페이지</StWritePage>
                <StWriteForm method='post' id='add' encType='multipart/form-data'>
                    <StWriteWrap>

                        <StCard className="card" >
                            <div className='cardWrap'>
                                <label htmlFor="imgFile">
                                    <img src={imageUrl ? imageUrl : process.env.PUBLIC_URL + "/img/noImg.jpg"} className="card-img-top" alt="game image" />
                                    <input
                                        style={{ display: 'none' }}
                                        accept="image/*"
                                        id="imgFile"
                                        name="imgFile"
                                        type="file"
                                        multiple
                                        onChange={onChangeImage}
                                        ref={imgRef}
                                    />
                                    <StWriteBtn type='button' htmlFor='inputImg' className="btn mt-4">이미지 업로드</StWriteBtn>
                                </label>
                            </div>
                            <div className="card-body cardWrap d-grid gap-2">
                                <input type="text" name='gamename' value={content.gamename || ''} onChange={contentHandle} className="form-control text-center" id="floatingInput" placeholder="game name" />
                                <StWriteBody name='content' value={content.content || ''} onChange={contentHandle} placeholder="game contents" />
                                <input type="text" name='inGameNickname' value={content.inGameNickname || ''} onChange={contentHandle} className="form-control text-center" id="floatingInput" placeholder="game id" />
                                <input type="number" name='numberOfPeople' value={content.numberOfPeople < 2 ? 2 : content.numberOfPeople || 2} onChange={contentHandle} className="form-control text-center" id="floatingInput" placeholder="number of people" min="2" />
                            </div>
                        </StCard>
                    </StWriteWrap>
                    <StBtnWrap>
                        <StWriteBtn type='button' className="btn mt-4">이전으로</StWriteBtn>
                        <StWriteBtn type='submit' form='add' onClick={onSubmit} className="btn mt-4">작성하기</StWriteBtn>
                    </StBtnWrap>
                </StWriteForm>
            </StWritePagelWrap>
        </Layout>
    );
};

export default Write;


const StWritePagelWrap = styled.div`
width: 66%;
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

const StWriteForm = styled.div`
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

const StWriteWrap = styled.form`
    display:flex;
    flex-direction : column;
    justify-content : space-around;
    gap : 10px;
    width : 80%;
    
`

const StWriteBody = styled.textarea`
    min-height : 200px;
    width : 100%;
    margin : 10px auto;
    background-color : white;
    color: #1f2029;
    border-radius : 5px;
    resize: none;
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
        color:  #1f2029;
        background-color: white;
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
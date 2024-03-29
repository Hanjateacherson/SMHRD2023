/* 회원 관련 페이지 기능 구현 
- 기능 : 회원가입, 중복체크, 로그인, 회원탈퇴, 로그아웃, 회원검색 
*/

const express = require("express");
const router = express.Router();

// 회원가입 시, ID 중복체크
router.post('/checkId',(req,res)=>{
    console.log('ID중복체크 요청...', req.body);

    //DB연동 추가

    //응답할 데이터 -> 중복: dup | 고유값: uniq
    res.json({result:'dup'});
});

// 회원가입 라우터
router.post('/join',(req, res)=>{
    console.log('회원가입 요청...', req.body);
    
    //DB연동코드추가

    res.json({msg:'success'});
});

// 로그인 라우터

// 로그아웃 라우터
//  - session을 server에 저장한 경우에는 해당 라우터로 와야함 (기존)
//  - session을 front에 저장한 경우에는 로그아웃을 react에서 설정 가능

// 회원정보 (비밀번호) 변경

// 회원정보 (이름, 이메일) 수정

// 회원 탈퇴 라우터

// 회원 검색 라우터

module.exports = router;

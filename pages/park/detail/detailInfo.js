"use client";

import { Icon24px } from "@/styles/park/commons/commonsCSS";
import { Backdrop, Buttons_Container, Genre, MovieContainer, MovieDetail_Container, MovieDiscription, MovieGrade, MovieInfo_Container, MoviePoster, MovieTitle, PlayBtn, ReleaseYear, RunTime, VerticalLine, WishBtn } from "@/styles/park/detailPage/detailInfoCSS";

const DetailInfo = () => {
    return (
        <>
            <Backdrop src="/images/samples/moviePoster.jpg" />
            <MovieDetail_Container>
                <MovieContainer>
                    <MovieTitle>불량공주 모모코</MovieTitle>

                    <MovieInfo_Container>
                        <MovieGrade src="/images/movieGrade/grade_15.png" />
                        <VerticalLine>|</VerticalLine>
                        <ReleaseYear>2005</ReleaseYear>
                        <VerticalLine>|</VerticalLine>
                        <RunTime>103분</RunTime>
                        <VerticalLine>|</VerticalLine>
                        <Genre>코믹</Genre>
                    </MovieInfo_Container>

                    <Buttons_Container>
                        <PlayBtn><Icon24px src="images/icons/play.png" /> 재생</PlayBtn>
                        <WishBtn><Icon24px src="images/icons/add_white.png" /> 보고싶어요</WishBtn>
                    </Buttons_Container>

                    <MovieDiscription>
                        짝퉁과 싸구려에 열광하는 시모츠마 주민들에게, 치렁치렁한 드레스를 입고 다니는 모모코는 별나도 한참 별난 소녀다. 하지만, 무슨 상관! 친구도, 애인도, 가족도, 다 필요 없다! 를 외치는 그녀에게 중요한 건, 오직 드레스뿐이다. 드레스만 입을 수 있다면, 모모코의 인생은 달콤하고 우아한 행복 찾기의 연속이다. 하지만, 각종 거짓말과 조작으로 드레스 구입 비용을 충당하던 모모코에게 위기가 닥친다. 짝퉁 명품을 팔아오던 유일한 물주인 아빠가 실직(?)하게 된 것. 이제 직접 자금을 조달해야만 하는 모모코는 집안의 유일한 재산인 짝퉁 베르사치의 판매책으로 나선다. 광고를 보고 첫 번째 손님이 방문한다. 그런데 이게 왠일! 프로급 침뱉기, 난데없는 박치기, 특공복 패션이라니! 게다가 스쿠터 폭주족인 그녀가 친구하자고 덤빈다! 우아함이 신조인 모모코에게 그녀는 영 달갑지 않는 불청객이다. 게다가 이치코는 폭주족 보스에게 고마움을 표시하기 위해 특공복에 자수를 놓겠다며, 자수의 달인을 찾겠다는 엉뚱한 결심을 한다. 얼떨결에 한패가 된 모모코와 이치코는 자금 마련차 빠찡코에 들르고, 이치코는 첫사랑에 빠져버린다. 드레스에 목숨 거는 모모코! 과연 그녀의 드레스는 끝까지 우아~하게 남아있을 수 있을까...
                    </MovieDiscription>
                </MovieContainer>

                <MoviePoster src="images/samples/moviePoster.jpg" />
            </MovieDetail_Container>
        </>
    )
}

export default DetailInfo;
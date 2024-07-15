
import { observer } from 'mobx-react-lite';
import Trailer from './trailer/page';
import WeekTop from './weekTop/page';
import NewContent from './newContent/page';
import ThemaList from './themaList/page';



const Main = observer(() => {
    return (
        <>  
            {/* 트레일러 */}
            <Trailer/>

            {/* 이 주의 인기 순위 TOP5 */}
            <WeekTop/>

            {/* 새로 올라온 콘텐츠 */}
            <NewContent/>

            {/* 공포 , 로맨스 , 범죄/스릴러 , 액션 , 애니메이션의 테마 리스트 */}
            <ThemaList/>
        </>
    )
})

export default Main;
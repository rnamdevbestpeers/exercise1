import React, {useEffect} from 'react'
import back from '../Assets/back.jpg'
import national_champ from '../Assets/national_champ.png';
import knight from '../Assets/knight.png';
import shark from '../Assets/shark.png'
import './overlay.css';
import { useSelector,useDispatch } from 'react-redux';
import { CreateCallAction }  from '../Redux/Action/CreateCallAction';
import CreateCallReducer from '../Redux/Reducer/CreateCallReducer'
const OverLay = () => {
    // const matchdata = useSelector((state) => state.CreateCallReducer)

    const dispatch = useDispatch()
    useEffect(()=>{
        dispatch(CreateCallAction())
    },[])
    const matchdata = useSelector((state) => state.CreateCallReducer.Data)

    // console.log("@@@@@@@@@@@@--->",matchdata.away_team.name)
    // const match = useSelector((state) => state.CreateCallReducer)
    return (
        <div>
            <div style={{position:'relative'}}>
                <img src={back} style={{width:`100%`,height:`100%`}}></img>
                <div className="nation-champion">
                    <img src={national_champ} style={{width:`50%`,height:`50%`,marginTop:98}}></img>
                    
                </div>
                <div className="text-national">
                    National Basketball Championship
                </div>
                <div className="score-card">
                    <div className="team1">
                        
                        <img src={knight} style={{width:`50px`,height:'100%'}}></img>
                        <div className="title1">
                            {matchdata && matchdata.home_team.name}
                        </div>
                    </div> <b className="scoreN">{matchdata && matchdata.home_team.score}/{matchdata && matchdata.away_team.score}</b>
                    <div className="team2">
                        <img src={shark} style={{width:`50px`,height:'100%'}}></img>
                        <div className="title2">
                        {matchdata && matchdata.away_team.name}
                        </div>
                    </div>
                </div>
                <div className="time-quarter">
                    SECOND QUARTER  14:37
                </div>
                <div className="united">
                    UNITED CENTER
                </div>
                <div className="transparent-div1">

                </div>
                <div className="transparent-div2">

                </div>
                <div className="transparent-div3">

                </div>
                <div className="transparent-div4">

                </div>
                <div className="transparent-div5">

                </div>
            </div>
            
        </div>
    )
}

export default OverLay

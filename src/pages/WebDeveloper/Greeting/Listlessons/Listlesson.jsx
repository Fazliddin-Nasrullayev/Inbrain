import React, { useState } from "react";
import numberlesson from '../../../../assets/images/numberlesson.png';
import Hi from '../../../../assets/images/Hi.png';
import aboutwebdev from '../../../../assets/images/aboutwebdev.png';
import employment from '../../../../assets/images/employment.png';
import Howtraining from '../../../../assets/images/Howtraining.png';
import Escortteam from '../../../../assets/images/Escortteam.png';
import learningprogramm from '../../../../assets/images/learningprogramm.png';
import petprojects from '../../../../assets/images/petprojects.png';
import realprojects from '../../../../assets/images/realprojects.png';
import timeforlearn from '../../../../assets/images/timeforlearn.png';
import {AiOutlineRight} from 'react-icons/ai'
import Footer from "../../../../components/Footer/Footer";
import Header from "../../../../components/Header/Header";
import { useTranslation } from "react-i18next";
import './Listlesson.scss';



const Listlessons = () => {
const { t } = useTranslation();
const listtitle = t('Listlesson.1');


    const [ numberS, setNumberS ] = useState(0)


    const ClickedFunction = (int) => {
        setNumberS(int)
        console.log("object +", int);

        for (let i = 1; i <= 9; i++) {

            const line = document.getElementById(`l_${i}`).classList.remove('listpage_list_item_line_1')
            const circcle = document.getElementById(`c_${i}`).classList.remove('listpage_list_item_circle_1')
            
             console.log(line, circcle);
        }

        for (let i = 1; i <= int; i++) {

            const line = document.getElementById(`l_${i}`).classList.add('listpage_list_item_line_1')
            const circcle = document.getElementById(`c_${i}`).classList.add('listpage_list_item_circle_1')
            
             console.log(line, circcle);
        }

    }





    return(
            <div className="listpage">
                <div className="listcontainer"> 
                    <Header title={listtitle} />
                    <div className="list_main" >
                        <div className="circlepart">
                            <div className="thislesson" >{t('Listlesson.2')} <span className="abouthtml">{t('Listlesson.3')}</span></div>
                            <div className="circle">
                                {/* <Circlepart/> */}
                                <ul className="listpage_list">
                                    <li className="listpage_list_item"><span className="listpage_list_item_line" id='l_1'></span> <span  className={`listpage_list_item_circle ${numberS === 1 ? 'dp' : 1 < numberS ? 'dp' : null }  `} onClick={() => ClickedFunction(1)}  id="c_1"></span> <h5 className="listpage_list_item_text">{numberS === 1 ? '1' : 1 < numberS ? '1' : null }</h5></li>
                                    <li className="listpage_list_item"><span className="listpage_list_item_line" id='l_2' ></span> <span className={`listpage_list_item_circle ${numberS === 2 ? 'dp' : 2 < numberS ? 'dp' : null }  `} onClick={() => ClickedFunction(2)} id="c_2" ></span> <h5 className="listpage_list_item_text">{numberS === 2 ? '2' : 2 < numberS ? '2' : null }</h5></li>
                                    <li className="listpage_list_item"><span className="listpage_list_item_line" id='l_3' ></span> <span className={`listpage_list_item_circle ${numberS === 3 ? 'dp' : 3 < numberS ? 'dp' : null }  `} onClick={() => ClickedFunction(3)} id="c_3" ></span> <h5 className="listpage_list_item_text">{numberS === 3 ? '3' : 3 < numberS ? '3' : null }</h5></li>
                                    <li className="listpage_list_item"><span className="listpage_list_item_line" id='l_4' ></span> <span className={`listpage_list_item_circle ${numberS === 4 ? 'dp' : 4 < numberS ? 'dp' : null }  `} onClick={() => ClickedFunction(4)} id="c_4" ></span> <h5 className="listpage_list_item_text">{numberS === 4 ? '4' : 4 < numberS ? '4' : null }</h5></li>
                                    <li className="listpage_list_item"><span className="listpage_list_item_line" id='l_5' ></span> <span className={`listpage_list_item_circle ${numberS === 5 ? 'dp' : 5 < numberS ? 'dp' : null }  `} onClick={() => ClickedFunction(5)} id="c_5" ></span> <h5 className="listpage_list_item_text">{numberS === 5 ? '5' : 5 < numberS ? '5' : null }</h5></li>
                                    <li className="listpage_list_item"><span className="listpage_list_item_line" id='l_6' ></span> <span className={`listpage_list_item_circle ${numberS === 6 ? 'dp' : 6 < numberS ? 'dp' : null }  `} onClick={() => ClickedFunction(6)} id="c_6" ></span> <h5 className="listpage_list_item_text">{numberS === 6 ? '6' : 6 < numberS ? '6' : null }</h5></li>
                                    <li className="listpage_list_item"><span className="listpage_list_item_line" id='l_7' ></span> <span className={`listpage_list_item_circle ${numberS === 7 ? 'dp' : 7 < numberS ? 'dp' : null }  `} onClick={() => ClickedFunction(7)} id="c_7" ></span> <h5 className="listpage_list_item_text">{numberS === 7 ? '7' : 7 < numberS ? '7' : null }</h5></li>
                                    <li className="listpage_list_item"><span className="listpage_list_item_line" id='l_8' ></span> <span className={`listpage_list_item_circle ${numberS === 8 ? 'dp' : 8 < numberS ? 'dp' : null }  `} onClick={() => ClickedFunction(8)} id="c_8" ></span> <h5 className="listpage_list_item_text">{numberS === 8 ? '8' : 8 < numberS ? '8' : null }</h5></li>
                                    <li className="listpage_list_item"><span className="listpage_list_item_line" id='l_9' ></span> <span className={`listpage_list_item_circle ${numberS === 9 ? 'dp' : 9 < numberS ? 'dp' : null }  `} onClick={() => ClickedFunction(9)} id="c_9" ></span> <h5 className="listpage_list_item_text">{numberS === 9 ? '9' : 9 < numberS ? '9' : null }</h5></li>
                                </ul>
                            </div>
                        </div>
                         <div className="training">
                            <div style={{width: '50%'}}>
                                <div className="trainhead">{t('Listlesson.4')}</div>
                                <div className="description">
                                    {t("Listlesson.5")} <br /> {t("Listlesson.6")} <br />{" "}
                                    {t("Listlesson.7")} <br />
                                    {t("Listlesson.8")} <br /> {t("Listlesson.9")} <br />
                                    {t("Listlesson.10")}
                                </div>
                                <button className="continuelearnbtn">{t('Listlesson.11')} <AiOutlineRight/></button>
                            </div>
                            <div style={{width: '50%'}}>
                                <img alt="images" className="numberlesson" src={numberlesson} />
                            </div>
                        </div>
                        <div className="yourcourses">
                            <div className="your_courses">{t('Listlesson.12')}</div>
                            <div className="courscard">
                                
                                    <div className={`yourcoursescard ${numberS === 1 ? 'dp' : 1 < numberS ? 'dp' : null }`} onClick={() => ClickedFunction(1)} id='1'>
                                        <img alt="images" className="itemimg" src={Hi} />
                                        <p className="itemtitle" >{t('Listlesson.13')}</p>
                                    </div>
                                    <div className={`yourcoursescard ${numberS === 2 ? 'dp' : 2 < numberS ? 'dp' : null }`} onClick={() => ClickedFunction(2)} id='2'>
                                        <img alt="images" className="itemimg" src={aboutwebdev} />
                                        <p className="itemtitle" >{t('Listlesson.14')}<br/> {t('Listlesson.15')} </p>
                                    </div>
                                    <div className={`yourcoursescard ${numberS === 3 ? 'dp' : 3 < numberS ? 'dp' : null }`} onClick={() => ClickedFunction(3)} id='3'>
                                        <img alt="images" className="itemimg" src={employment} />
                                        <p className="itemtitle" >{t('Listlesson.16')}<br/> {t('Listlesson.17')}</p>
                                    </div>
                                    <div className={`yourcoursescard ${numberS === 4 ? 'dp' : 4 < numberS ? 'dp' : null }`} onClick={() => ClickedFunction(4)} id='4'>
                                        <img alt="images" className="itemimg" src={Howtraining} />
                                        <p className="itemtitle" > {t('Listlesson.18')} <br/> {t('Listlesson.19')}</p>
                                    </div>
                                    <div className={`yourcoursescard ${numberS === 5 ? 'dp' : 5 < numberS ? 'dp' : null }`} onClick={() => ClickedFunction(5)} id='5'>
                                        <img alt="images" className="itemimg" src={Escortteam} />
                                        <p className="itemtitle" >{t('Listlesson.20')} <br/>{t('Listlesson.21')}</p>
                                    </div>
                                    <div className={`yourcoursescard ${numberS === 6 ? 'dp' : 6 < numberS ? 'dp' : null }`} onClick={() => ClickedFunction(6)} id='6'>
                                        <img alt="images" className="itemimg" src={learningprogramm} />
                                        <p className="itemtitle" >{t('Listlesson.22')} <br/> {t('Listlesson.23')}</p>
                                    </div>
                                    <div className={`yourcoursescard ${numberS === 7 ? 'dp' : 7 < numberS ? 'dp' : null }`} onClick={() => ClickedFunction(7)} id='7'>
                                        <img alt="images" className="itemimg" src={petprojects} />
                                        <p className="itemtitle" >{t('Listlesson.24')} <br/> {t('Listlesson.25')}</p>
                                    </div>
                                    <div className={`yourcoursescard ${numberS === 8 ? 'dp' : 8 < numberS ? 'dp' : null }`} onClick={() => ClickedFunction(8)} id='8'>
                                        <img alt="images" className="itemimg" src={realprojects} />
                                        <p className="itemtitle" >{t('Listlesson.26')} <br/> {t('Listlesson.27')}</p>
                                    </div>
                                    <div className={`yourcoursescard ${numberS === 9 ? 'dp' : 9 < numberS ? 'dp' : null }`} onClick={() => ClickedFunction(9)} id='9'>
                                        <img alt="images" className="itemimg" src={timeforlearn} />
                                        <p className="itemtitle" >{t('Listlesson.28')} <br/>{t('Listlesson.29')} <br/>{t('Listlesson.30')}</p>
                                    </div>
                                </div>
                        </div> 
                    </div>
                    <div className="footlist">
                        <Footer/>
                    </div>
                </div> 
            </div>

        

    )
}




export default Listlessons;

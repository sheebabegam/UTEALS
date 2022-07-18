import React from 'react';
import Vector from './design_img/Vector.png';
import Ellipse from './design_img/Ellipse.png';
import Polygon from './design_img/Polygon.png';
import Group_76 from './design_img/Group_76.png';
import Vector_no_color from './design_img/Vector_no_color.png';
import man from './design_img/man.png';
import header1 from './design_img/header1.png';
import fridge from './design_img/fridge.png';
import Rectangle from './design_img/Rectangle.png';
import star from './design_img/star.png';
import rsz_11rsz_google_play from './design_img/rsz_11rsz_google_play.png';
import rsz_app_store from './design_img/rsz_app_store.png';
import 'bootstrap/dist/css/bootstrap.min.css';



var data = require('./data.json')

function Design() {

    return (
        <div>
            <nav>
                <div className='top-nav'>
                    <div className='uteals'>
                        <a> UTEALS </a>
                    </div>

                    <div className='top-nav-mid'>
                        <div className='home'>
                            <a> Home </a>
                        </div>

                        <div className='home1'>
                            <a> Buy/Compare </a>
                        </div>

                        <div className='home2'>
                            <a> Property Setup </a>
                        </div>

                        <div className='home3'>
                            <a> Provider Comparison </a>
                        </div>
                    </div>


                    <div className='top-nav-right'>
                        <div className='bell'>
                            <a><img src={Vector} /></a>
                        </div>

                        {/* <div className='dot_bell'>
                            <a><img src={Ellipse} /></a>
                        </div> */}

                        <div className='man'>
                            <a><img src={man} /></a>
                        </div>

                        <div className='down_arrow'>
                            <a><img src={Polygon} /></a>
                        </div>
                    </div>

                </div>
            </nav>
            <div className='next-to-nav-head'>
                <div className='next-to-nav container'>

                    <div className='next-image'>
                        <a>BUY/COMPARE</a>

                    </div>
                    <div className='next-image1'>
                        <a><img src={header1}></img></a>
                    </div>



                </div>
            </div>


            <div className='mid-section'>
                <div className='clothes-dryer'>
                    <a>Clothes Dryers</a>
                </div>

                <div className='fridge-div'>
                    <div className='fridge-text-star'>

                        <div className='fridge'>
                            <img src={fridge}></img>
                        </div>

                        <div className='daikin'>
                            DAIKIN
                        </div>

                        <div className='stars'>
                            <img src={star}></img>
                            <img src={star}></img>
                            <img src={star}></img>
                            <img src={star}></img>
                            <img src={star}></img>
                        </div>

                    </div>

                    <div className='add-to-cart-button'>
                        <button className='add-to-cart-b'>ADD TO PROPERTY</button>
                    </div>
                </div>

                {data.map((data) => {
                    return (

                        <div className='details'>

                            <div className="text-center">
                                <table className="table table-borderless table-centralised">
                                    <tbody>
                                        <tr>
                                            <th>Usage</th>
                                            <td>{data.Usage}</td>
                                        </tr>
                                        <tr>
                                            <th>Running Cost</th>
                                            <td>{data.Running_Cost}</td>
                                        </tr>
                                        <tr>
                                            <th>Model No</th>
                                            <td>{data.Model_No}</td>
                                        </tr>
                                        <tr>
                                            <th>Size</th>
                                            <td>{data.Size}</td>
                                        </tr>
                                        <tr>
                                            <th>Star Rating</th>
                                            <td>{data.Star_Rating}</td>
                                        </tr>
                                        <tr>
                                            <th>Price</th>
                                            <td>{data.Price}</td>
                                        </tr>
                                        <tr>
                                            <th>Submit ID</th>
                                            <td>{data.Submit_ID}</td>
                                        </tr>
                                        <tr>
                                            <th>cTotalCoolRating</th>
                                            <td>{data.cTotalCoolRating}</td>
                                        </tr>
                                        <tr>
                                            <th>hTotalHeatRating</th>
                                            <td>{data.hTotalHeatRating}</td>
                                        </tr>
                                        <tr>
                                            <th>Product Class</th>
                                            <td>{data.Product_Class}</td>
                                        </tr>
                                        <tr>
                                            <th>Width</th>
                                            <td>{data.Width}</td>
                                        </tr>
                                        <tr>
                                            <th>Type</th>
                                            <td>{data.Type}</td>
                                        </tr>
                                    </tbody>

                                    <div className='parallel_section'>
                                        <tbody>
                                            <tr>
                                                <th>Phase</th>
                                                <td>{data.Phase}</td>
                                            </tr>
                                            <tr>
                                                <th>eeRtestAvg</th>
                                                <td>{data.eeRtestAvg}</td>
                                            </tr>
                                            <tr>
                                                <th>coPtestAvg</th>
                                                <td>{data.coPtestAvg}</td>
                                            </tr>
                                            <tr>
                                                <th>pnoc</th>
                                                <td>{data.pnoc}</td>
                                            </tr>
                                            <tr>
                                                <th>annualOutput</th>
                                                <td>{data.annualOutput}</td>
                                            </tr>
                                            <tr>
                                                <th>2010Cool</th>
                                                <td>{data.Cool}</td>
                                            </tr>
                                            <tr>
                                                <th>2010Heat</th>
                                                <td>{data.Heat}</td>
                                            </tr>
                                            <tr>
                                                <th>appStandard</th>
                                                <td>{data.appStandard}</td>
                                            </tr>
                                            <tr>
                                                <th>mepsComp</th>
                                                <td>{data.mepsComp}</td>
                                            </tr>
                                            <tr>
                                                <th>cDehumid Rated</th>
                                                <td>{data.cDehumid_Rated}</td>
                                            </tr>
                                            <tr>
                                                <th>Config 1</th>
                                                <td>{data.Config_1}</td>
                                            </tr>
                                            <tr>
                                                <th>Config 2</th>
                                                <td>{data.Config_2}</td>
                                            </tr>
                                        </tbody>
                                    </div>
                                </table>
                                <div className='div-view_more'>
                                    <div className='view_more'>
                                        View More
                                    </div>

                                    <div className='view_more_icon'>
                                        <img src={Group_76}></img>
                                    </div>

                                </div>

                            </div>

                        </div>
                    );
                })}
            </div>

            <div className='third_div'>

                <div className='next_best_usage-header'>
                    <div className='right-rectangle'>
                        <img src={Rectangle} />
                    </div>

                    <div className='next_best_usage'>
                        Next Best Usage
                    </div>

                    <div className='left-rectangle'>
                        <img src={Rectangle} />
                    </div>
                </div>

                <div className='all-rating'>
                    <div className='third_div1'>
                        <div className='lg_smart_tv'>
                            LG Smart 4K UHD TV 156 CM
                        </div>

                        <div className='rating'>
                            <img src={star}></img>
                            <img src={star}></img>
                            <img src={star}></img>
                            <img src={Vector_no_color}></img>
                            <img src={Vector_no_color}></img>
                        </div>

                        <div className='next-to-rating'>
                            $1,199  |  123 KJ
                        </div>
                    </div>

                    <div className='third_div2'>
                        <div className='lg_smart_tv'>
                            LG Smart 4K UHD TV 156 CM
                        </div>

                        <div className='rating'>
                            <img src={star}></img>
                            <img src={Vector_no_color}></img>
                            <img src={Vector_no_color}></img>
                            <img src={Vector_no_color}></img>
                            <img src={Vector_no_color}></img>
                        </div>

                        <div className='next-to-rating'>
                            $1,199  |  123 KJ
                        </div>
                    </div>

                    <div className='third_div2'>
                        <div className='lg_smart_tv'>
                            LG Smart 4K UHD TV 156 CM
                        </div>

                        <div className='rating'>
                            <img src={star}></img>
                            <img src={star}></img>
                            <img src={star}></img>
                            <img src={star}></img>
                            <img src={star}></img>
                        </div>

                        <div className='next-to-rating'>
                            $1,199  |  123 KJ
                        </div>
                    </div>

                    <div className='third_div2'>
                        <div className='lg_smart_tv'>
                            LG Smart 4K UHD TV 156 CM
                        </div>

                        <div className='rating'>
                            <img src={star}></img>
                            <img src={Vector_no_color}></img>
                            <img src={Vector_no_color}></img>
                            <img src={Vector_no_color}></img>
                            <img src={Vector_no_color}></img>
                        </div>

                        <div className='next-to-rating'>
                            $1,199  |  123 KJ
                        </div>
                    </div>

                    <div className='third_div2'>
                        <div className='lg_smart_tv'>
                            LG Smart 4K UHD TV 156 CM
                        </div>

                        <div className='rating'>
                            <img src={star}></img>
                            <img src={star}></img>
                            <img src={star}></img>
                            <img src={Vector_no_color}></img>
                            <img src={Vector_no_color}></img>
                        </div>

                        <div className='next-to-rating'>
                            $1,199  |  123 KJ
                        </div>
                    </div>
                </div>

            </div>

            <div className='fourth_div'>

                <div className='next_best_price-header'>
                    <div className='right-rectangle1'>
                        <img src={Rectangle} />
                    </div>

                    <div className='next_best_price'>
                        Next Best Price
                    </div>

                    <div className='left-rectangle1'>
                        <img src={Rectangle} />
                    </div>
                </div>

                <div className='all-rating1'>
                    <div className='fourth_div1'>
                        <div className='lg_smart_tv1'>
                            LG Smart 4K UHD TV 156 CM
                        </div>

                        <div className='rating1'>
                            <img src={star}></img>
                            <img src={star}></img>
                            <img src={star}></img>
                            <img src={Vector_no_color}></img>
                            <img src={Vector_no_color}></img>
                        </div>

                        <div className='next-to-rating1'>
                            $1,199  |  123 KJ
                        </div>
                    </div>

                    {/* -------------------------------- SECTION ------------------------------------------ */}

                    <div className='fourth_div2'>
                        <div className='lg_smart_tv1'>
                            LG Smart 4K UHD TV 156 CM
                        </div>

                        <div className='rating1'>
                            <img src={star}></img>
                            <img src={star}></img>
                            <img src={star}></img>
                            <img src={Vector_no_color}></img>
                            <img src={Vector_no_color}></img>
                        </div>

                        <div className='next-to-rating1'>
                            $1,199  |  123 KJ
                        </div>
                    </div>

                    <div className='fourth_div2'>
                        <div className='lg_smart_tv1'>
                            LG Smart 4K UHD TV 156 CM
                        </div>

                        <div className='rating1'>
                            <img src={star}></img>
                            <img src={star}></img>
                            <img src={star}></img>
                            <img src={star}></img>
                            <img src={star}></img>
                        </div>

                        <div className='next-to-rating1'>
                            $1,199  |  123 KJ
                        </div>
                    </div>

                    <div className='fourth_div2'>
                        <div className='lg_smart_tv1'>
                            LG Smart 4K UHD TV 156 CM
                        </div>

                        <div className='rating1'>
                            <img src={star}></img>
                            <img src={Vector_no_color}></img>
                            <img src={Vector_no_color}></img>
                            <img src={Vector_no_color}></img>
                            <img src={Vector_no_color}></img>
                        </div>

                        <div className='next-to-rating1'>
                            $1,199  |  123 KJ
                        </div>
                    </div>

                    <div className='fourth_div2'>
                        <div className='lg_smart_tv1'>
                            LG Smart 4K UHD TV 156 CM
                        </div>

                        <div className='rating1'>
                            <img src={star}></img>
                            <img src={Vector_no_color}></img>
                            <img src={Vector_no_color}></img>
                            <img src={Vector_no_color}></img>
                            <img src={Vector_no_color}></img>
                        </div>

                        <div className='next-to-rating1'>
                            $1,199  |  123 KJ
                        </div>
                    </div>
                </div>

            </div>


            <div className='footer_section'>

                <div className='footer1'>
                    <div className='footer-uteals'>
                        UTEALS
                    </div>

                    <div className='copyright'>
                        &copy; 2019 UTEALS. All rights reserved.
                    </div>

                    <div className='footer-images'>
                        <div className='google_play'>
                            <img src={rsz_11rsz_google_play}></img>
                        </div>

                        <div className='app_store'>
                            <img src={rsz_app_store}></img>
                        </div>

                    </div>
                </div>



                <div className='footer2'>

                    <div className='sitemap'>
                        Sitemap
                    </div>

                    <div className='buy'>
                        Buy/Compare
                    </div>

                    <div className='property'>
                        Property Setup
                    </div>

                    <div className='provider'>
                        Provider Comparison
                    </div>

                </div>

                <div className='footer3'>

                </div>


                <div className='footer3'>

                    <div className='help'>
                        Help
                    </div>

                    <div className='faq'>
                        FAQ
                    </div>

                    <div className='privacy'>
                        Privacy Policy
                    </div>

                    <div className='terms'>
                        Terms &amp; conditions
                    </div>

                    <div className='contact'>
                        Contact us
                    </div>

                </div>

            </div>





        </div>
    );
}

export default Design;
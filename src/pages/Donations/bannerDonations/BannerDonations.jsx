import React, { useState } from 'react';
import './bannerDonations.scss';
import YouTube from 'react-youtube';
import BtnKnowMore from '../../../components/donations/btnKnowMore/BtnKnowMore';
import { useDispatch, useSelector } from 'react-redux';
import { setLoadingStatusFalse } from '../../../redux/actions/actions';
import Loader from '../../../components/appLoader/Loader';

const BannerDonations = ({handleGoToDonations}) => {
    const { loading } = useSelector((store) => store.loading);
    const dispatch = useDispatch();

    const handleVideoReady = () => {
        dispatch(setLoadingStatusFalse());
    };

    const handleVideoEnd = (event) => {
        event.target.playVideo(); // Reproduce el video nuevamente al finalizar
    };

    const handleToNextComponent = () => {
        console.log('voy al next');
    };

    // const opts = {
    //     height: auto,
    //     width: auto,
    //     playerVars: {
    //       // https://developers.google.com/youtube/player_parameters
    //       autoplay: 1,
    //     },
    // }

    return (
        <>
            {loading ? (
                <>
                    <Loader />
                </>
            ) : (
                <>
                    <div className="banner-container">
                        <div className="container__video">
                        <iframe
                        width="100%"
                        height="100%"
                        src="https://www.youtube.com/embed/nzSJh5Ucgvc?autoplay=1"
                        title="YouTube video player"
                        frameborder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowfullscreen
                    ></iframe>
                        </div>
                        <div className="overlay"></div>
                        <div className="home-content">
                            <h1>¡Descúbre cómo puedes apoyar!</h1>
                            <div style={{marginTop:'2rem'}}>
                            <article className="donationsIndicator__next" onClick={handleGoToDonations}>
                                <BtnKnowMore onClick={handleGoToDonations} />
                            </article>
                          
                            </div>
          
                        </div>
                    </div>
                </>
            )}
        </>
    );
};

export default BannerDonations;

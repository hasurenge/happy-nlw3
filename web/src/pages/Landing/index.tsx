import React from "react";
import { FiArrowRight } from "react-icons/fi";

import Location from "./Location";

import {
    LandingPage,
    LandingWrapper,
    EnterButton,
    LandingLocation
} from "./styles";

import logoImg from "../../images/logo_img.svg";

export default (): JSX.Element => {
    return (
        <LandingPage>
            <LandingWrapper>
                <img src={logoImg} alt="Happy_Logo" />
                <main>
                    <h1>Leve felicidade para o mundo.</h1>
                    <p>Visite orfanatos e mude o dia de muitas crianças.</p>
                </main>

                <LandingLocation>
                    <Location city="Brasília" state="DF" />
                </LandingLocation>
                <EnterButton to="/map">
                    <FiArrowRight size={26} color="rgba(0, 0, 0, 0.6)" />
                </EnterButton>
            </LandingWrapper>
        </LandingPage>
    );
};

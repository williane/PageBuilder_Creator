import styled, { keyframes } from 'styled-components';
import ResourceImage from '../../assets/images/code.png';

const appear = keyframes`
  from{
        opacity: 0;
        transform: translateY(16px);
    }

    to{
        opacity: 1;
        transform: translateY(0);
    }
`;


export const PageLanding = styled.div`
background: linear-gradient(329.54deg, #29b6d1 0%, #00c7c7 100%);

text-align: center;
min-height: 100vh;

display: flex;
`;

export const Container = styled.div`
margin: auto;
width: min(90%, 112rem);
@media (min-width: 760px) {
    padding: 5rem 2rem;
    background: url(${ResourceImage}) no-repeat 80% / clamp(30rem, 54vw, 56rem); 
  }
`;

export const Header = styled.header`
padding-bottom: 2.4rem;
@media (min-width: 760px) {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
animation-name: ${appear};
animation-duration: 300ms;
animation-fill-mode: backwards;

animation-delay: 50ms;
`;

export const Image = styled.img`
animation-name: ${appear};
animation-duration: 300ms;
animation-fill-mode: backwards;

animation-delay: 100ms;
`;

export const Main = styled.main`
`;

export const Titulo = styled.h1`
height: 16vh;
font-size: clamp(2.4rem, 5vw, 6.4rem);
@media (min-width: 760px) {
    height: initial;
    text-align: initial;
    font-weight: bold;
    line-height: 1;
    margin: clamp(10%, 9vh, 12%) 0 4rem;
    width: min(400px, 80%);
  }
animation-name: ${appear};
animation-duration: 300ms;
animation-fill-mode: backwards;

animation-delay: 150ms;
`;

export const Section = styled.section`
    @media (min-width: 760px){
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
`;

export const Button = styled.a`
width: 8rem;
height: 8rem;
background: #ffd666;

border: none;
border-radius: 3rem;

display: flex;
align-items: center;
justify-content: center;

margin: auto;

transition: background 0.2s;
&:hover{
    background: #96feff;
}
@media (min-width: 760px) {
    margin: initial;
}
animation-name: ${appear};
animation-duration: 300ms;
animation-fill-mode: backwards;

animation-delay: 200ms;
`;

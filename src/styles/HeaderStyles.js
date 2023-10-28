import styled from 'styled-components';

export const HeaderContainer = styled.header`
    background-color: black;
    padding: 1rem 2rem;
    display: flex;
    justify-content: space-between;
    align-items: center;

    @media (max-width: 768px) {
        flex-direction: column;
        align-items: center;
    }
`;

export const Logo = styled.div`
    font-size: 1.5rem;
    color: #fff;
    font-weight: bold;
    margin-bottom: 1rem;

    @media (min-width: 769px) {
        margin-bottom: 0;
    }
`;

export const Nav = styled.nav`
    a {
        margin: 0 0.5rem;
        color: #fff;
        text-decoration: none;
        position: relative;
        padding: 0.5rem;
        
        &:hover {
            color: #FF4E00;

            &::after {
                content: '';
                position: absolute;
                bottom: -2px;
                left: 0;
                right: 0;
                height: 2px;
                background-color: #FF4E00;
                box-shadow: 0 0 5px #FF4E00;
            }
        }
    }
`;

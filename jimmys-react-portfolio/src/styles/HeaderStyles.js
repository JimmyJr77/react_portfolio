import styled from 'styled-components';

export const HeaderContainer = styled.header`
    background-color: #222;
    padding: 1rem 2rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

export const Logo = styled.div`
    font-size: 1.5rem;
    color: #fff;
    font-weight: bold;
`;

export const Nav = styled.nav`
    a {
        margin: 0 0.5rem;
        color: #fff;
        text-decoration: none;
        position: relative;
        padding: 0.5rem;
        
        &:hover {
            color: orange;

            &::after {
                content: '';
                position: absolute;
                bottom: -2px;
                left: 0;
                right: 0;
                height: 2px;
                background-color: orange;
                box-shadow: 0 0 5px orange;
            }
        }
    }
`;

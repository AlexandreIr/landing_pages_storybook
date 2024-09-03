import styled, { css } from "styled-components";

export const Wrapper = styled.div`
    ${({theme})=> css`
        background: ${theme.colors.secondaryBg};
        padding:3rem 5rem;
        display:grid;
        grid-template-columns: 2 1fr;
        font-size: 1.5rem;
        color: white;
        width: 100%;
        `}
`;
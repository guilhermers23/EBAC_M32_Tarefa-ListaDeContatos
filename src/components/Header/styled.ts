import styled from "styled-components";

export const Header = styled.header`
  align-items: center;
  background-color: var(--color-white);
  padding: 15px;
  width: 100%;
  border-bottom: 1px solid var(--color-gray2);
  box-shadow: rgba(0, 0, 0, 0.07) 0px 1px 1px, rgba(0, 0, 0, 0.07) 0px 2px 2px,
    rgba(0, 0, 0, 0.07) 0px 4px 4px, rgba(0, 0, 0, 0.07) 0px 8px 8px,
    rgba(0, 0, 0, 0.07) 0px 16px 16px;
`;

export const Logo = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5px;
`;

import styled from "styled-components";

const Ul = styled.ul`
  list-style: none;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  align-items: center;
  z-index: 9999;
  .mobile-link {
    display: none;
  }
  li {
    padding: 20px;
    cursor: pointer;
    font-family: "Helvetica", Helvetica, Arial, serif;
    border: none;
    color: white;
    padding: 20px 32px;
    text-align: center;
    font-size: 1.3rem;
    transition: 0.3s ease-in-out;
  }

  li:hover {
    background-color: white;
    color: var(--vivid-tangerine);
    text-shadow: 1px 1px var(--vivid-tangerine);
  }

  @media (max-width: 768px) {
    flex-flow: column nowrap;
    background-color: white;
    align-items: flex-start;
    justify-content: space-around;
    padding-left: 20px;
    position: fixed;
    overflow-y: none;
    transform: ${({ open }) => (open ? "translateX(0)" : "translateX(-100%)")};
    transition: transform 0.3s ease-in-out;
    top: 0;
    left: 0;
    height: 100vh;
    width: 60vw;
    min-width: 150px;
    padding-top: 3.5rem;
    padding-bottom: 100px;
    box-shadow: 2px 2px 2px 2px var(--vivid-tangerine);
    box-shadow: ${({ open }) =>
      open ? "2px 2px 2px 2px var(--vivid-tangerine);" : "inherit"};

    .mobile-link {
      display: flex;
    }
    .desktop-link {
      display: none;
    }
    li {
      margin: 0 auto;
      text-transform: capitalize;
      font-weight: 500;
      padding: 18px 10px;
      color: black;
      text-align: center;
    }
    li:hover {
      color: var(--vivid-tangerine);
      text-shadow: 1px 1px var(--vivid-tangerine);
    }
    a {
      text-align: center;
      margin: 0 auto;
    }
  }
`;

export default Ul;

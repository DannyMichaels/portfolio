import styled from "styled-components";

const Ul = styled.ul`
@import url("https://cdnjs.cloudflare.com/ajax/libs/meyer-reset/2.0/reset.min.css");
@import url('https://fonts.googleapis.com/css?family=Poppins:700,500,600|Playfair+Display:700,900|Roboto:400|Montserrat:700,500,400,600');

  list-style: none;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  align-items: center;
  .mobile-link{
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
  font-size: 16px;
  transition: 0.3s ease-in-out;
}

li:hover {
  background-color: white;
  color: var(--vivid-tangerine);
  text-shadow: 1px 1px var(--vivid-tangerine)

}

  @media (max-width: 768px) {
    flex-flow: row nowrap;
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
    height: 10vh;
    width: 100vw;
    padding-top: 3.5rem;
    padding-bottom: 100px;
    box-shadow: -4px 2px 2px 2px var(--vivid-tangerine);
    .mobile-link{
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
  text-shadow: 1px 1px var(--vivid-tangerine)
}
    a {
  text-align: center;
  margin: 0 auto;
}
  }
`;

export default Ul;

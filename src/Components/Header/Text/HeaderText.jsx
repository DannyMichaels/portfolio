import styled from "styled-components";

const Div = styled.div`
  align-items: center;
  background-color: transparent;
  display: inline-flex;
  flex-direction: row;
  flex-shrink: 1;
  height: 156px;
  margin-left: 100px;
  justify-content: flex-start;
  margin-top: 200px;
  z-index: 1;
  flex-flow: row wrap;

  .font-class-1 {
    color: #fff;
    font-family: "Helvetica", Helvetica, Arial, serif;
    font-size: clamp(20px, 10vw, 70px);

    cursor: default;
    line-height: 84px;
    z-index: 1;
  }

  .rectangle-6 {
    background-color: var(--vivid-tangerine);
    display: flex;
    flex-shrink: 1;
    height: 5px;
    z-index: 1;
    margin-bottom: 67px;
    margin-left: 23px;
    width: 68px;
    transition: transform 250ms ease-out;
  }

  .a-full-stack {
    background-color: transparent;
    flex-shrink: 1;
    height: auto;
    margin-left: 28px;
    min-height: 156px;
    min-height: 0;
    text-align: left;
  }
  .this-is-daniel {
    background-color: transparent;
    flex-shrink: 1;
    height: auto;
    min-height: 156px;
    text-align: left;
  }

  .span {
    transition: transform 250ms ease-out;
    align-items: center;
    background-color: transparent;
    display: inline-flex;
    flex-direction: row;
    width: auto;
    z-index: 1;
  }

  .span2 {
    transition: transform 250ms ease-out;
    align-items: center;
    background-color: transparent;
    display: inline-flex;
    flex-direction: row;
    width: auto;
    z-index: 1;
    display: none;
  }

  .span:hover,
  .span2:hover {
    transform: translateY(-4.05px);
    transition: transform 250ms ease-in;
    cursor: pointer;
  }

  .rectangle-6:hover {
    transform: translateY(-4.05px);
    transition: transform 250ms ease-in;
    cursor: pointer;
  }

  @media screen and (max-width: 768px) {
    display: inline-flex;
    flex-flow: row wrap;
    margin: 0 auto;
    margin-top: 200px;
    min-width: 100%;
    max-width: 100%;

    .this-is-daniel {
      min-height: 0;
      margin: 0 auto;
    }

    @media screen and (max-width: 768px) {
      .font-class-1 {
        /* font-size: 60px; */

        line-height: 80px;
      }

      .a-full-stack {
        margin: 0 auto;
        min-height: 0;
        text-align: center;
      }

      .rectangle-6 {
        display: none;
      }

      .span2 {
        display: inline-block;
      }
    }
  }
  @media screen and (max-width: 600px) {
    .font-class-1 {
      line-height: 80px;
    }
  }
`;

export default function HeaderText() {
  return (
    <Div className="text">
      <h1 className="this-is-daniel font-class-1">
        <div className="span">H</div>
        <div className="span">i</div>
        <div className="span">,</div>
        &nbsp;
        <div className="span">I</div>
        <div className="span">'</div>
        <div className="span">m </div>
        &nbsp;
        <div className="span">D</div>
        <div className="span">a</div>
        <div className="span">n</div>
        <div className="span">i</div>
        <div className="span">e</div>
        <div className="span">l</div>
        <div className="span2">,</div>
      </h1>
      <div className="rectangle-6"></div>
      <div className="a-full-stack font-class-1">
        <div className="span">A</div>
        &nbsp;
        <div className="span">f</div>
        <div className="span">u</div>
        <div className="span">l</div>
        <div className="span">l</div>
        <div className="span">-</div>
        <div className="span">s</div>
        <div className="span">t</div>
        <div className="span">a</div>
        <div className="span">c</div>
        <div className="span">k</div>
        <br />
        <div className="span">s</div>
        <div className="span">o</div>
        <div className="span">f</div>
        <div className="span">t</div>
        <div className="span">w</div>
        <div className="span">a</div>
        <div className="span">r</div>
        <div className="span">e</div>
        &nbsp;
        <div className="span">e</div>
        <div className="span">n</div>
        <div className="span">g</div>
        <div className="span">i</div>
        <div className="span">n</div>
        <div className="span">e</div>
        <div className="span">e</div>
        <div className="span">r</div>
      </div>
    </Div>
  );
}

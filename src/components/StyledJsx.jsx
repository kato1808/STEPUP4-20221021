export const StyledJsx = () => {
  return (
    <>
      <div className="container">
        <p className="title"> === StledJsx ===</p>
        <button className="button">FIGTH</button>
      </div>
      <style jsx="true">{`
        .container {
          border: solid 2px #392eff;
          border-radius: 10px;
          padding: 20px;
          margin: 20px;
          display: flex;
          justify-content: space-around;
          alignitems: center;
        }
        .title {
          margin: 0;
          color: #3d84a8;
        }
        .button {
          background-color: #abedd8;
          border: none;
          padding: 10px;
          border-radius: 10px;
        }
      `}</style>
    </>
  );
};

import CardContainer from "../components/CardContainer";
import MainWrap from "../components/MainWrap";

const CardPage = () => {
  return (
    <MainWrap>
      <h1>Card - Page</h1>
      <div>
        <p>Active:</p>
        <CardContainer showActive={true} />
      </div>
      <div>
        <p>Inactive:</p>
        <CardContainer showActive={false} />
      </div>
    </MainWrap>
  );
};

export default CardPage;

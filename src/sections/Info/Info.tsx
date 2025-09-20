import "./Info.scss";

import { infoBlock } from "../../data/data";
import InfoBlock from "../../components/InfoBlock/InfoBlock";

const Info = () => {
  return (
    <section className="info">
      <div className="info__inner container">
        <h2 className="visually-hidden">Info section</h2>
        <ul className="info__list">
          {infoBlock.map((item) => (
            <InfoBlock
              title={item.title}
              description={item.description}
            ></InfoBlock>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Info;

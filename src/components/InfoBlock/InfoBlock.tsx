import "./InfoBlock.scss";

interface IInfoBlock {
  title: string;
  description: string[][];
}

const InfoBlock = ({ title, description }: IInfoBlock) => {
  return (
    <li className="info__item info-block">
      <h3 className="info-block__title h2">{title}</h3>
      <div className="info-block__description">
        {description.map((item) => (
          <p className="info-block__description-text">
            {item[0]}
            <br />
            {item[1]}
          </p>
        ))}
      </div>
    </li>
  );
};

export default InfoBlock;

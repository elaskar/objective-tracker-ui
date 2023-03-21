import "./Objective.scss";

type ObjectiveProps = {
  img: string;
  title: string;
  achieved: boolean;
  onClick: () => void;
};

const ObjectiveComponent = (props: ObjectiveProps) => {
  const handleObjectiveClicked = (e: React.MouseEvent<HTMLElement>) => {
    e.stopPropagation();
    props.onClick();
  };

  return (
    <div
      className={`objective-card ${
        props.achieved ? "achieved" : "not-achieved"
      }`}
      onClick={(e) => handleObjectiveClicked(e)}
    >
      <img
        className="objective-card__image"
        alt="A visual for an objective"
        src={props.img}
      />
      <span className="objective-card__title">{props.title}</span>
    </div>
  );
};

export default ObjectiveComponent;

import "./AddObjective.scss";

const AddObjective = (props: { onClick: () => void }) => {
  const handleAddButtonClicked = (e: React.MouseEvent<HTMLElement>) => {
    e.stopPropagation();
    props.onClick();
  };

  return (
    <button
      onClick={(e) => handleAddButtonClicked(e)}
      className="add-objective"
    >
      <span className="add-objective__label">+</span>
    </button>
  );
};

export default AddObjective;

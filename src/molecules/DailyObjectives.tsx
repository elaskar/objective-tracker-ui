import { useEffect, useState } from "react";
import AddObjective from "../atoms/AddObjective.component";
import ObjectiveComponent from "../atoms/Objective.component";
import "./DailyObjectives.scss";

type Objective = {
  id: number;
  name: string;
  achieved: boolean;
};

const DailyObjectives = () => {
  const [objectives, setObjectives] = useState<Objective[]>([]);

  useEffect(() => {
    fetch("./data.json")
      .then((res) => res.json())
      .then((data) => setObjectives(data));
  }, []);

  const achieveObjectiveById = (id: number): void => {
    const newObjectives = objectives.map((item) => {
      if (item.id === id) {
        return { ...item, achieved: !item.achieved };
      }
      return item;
    });

    setObjectives(newObjectives);
  };

  const addObjective = (): void => {
    console.log("clicked");
    setObjectives([
      ...objectives,
      { achieved: false, id: 5, name: "New objective" },
    ]);
  };

  return (
    <div className="daily-objectives">
      <h2 className="daily-objectives__title">My daily objectives</h2>
      <div className="objectives-content">
        <div className="objectives-content__list">
          {objectives.map((item) => (
            <ObjectiveComponent
              onClick={() => achieveObjectiveById(item.id)}
              title={item.name}
              achieved={item.achieved}
              img=""
              key={item.id}
            ></ObjectiveComponent>
          ))}
          <AddObjective onClick={() => addObjective()}></AddObjective>
        </div>
      </div>
    </div>
  );
};

export default DailyObjectives;

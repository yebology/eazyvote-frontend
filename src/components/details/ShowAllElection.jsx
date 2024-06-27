import React from "react";
import ElectionCard from "../cards/ElectionCard";
import { elections } from "../../services/ContentList";
import cat404 from "../../assets/cat404.png";

const ShowAllElection = () => {
  return (
    <div id="elections" className="mb-16">
      <h1 className="text-white font-medium text-3xl mb-3"> All Elections </h1>
      {elections.length === 0 ? (
        <div>
          <div className="flex justify-center items-center">
            <img src={cat404} className="h-60 w-60 my-10" />
          </div>
          <div className="flex justify-center items-center">
            <h1 className="font-bold text-4xl text-center text-white">
              Don't have any elections currently.
            </h1>
          </div>
        </div>
      ) : (
        <div className="grid gap-2 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
          {elections.map((election, index) => (
            <ElectionCard
              key={index}
              id={index}
              election={election}
              notes={"showAllElection"}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default ShowAllElection;

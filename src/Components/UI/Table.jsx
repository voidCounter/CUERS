import { PlusCircleIcon } from "@heroicons/react/24/solid";
import React from "react";
import Buttoncmp from "./Buttoncmp";
import Inputcmp from "./Inputcmp";

const Table = (prop) => {
  const {options, peoples} = prop;
  return (
    <div className="">
      <div className="flex-col overflow-auto h-fit">
        {peoples.map((people) => (
          <div id={people} className="w-full grid grid-cols-3 gap-2 mb-1 p-1">
            <div className="flex justify-center items-center">{people}</div>
            <div className="">
              <Inputcmp
                type="select"
                options={options.evaluators}
                name={people + "evaluator"}
                id={people + "evaluator"}
                readonly="true"
              ></Inputcmp>
            </div>
            <div className="w-full">
              <Inputcmp
                type="select"
                options={options.roles}
                name={people + "role"}
                id={people + "role"}
              ></Inputcmp>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Table;
import { useState, useEffect } from "react";

const Ingradients = ({ recipeIngradients = [], updateRecipeIngradients }) => {
  console.log(recipeIngradients);
  const [ingradients, setIngradients] = useState([...recipeIngradients]);

  useEffect(() => {
    setIngradients(recipeIngradients);
  }, [recipeIngradients]);

  const addNewIngradient = () => {
    const ingradientsCopy = [...ingradients];
    ingradientsCopy.push({
      name: "",
      description: "",
    });
    setIngradients(ingradientsCopy);
  };

  const deleteIngradient = (i) => {
    const ingradientsCopy = [...ingradients];
    ingradientsCopy.splice(i, 1);
    setIngradients(ingradientsCopy);
  };

  const updateIngradient = (i, field, newValue) => {
    const ingradientsCopy = [...ingradients];
    ingradientsCopy[i][field] = newValue;
    setIngradients(ingradientsCopy);
    updateRecipeIngradients(ingradientsCopy);
  };

  return (
    <>
      {ingradients.map((ingradient, i) => {
        return (
          <div className="row mb-1" key={i}>
            <div className="col-5">
              <input
                onChange={(e) => {
                  updateIngradient(i, "name", e.target.value);
                }}
                type={"text"}
                className="form-control"
                placeholder={"Name"}
                value={ingradient?.name}
              />
            </div>
            <div className="col-5">
              <input
                onChange={(e) => {
                  updateIngradient(i, "description", e.target.value);
                }}
                type={"text"}
                className="form-control"
                placeholder={"Description"}
                value={ingradient?.description}
              />
            </div>
            <div className="col-2 ">
              <button
                className="btn btn-danger"
                onClick={() => {
                  deleteIngradient(i);
                }}
              >
                x
              </button>
            </div>
          </div>
        );
      })}
      <div className="row mt-4">
        <div className="col">
          <button className="btn btn-sm btn-primary" onClick={addNewIngradient}>
            Add New Ingradient
          </button>
        </div>
      </div>
    </>
  );
};

export default Ingradients;

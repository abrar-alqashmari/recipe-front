
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
const SingleRecipe = () => {
  const [singleRecipe, setSingleRecipe] = useState({});
  //   const [AllIngredients, setAllIngredients] = useState();
  let { id } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      await fetch(`${process.env.REACT_APP_API_URL}recipes/${id}`)
        .then((response) => {
          response.json().then((recipeData) => {
            if (recipeData?.success) {
              setSingleRecipe(recipeData.data);
            }
          });
        })
        .catch((e) => console.log(e));
    };
    fetchData();
  }, [id]);
  console.log(singleRecipe?.Ingredients,"nice")
  return (
    <>
    
</>
  );
};
export default SingleRecipe;

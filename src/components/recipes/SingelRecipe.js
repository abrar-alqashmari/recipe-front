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

  return (
    <>
      <section
        id="slider"
        className="slider-element dark parallax include-header"
        style={{
          background: `url(${singleRecipe.background_photo}) center center / cover`,
          padding: "230px",
        }}
      >
        <div className="container clearfix">
          <div className="mx-auto center" style={{ maxWidth: "800px" }}>
            <h3 className="nott fw-bold mb-5 display-4">
              {singleRecipe?.name}
            </h3>
          </div>
          <div className="mx-auto center" style={{ maxWidth: "900px" }}>
            <div className="slider-features">
              <ul className="list-unstyled row g-0 align-items-center overflow-hidden col-mb-50 mt-5">
                <li className="col-6 col-lg text-center text-lg-start">
                  <div className="grid-inner px-5">
                    <img
                      src="demos/recipes/images/icons/level.svg"
                      alt="Level"
                      width="30"
                    />
                    <h5 className="mb-0">Beginner Level</h5>
                  </div>
                </li>
                <li className="col-6 col-lg text-center text-lg-start">
                  <div className="grid-inner px-5">
                    <img
                      src="demos/recipes/images/icons/timer.svg"
                      alt="Timer"
                      width="30"
                    />
                    <h5 className="mb-0">40 Mins</h5>
                  </div>
                </li>
                <li className="col-6 col-lg text-center text-lg-start">
                  <div className="grid-inner px-5">
                    <img
                      src="demos/recipes/images/icons/ingredients.svg"
                      alt="Ingredients"
                      width="30"
                    />
                    <h5 className="mb-0">9 Ingredients</h5>
                  </div>
                </li>
                <li className="col-6 col-lg text-center text-lg-start">
                  <div className="grid-inner px-5">
                    <img
                      src="demos/recipes/images/icons/star.svg"
                      alt="Reviews"
                      width="30"
                    />
                    <h5 className="mb-0">223 Reviews</h5>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section id="content" className="bg-light">
        <div className="content-wrap pt-0" style={{ overflow: "visible" }}>
          <div className="container">
            <div className="card border-0 shadow-sm" style={{ top: "-100px" }}>
              <div className="card-body px-4">
                <div className="row justify-content-between mt-5 mb-4 clearfix">
                  <div className="col-lg-4">
                    <div className="d-flex justify-content-between align-items-center mb-4">
                      <h4 className="mb-0">Ingredients</h4>
                    </div>
                    <ul className="list-unstyled list-ingredients bg-light p-4">
                      {singleRecipe?.Ingredients?.map((recipe, i) => {
                        return (
                          <div>
                            <li key={i}>{recipe.name}</li>
                            <ul>
                              <li>{recipe.description}</li>
                            </ul>
                          </div>
                        );
                      })}
                    </ul>
                    <div className="line line-sm"></div>
                    <h4>Share:</h4>
                    <a
                      href="http://www.facebook.com"
                      className="social-icon si-small si-colored si-facebook"
                      title="Facebook"
                    >
                      <i className="icon-facebook"></i>
                      <i className="icon-facebook"></i>
                    </a>
                    <a
                      href="http://wwww.Twitter.com"
                      className="social-icon si-small si-colored si-twitter"
                      title="Twitter"
                    >
                      <i className="icon-twitter"></i>
                      <i className="icon-twitter"></i>
                    </a>
                  </div>
                  <div className="col-lg-8 mt-5 mt-lg-0">
                    <h4>Video</h4>
                    <iframe
                      width="100%"
                      height="315"
                      src={`https://www.youtube.com/embed/${singleRecipe?.youtube_video}`}
                      title="YouTube video"
                      frameborder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowfullscreen
                    ></iframe>
                    <div
                      className="rounded position-relative dark mb-5"
                      style={{
                        background:
                          "url('demos/recipes/images/recipe-week.jpg') no-repeat center center / cover; min-height: 300px",
                      }}
                    >
                      <a
                        href="https://www.youtube.com/watch?v=P3Huse9K6Xs"
                        className="play-video stretched-link"
                      >
                        <i className="icon-play"></i>
                      </a>
                    </div>
                    <h4>{singleRecipe.description}</h4>
                    <ol className="list-unstyled list-preparation"></ol>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default SingleRecipe;

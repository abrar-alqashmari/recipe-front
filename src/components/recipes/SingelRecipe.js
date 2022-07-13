// import { Link } from "react-router-dom";
// import { useState, useEffect } from "react";
// import { useParams } from "react-router-dom";

// const SingleRecipe = ({ recipe }) => {
//   const [singleRecipe, setSingleRecipe] = useState({});
//   const [AllIngredients, setAllIngredients] = useState();
//   let { id } = useParams();
//   useEffect(() => {
//     const fetchData = async () => {
//       await fetch(`${process.env.REACT_APP_API_URL}recipes/${id}`)
//         .then((response) => {
//           response.json().then((recipeData) => {
//             if (recipeData?.success) {
//               setSingleRecipe(recipeData.data);
//               console.log(recipeData.data, "000");
//             }
//           });
//         })
//         .catch((e) => console.log(e));
//     };
//     fetchData();
//   }, []);
//   useEffect(() => {
//     const fetchData = async () => {
//       await fetch(`${process.env.REACT_APP_API_URL}ingredients/${id}`)
//         .then((response) => {
//           response.json().then((ingredientData) => {
//             if (ingredientData?.success) {
//               setAllIngredients(ingredientData.data);
//               console.log(ingredientData.data, "111");
//             }
//           });
//         })
//         .catch((e) => console.log(e));
//     };
//     fetchData();
//   }, []);

//   return (
//     <Link
//       to={`/recipe/${singleRecipe.id}`}
//       className="list-group-item list-group-item-action flex-column align-items-start"
//     >
//     <div className="container-fluid d-flex justify-content-center mt-12">
//         <div>
//         <img
//             style={{ padding: 50, margin: 50 }}
//             src={singleRecipe?.background_photo}
//             alt={singleRecipe?.name}
//             className="img-fluid float-left"
//           />
//           <img
//             style={{ padding: 200, margin: 20 }}
//             src={singleRecipe?.recipe_photo}
//             alt={singleRecipe?.name}
//             className="img-fluid float-left"
//           />
//            <h5 className="mb-1" style={{ color: "red", padding: 200 }}>
//             {singleRecipe?.name}
//           </h5>
//           <small>{singleRecipe?.createdAt}</small>
//         </div>
//         <div>
//       <iframe
//         src={singleRecipe?.youtube_video}
//         frameborder="0"
//         allow="autoplay; encrypted-media"
//         allowfullscreen
//         title="video"
//       />{" "}
//     </div>
// </div>

//       {AllIngredients &&
//         AllIngredients.map((ingredients, i) => {
//           return (
//             <div
//               className="container-fluid d-flex justify-content-center mt-12"
//               key={i}
//             >
//               <div>
//                 <h2>{ingredients.name}</h2>
//               </div>
//               <div>
//                 <p>{ingredients.description}</p>
//               </div>
//             </div>
//           );
//         })}
//     </Link>
//   );
// };

// export default SingleRecipe;














// import { Link } from "react-router-dom";
// import { useState, useEffect } from "react";
// import { useParams } from "react-router-dom";

// const SingleRecipe = () => {
//   const [singleRecipe, setSingleRecipe] = useState({});
//   //   const [AllIngredients, setAllIngredients] = useState();
//   let { id } = useParams();

//   useEffect(() => {
//     const fetchData = async () => {
//       await fetch(`${process.env.REACT_APP_API_URL}recipes/${id}`)
//         .then((response) => {
//           response.json().then((recipeData) => {
//             if (recipeData?.success) {
//               setSingleRecipe(recipeData.data);
//             }
//           });
//         })
//         .catch((e) => console.log(e));
//     };
//     fetchData();
//   }, [id]);
//   return (
//     <>
//       <section
//         id="slider"
//         className="slider-element dark parallax include-header"
//         style={{
//           background:
//             "#111 url({'demos/recipes/images/recipe-single.jpg'}) center center / cover;",
//           padding: "230px 0",
//         }}
//         data-0="background-position:0px -200px;"
//         data-400="background-position:0px -100px;"
//       >
//         <img
//           style={{ padding: 50, margin: 50 }}
//           src={singleRecipe?.background_photo}
//           alt={singleRecipe?.name}
//           className="img-fluid float-left"
//         />

//         <div className="container clearfix">
//           <div className="mx-auto center" style={{ maxWidth: "800px" }}>
//             <h3
//               style={{ color: "black" }}
//               className="nott fw-bold mb-5 display-4"
//               data-animate="zoomIn"
//             >
//               {singleRecipe.name}
//             </h3>
//           </div>
//           <div className="mx-auto center" style={{ maxWidth: "900px" }}>
//             <div
//               className="slider-features"
//               data-animate="zoomIn"
//               data-delay="300"
//             >
//               <ul className="list-unstyled row g-0 align-items-center overflow-hidden col-mb-50 mt-5">
//                 <li className="col-6 col-lg text-center text-lg-start">
//                   <div className="grid-inner px-5">
//                     <img
//                       src="demos/recipes/images/icons/level.svg"
//                       alt="Level"
//                       width="30"
//                     />
//                     <h5 className="mb-0">Beginner Level</h5>
//                   </div>
//                 </li>
//                 <li className="col-6 col-lg text-center text-lg-start">
//                   <div className="grid-inner px-5">
//                     <img
//                       src="demos/recipes/images/icons/timer.svg"
//                       alt="Timer"
//                       width="30"
//                     />
//                     <h5 className="mb-0">40 Mins</h5>
//                   </div>
//                 </li>
//                 <li className="col-6 col-lg text-center text-lg-start">
//                   <div className="grid-inner px-5">
//                     <img
//                       src="demos/recipes/images/icons/ingredients.svg"
//                       alt="Ingredients"
//                       width="30"
//                     />
//                     <h5 className="mb-0">9 Ingredients</h5>
//                   </div>
//                 </li>
//                 <li className="col-6 col-lg text-center text-lg-start">
//                   <div className="grid-inner px-5">
//                     <img
//                       src="demos/recipes/images/icons/star.svg"
//                       alt="Reviews"
//                       width="30"
//                     />
//                     <h5 className="mb-0">223 Reviews</h5>
//                   </div>
//                 </li>
//               </ul>
//             </div>
//           </div>
//         </div>
//       </section>
      

//       <section id="content" className="bg-light">
//   <div className="content-wrap pt-0" style={{"overflow":"visible"}}>
//     <div className="container">
//       <div className="card border-0 shadow-sm" style={{"top":"-100px"}}>
//         <div className="card-body px-4">
//           <div className="row align-items-center justify-content-between py-3">
//             <div className="col-12 col-xl">
//               <div className="row justify-content-center col-mb-30">
//                 <div className="col-4 col-md">
//                   <h6 className="text-black-50 text-uppercase font-body fw-normal ls1 mb-1">Energy</h6>
//                   <h4 className="mb-0">2635</h4>
//                 </div>
//                 <div className="col-4 col-md">
//                   <h6 className="text-black-50 text-uppercase font-body fw-normal ls1 mb-1">Calories</h6>
//                   <h4 className="mb-0">700</h4>
//                 </div>
//                 <div className="col-4 col-md">
//                   <h6 className="text-black-50 text-uppercase font-body fw-normal ls1 mb-1">Sugar</h6>
//                   <h4 className="mb-0">12gm</h4>
//                 </div>
//                 <div className="col-4 col-md">
//                   <h6 className="text-black-50 text-uppercase font-body fw-normal ls1 mb-1">Fat</h6>
//                   <h4 className="mb-0">7gm</h4>
//                 </div>
//                 <div className="col-4 col-md">
//                   <h6 className="text-black-50 text-uppercase font-body fw-normal ls1 mb-1">Carbs</h6>
//                   <h4 className="mb-0">82gm</h4>
//                 </div>
//                 <div className="col-4 col-md">
//                   <h6 className="text-black-50 text-uppercase font-body fw-normal ls1 mb-1">Protein</h6>
//                   <h4 className="mb-0">26gm</h4>
//                 </div>
//               </div>
//             </div>
//             <div className="col-12 text-center col-xl-auto mt-5 mt-xl-0">
//               {/* <a to="#" className="button button-circle m-0"><i className="icon-line-cloud-download" /> Download</a> */}
//             </div>
//           </div>
//           <div className="line my-4" />
//           <div className="row justify-content-between mt-5 mb-4 clearfix">
//             <div className="col-lg-4">
//               <div className="d-flex justify-content-between align-items-center mb-4">
//                 <h4 className="mb-0">Ingredients</h4>
//                 {/* <a to="javascript:window.print()" id="print-button" className="social-icon si-small si-colored si-print" title="Print">
//                   <i className="icon-line-printer" />
//                   <i className="icon-line-printer" />
//                 </a> */}
//               </div>
//               <ul className="list-unstyled list-ingredients bg-light p-4">
//                 <li>2 lb frozen tater tot (910 g)</li>
//                 <li>4 boneless, skinless chicken thighs</li>
//                 <li>1 tablespoon whole grain mustard</li>
//                 <li>2 tablespoons olive oil</li>
//                 <li>salt, to taste</li>
//                 <li>pepper, to taste</li>
//                 <li>½ red onion, sliced</li>
//                 <li>1 cup cheddar cheese (100 g)</li>
//                 <li>1 cup monterey jack cheese (100 g)</li>
//               </ul>
//               </div>
//             <div className="col-lg-8 mt-5 mt-lg-0">
//               <h4>Video</h4>
//               <div className="rounded position-relative dark mb-5" style={{"background":"url('demos/recipes/images/recipe-week.jpg') no-repeat center center / cover","minHeight":"300px"}}>
//                 {/* <Link to="https://www.youtube.com/watch?v=P3Huse9K6Xs" data-lightbox="iframe" className="play-video stretched-link">
//                   <i className="icon-play" />
//                 </Link> */}
//               </div>
//               <h4>Preparation</h4>
//               <ol className="list-unstyled list-preparation">
//                 <li>Place frozen tater tots on a baking sheet and bake at 450˚F (230˚C) for 20 minutes, or until crispy. Set aside.</li>
//                 <li>In a large bowl, toss chicken thighs with 1 tablespoon whole grain mustard, salt, pepper, and 1 tablespoon olive oil.</li>
//                 <li>In a cast iron skillet, cook on high heat until there is a nice brown sear on the surface of the chicken, and the inside is no longer pink.</li>
//                 <li>Roughly four minutes each side. Set chicken aside.</li>
//                 <li>Cook onions until caramelized. Set onions aside.</li>
//                 <li>Cut the chicken into bite-size cubes.</li>
//                 <li>Wipe the skillet of excess fat.</li>
//                 <li>Layer with cooked tater tots. Top with chicken.</li>
//                 <li>In a small bowl, combine all ingredients for honey mustard dressing.</li>
//                 <li>Pour the dressing on the chicken and tots. Top with onion, then cheddar and monterey jack cheese.</li>
//                 <li>Broil from 5-10 minutes, or until cheese is melted.</li>
//                 <li>Load the dish with tomatoes, avocados, sour cream, and scallions. Serve immediately.</li>
//                 <li>Enjoy!</li>
//               </ol>
//               <div className="line my-5" />
//               <div className="row justify-content-between col-mb-30 post-navigation">
//                 <div className="col-12 col-md-auto text-center">
//                   {/* <Link to="#">⇐ This is a Standard post with a Slider Gallery</Link> */}
//                 </div>
//                 <div className="col-12 col-md-auto text-center">
//                   {/* <Link to="#">This is an Embedded Audio Post ⇒</Link> */}
//                 </div>
//               </div>
             
//             </div>
//           </div>
//         </div>
//       </div>
 
//     </div>
//   </div>
// </section>
//     </>
//   );
// };
// export default SingleRecipe;



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
  console.log(singleRecipe.Ingredients,"nice")
  return (
    <>

 

<section id="slider" className="slider-element dark parallax include-header skrollable skrollable-between" style={{background: `url(${singleRecipe.background_photo}) 0px -179.75px / cover rgb(17, 17, 17)`, padding:" 230px 0px; margin-top: -101px" }} 

                data-0="background-position:0px -200px"
                data-400="background-position:0px -100px">
            <div className="container clearfix">
                <div className="mx-auto center" style={{maxWidth: "800px"}}>
                    <h3 className="nott fw-bold mb-5 display-4 zoomIn animated" data-animate="zoomIn">Spinach Artichoke Dip Pasta with Chicken</h3>
                </div>
                <div className="mx-auto center" style={{maxWidth: "900px"}}>
                    <div className="slider-features zoomIn animated" data-animate="zoomIn" data-delay="300">
                        <ul className="list-unstyled row g-0 align-items-center overflow-hidden col-mb-50 mt-5">
                            <li className="col-6 col-lg text-center text-lg-start">
                                <div className="grid-inner px-5">
                                    <img src={singleRecipe.background_photo} alt="Level" width="30"/>
                                        <h5 className="mb-0">Beginner Level</h5>
                                </div>
                            </li>
                            <li className="col-6 col-lg text-center text-lg-start">
                                <div className="grid-inner px-5">
                                    <img src="demos/recipes/images/icons/timer.svg" alt="Timer" width="30"/>
                                        <h5 className="mb-0">40 Mins</h5>
                                </div>
                            </li>
                            <li className="col-6 col-lg text-center text-lg-start">
                                <div className="grid-inner px-5">
                                    <img src="demos/recipes/images/icons/ingredients.svg" alt="Ingredients" width="30"/>
                                        <h5 className="mb-0">9 Ingredients</h5>
                                </div>
                            </li>
                            <li className="col-6 col-lg text-center text-lg-start">
                                <div className="grid-inner px-5">
                                    <img src="demos/recipes/images/icons/star.svg" alt="Reviews" width="30"/>
                                        <h5 className="mb-0">223 Reviews</h5>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
        <div className="card border-0 shadow-sm" style={{top: "-100px;", width: "100%"}}>
                <div className="card-body px-4">
                    
                    <div className="line my-4"></div>
                    <div className="row justify-content-between mt-5 mb-4 clearfix">
                        <div className="col-lg-4">
                            <div className="d-flex justify-content-between align-items-center mb-4">
                                <h4 className="mb-0">Ingredients</h4>
                                <a href="javascript:window.print()" id="print-button" className="social-icon si-small si-colored si-print" title="Print">
                                    <i className="icon-line-printer"></i>
                                    <i className="icon-line-printer"></i>
                                </a>
                            </div>
                            <ul className="list-unstyled list-ingredients bg-light p-4">{
                                singleRecipe?.Ingredients?.map((recipe, i) => {
                                    return (
                                        <div>
                                            <li key={i}>{recipe.name}</li>
                                            <ul>
                                                <li>{recipe.description}</li>
                                            </ul>
                                        </div>
                                         
                                    )
                                })
                            }
                               
                                
                            </ul>
            
                        </div>
                        <div className="col-lg-8 mt-5 mt-lg-0">
                            <h4>Video</h4>
                            <div className="rounded position-relative dark mb-5" style={{background: "url('demos/recipes/images/recipe-week.jpg') no-repeat center center / cover; min-height: 300px"}}>
                                <a href="https://www.youtube.com/watch?v=P3Huse9K6Xs" data-lightbox="iframe" className="play-video stretched-link">
                                    <i className="icon-play"></i>
                                </a>
                            </div>
                            <h4>Preparation</h4>
                            <ol className="list-unstyled list-preparation">
                                <div >
                                    <h6>{singleRecipe.description}</h6>
                                </div>
                                <h6>Enjoy!</h6>
                            </ol>
                            <div className="line my-5"></div>
                            
                        </div>
                    </div>
                </div>
            </div>
    </>
  );
};
export default SingleRecipe;

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
          background:
            "#111 url({'demos/recipes/images/recipe-single.jpg'}) center center / cover;",
          padding: "230px 0;",
        }}
        data-0="background-position:0px -200px;"
        data-400="background-position:0px -100px;"
      >
        <img
          style={{ padding: 50, margin: 50 }}
          src={singleRecipe?.background_photo}
          alt={singleRecipe?.name}
          className="img-fluid float-left"
        />

        <div className="container clearfix">
          <div className="mx-auto center" style={{ maxWidth: "800px" }}>
            <h3
              style={{ color: "black" }}
              className="nott fw-bold mb-5 display-4"
              data-animate="zoomIn"
            >
              {singleRecipe.name}
            </h3>
          </div>
          <div className="mx-auto center" style={{ maxWidth: "900px" }}>
            <div
              className="slider-features"
              data-animate="zoomIn"
              data-delay="300"
            >
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
  <div className="content-wrap pt-0" style={{"overflow":"visible"}}>
    <div className="container">
      <div className="card border-0 shadow-sm" style={{"top":"-100px"}}>
        <div className="card-body px-4">
          <div className="row align-items-center justify-content-between py-3">
            <div className="col-12 col-xl">
              <div className="row justify-content-center col-mb-30">
                <div className="col-4 col-md">
                  <h6 className="text-black-50 text-uppercase font-body fw-normal ls1 mb-1">Energy</h6>
                  <h4 className="mb-0">2635</h4>
                </div>
                <div className="col-4 col-md">
                  <h6 className="text-black-50 text-uppercase font-body fw-normal ls1 mb-1">Calories</h6>
                  <h4 className="mb-0">700</h4>
                </div>
                <div className="col-4 col-md">
                  <h6 className="text-black-50 text-uppercase font-body fw-normal ls1 mb-1">Sugar</h6>
                  <h4 className="mb-0">12gm</h4>
                </div>
                <div className="col-4 col-md">
                  <h6 className="text-black-50 text-uppercase font-body fw-normal ls1 mb-1">Fat</h6>
                  <h4 className="mb-0">7gm</h4>
                </div>
                <div className="col-4 col-md">
                  <h6 className="text-black-50 text-uppercase font-body fw-normal ls1 mb-1">Carbs</h6>
                  <h4 className="mb-0">82gm</h4>
                </div>
                <div className="col-4 col-md">
                  <h6 className="text-black-50 text-uppercase font-body fw-normal ls1 mb-1">Protein</h6>
                  <h4 className="mb-0">26gm</h4>
                </div>
              </div>
            </div>
            <div className="col-12 text-center col-xl-auto mt-5 mt-xl-0">
              <a to="#" className="button button-circle m-0"><i className="icon-line-cloud-download" /> Download</a>
            </div>
          </div>
          <div className="line my-4" />
          <div className="row justify-content-between mt-5 mb-4 clearfix">
            <div className="col-lg-4">
              <div className="d-flex justify-content-between align-items-center mb-4">
                <h4 className="mb-0">Ingredients</h4>
                <a to="javascript:window.print()" id="print-button" className="social-icon si-small si-colored si-print" title="Print">
                  <i className="icon-line-printer" />
                  <i className="icon-line-printer" />
                </a>
              </div>
              <ul className="list-unstyled list-ingredients bg-light p-4">
                <li>2 lb frozen tater tot (910 g)</li>
                <li>4 boneless, skinless chicken thighs</li>
                <li>1 tablespoon whole grain mustard</li>
                <li>2 tablespoons olive oil</li>
                <li>salt, to taste</li>
                <li>pepper, to taste</li>
                <li>½ red onion, sliced</li>
                <li>1 cup cheddar cheese (100 g)</li>
                <li>1 cup monterey jack cheese (100 g)</li>
              </ul>
              </div>
            <div className="col-lg-8 mt-5 mt-lg-0">
              <h4>Video</h4>
              <div className="rounded position-relative dark mb-5" style={{"background":"url('demos/recipes/images/recipe-week.jpg') no-repeat center center / cover","min-height":"300px"}}>
                <Link to="https://www.youtube.com/watch?v=P3Huse9K6Xs" data-lightbox="iframe" className="play-video stretched-link">
                  <i className="icon-play" />
                </Link>
              </div>
              <h4>Preparation</h4>
              <ol className="list-unstyled list-preparation">
                <li>Place frozen tater tots on a baking sheet and bake at 450˚F (230˚C) for 20 minutes, or until crispy. Set aside.</li>
                <li>In a large bowl, toss chicken thighs with 1 tablespoon whole grain mustard, salt, pepper, and 1 tablespoon olive oil.</li>
                <li>In a cast iron skillet, cook on high heat until there is a nice brown sear on the surface of the chicken, and the inside is no longer pink.</li>
                <li>Roughly four minutes each side. Set chicken aside.</li>
                <li>Cook onions until caramelized. Set onions aside.</li>
                <li>Cut the chicken into bite-size cubes.</li>
                <li>Wipe the skillet of excess fat.</li>
                <li>Layer with cooked tater tots. Top with chicken.</li>
                <li>In a small bowl, combine all ingredients for honey mustard dressing.</li>
                <li>Pour the dressing on the chicken and tots. Top with onion, then cheddar and monterey jack cheese.</li>
                <li>Broil from 5-10 minutes, or until cheese is melted.</li>
                <li>Load the dish with tomatoes, avocados, sour cream, and scallions. Serve immediately.</li>
                <li>Enjoy!</li>
              </ol>
              <div className="line my-5" />
              <div className="row justify-content-between col-mb-30 post-navigation">
                <div className="col-12 col-md-auto text-center">
                  <Link to="#">⇐ This is a Standard post with a Slider Gallery</Link>
                </div>
                <div className="col-12 col-md-auto text-center">
                  <Link to="#">This is an Embedded Audio Post ⇒</Link>
                </div>
              </div>
              <div id="comments" className="clearfix">
                <h4 id="comments-title">Reviews</h4>
                <ol className="commentlist clearfix">
                  <li className="comment even thread-even depth-1" id="li-comment-1">
                    <div id="comment-1" className="comment-wrap clearfix">
                      <div className="comment-meta">
                        <div className="comment-author vcard">
                          <span className="comment-avatar clearfix">
                            <img alt="Image" src="demos/articles/images/authors/2.jpg" className="avatar avatar-60 photo avatar-default" height={60} width={60} /></span>
                        </div>
                      </div>
                      <div className="comment-content clearfix">
                        <div className="comment-author">Gunther David<span><Link to="#" title="Permalink to this comment">April 24, 2012 at 10:46 am</Link></span>
                          <small className="comment-ratings text-muted mt-2"><i className="icon-star3" /><i className="icon-star3" /><i className="icon-star3" /><i className="icon-star3" /><i className="icon-star3" /> </small></div>
                        <p>Donec sed odio dui. Nulla vitae elit libero, a pharetra augue. Nullam id dolor id nibh ultricies vehicula ut id elit. Integer posuere erat a ante venenatis dapibus posuere velit aliquet.</p>
                        <Link className="comment-reply-link" href="#"><i className="icon-reply" /></Link>
                      </div>
                      <div className="clear" />
                    </div>
                    <ul className="children">
                      <li className="comment byuser comment-author-_smcl_admin odd alt depth-2" id="li-comment-3">
                        <div id="comment-3" className="comment-wrap clearfix">
                          <div className="comment-meta">
                            <div className="comment-author vcard">
                              <span className="comment-avatar clearfix">
                                <img alt="Image" src="https://1.gravatar.com/avatar/30110f1f3a4238c619bcceb10f4c4484?s=40&d=http%3A%2F%2F1.gravatar.com%2Favatar%2Fad516503a11cd5ca435acc9bb6523536%3Fs%3D40&r=G" className="avatar avatar-40 photo" height={40} width={40} /></span>
                            </div>
                          </div>
                          <div className="comment-content clearfix">
                            <div className="comment-author"><a href="#" rel="external nofollow" className="url">SemiColon</a> (Author)<span><Link to="#" title="Permalink to this comment">April 25, 2012 at 1:03 am</Link></span></div>
                            <p>Thank You so much for your Valuable Review. :)</p>
                            <Link className="comment-reply-link" to="#"><i className="icon-reply" /></Link>
                          </div>
                          <div className="clear" />
                        </div>
                      </li>
                    </ul>
                  </li>
                  <li className="comment byuser comment-author-_smcl_admin even thread-odd thread-alt depth-1" id="li-comment-2">
                    <div id="comment-2" className="comment-wrap clearfix">
                      <div className="comment-meta">
                        <div className="comment-author vcard">
                          <span className="comment-avatar clearfix">
                            <img alt="Image" src="demos/articles/images/authors/1.jpg" className="avatar avatar-60 photo" height={60} width={60} /></span>
                        </div>
                      </div>
                      <div className="comment-content clearfix">
                        <div className="comment-author"><Link to="https://themeforest.net/user/semicolonweb" rel="external nofollow" className="url">John Doe</Link><span><Link to="#" title="Permalink to this comment">April 25, 2012 at 1:03 am</Link></span><small className="comment-ratings text-muted mt-2"><i className="icon-star3" /><i className="icon-star3" /><i className="icon-star3" /><i className="icon-star3" /><i className="icon-star-half2" /> </small></div>
                        <p>Integer posuere erat a ante venenatis dapibus posuere velit aliquet.</p>
                        <Link className="comment-reply-link" to="#"><i className="icon-reply" /></Link>
                      </div>
                      <div className="clear" />
                    </div>
                  </li>
                </ol>
                <div className="clear" />
                <div id="respond">
                  <h4>Leave a <span>Review</span></h4>
                  <form className="row" action="#" method="post" id="commentform">
                    <div className="col-md-4 form-group">
                      <label className="nott ls0 fw-normal" htmlFor="author">Name</label>
                      <input type="text" name="author" id="author" defaultValue size={22} tabIndex={1} className="form-control form-control-pill" />
                    </div>
                    <div className="col-md-4 form-group">
                      <label className="nott ls0 fw-normal" htmlFor="email">Email</label>
                      <input type="text" name="email" id="email" defaultValue size={22} tabIndex={2} className="form-control form-control-pill" />
                    </div>
                    <div className="col-md-4 form-group">
                      <label className="nott ls0 fw-normal" htmlFor="rating">Rating</label>
                      <div className="select-wrapper form-control-pill px-2">
                        <select id="rating" name="rating" className="form-select border-0">
                          <option value disabled selected>-- Select One --</option>
                          <option value="1 Star">1 Star</option>
                          <option value="2 Star">2 Star</option>
                          <option value="3 Star">3 Star</option>
                          <option value="4 Star">4 Star</option>
                          <option value="5 Star">5 Star</option>
                        </select>
                      </div>
                    </div>
                    <div className="w-100" />
                    <div className="col-12 form-group">
                      <label className="nott ls0 fw-normal" htmlFor="comment">Comment</label>
                      <textarea name="comment" cols={58} rows={7} tabIndex={4} className="form-control form-control-pill" defaultValue={""} />
                    </div>
                    <div className="col-12 form-group">
                      <button name="submit" type="submit" id="submit-button" tabIndex={5} value="Submit" className="button button-circle button-large mt-3">Submit a Review</button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <h4>Related Posts:</h4>
      <div className="related-posts recipe-items">
        <div className="row g-0">
          <div className="col-md-3 col-sm-6 bg-white" style={{"border-left":"1px solid #EEE"}}>
            <div className="card">
              <div className="card-body">
                <img src="demos/recipes/images/popular/7.png" alt="image" />
                <div className="d-flex justify-content-between align-items-center mt-4 mb-2">
                  <p className="card-author">By <Link to="#">Bailey Wonger</Link></p>
                  <span className="badge bg-primary bg-color"><i className="icon-star3" /> 4.5</span>
                </div>
                <h3 className="card-title"><Link to="#" className="stretched-link">Baked Salmon with Sweet-Potatoes</Link></h3>
                <h5 className="card-date"><i className="icon-line2-calendar" />Aug 12, 2021</h5>
              </div>
            </div>
          </div>
          <div className="col-md-3 col-sm-6 bg-white">
            <div className="card">
              <div className="card-body">
                <img src="demos/recipes/images/popular/8.png" alt="image" />
                <div className="d-flex justify-content-between align-items-center mt-4 mb-2">
                  <p className="card-author">By <Link to="#">Pelican Steve</Link></p>
                  <span className="badge bg-primary bg-color"><i className="icon-star3" /> 4.2</span>
                </div>
                <h3 className="card-title"><Link to="#" className="stretched-link">A Kollam Grilled Cheese with Vegetables</Link></h3>
                <h5 className="card-date"><i className="icon-line2-calendar" />Aug 8, 2021</h5>
              </div>
            </div>
          </div>
          <div className="col-md-3 col-sm-6 bg-white">
            <div className="card">
              <div className="card-body">
                <img src="demos/recipes/images/popular/5.png" alt="image" />
                <div className="d-flex justify-content-between align-items-center mt-4 mb-2">
                  <p className="card-author">By <Link to="#">Norman Gordon</Link></p>
                  <span className="badge bg-primary bg-color"><i className="icon-star3" /> 4.5</span>
                </div>
                <h3 className="card-title"><Link to="#" className="stretched-link">Pumpkin Bars with Cream Cheese Frosting</Link></h3>
                <h5 className="card-date"><i className="icon-line2-calendar" />Sep 18, 2021</h5>
              </div>
            </div>
          </div>
          <div className="col-md-3 col-sm-6 bg-white">
            <div className="card">
              <div className="card-body">
                <img src="demos/recipes/images/popular/6.png" alt="image" />
                <div className="d-flex justify-content-between align-items-center mt-4 mb-2">
                  <p className="card-author">By <Link to="#">Druid Wensleydale</Link></p>
                  <span className="badge bg-primary bg-color"><i className="icon-star3" /> 4.0</span>
                </div>
                <h3 className="card-title"><Link to="#" className="stretched-link">The Best Homemade Pizza Recipes</Link></h3>
                <h5 className="card-date"><i className="icon-line2-calendar" />Sep 7, 2021</h5>
              </div>
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

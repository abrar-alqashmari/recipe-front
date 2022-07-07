// import { useRef } from "react";
// import { useRequest } from "../../../hooks/useRequest";

// const AddRecipe = () => {
//   const sendRequest = useRequest();
//   const descriptionRef = useRef();
//   const photoRef = useRef();
//   const backgroundRef = useRef();
//   const videoRef = useRef();
//   const nameRef = useRef();
//   const categoryRef = useRef();

  
//   const addrecipe = () => {
//     sendRequest(
//       `${process.env.REACT_APP_API_URL}/recipes`,
//       {}, //header
//       {
//         name: nameRef.current.value,
//         description: descriptionRef.current.value,
//         photo: photoRef.current.value,
//         background: backgroundRef.current.value,
//         category: categoryRef.current.value,
//       },
//       { auth: true, type: "json" },
//       "recipe"
//     ).then((comment) => {
//       window.alert(comment?.messages?.join(" "));
//     });
//   };
//   return (
//     <div className="custombox clearfix">
//       <h4 className="small-title">Create new recipe</h4>
//       <div className="row">
//         <div className="col-lg-12">
//           <div className="form-wrapper">
//             <input
//               type={"text"}
//               ref={nameRef}
//               className="form-control"
//               placeholder="Recipe Name"
//             />
//             <input
//               type={"select"}
//               ref={categoryRef}
//               className="form-control"
//               placeholder="Category"
//             />
//             <input
//               type={"file"}
//               ref={photoRef}
//               className="form-control"
//               placeholder="photo"
//             />
//             <input
//               type={"file"}
//               ref={backgroundRef}
//               className="form-control"
//               placeholder="background photo"
//             />
//             <input
//               type={"text"}
//               ref={videoRef}
//               className="form-control"
//               placeholder="video Url"
//             />
//             <textarea
//               ref={descriptionRef}
//               className="form-control"
//               placeholder="deescription"
//             ></textarea>
//             <button onClick={addrecipe} type="button" className="btn btn-primary">
//               Submits
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AddRecipe;
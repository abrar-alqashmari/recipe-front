import { Link } from "react-router-dom"

const PageTitle = ({ title, content }) => {

    return (
        <section id="page-title" className="pt-5 page-title-parallax page-title-dark include-header" style={{ background: "#111 url('demos/recipes/images/recipes-bg.jpg') center center / cover; padding: 100px 0" }}>
            <div className="container clearfix">
                <div className="row pt-5">
                    <div className="col-md-7 pt-5">
                        <h1 className="nott mb-5 pt-5">{title}</h1>
                        <span data-animate="zoomIn" className="text-white-50">
                            {content}
                        </span>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default PageTitle
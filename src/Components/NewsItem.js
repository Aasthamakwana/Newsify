import React from 'react'

const NewsItem = (props) => {

    let { title, description, imgUrl, newsUrl, author, time, source } = props;
    return (
        <div>
            <div className="card my-3">
                <img src={!imgUrl ? "/blankimage.jpg" : imgUrl} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{title} <span className="badge rounded-pill text-bg-danger">{source}</span></h5>
                    <p className="card-text">{description}</p>
                    <p className="card-text"><small className="text-muted">By {!author ? "Unknown" : author} on {time}</small></p>
                    <a href={newsUrl} target="_blank" rel="noreferrer" className="btn btn-sm btn-dark">Read more</a>
                </div>
            </div>
        </div>
    )
}

export default NewsItem;


//For class-based component (remember to import component)

/*export default class NewsItem extends Component {
render() {
    let { title, description, imgUrl, newsUrl, author, time, source } = this.props;
    content here
}
}*/
import ContentItem from "./ContentItem";

function Content(){
    return(
        <div className="content-wrapper">
            <ContentItem></ContentItem>
            <hr />
            <ContentItem></ContentItem>
            <hr />
            <ContentItem></ContentItem>
        </div>
    );
}
export default Content;
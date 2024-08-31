import BlogPost from "../data_types/BlogPost";
import Box from "./Box";
import { Link } from "react-router-dom";
interface BlogPostPreviewProps {
  postId: string;
  post: BlogPost;
}

function BlogPostPreview(props: BlogPostPreviewProps) {
  return (
    <div style={{ textAlign:"center", display: "inline-block", userSelect: "none" }}>
        <Box>
        <Link to={"../blog/" + props.postId}><div className="BigHover">{props.post.title}</div></Link>
        </Box>
    </div>
  );
}

export default BlogPostPreview;

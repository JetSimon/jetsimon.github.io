import { useEffect, useState } from 'react';
import './BlogPostList.css';
import BlogPostPreview from './components/BlogPostPreview';
import ThreeText from './components/ThreeText';
import BlogPost from './data_types/BlogPost';
import BlogPostDataBase from './data_types/BlogPostDatabase';

interface BothBlogData {
    postId : string,
    post : BlogPost
}

function BlogPostList() {

    const [ postIds, setPostIds ] = useState<BlogPostDataBase | null>(null);
    const [bothBlogData, setBothBlogData] = useState<BothBlogData[] | null>(null);

    useEffect(() => {

        async function fetchData() {
            const postDatabaseRaw = await fetch("../../posts/post-database.json");
            const postDatabase : BlogPostDataBase = await postDatabaseRaw.json();
            setPostIds(postDatabase);

            const allPosts : BothBlogData[] = [];
    
            for(let i = 0; i < postDatabase.posts.length; i++) {
                const postDataRaw = await fetch("../../posts/" + postDatabase.posts[i] + ".json");
                const postContent : BlogPost = await postDataRaw.json();
                allPosts.push({"postId": postDatabase.posts[i], "post":postContent } as BothBlogData);
            }
            
            allPosts.reverse();
            setBothBlogData(allPosts);
        }
    
        fetchData();
    
      }, []);
    
      if(postIds == null || bothBlogData == null) {
        return <h2>Fetching posts...</h2>
      }
    
      return (
        <div className='MainArea BlogPostList'>
            <ThreeText>Blog Posts</ThreeText>
            {bothBlogData.map((x) => <BlogPostPreview key={x.postId} postId={x.postId} post={x.post}></BlogPostPreview>)}
        </div>
      )
}

export default BlogPostList;
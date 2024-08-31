import './App.css'
import './Blog.css'
import ThreeText from './components/ThreeText'
import { redirect, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import BlogPostDataBase from './data_types/BlogPostDatabase';
import BlogPost from './data_types/BlogPost';
import Markdown from 'react-markdown'
import BlogPostList from './BlogPostList';

function Blog() {

  const { postId } = useParams();

  const [ postIds, setPostIds ] = useState<BlogPostDataBase | null>(null);
  const [ postData, setPostData ] = useState<BlogPost | null>(null);
  const [ postMarkdown, setPostMarkdown ] = useState("");
  const [ hadError, setHadError ] = useState(false);

  useEffect(() => {

    async function fetchData() {
        const postDatabaseRaw = await fetch("../../posts/post-database.json");
        const postDatabase : BlogPostDataBase = await postDatabaseRaw.json();
        setPostIds(postDatabase);

        if(postId == null || !postDatabase.posts.includes(postId)) {
            setHadError(true);
            return;
        }

        const postDataRaw = await fetch("../../posts/" + postId + ".json");
        const pData = await postDataRaw.json();
        setPostData(pData);

        const postMarkdownRaw = await fetch("../../posts/" + postId + ".md");
        const pMarkdown = await postMarkdownRaw.text();
        setPostMarkdown(pMarkdown);
    }

    fetchData();

  }, []);

  if(hadError) {
    redirect("/error-post-not-found");
  }

  if(hadError || postIds == null || postData == null || postMarkdown == "") {
    return <></>
  }

  return (
    <div className='BlogArea'>
        <div className='BlogTitleArea'>
            <ThreeText>{postData.title}</ThreeText>
        </div>
        <Markdown>{postMarkdown}</Markdown>
    </div>
  )
}

export default Blog

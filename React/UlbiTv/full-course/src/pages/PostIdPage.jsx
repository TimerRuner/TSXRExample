import React, {useEffect, useState} from "react";
import { useParams } from "react-router-dom";
import Loader from "../components/UI/Loader/Loader";
import { useFetching } from "../hooks/useFetching";
import PostService from "../PostService";

const PostIdPage = () => {
  const params = useParams();
  const [post, setPost] = useState({})
  const [comments, setComments] = useState([])
  const [fetchingPostById, isLoading, error] = useFetching(async (id) => {
    const response = await PostService.getById(id)
    setPost(response.data)
  })
  const [fetchingComments, isComLoading, comError] = useFetching(async (id) => {
    const response = await PostService.getCommentByPostId(id)
    setComments(response.data)
  })

  useEffect(() => {
    fetchingPostById(params.id)
    fetchingComments(params.id)
  }, [])

  return (
    <div>
      <h1>Ви перейшли на сторінку поста з id = {params.id}</h1>
      {isLoading 
        ? <Loader/>
        : <div>{post.id}. {post.title}</div>
      }
      <h1>
        Коменти
      </h1>
      {
        isLoading 
          ? <Loader/>
          : <div>
            {comments.map(com => {
              return(
              <div key={com.id} style={{marginTop:'15px'}}>
                <h5>{com.email}</h5>
                <div>{com.body}</div>
              </div>)
            })}
          </div>
      }
      
    </div>
  )
}

export default PostIdPage
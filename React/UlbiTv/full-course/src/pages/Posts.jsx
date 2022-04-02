
import React, { useState, useEffect, useRef } from "react";
import { usePosts } from '../hooks/usePosts';
import { useFetching } from '../hooks/useFetching';
import PostService from "../PostService";
import {getPagesCount} from "../utils/pages";
import MyButton from "../components/UI/button/MyButton";
import MyModal from "../components/UI/MyModal/MyModal";
import PostForm from "../components/PostForm";
import PostFilter from "../components/PostFilter";
import PostList from "../components/PostList";
import Pagination from "../components/UI/Pagination/Pagination";
import Loader from "../components/UI/Loader/Loader";
import { useObserver } from "../hooks/useObserver";
import MySelect from "../components/UI/select/MySelect";

function Posts(){
  const [posts, setPosts] = useState([])
  const [filter, setFilter] = useState({
    sort: '',
    query: ''
  })
  const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query);
  
  const [modal, setModal] = useState(false);
  const lastElement = useRef();

  const [totalPages, setTotalPages] = useState(0);
  const [limit, setLimit] = useState(10);
  const [page, setPage] = useState(1);


  const [fetchPosts, isPostsLoading, postError] = useFetching(async (limit, page) => {
    const response = await PostService.getAll(limit, page);
    setPosts([...posts, ...response.data])
    const totalCount = response.headers['x-total-count'];
    setTotalPages(getPagesCount(totalCount, limit));
  })

  useObserver(lastElement, page < totalPages, isPostsLoading, () => {
    setPage(page + 1)
  })

  useEffect(() => {
    fetchPosts(limit, page)
  }, [page, limit])


  const createPost = (newPost)  => {
    setPosts([...posts, newPost]);
    setModal(false);
  }

  const removePost = (post) => {
    setPosts(posts.filter(p => p.id !== post.id))
  }

  const changePage = (page) => {
    setPage(page)
  }

  return (
    <div className='App'>
      <MyButton onClick={fetchPosts}>Загрузити пости</MyButton>
      <MyButton style={{marginTop: '30px'}} onClick={() => setModal(true)}>Створити користувача</MyButton>
      <MyModal visible={modal} setVisible={setModal}>
        <PostForm create={createPost}/>
      </MyModal>
      <hr style={{margin: '15px 0'}}/>
      <PostFilter
        filter={filter}
        setFilter={setFilter}
      />
      <MySelect
        value={limit}
        onChange={value => setLimit(value)}
        defaultValue= 'К-сть елементів на сторінці'
        options={[
          {value: 5, name: '5'},
          {value: 10, name: '10'},
          {value: 25, name: '25'},
          {value: -1, name: 'Показати все'},
        ]}
      />
      {
        postError && (
          <h1>Відбулась помилка</h1>
        )
      }

      <PostList remove={removePost} posts={sortedAndSearchedPosts} title="Список постів" />
      <div ref={lastElement} style={{height: 20, background: 'red'}}></div>
      {isPostsLoading &&
         <div style={{display: 'flex', justifyContent: 'center', marginTop: '50px'}}><Loader/></div>
      }


      <Pagination
       page={page}
       changePage={changePage}
       totalPages={totalPages}
      />


    </div>
  )
}

export default Posts;
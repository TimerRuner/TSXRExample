import React from "react";
import Post from "./Post";
import {useDispatch, useSelector} from "react-redux";
import {fetchPosts} from "../redux/actions";
import {Loader} from "./Loader";


export default () => {

    const dispatch = useDispatch(); //отримуємо доступ до методів dispatch через хуки react-redux . аналог mapDispatchToProps
    const posts = useSelector(state => state.posts.fetchedPosts)//хук, що ловить стейт і дозволяє із нього забрати конкретні дані аналог mapStateToProps
    const loading = useSelector(state => state.app.loading)

    if(loading) {
        return <Loader/>
    }


    if(!posts.length) {
        return <button
            className="btn btn-primary"
            onClick={() => dispatch(fetchPosts())}
        >Загрузити</button>
    }
    return posts.map(post => <Post post={post} key={post.id}/>)
}
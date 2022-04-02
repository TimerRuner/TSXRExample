import React, {useState} from 'react';
import MyButton from './UI/button/MyButton';
import MyInput from './UI/input/MyInput';

const PostForm = ({ create }) => {

  const [post, setPost] = useState({
    title: '',
    body: ''
  });

  const addNewPost = (e) => {
    e.preventDefault();
    const newPost = {
      ...post,
      id: Date.now()
    }
    create(newPost);
    setPost({title: '', body: ''});
  }

  return (
    <div>
      <form>
        {/* Керована компонента */}
        <MyInput
          value={post.title}
          onChange={e => setPost({...post, title: e.target.value})}
          type="text"
          placeholder='Назва поста'
        />
        <MyInput
          type="text"
          placeholder='Опис поста'
          value={post.body}
          onChange={e => setPost({...post, body: e.target.value})}
        />
        <MyButton type="submit" onClick={addNewPost}>Створити пост</MyButton>
      </form>
    </div>
  )
};

export default PostForm;
import React , {useState} from 'react'
import './App.css';
import Navbar from './Navbar'
import InputPost from './InputPost'
import Post from './Post'

let id = 1 ;

function App() {

  const [posts,setPosts] = useState([]);

  const addPost = (title) => {
    const newPost = {id:id , title:title};
    //Set เป็น Array ตัวใหม่
    setPosts([newPost, ...posts]);
    id += 1;
  }

  function deletePost(id){
    //Filter วน Post แล้วรับ Post แต่ละตัว
    // ID เท่่ากันไม่ใส่
    const updatePosts = posts.filter((post)=> post.id !== id);
    setPosts(updatePosts);
  }

  return (
    <div className="App">
      <Navbar />
      <InputPost addPost = {addPost} />
      {/* วน Post ออกมาแสดง */}
      {posts.map((post)=> (
        <Post key ={post.id} id={post.id} title={post.title} deletePost={deletePost} />
      ))}

    </div>
  );
}

export default App;

import React from "react";
import PostLists from "./fetures/posts/PostLists";
import AddPostForm from "./fetures/posts/AddPostForm";
// import Counter from './fetures/counter/Counter'

const App = () => {
  return (
    <div className=" container mx-auto">
      {/* <Counter /> */}
      <div>
        <AddPostForm />
        <PostLists />
      </div>
    </div>
  );
};

export default App;

import React , {useState} from 'react';
import PropTypes from 'prop-types';

function InputPost({ addPost }){

    const [input , setInput] = useState('');

    function onChange(event){
        setInput(event.target.value);
    }


    function onKeyDown(event) {
        const newPost = event.target.value;
        // newPost มีค่าไหม
        if (event.key === 'Enter' && newPost) {
          addPost(newPost);
          setInput('');
        }
      }


    return (
        <div className="Input">
            <div className="Input__header">Create Post</div>
            <input className="Input__field"type="text" value={input} onChange={onChange} onKeyDown={onKeyDown} />
        </div>
    )
}

//เช็คค่าที่ส่งมา
InputPost.propTypes = {
    //type Function และต้องส่งค่ามา
    addPost: PropTypes.func.isRequired
};

export default InputPost;
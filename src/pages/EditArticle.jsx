import {useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, useHistory } from 'react-router-dom';

import * as articleService from '../services/article';

function EditArticle() {
    let history = useHistory();
    const [title, setTitle] = useState('');
	const [description, setDescription] = useState('');
    const [image, setImage] = useState(null);

    let { id } = useParams(); 

    const [article, setArticle] = useState('');
    // let user = JSON.parse(localStorage.getItem('user'));

    useEffect(() => {
        articleService.fetchArticle(id)
        .then(data=> {
            setArticle(data.data);
            setTitle(data.data.title);
            setDescription(data.data.description);
            // setIsLoading(false);
        })
        console.log(id);
    },[]);

	const handleChange = (event) => {
		
		let name = event.target.name;
		// console.log(name);
    	let val = event.target.value;
		switch(name) {
			case 'title':
				setTitle(val);
				break;
			case 'description':
				setDescription(val);
				break;
            case 'image':
                setImage(event.target.files[0]);
                break;
			default:
				console.log('crp');
				break;
		}
	}

	const handleSubmit = (e)=> {
		// console.log(image);
		e.preventDefault();
        let token = localStorage.getItem('token');
        let userInfo = JSON.parse(localStorage.getItem('user'));
        console.log(userInfo);
        let url = 'http://localhost:8848/api/users/' + userInfo.id + '/articles/' + article.id;
        const formData = new FormData();
        formData.append('title', title);
        formData.append('description', description);
        if(image)
            formData.append('image', image, image.name);

        articleService.updateArticle(id, formData)
        .then(function (response) {
			console.log(response);
            history.push('/articles/'+ article.id);
		  })
		  .catch(function (error) {
			console.log(error);
		  });

	} 


    return (
        <div>
            <form  onSubmit={handleSubmit}>
                <div className="form-group">
                    <label>Title</label>
                    <input type="text" className="form-control" name="title" value={title} placeholder="Enter Title" onChange={handleChange}/>
                </div>
                <div className="form-group">
                    <label>Description</label>
                    <textarea className="form-control" name="description" rows="3" value={description} onChange={handleChange}></textarea>
                </div>
                <div className="custom-file">
                    <input type="file" className="custom-file-input" name="image" onChange={handleChange} required/>
                    <label className="custom-file-label">Choose Image</label>
                </div>
                <input type="submit" className="btn btn-primary" value="Submit" />
                {/* <button type="submit" >Create</button> */}
            </form>
        </div>
    )
}

export default EditArticle;
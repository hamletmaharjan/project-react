import {useState, useEffect } from 'react';
import { useParams, useHistory } from 'react-router-dom';

import * as articleService from '../services/article';

function EditArticle() {
  let history = useHistory();
  const [title, setTitle] = useState('');
	const [description, setDescription] = useState('');
  const [image, setImage] = useState(null);

  let { id } = useParams(); 

  const [article, setArticle] = useState('');

  useEffect(() => {
    articleService.fetchArticle(id)
    .then(data=> {
        setArticle(data.data);
        setTitle(data.data.title);
        setDescription(data.data.description);
    })
  },[]);

	const handleChange = (event) => {
		let name = event.target.name;
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
				console.log('invalid');
				break;
		}
	}

	const handleSubmit = (e)=> {
		e.preventDefault();
    const formData = new FormData();
    formData.append('title', title);
    formData.append('description', description);
    if(image)
        formData.append('image', image, image.name);

    articleService.updateArticle(id, formData)
    .then(function (response) {
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
        <input type="submit" style={{marginTop: 15}} className="btn btn-primary" value="Submit" />
      </form>
    </div>
  )
}

export default EditArticle;

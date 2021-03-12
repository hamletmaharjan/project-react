import {useState } from 'react';
import { useHistory } from 'react-router-dom';

import * as articleService from '../../services/article';

function CreateArticle() {
  let history = useHistory();
  const [title, setTitle] = useState('');
	const [description, setDescription] = useState('');
  const [image, setImage] = useState(null);

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
    formData.append('image', image, image.name);

    articleService.createArticle(formData)
    .then(function (response) {
      history.push('/');
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
          <input type="text" className="form-control" name="title" placeholder="Enter Title" onChange={handleChange} required/>
        </div>
        <div className="form-group">
          <label>Description</label>
          <textarea className="form-control" name="description" rows="3" onChange={handleChange} required></textarea>
        </div>
        <div className="form-group custom-file">
          <label className="custom-file-label">Choose Image</label>
          <input type="file" className="custom-file-input" name="image" onChange={handleChange} required/>
          
        </div>
        <input type="submit" style={{marginTop: 15}} className="btn btn-primary" value="Submit" />
      </form>
    </div>
  )
}

export default CreateArticle;

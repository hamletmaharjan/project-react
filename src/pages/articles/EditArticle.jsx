import { connect } from 'react-redux';
import { useState, useEffect } from 'react';
import { useParams, useHistory } from 'react-router-dom';

import * as articleService from '../../services/article';

import { addArticle, updateArticle } from '../../actions/articleAction';

function EditArticle(props) {
  let history = useHistory();
  const [title, setTitle] = useState('');
	const [description, setDescription] = useState('');
  const [image, setImage] = useState(null);

  let { id } = useParams(); 

  useEffect(() => {
    // articleService.fetchArticle(id)
    // .then(data=> {
    //     setArticle(data.data);
    //     setTitle(data.data.title);
    //     setDescription(data.data.description);
    // })
    if(props.article){
      setTitle(props.article.title);
      setDescription(props.article.description);
    }
    else {
      articleService.fetchArticle(id)
      .then(data => {
        props.addArticle(data.data);
      });
    }
    
  },[id,props]);

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
      props.updateArticle(id, response.data);
      history.push('/articles/'+ props.article.id);
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
          <input type="file" className="custom-file-input" name="image" onChange={handleChange}/>
          <label className="custom-file-label">Choose Image</label>
        </div>
        <input type="submit" style={{marginTop: 15}} className="btn btn-primary" value="Submit" />
      </form>
    </div>
  )
}

// export default EditArticle;

const mapStateToProps = (state, ownProps) => {
  let id = parseInt(ownProps.match.params.id);
  console.log(id);
	return {
	  article: state.articleReducer.articles.find(article => article.id === id)
	}
}
  
const mapDispatchToProps = (dispatch) => {
  return {
    addArticle: (article) => dispatch(addArticle(article)),
    updateArticle: (id, article) => dispatch(updateArticle(id, article))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(EditArticle);

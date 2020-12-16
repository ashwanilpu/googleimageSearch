import React from 'react';
import axios from 'axios';
import Searchfield from './Searchfield';
import Imagelist from './Imagelist';

class App extends React.Component{
  state={images:[]};
    handleInput = async(term)=>{
      const response=await axios.get('https://api.unsplash.com/search/photos',{
        params:{query: term},
        headers:{ Authorization :'Client-ID CHlYTbx6KnN2HBVjtzo4wIKreBvGGvYBlvWYNhmHqeo'}
           
     });
       this.setState({images:response.data.results});  
    }

      render() {
        return (
        <div>
         <Searchfield  onSubmit={this.handleInput}/>
         <Imagelist images={this.state.images}/>
        </div>
        );
     }
}
export default App;
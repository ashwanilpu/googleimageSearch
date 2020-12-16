import React from "react";
import './searchfield.css';

class Searchfield extends React.Component{
    state={ term : '' };
    
 onFormsubmit = event => {
        event.preventDefault();
        this.props.onSubmit(this.state.term);
    }
    render(){
        return(
         <div className="input">
             <form onSubmit={this.onFormsubmit}>
                 <label>Image Search</label>
                <input type="text"  value={this.state.term} onChange={e=>{this.setState({term:e.target.value})}}/>
             </form>
         </div>

        );
    }
}

export default Searchfield;
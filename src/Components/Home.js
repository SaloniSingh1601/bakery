import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import "../Assets/css/cart.css";
import { addToCart } from './actions/cartActions';

 class Home extends Component{
    
    handleClick = (id)=>{
        this.props.addToCart(id); 
    }

    render(){
        let itemList = this.props.items.map(item=>{
            return(
                <div className="card" key={item.id}>
                        <div className="card-image">
                            <img src={item.img} alt={item.title}/>
                            <div className="card-title">{item.title}</div>
                            <Link to="/cart" className="btn-floating halfway-fab waves-effect waves-light green" onClick={()=>{this.handleClick(item.id)}}><i className="material-icons">add</i></Link>
                        </div>

                        <div className="card-content">
                            <p>{item.desc}</p>
                            <p><b>Price:Rs. {item.price}</b></p>
                        </div>
                 </div>

            )
        })

        return(
            <div className="container">
                <h3 className="center">Our Menu</h3>
                <div className="box">
                    {itemList}
                </div>
            </div>
        )
    }
}
const mapStateToProps = (state)=>{
    return {
      items: state.items
    }
  }
const mapDispatchToProps= (dispatch)=>{
    
    return{
        addToCart: (id)=>{dispatch(addToCart(id))}
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Home)
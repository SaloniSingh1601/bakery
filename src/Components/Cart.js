import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { Card } from 'reactstrap';
import { removeItem,addQuantity,subtractQuantity} from './actions/cartActions';
import "../Assets/css/cart.css";
import PlaceOrder from './PlaceOrder'
class Cart extends Component{

    //to remove the item completely
    handleRemove = (id)=>{
        this.props.removeItem(id);
    }
    //to add the quantity
    handleAddQuantity = (id)=>{
        this.props.addQuantity(id);
    }
    //to substruct from the quantity
    handleSubtractQuantity = (id)=>{
        this.props.subtractQuantity(id);
    }
    render(){
              
        let addedItems = this.props.items.length ?
            (  
                this.props.items.map(item=>{
                    return(
                        <li className="collection-item avatar" key={item.id}>
                                    <div className="item-img" > 
                                        <img src={item.img} alt={item.img} className="dessert-img"/>
                                    </div>
                                        <div className="item-desc">
                                            <div className="item-cart">
                                            <div className="desc-item">
                                            <div className="title">{item.title}</div>
                                            <p>{item.desc}</p>
                                            <p><b>Rs. {item.price}</b></p> 
                                            </div>
                                            <div className="add-remove">
                                                <Link to="/cart"><i className="material-icons" onClick={()=>{this.handleAddQuantity(item.id)}}>add</i></Link>
                                                <b>{item.quantity}</b> 
                                                <Link to="/cart"><i className="material-icons" onClick={()=>{this.handleSubtractQuantity(item.id)}}>remove</i></Link>
                                            </div>
                                            </div>
                                        {/* <button className="waves-effect waves-light btn pink remove" onClick={()=>{this.handleRemove(item.id)}}>Remove</button> */}
                                        </div>
                                </li>
                    )
                })
            ):

             (
                <p>Nothing.</p>
             )
       return(
            <div className="container">
                <div className="cart">
                    <div className="your-cart">
                        <h2>Your Cart</h2>
                        <Card className="cart-summary">
                            <div className="cart-cnt">
                                <i className="material-icons">shopping_bag</i>
                                <span className="no-of-items">{this.props.items.length}</span>
                            </div>
                            <ul className="collection">
                                {addedItems}
                            </ul>
                            <PlaceOrder />   
                        </Card>
                    </div>
                </div>        
            </div>
       )
    }
}


const mapStateToProps = (state)=>{
    return{
        items: state.addedItems,
        //addedItems: state.addedItems
    }
}
const mapDispatchToProps = (dispatch)=>{
    return{
        removeItem: (id)=>{dispatch(removeItem(id))},
        addQuantity: (id)=>{dispatch(addQuantity(id))},
        subtractQuantity: (id)=>{dispatch(subtractQuantity(id))}
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Cart)
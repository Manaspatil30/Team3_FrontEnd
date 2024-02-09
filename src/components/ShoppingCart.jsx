import React from 'react';
import '/cart.css';

function ShoppingCart() {
    return (
        <>
            <section id="cart-container" className="container my-5">
                <table width="100%">
                    <thead>
                        <tr>
                            <td>Remove</td>
                            <td>Image</td>
                            <td>Product</td>
                            <td>Price</td>
                            <td>Quantity</td>
                            <td>Total</td>
                        </tr>
                    </thead>

                    <tbody>
                        <tr>
                            <td><a href="#"><i className="fas fa-trash-alt"></i></a></td>
                            <td><img src="https://images-eu.ssl-images-amazon.com/images/I/51vUIAqFdvL._AC_UL600_SR600,600_.jpg" alt="" /></td>
                            <td>
                                <h5>Cheese</h5>
                            </td>
                            <td><h5>£1</h5></td>
                            <td><input className="w-25 pl-1" defaultValue="1" type="number" /></td>
                            <td><h5>£1</h5></td>    
                        </tr>
                        <tr>
                            <td><a href="#"><i className="fas fa-trash-alt"></i></a></td>
                            <td><img src="https://assets.sainsburys-groceries.co.uk/gol/6528110/1/640x640.jpg" alt="" /></td>
                            <td>
                                <h5>Bread</h5>
                            </td>
                            <td><h5>£1</h5></td>
                            <td><input className="w-25 pl-1" defaultValue="1" type="number" /></td>
                            <td><h5>£1</h5></td>    
                        </tr>
                        <tr>
                            <td><a href="#"><i className="fas fa-trash-alt"></i></a></td>
                            <td><img src="https://i0.wp.com/kerrsdairy.co.uk/wp-content/uploads/2021/12/1-Litre-Whole-Milk-Organic-Poly-Carton.jpg" alt="" /></td>
                            <td>
                                <h5>Milk</h5>
                            </td>
                            <td><h5>£1</h5></td>
                            <td><input className="w-25 pl-1" defaultValue="1" type="number" /></td>
                            <td><h5>£1</h5></td>    
                        </tr>
                    </tbody>
                </table>
            </section>

            <section id="cart-bottom" className="container">
                <div className="row">
                    <div className="coupon col-lg-6 col-md-6 col-12 mb-4">
                        <div>
                            <h5>COUPON</h5>
                            <p>Enter your coupon code if you have one.</p>
                            <input type="text" placeholder="Coupon Code" />
                            <button>APPLY COUPON</button>
                        </div>
                    </div>
                    <div className="total col-lg-6 col-md-6 col-12">
                        <div>
                            <h5>CART TOTAL</h5>
                            <div className="d-flex justify-content-between">
                                <h6>Subtotal</h6>
                                <p>£3</p>
                            </div>
                            <div className="d-flex justify-content-between">
                                <h6>Delivery</h6>
                                <p>£5</p>
                            </div>
                            <hr className="second-hr" />
                            <div className="d-flex justify-content-between">
                                <h6>Total</h6>
                                <p>£8</p>
                            </div>
                            <button className="ml-auto">PROCEED TO CHECKOUT</button>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default ShoppingCart;

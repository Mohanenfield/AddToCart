import React, { Component } from "react";
import container from "./cartDetails";
class Card extends Component {
    constructor() {
        super();
        this.state = container
    }
    increment = (index) => {
        if (this.state.cartData[index].productAction === "Add to cart") {
            this.setState({
                count: this.state.count + 1
            }
            )
            this.setState(state => {
                const cartData = [...state.cartData]
                cartData[index].disable = true
                return cartData
            })
        }
    }
    decrement = (index) => {
        if (this.state.count !== 0) {
            this.setState({
                count: this.state.count - 1
            },
                alert("Are you sure to remove it from cart")
            )
            this.setState(state => {
                const cartData = [...state.cartData]
                cartData[index].disable = false
                return cartData
            })
        }
    }


    render() {
        return (
            <>
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <div className="container px-4 px-lg-5">
                        <a className="navbar-brand" href="#!">Start Bootstrap</a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><span className="navbar-toggler-icon"></span></button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0 ms-lg-4">
                                <li className="nav-item"><a className="nav-link active" aria-current="page" href="#!">Home</a></li>
                                <li className="nav-item"><a className="nav-link" href="#!">About</a></li>
                                <li className="nav-item ">
                                    <a className="nav-link active"  href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">Shop</a>
                                </li>
                            </ul>
                            <form className="d-flex">
                                <button className="btn btn-outline-dark" type="submit" >
                                    <i className="bi-cart-fill me-1"></i>
                                    {this.state.name}
                                    <span className="badge bg-dark text-white ms-1 rounded-pill">{this.state.count}</span>
                                </button>

                            </form>
                        </div>
                    </div>
                </nav>
                <header className="bg-dark py-5">
                    <div className="container px-4 px-lg-5 my-5">
                        <div className="text-center text-white">
                            <h1 className="display-4 fw-bolder">Shop in style</h1>
                            <p className="lead fw-normal text-white-50 mb-0">With this shop hompeage template</p>
                        </div>
                    </div>
                </header>
                <section className="py-5">
                    <div className="container px-4 px-lg-5 mt-5">
                        <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
                            {this.state.cartData.map((e, index) => {

                                return (
                                    <div key={index}>
                                        <div className="col mb-5">
                                            <div className="card h-100">
                                                <div className="badge bg-dark text-white position-absolute" style={{ top: "0.5rem", right: "0.5rem" }}>{e.top}</div>
                                                <img className="card-img-top" src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg" alt="..." />
                                                <div className="card-body p-4">
                                                    <div className="text-center">
                                                        <h5 className="fw-bolder">{e.productName}</h5>
                                                        <div className="d-flex justify-content-center small text-warning mb-2">
                                                            <div className="bi-star-fill">{e.star}</div>
                                                            <div className="bi-star-fill">{e.star}</div>
                                                            <div className="bi-star-fill">{e.star}</div>
                                                            <div className="bi-star-fill">{e.star}</div>
                                                            <div className="bi-star-fill">{e.star}</div>
                                                        </div>
                                                        <span className="text-muted text-decoration-line-through">{e.productPrice}</span>
                                                        {e.productPriceOffer}
                                                    </div>
                                                </div>
                                                <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                                                    <div className="text-center"><button className="btn btn-outline-dark mt-auto" disabled={e.disable} onClick={() => { this.increment(index) }}>{e.productAction}</button></div>
                                                    {e.remove.map((f) => {
                                                        if (e.productAction === "Add to cart") {
                                                            return (
                                                                <div className="text-center"><button className="btn btn-outline-dark mt-auto" onClick={() => { this.decrement(index) }}>{f.name}</button></div>


                                                            )
                                                        }
                                                    })}

                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                );
                            })}



                        </div>
                    </div>

                </section>
            </>
        );
    }
}
export default Card;
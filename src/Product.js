import React from 'react'
import Button from '@material-ui/core/Button';
import { PopupboxManager, PopupboxContainer } from 'react-popupbox';

import './styles/Product.css'

function Product({title, imageSrc, priceFM, pricePMO, useStatus}) {
    
    function openPopupbox() {
        const content = (
          <div>
            <p className="quotes">Work like you don't need the money.</p>
            <p className="quotes">Dance like no one is watching.</p>
            <p className="quotes">And love like you've never been hurt.</p>
            <span className="quotes-from">― Mark Twain</span>
          </div>
        )
        PopupboxManager.open({ content })
      }

    return (
        <div className="product">

            <div className="product__info">
                <h4 className="product__info--name">
                    {title}
                </h4>
                <h5 className="product__info--price">
                    <small>₹</small> {priceFM} + 
                    <span className="product__info--price--permonth"> <small>₹</small> {pricePMO}</span>
                </h5>
                <h5 className="product__info--useStatus">{useStatus} People used this</h5>
            </div>

            <img className="product__img" src={imageSrc} alt="Product" />

            <Button variant="outlined" className="product_selectButton" onClick={openPopupbox} >Get It</Button>
        </div>
    )
}

export default Product



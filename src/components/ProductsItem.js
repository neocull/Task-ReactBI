import React from 'react'

class ProductsItem extends React.Component {

    render() {
        const { name, price, quantity } = this.props.items;
        return (
            <tr>
                <td className="article__name">{name}</td>
                <td className="article__price">{price}</td>
                <td className="article__quantity">{quantity}</td>
                <td className="article__buttons">
                    <button onClick={(e) => {
                        console.log(e.target);
                        return this.props.addQuantity(e);
                    }}
                                        className="article__buttons_minus">+</button>
                </td>
            </tr>
        )
    }

}

export { ProductsItem }
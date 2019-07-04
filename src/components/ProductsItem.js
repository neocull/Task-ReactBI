import React from 'react'

class ProductsItem extends React.Component {

    render() {
        const { id, name, price, quantity } = this.props.items;
        return (
            <tr>
                <td className="article__name">{name}</td>
                <td className="article__price">{price}</td>
                <td className="article__quantity">{quantity}</td>
                <td className="article__buttons">
                    <button onClick={() => this.props.addQuantity(id)}
                                        className="article__buttons_minus">+</button>
                </td>
            </tr>
        )
    }

}

export { ProductsItem }

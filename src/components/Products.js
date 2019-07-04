import React from 'react'

import {ProductsItem} from "./ProductsItem";

class Products extends React.Component {

    constructor(props) {
        super(props);
        const {data} = this.props;
        this.state = {
            window: true,
            items: data

        }
    }

    addQuantity = (id) => {
        this.setState({
                ...this.state,
                items: this.state.items.map(item => {
                    if (item.id == id) {
                        item.quantity++;
                    }
                    return item;
                })
            }
        );
    };

    render() {
        return (
            <>
                <table className="products">
                    <caption></caption>
                    <thead>
                    <tr>
                        <th>Название</th>
                        <th>Стоимость</th>
                        <th>Количество</th>
                        <th></th>
                    </tr>
                    </thead>
                    <tbody>
                    {
                        this.state.items.map((item) => {
                            return <ProductsItem key={item.id} items={item} addQuantity={this.addQuantity}/>
                        })
                    }

                    </tbody>
                </table>
                <div className="controls">
                    <button
                        onClick={() => { this.props.updateData(this.state.window)}}
                        className="controls__link">Корзина</button>
                </div>
            </>
        )
    }

}

export { Products }

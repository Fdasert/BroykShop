import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Items from "./components/Items";
import Categories from "./components/Categories";

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      orders: [],
      currentItems: [],
      items: [
        {
            "id": 1,
            "title": "Продукт 1",
            "img": "kros.png",
            "desc": "Описание продукта 1",
            "category": "sneakers",
            "price": 10.99
          },
          {
            "id": 2,
            "title": "Продукт 2",
            "img": "kros2.png",
            "desc": "Описание продукта 2",
            "category": "sneakers",
            "price": 19.99
          },
          {
            "id": 3,
            "title": "Продукт 3",
            "img": "kros3.png",
            "desc": "Описание продукта 3",
            "category": "sneakers",
            "price": 8.49
          },
          {
            "id": 4,
            "title": "Продукт 4",
            "img": "kros6.png",
            "desc": "Описание продукта 4",
            "category": "sneakers",
            "price": 15.29
          },
          {
            "id": 5,
            "title": "Продукт 5",
            "img": "kros5.png",
            "desc": "Описание продукта 5",
            "category": "sneakers",
            "price": 12.99
          },
          {
            "id": 6,
            "title": "Продукт 6",
            "img": "kros7.png",
            "desc": "Описание продукта 6",
            "category": "sneakers",
            "price": 7.99
          }
      ]
    }
    this.state.currentItems = this.state.items
    this.addToOrder = this.addToOrder.bind(this);
    this.deleteOrder = this.deleteOrder.bind(this);
    this.chooseCategory = this.chooseCategory.bind(this);
  }
  render() {
  return (
    <div className="wrapper">
      <Header orders={this.state.orders} onDelete={this.deleteOrder} />
      <Categories chooseCategory={this.chooseCategory} />
      <Items items={this.state.currentItems} onAdd={this.addToOrder}/>
      <Footer />
    </div>
  )
}


chooseCategory(category) {
  if(category === 'all') {
    this.setState({ currentItems: this.state.items })
    return
  }

  this.setState({
    currentItems: this.state.items.filter(el => el.category === category)
  })
}

deleteOrder(id) {
  this.setState({orders: this.state.orders.filter(el => el.id !== id)})
}

  addToOrder(item) {
    let isInArray = false
    this.state.orders.forEach(el => {
      if(el.id === item.id) {
        isInArray = true
      }
    })

    if(!isInArray) {
    this.setState({orders: [...this.state.orders, item] })
    }
  }
}

export default App;

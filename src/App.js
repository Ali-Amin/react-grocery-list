import React from 'react';
import './App.css';

class Item {
  name;
  quantity;
  constructor(n, q) {
    this.name = n;
    this.quantity = q;
  }
}

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentItem: null,
      items: []
    }
  }

  updateCurrentItemName(name) {
    if (this.state.currentItem) {
      const updatedItem = this.state.currentItem;
      updatedItem.name = name;
      this.setState({ currentItem: updatedItem });
    } else {
      const newItem = new Item(name, '');
      this.setState({ currentItem: newItem })
    }
  }

  updateCurrentItemQty(quantity) {
    if (this.state.currentItem) {
      const updatedItem = this.state.currentItem;
      updatedItem.quantity = quantity;
      this.setState({ currentItem: updatedItem });
    } else {
      const newItem = new Item('', quantity);
      this.setState({ currentItem: newItem })
    }
  }

  submitItem() {
    const updatedItems = this.state.items;
    updatedItems.push(this.state.currentItem);
    this.setState({ items: updatedItems, currentItem: null });
  }

  render() {
    return (
      <div>
        <div>
          <label>
            NAME:
          <input
              type="text"
              name="Name"
              value={this.state.tee}
              onChange={(event) => this.updateCurrentItemName(event.target.value)}
            />
          </label>

        </div >
        <div>
          <label>
            QUANTITY:
              <input
              type="text"
              name="Name"
              value={this.state.tee}
              onChange={(event) => this.updateCurrentItemQty(event.target.value)}
            />
          </label>

        </div >
        <button onClick={(e) => {
          this.submitItem();
          console.log(this.state.items);
        }}>
          submit
          </button>
        <div>
          {this.state.items.map((item, index) =>
            <div key={index}>
              <h1>{item.name}</h1>
              <h2 >{item.quantity}</h2>
            </div>
          )}
        </div>
      </div>
    );
  }
}

export default App;

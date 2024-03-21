import React from 'react';
import { useCart } from 'react-use-cart';
import { jsPDF } from 'jspdf';
import './cart.css'

const Cart = () => {
  const {
    isEmpty,
    totalUniqueItems,
    items,
    totalItems,
    cartTotal,
    updateItemQuantity,
    removeItem,
    emptyCart,
  } = useCart();

  const generatePDF = () => {
    const doc = new jsPDF();

    const headerImg  = ''
    const addHeaderImage = () => {
      const pages = doc.internal.getNumberOfPages();
      for (let i = 1; i <= pages; i++) {
        doc.setPage(i);
        // Make sure to adjust the dimensions as needed for your specific image
        doc.addImage(headerImg, 'PNG', 0, 0, doc.internal.pageSize.getWidth() - 0, 0);
      }
    };

    addHeaderImage();

    
    // Set up formatting
    const margin = 12;
    const upperMargin = 30;
    const upperMargin1 = 270;
    const upperMargin2 = 65;
    const lineHeight = 12;
    const rightMargin = 110;
    const maxWidth = doc.internal.pageSize.getWidth() - 2 * margin;
    const pageWidth = doc.internal.pageSize.getWidth(); 

    let yPos = upperMargin;
    const dateX = pageWidth - rightMargin;
    let Ypo6 = upperMargin1 + lineHeight;
    let nYpos = upperMargin2 + lineHeight;

   
    doc.setFontSize(25);
    doc.text('Receipt For Purchased Products', margin, Ypo6);

    doc.setTextColor(255, 0, 0);

    doc.setFontSize(17); // Set the desired font size for the new line
    doc.text('Purchased Products :', margin, nYpos);
      
    doc.setTextColor(0, 0, 0); // RGB for black

    yPos += lineHeight * 1.7


    const date = new Date();
    const dateString = `   ${date.getHours()} :  ${date.getMinutes()}                   ${date.getDate()}     ${date.getMonth() + 1}      ${date.getFullYear()} `;



    doc.setFontSize(16);
    doc.text(`     ${dateString}`, dateX, yPos);


    

// Define table headers
const headers = ['Item', 'Size', 'Quantity', 'Price', 'Total'];
const columnWidths = [maxWidth * 0.4, maxWidth * 0.15, maxWidth * 0.15, maxWidth * 0.15, maxWidth * 0.15];
const additionalOffset = 30; 
const headerYPos = margin + 4 * lineHeight + additionalOffset; 




doc.setFontSize(12);
headers.forEach((header, index) => {
    let headerXPos = margin;
    for (let i = 0; i < index; i++) {
        headerXPos += columnWidths[i];
    }
    doc.text(header, headerXPos, headerYPos);
});

doc.line(margin, headerYPos + 3, margin + maxWidth, headerYPos + 3);

let yPosition = headerYPos + 5; // Start Y position for table rows, adjusted for spacing after the header line

items.forEach((item, index) => {
    const { title, price, size, quantity } = item;
    const row = [title, size, quantity.toString(), `Rs. ${price}`, `Rs. ${price * quantity}`];

    // Increment Y position for the new row
    yPosition += lineHeight;

    // Draw each cell in the row
    row.forEach((text, colIndex) => {
        // Calculate X position for each cell based on column widths
        let cellXPos = margin;
        for (let i = 0; i < colIndex; i++) {
            cellXPos += columnWidths[i];
        }
        doc.text(text, cellXPos, yPosition);
    });

    // Draw a line after each row
    doc.line(margin, yPosition + 3, margin + maxWidth, yPosition + 3);
});



    // Add total
    doc.setFontSize(16);
    const totalText = `Total Amount : Rs.     ${cartTotal}`;
    doc.text(totalText, margin, yPosition + lineHeight);

    // Save the PDF
    doc.save('Saraya Product Receipt.pdf');

    // Optionally clear the cart after purchase
    emptyCart();
  };

  if (isEmpty) return <h1 className="cart-empty">Your Cart is Empty</h1>;

  return (
    <section className="cart-container">
      <div className="cart-header">
        <h5>Cart ({totalUniqueItems}) Total Items: ({totalItems})</h5>
      </div>
      <div className="cart-items">
        {items.map((item, index) => (
          <div className="cart-item" key={index}>
            <div className="item-image">
              <img src={item.img} alt={item.title} />
            </div>
            <div className="item-details">
              <h6>{item.title} ({item.size})</h6>
              <p className="item-price">Rs. {item.price}</p>
              <div className="quantity-controls">
                <button
                  className="quantity-decrease"
                  onClick={() => updateItemQuantity(item.id, item.quantity - 1)}
                  disabled={item.quantity === 1}
                >
                  -
                </button>
                <span>Quantity: {item.quantity}</span>
                <button
                  className="quantity-increase"
                  onClick={() => updateItemQuantity(item.id, item.quantity + 1)}
                >
                  +
                </button>
              </div>
              <button className="remove-item" onClick={() => removeItem(item.id)}>
                Remove Item
              </button>
            </div>
          </div>
        ))}
      </div>
      <div className="cart-footer">
        <h2>Total Price: Rs. {cartTotal}</h2>
        <div className="cart-actions">
          <button className="clear-cart" onClick={() => emptyCart()}>
            Clear Cart
          </button>
          <button className="buy-now" onClick={generatePDF}>
            Buy Now
          </button>
        </div>
      </div>
    </section>
  );
  
  
};

export default Cart;

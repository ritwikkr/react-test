import React from "react";
import Wrapper from "../style/ProductCardStyle";

function ProductCard({
  imageURL,
  orderId,
  title,
  messageList,
  latestMessageTimestamp,
}) {
  // Extracting date from timestamp
  const data = new Date(latestMessageTimestamp);
  const year = data.getFullYear();
  const month = String(data.getMonth() + 1).padStart(2, "0");
  const date = String(data.getDate()).padStart(2, "0");

  return (
    <Wrapper>
      <div className="body">
        <div className="image">
          <img src={imageURL} alt={title} />
        </div>
        <div className="content">
          <div className="title">{title}</div>
          <div className="order-id">
            <p>
              Order: <span>{orderId}</span>
            </p>
          </div>
          <div className="message">
            {messageList.map((msg) => (
              // messageId in API is not unique hence adding random numbers
              <div key={msg.messageId + String(Math.random())}>
                <p>{msg.message}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="date">{`${date}/${month}/${year}`}</div>
    </Wrapper>
  );
}

export default ProductCard;

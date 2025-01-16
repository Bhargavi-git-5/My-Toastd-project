import React from "react";

const ProductTag = ({ tag }) => {
  return (
    <div
      className="product-tag"
      style={{
        top: tag.top,
        left: tag.left,
      }}
    >
      <a href={tag.productUrl}>
        <span>{tag.productName}</span>
      </a>
    </div>
  );
};

export default ProductTag;

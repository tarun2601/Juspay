export const handleDragStart = (e, data) => {
  console.log("handleDragStart...");
  // e.dataTransfer.setData("text/plain", JSON.stringify(data));
  e.dataTransfer.setData("text/plain", JSON.stringify(data));
};

export const handleDrag = (e) => {
  e.preventDefault();
  console.log("handleDrag...");
};

export const handleDragEnd = (e) => {
  console.log("handleDragEnd...");
  e.preventDefault();
};

const status = (req, res) => {
  return res
    .status(200)
    .json({ key: "item", titulo: "contrato de numseioque" });
};

export default status;

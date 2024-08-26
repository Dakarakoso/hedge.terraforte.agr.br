function status(request, response) {
  return response.status(200).json({ id: "status" });
}

export default status;

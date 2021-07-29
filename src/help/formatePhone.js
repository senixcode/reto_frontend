const formatePhone = (phone) => phone && Number(phone).toLocaleString().split(".").join(" ")

export default formatePhone
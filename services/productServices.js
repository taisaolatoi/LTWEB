import axios from "axios";
const getCategory = async () => {
    return await axios.get('http://localhost:3000/api/APIcategory')
}
export default { getCategory }
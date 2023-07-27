import { useEffect, useState } from "react";
import ProductCard from "./components/ProductCard";
import Wrapper from "./style/AppStyle";

function App() {
  // Component State
  const [data, setData] = useState([]);
  const [filteredData, setFilterData] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  // Side Effect -> Fetching Data from API
  useEffect(() => {
    fetchData();
  }, []);
  async function fetchData() {
    try {
      const response = await fetch(
        "https://my-json-server.typicode.com/codebuds-fk/chat/chats"
      );
      const data = await response.json();
      setData(data);
      setFilterData(data);
    } catch (error) {
      console.log(error);
    }
  }

  // Filter the data based on searchTerm (which includes both title and orderID)
  function filterData(searchTerm) {
    if (searchTerm.trim() === "") {
      setFilterData(data);
    } else {
      const filterdItems = data.filter(
        (item) =>
          item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
          item.orderId.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFilterData(filterdItems);
    }
  }

  // Handle Search Input
  function handleSearchInput(e) {
    const searchTerm = e.target.value;
    setSearchTerm(searchTerm);
    filterData(searchTerm);
  }

  return (
    <Wrapper>
      <div className="search">
        <div className="title">
          <h1>Filter by Title / Order ID</h1>
        </div>
        <div className="search-bar">
          <input
            type="text"
            value={searchTerm}
            placeholder="Start typing to search"
            onChange={handleSearchInput}
          />
        </div>
      </div>
      <main>
        {data &&
          filteredData.map((chat) => <ProductCard {...chat} key={chat.id} />)}
      </main>
    </Wrapper>
  );
}

export default App;

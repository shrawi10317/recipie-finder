import React, {useState} from 'react'
import { Search } from 'lucide-react'

const SearchBar = ({onSearch}) => {

   const [search, setSearch] = useState('')


   const handleSearch = (e)=>{
       e.preventDefault()



       if (search.trim()) {
         onSearch(search)
       }
   }
  return (
    <form className="search_bar" onSubmit={handleSearch}>

      <input
        type="text"
        placeholder="Search your favourite food..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <button type="submit">
        <Search size={20} />
        Search
      </button>

    </form>
  )
}

export default SearchBar
import styles from "./searchBar.module.css";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
const SearchBar = () => {
  return (
 
      <div className={styles.searchContainer}>
        <input className={styles.input} type="text" placeholder="Search" />
        <MagnifyingGlassIcon className={styles.icon}/>
      </div>
   
  );
};

export default SearchBar;

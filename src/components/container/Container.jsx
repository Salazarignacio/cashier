import SearchBarContainer from "../SearchBarContainer/SearchBarContainer";
import { useEffect, useState } from "react";
import { db } from "../../firebase/firebase";
import { collection, getDocs} from 'firebase/firestore'
import UploadContainer from "../UpLoadContainer/UploadContainer";

export default  function Container() {
  const [data, setData] = useState([]);
  const [search, upload] = useState(true)
  const [button, setButton] = useState('Cargar Productos')

   useEffect(()=>{
    async function fetchData() {
      const itemCollection = collection(db, 'db');
      try {
        const snapshot = await getDocs(itemCollection);
        setData(snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() })));
        console.log(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }

    fetchData();
  }, [])
          return (
    <>
    <button onClick={()=>{upload(!search)}}>{search?'Cargar Productos':'Caja'}</button>
    {search?<SearchBarContainer data={data}/>:<UploadContainer></UploadContainer>}
      
      
    </>
  );
}

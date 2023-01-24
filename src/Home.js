import { useState } from "react";
import Bloglist from "./bloglist";

const Home = () => {
    const [blogs, setBlogs] = useState([
        {title: 'My new website', body: 'lorem ipsu...', author: 'mario', idi: 1 },
        {title: 'Welcome party', body: 'lorem ipsu...', author: 'yoshi', idi: 2 },
        {title: 'My new website', body: 'lorem ipsu...', author: 'mario', idi: 3 }

    ]);

    return ( 
        <div className="home">
           <Bloglist blogs={blogs}  title = "All Blogs"/>
        </div>
     );
}
 
export default Home;
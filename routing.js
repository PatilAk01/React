import { createBrowserRoute } from "react-router-dom";
import ClassComp from "../components/ClassComp";
import FromValComp from "../Hooks/FromValComp";
import ParentComp from "../components/ParentComp";
import MyImangesComp from "../components/MyImangesComp";

const router = createBrowserRoute([
    {path:"classcomp",Element:<ClassComp/>},
    {path: "formval" , Element:<FromValComp/>},
    {path: "parent" , Element:<ParentComp/>},
    {path: "images" , Element:<MyImangesComp/>},
    
    
    
    

    
])


export default router;
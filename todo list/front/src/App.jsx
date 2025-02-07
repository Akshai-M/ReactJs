import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar, { SidebarItem } from "./Components/Jobdashboard";
import {
  House,
  Search,
  Save,
  Telescope,
  Wrench,
  Share2,
  LifeBuoy,
  
} from "lucide-react";
import Setting from './Components/Setting';
import Home from './Components/Home';
import Layout from './Context/Layout';
import Browse from './Components/Browse'
import Find from "./Components/Find";
import Bookmark from './Components/Save'
import Share from './Components/Share'
import Help from "./Components/Help";

const sidebarItems = [
  { icon: <House size={20} />, text: "Home", link: "/", component: <Home /> },
  { icon: <Search size={20} />, text: "Find", link: "/search" , component: <Find/>},
  { icon: <Save size={20} />, text: "Save", link: "/save" , component: <Bookmark/>},
  { icon: <Telescope size={20} />, text: "Browse", link: "/browse", component: <Browse/> },
  { type: "divider" },
  { icon: <Share2 size={20} />, text: "Share", link: "/billings", component: <Share/> },
  { icon: <Wrench size={20} />, text: "Setting", link: "/Settings", component: <Setting /> },
  { icon: <LifeBuoy size={20} />, text: "Help", link: "/help", component: <Help/> },
];

function App() {
  return (
    <Router>
      <div className="flex ">
     
        <Sidebar>
          {sidebarItems.map((item, index) =>
            item.type !== "divider" ? (
              <SidebarItem
                key={index}
                icon={item.icon}
                text={item.text}
                link={item.link}
              />
            ) : (
              <hr key={index} className="my-2 border-gray-300" />
            )
          )}
        </Sidebar>

        
        <div className="flex-1 p-4">
          <Routes>
            {sidebarItems.map(
              (item, index) =>
                item.component && (
                  <Route
                    key={index}
                    path={item.link}
                    element={<Layout>{item.component}</Layout>}
                  />
                )
            )}
            
            
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;

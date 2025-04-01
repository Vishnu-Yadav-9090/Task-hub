import React, { useEffect } from "react";
import Header from "./Component/Header/Header";
import Footer from "./Component/Footer/Footer";
import { Route, Routes, useLocation } from "react-router-dom";
import Contact from "./Component/Contact/Contact";
import Become_seller from "./Component/Become-seller/Become_seller";
import Sign_in from "./Component/Sign_in";
import Join from "./Component/Join";
import Home_v1 from "./Component/Home/Home_v1";
import Home_v2 from "./Component/Home/Home_v2";
import Home_v3 from "./Component/Home/Home_v3";
import Home_v4 from "./Component/Home/Home_v4";
import Home_v5 from "./Component/Home/Home_v5";
import Home_v6 from "./Component/Home/Home_v6";
import Home_v7 from "./Component/Home/Home_v7";
import Home_v8 from "./Component/Home/Home_v8";
import Home_v9 from "./Component/Home/Home_v9";
import Home_v10 from "./Component/Home/Home_v10";
import Service_v3 from "./Component/Browse-Jobs/Services/Service_v3";
import Service_all from "./Component/Browse-Jobs/Services/Service_all";
import Service_single from "./Component/Browse-Jobs/Services/Service_single";
import Service_v1 from "./Component/Browse-Jobs/Services/Service_v1";
import Service_v2 from "./Component/Browse-Jobs/Services/Service_v2";
import Service_v4 from "./Component/Browse-Jobs/Services/Service_v4";
import Service_v6 from "./Component/Browse-Jobs/Services/Service_v6";
import Service_v7 from "./Component/Browse-Jobs/Services/Service_v7";
import Service_v5 from "./Component/Browse-Jobs/Services/Service_v5";
import Project_v1 from "./Component/Browse-Jobs/Projects/Project_v1";
import Project_single from "./Component/Browse-Jobs/Projects/Project_single";
import Job_list_v1 from "./Component/Browse-Jobs/Job View/Job_list_v1";
import Job_list_v2 from "./Component/Browse-Jobs/Job View/Job_list_v2";
import Job_list_v3 from "./Component/Browse-Jobs/Job View/Job_list_v3";
import Job_single from "./Component/Browse-Jobs/Job View/Job_single";
import Dashbord from "./Component/Users/Dashbord/Dashbord";
import Dash_Add_Services from "./Component/Users/Dashbord/Dash_Add_Services";
import Dash_Statement from "./Component/Users/Dashbord/Dash_Statement";
import Dash_saved from "./Component/Users/Dashbord/Dash_saved";
import Dash_massage from "./Component/Users/Dashbord/Dash_massage";
import Dash_Reviews from "./Component/Users/Dashbord/Dash_Reviews";
import Dash_Payouts from "./Component/Users/Dashbord/Dash_Payouts";
import Dash_Invoice from "./Component/Users/Dashbord/Dash_Invoice";
import Dash_Manage_Jobs from "./Component/Users/Dashbord/Dash_Manage_Jobs";
import Dash_My_Profile from "./Component/Users/Dashbord/Dash_My_Profile";
import Dash_Create_Project from "./Component/Users/Dashbord/Dash_Create_Project";
import Dash_Manage_Project from "./Component/Users/Dashbord/Dash_Manage_Project";
import Dash_Manage_Service from "./Component/Users/Dashbord/Dash_Manage_Service";
import Dash_Proposal from "./Component/Users/Dashbord/Dash_Proposal";
import Employee_v1 from "./Component/Users/Employee/Employee_v1";
import Employee_v2 from "./Component/Users/Employee/Employee_v2";
import Employee_single from "./Component/Users/Employee/Employee_single";
import Freelancer_single from "./Component/Users/Freelancer/Freelancer_single";
import Freelancer_v1 from "./Component/Users/Freelancer/Freelancer_v1";
import Freelancer_v2 from "./Component/Users/Freelancer/Freelancer_v2";
import Freelancer_v3 from "./Component/Users/Freelancer/Freelancer_v3";
import About_v1 from "./Component/Pages/About/About_v1";
import About_v2 from "./Component/Pages/About/About_v2";
import Blog_List_v1 from "./Component/Pages/Blog/Blog_List_v1";
import Blog_List_v2 from "./Component/Pages/Blog/Blog_List_v2";
import Blog_List_v3 from "./Component/Pages/Blog/Blog_List_v3";
import Blog_single from "./Component/Pages/Blog/Blog_single";
import Shop_single from "./Component/Pages/Shop/Shop_single";
import Shop_card from "./Component/Pages/Shop/Shop_card";
import Shop_checkout from "./Component/Pages/Shop/Shop_checkout";
import Shop_order from "./Component/Pages/Shop/Shop_order";
import Shop_list from "./Component/Pages/Shop/Shop_list";
import No_page from "./Component/Pages/No_page";
import Faq from "./Component/Pages/Faq";
import Help from "./Component/Pages/Help";
import Invoice from "./Component/Pages/Invoice";
import Pricing from "./Component/Pages/Pricing";
import Terms from "./Component/Pages/Terms";
import Ui_elements from "./Component/Pages/Ui_elements";

function App() {
  const { pathname } = useLocation(); // Get current page URL

  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to top on route change
  }, [pathname]);
  return (
    <>
      <Header />
      <Routes>

        {/* Home all patha start*/}
        <Route path="/" element={<Home_v1/>} />
        <Route path="/Home-v1" element={<Home_v1/>} />
        <Route path="/Home-v2" element={<Home_v2/>} />
        <Route path="/Home-v3" element={<Home_v3/>} />
        <Route path="/Home-v4" element={<Home_v4/>} />
        <Route path="/Home-v5" element={<Home_v5/>} />
        <Route path="/Home-v6" element={<Home_v6/>} />
        <Route path="/Home-v7" element={<Home_v7/>} />
        <Route path="/Home-v8" element={<Home_v8/>} />
        <Route path="/Home-v9" element={<Home_v9/>} />
        <Route path="/Home-v10" element={<Home_v10/>} />
        {/* Home all patha end*/}

        
        {/* Browser Jobs all patha start */}

        {/* Browser Jobs Services patha start */}
        <Route path="/Service-all" element={<Service_all/>} />
        <Route path="/Service-single" element={<Service_single/>} />
        <Route path="/Service-v1" element={<Service_v1/>} />
        <Route path="/Service-v2" element={<Service_v2/>} />
        <Route path="/Service-v3" element={<Service_v3/>} />
        <Route path="/Service-v4" element={<Service_v4/>} />
        <Route path="/Service-v5" element={<Service_v5/>} />
        <Route path="/Service-v6" element={<Service_v6/>} />
        <Route path="/Service-v7" element={<Service_v7/>} />
         {/* Browser Jobs Services patha end */}

         {/* Browser Jobs  Project patha start */}
        <Route path="/Project-single" element={<Project_single/>} />
        <Route path="/Project-v1" element={<Project_v1/>} />
         {/* Browser Jobs  Project patha end */}

         {/* Browser Jobs  Job list  patha start */}
        <Route path="/Job-list-v1" element={<Job_list_v1/>} />
        <Route path="/Job-list-v2" element={<Job_list_v2/>} />
        <Route path="/Job-list-v3" element={<Job_list_v3/>} />
        <Route path="/Job-Single" element={<Job_single/>} />
         {/* Browser Jobs  Job list  patha end */}
        {/* Browser Jobs all patha end */}


        {/* Users all patha start */}
        
        {/* Dashboard all patha start */}
        <Route path="/User-Dashboard" element={<Dashbord/>} />
        <Route path="/User-Dashboard-Proposal" element={<Dash_Proposal/>} />
        <Route path="/User-Dashboard-Saved" element={<Dash_saved/>} />
        <Route path="/User-Dashboard-Message" element={<Dash_massage/>} />
        <Route path="/User-Dashboard-Reviews" element={<Dash_Reviews/>} />
        <Route path="/User-Dashboard-Invoice" element={< Dash_Invoice/>} />
        <Route path="/User-Dashboard-Payouts" element={<Dash_Payouts/>} />
        <Route path="/User-Dashboard-Statement" element={<Dash_Statement/>} />
        <Route path="/User-Dashboard-Manage-Service" element={<Dash_Manage_Service/>} />
        <Route path="/User-Dashboard-Add-Services" element={<Dash_Add_Services/>} />
        <Route path="/User-Dashboard-Manage-Jobs" element={< Dash_Manage_Jobs/>} />
        <Route path="/User-Dashboard-Manage-Project" element={<Dash_Manage_Project/>} />
        <Route path="/User-Dashboard-Create-Project" element={< Dash_Create_Project/>} />
        <Route path="/User-Dashboard-My-Profile" element={< Dash_My_Profile/>} />
        {/* Dashboard all patha end */}

        {/* Employee all patha start */}
        <Route path="/User-Employee-Employee-v1" element={<Employee_v1/>} />
        <Route path="/User-Employee-Employee-v2" element={<Employee_v2/>} />
        <Route path="/User-Employee-Employee-single" element={<Employee_single/>} />
        {/* Employee all patha end */}

        {/* Freelancer all patha start */}
        <Route path="/User-Freelancer-Freelancer-v1" element={<Freelancer_v1/>} />
        <Route path="/User-Freelancer-Freelancer-v2" element={<Freelancer_v2/>} />
        <Route path="/User-Freelancer-Freelancer-v3" element={<Freelancer_v3/>} />
        <Route path="/User-Freelancer-Freelancer-single" element={<Freelancer_single/>} />
        {/* Freelancer all patha end */}
        {/* Users all patha end */}



        {/* Pages all patha start */}

        {/* About all patha Start */}
        <Route path="/Pages-About-About-v1" element={<About_v1/>} />
        <Route path="/Pages-About-About-v2" element={<About_v2/>} />
        {/* About all patha end */}

        {/* Blog all patha Start */}
        <Route path="/Pages-Blog-Blog-v1" element={<Blog_List_v1/>} />
        <Route path="/Pages-Blog-Blog-v2" element={<Blog_List_v2/>} />
        <Route path="/Pages-Blog-Blog-v3" element={<Blog_List_v3/>} />
        <Route path="/Pages-Blog-Blog-single" element={<Blog_single/>} />
        {/* Blog all patha end */}
        
        {/* shop all patha Start */}
        <Route path="/Pages-shop-List" element={<Shop_list/>} />
        <Route path="/Pages-shop-Single" element={<Shop_single/>} />
        <Route path="/Pages-shop-Cart" element={<Shop_card/>} />
        <Route path="/Pages-shop-Checkout" element={<Shop_checkout/>} />
        <Route path="/Pages-shop-Order" element={<Shop_order/>} />
        {/* shop all patha end */}
        <Route path="/Pages-404" element={<No_page/>} />
        <Route path="/Pages-Faq" element={<Faq/>} />
        <Route path="/Pages-Help" element={<Help/>} />
        <Route path="/Pages-Invoices" element={<Invoice/>} />
        <Route path="/Pages-Pricing" element={<Pricing/>} />
        <Route path="/Pages-Terms" element={<Terms/>} />
        <Route path="/Pages-ul-Elements" element={<Ui_elements/>} />
        {/* Pages all patha end */}

        <Route path="/contact" element={<Contact/>} />
        <Route path="/become-seller" element={<Become_seller/>} />
        <Route path="/sign-in" element={<Sign_in/>} />
        <Route path="/join" element={<Join/>} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;

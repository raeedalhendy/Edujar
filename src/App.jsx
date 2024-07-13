
import AboutCoures from "./components/AboutCoures/AboutCoures"
import Explore from "./components/Explore/Explore"
import Footer from "./components/Footer/Footer"
import Hero from "./components/Hero/Hero"
import Logo from "./components/Logo/Logo"
import NavBar from "./components/NavBar/NavBar"
import OurClients from "./components/OurClients/OurClients"
import PopularCourses from "./components/PopularCourses/PopularCourses"
import Questions from "./components/Questions/Questions"

function App() {
    const item =[{text : "home"},
        {text : "Courses"},
        {text : "About us "},
        {text : "Works"},
        {text : "Blog"},
        {text : "Contact"}
    ]

    const itemExplore=[
        {img1 : "./assets/img/Pen.png" , text : "Art &Design " },
        {img1 : "./assets/img/Camera.png" , text : "Communication  " },
        {img1 : "./assets/img/Chart_pin.png" , text : "Finance & Bank   " },
        {img1 : "./assets/img/Group 512843.png" , text : "Marketing  " },
        {img1 : "./assets/img/Chat_alt_3.png" , text : "Photography  " },
    ]
    const ItemPopular=[
        {img1 :"./assets/img/1.png" , text1 : "25x Lesson", textTop : "Design" , desc1 : "Programming for Everybody (Getting Started with Python)"  , desc2 :"For athletes, high altitude produces two contradi effects on performance." ,btn : "Join" ,img2 : "./assets/img/11.png"},
        {img1 :"./assets/img/1.png" , text1 : "16x Lesson", textTop : "Marketing" , desc1 : "Supervised Machine Learning: Regression and Classification"  , desc2 :"For athletes, high altitude produces two contradi effects on performance." ,btn : "Join" ,img2 : "./assets/img/12.png"},
        {img1 :"./assets/img/1.png" , text1 : "38x Lesson", textTop : "Programming" , desc1 : "Leading Teams: Developing as a Leader"  , desc2 :"For athletes, high altitude produces two contradi effects on performance." ,btn : "Join" ,img2 : "./assets/img/13.png"},
        {img1 :"./assets/img/1.png" , text1 : "25x Lesson", textTop : "Design" , desc1 : "Supervised Machine Learning: Regression and Classification"  , desc2 :"For athletes, high altitude produces two contradi effects on performance." ,btn : "Join" ,img2 : "./assets/img/14.png"},
        {img1 :"./assets/img/1.png" , text1 : "16x Lesson", textTop : "Marketing" , desc1 : "Programming for Everybody (Getting Started with Python)"  , desc2 :"For athletes, high altitude produces two contradi effects on performance." ,btn : "Join" ,img2 : "./assets/img/15.png"},
        {img1 :"./assets/img/1.png" , text1 : "38x Lesson", textTop : "Programming" , desc1 : "Leading Teams: Developing as a Leader"  , desc2 :"For athletes, high altitude produces two contradi effects on performance." ,btn : "Join" ,img2 : "./assets/img/13.png"}
    ]
    const ItemQuesions1=[
        {title : "Frequently Asked Questions" , text : "Any Questions? Find here." , btn :"Send Message" , img : "./assets/img/Questions.png"}
    ]
    const ItemQuesions2=[
        {titleTop : "Can Conversix sync my data to my CRM?",text : "Every data request starts with a target foundation, you will be asked to complete a search request and provide information such as lookalike companies, industries, companies size, revenue, job titles etc."},
        {title : "How much data will I receive?" , icon : "+"},
        {title : "Can marketers use Conversix data on behalf of client?" , icon : "+"},
        {title : "How accurate is my data?" , icon : "+"}
    ]
    const ItemOurClients=[
        
        {title : "What our client’s say" , icon : "./assets/img/Frame.png" , text: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim."},
        {name : "Adrian Smith"},
        
        
    ]
    const ItemLogo = [
        {img : "./assets/img/logo (1).png"},
        {img : "./assets/img/logo (2).png"},
        {img : "./assets/img/logo (3).png"},
        {img : "./assets/img/logo (4).png"},
        {img : "./assets/img/logo (5).png"}
    ]
    
    const ItemFooter =[
        {title1 : "Edu" , titel2 : "jar" ,text: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat..."  } 
    ]
    const LinkFooter = [
        {links : "Home"},
        {links : "Courses"},
        {links : "About us"},
        {links : "Works"},
        {links : "Blog"}
        
        
    ]
    const LinkFooter2 =[
        {links2 : "Terms of use"},
        {links2 : "Terms & conditions"},
        {links2 : "Privacy policy"},
        {links2 : "Cookie policy"}
    ] 

    return(
        <>
        <NavBar logo={"Edu"} logo2={"jar"} navItem={item} btn="SingUp" />
        <Hero img1="./assets/img/hero 1.png" titel="Learn with us anywhare with the best "  desc="We collaborate with 275+ leading universities and companies" img2="./assets/img/hero 2.png" span="export" btn="Explore"/>
        <AboutCoures titel="60K+" desc="Live Courses" titel2="35K+" desc2="Category" img="./assets/img/star.png" desc3="Trustpilot" desc4="View our 1,602 reviews" rate="4.9" icon="./assets/img/Star 2.png" titel3="25K+" desc5="Professionals" titel4="125K+" desc6="Students"   />
        <Explore text="Explore Top Categories "  desc ="Click on the categories and explore all courses" left="<" ExploreItem={itemExplore} right=">" />
        <PopularCourses text = "Popular Courses"  desc="Let’s join our best classes with our famous  instructor and institutes"   left="<" right=">" Popular={ItemPopular} btn2="Explore Courses" />
        <Questions questions={ItemQuesions1} questions2 = {ItemQuesions2}  />
        <OurClients background= "./assets/img/background.png" Ourclients={ItemOurClients}  user1="./assets/img/p1.png" user2 = "./assets/img/p2.png" user3 = "./assets/img/p3.png" user4 = "./assets/img/p4.png" user5 = "./assets/img/p5.png" left="./assets/img/left.png"  right="./assets/img/right.png" />
        <Logo LogoItem={ItemLogo} />

        <Footer FooterItem = {ItemFooter} title13 = "Quick links"  btn = "Subscribe" title1 = "Edu"  title2 = "jar" 
        text= "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat..." 
        textbottom = "© 2024 edujar - All Rights Reserved"
        title11 = "Quick links" Links = {LinkFooter} title12 = "Legal" Legal = {LinkFooter2}
        />
        </>
    )
}
export default App
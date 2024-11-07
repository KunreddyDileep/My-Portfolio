import project1 from '../assets/project1.png'
import project2 from '../assets/project2.png'
import project3 from '../assets/project3.png'
import project4 from '../assets/project4.png'

const mywork_data = [
    {
        w_no:1,
        w_name:"Vintage Car Auction Web Application",
        w_img:project1,
        description:"Developed a Vintage Car Auction Web Page using Ruby on Rails, leveraging Active Record for efficient database management with PostgreSQL. Created RESTful APIs for handling auctions, bids, and user interactions. Designed responsive user interfaces utilizing HTML, CSS, and Bootstrap, ensuring optimal display across devices. Implemented real-time updates through WebSocket for seamless user experience. Conducted thorough testing with RSpec to ensure code reliability and performance. Managed version control with Git and documented API endpoints for clarity and ease of use.",
        github_link:"https://github.com/KunreddyDileep/Vintage_Car_Auction_Web_Application/tree/master"
    },
    {
        w_no:2,
        w_name:"Indian Cuisine Dishes Blog Application",
        w_img:project2,
        description:"This project is a web application built with Spring Boot and Thymeleaf that manages user posts with role-based access control using Spring Security. It allows users to create, view, and manage posts based on their assigned roles. The application utilizes a MySQL database for storing post data and user information. Thymeleaf templates are used for rendering dynamic web pages, ensuring security by integrating with Spring Security expressions. The project also includes RESTful APIs for data interaction and implements error handling mechanisms for improved user experience.",
        github_link:"https://github.com/KunreddyDileep/Indian-Dishes-Blog-Application-Spring-Boot/tree/master"
    },
    {
        w_no:3,
        w_name:"PhotoVault-Album-and-Photo-Management-System",
        w_img:project3,
        description:"Developed a RESTful API using Spring Boot, exposing multiple endpoints that interact with secured resources. The API leverages token-based authentication, where users must generate an access token to authorize requests. APIs are documented and tested using Swagger UI, providing a user-friendly interface for accessing and interacting with the endpoints. This project demonstrates secure API handling, user authentication, and real-time API testing within a local environment.",
        github_link:"https://github.com/KunreddyDileep/PhotoVault-Album-and-Photo-Management-System/tree/master"
    },
    {
        w_no:4,
        w_name:"Customer Rewards Program Management System",
        w_img:project4,
        description:"The Customer Rewards Program Management System is a React.js application designed to calculate and display reward points for retail customers based on their purchase transactions. The system implements a straightforward points calculation algorithm, awarding 2 points for every dollar spent over $100 and 1 point for each dollar spent between $50 and $100.",
        github_link:"https://github.com/KunreddyDileep/Customer_Rewards_Program_Management_System"
    }
    
]
 
export default mywork_data;
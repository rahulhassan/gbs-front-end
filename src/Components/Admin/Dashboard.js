import "./CSS/adminDashboard.css";
import LeftBar from "./Bar/LeftBar";
import TopBar from "./Bar/TopBar";

const Dashboard=()=>{
    return (
        <div>
            <LeftBar />
            <TopBar />
            <div class="container">
            <div class="content">
                <div class="cards">
                    <div class="card">
                        <div class="box">
                            <h1>5</h1>
                            <h3>EMPLOYEE</h3>
                        </div>
                    </div>
                    <div class="card">
                        <div class="box">
                            <h1>30</h1>
                            <h3>BUYER</h3>
                        </div>
                    </div>
                    <div class="card">
                        <div class="box">
                            <h1>5</h1>
                            <h3>SELLER</h3>
                        </div>
                    </div>
                    <div class="card">
                        <div class="box">
                            <h1>20</h1>
                            <h3>ORDER</h3>
                        </div>
                    </div>
                    <div class="card">
                        <div class="box">
                            <h1>2</h1>
                            <h3>RUNNING OFFERS</h3>
                        </div>
                    </div>
                    <div class="card">
                        <div class="box">
                            <h1>50000</h1>
                            <h3>TOTAL EARN</h3>
                        </div>
                    </div>
                </div>
                <div class="content-2">
                    <div class="recent-payments">
                        <div class="title">
                            <h2>ORDERS</h2>
                            <a href="#" class="btn">View All</a>
                        </div>
                        <table>
                            <tr>
                                <th>SELLER ID</th>
                                <th>PRODUCT ID</th>
                                <th>BUYER ID</th>
                                <th>PAYMENT TYPE</th>
                                <th>SUBTOTAL</th>
                                <th>DISCOUNT</th>
                                <th>TOTAL</th>
                            </tr>
                            
                            <tr>
                                <td>125</td>
                                <td>125</td>
                                <td>125</td>
                                <td>125</td>
                                <td>125</td>
                                <td>125</td>
                                <td>125</td>
                            </tr>
                            
                        </table>
                    </div>
                    <div class="new-students">
                        <div class="title">
                            <h2>Employees</h2>
                            <a href="" class="btn">View All</a>
                        </div>
                        <table>
                            <tr>
                                <th>Employee Id</th>
                                <th>Employee Name</th>
                            </tr>
                            
                            
                            <tr>
                                <td>125</td>
                                <td>125</td>
                            </tr>

                        </table>
                    </div>
                </div>
            </div>
            </div>
            
        </div>

    )
}
export default Dashboard;
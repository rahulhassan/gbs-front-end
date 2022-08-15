import "../CSS/adminDashboard.css";
// import Items from "./Items";

const TopBar=()=>{
    return (
        <div>
            <div class="container">
              <div class="header">
                  <div class="nav">
                        <div class="search">
                          <input type="text" placeholder="Search.."/>
                          <button type="submit"><img src="" alt="" /></button>
                        </div>
                        <div class="user">
                          <a href="" class="btn">Add A EMP</a>
                          <img src="" alt=""/>
                          <div class="img-case">
                              <a href=""><img src="" alt=""/></a>
                          </div>
                          <a href="" class="btn">LOG OUT</a>
      
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}
export default TopBar;
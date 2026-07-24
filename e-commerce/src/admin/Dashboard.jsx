import "../styles/admin.css";


function Dashboard(){

return(

<div className="dashboard">


<div className="dashboard-top">

<div>

<h1>
Hello, Admin 👋
</h1>

<p>
Here is what's happening with your store today.
</p>

</div>


<button>
+ Add Product
</button>


</div>



<div className="dashboard-cards">


<div className="stat-card">

<div className="stat-icon">
📦
</div>

<div>

<h4>
Products
</h4>

<h2>
50
</h2>

<p>
12 new this month
</p>

</div>

</div>




<div className="stat-card">

<div className="stat-icon">
🛒
</div>

<div>

<h4>
Orders
</h4>

<h2>
120
</h2>

<p>
8% increase
</p>

</div>

</div>





<div className="stat-card">

<div className="stat-icon">
👥
</div>

<div>

<h4>
Customers
</h4>

<h2>
80
</h2>

<p>
15 new users
</p>

</div>

</div>




<div className="stat-card">

<div className="stat-icon">
💰
</div>

<div>

<h4>
Revenue
</h4>

<h2>
₹45K
</h2>

<p>
This month
</p>

</div>

</div>


</div>





<div className="dashboard-grid">



<div className="sales-card">

<h2>
Sales Overview
</h2>


<div className="chart-box">

<div style={{height:"70%"}}></div>
<div style={{height:"90%"}}></div>
<div style={{height:"50%"}}></div>
<div style={{height:"80%"}}></div>
<div style={{height:"60%"}}></div>

</div>


</div>




<div className="quick-card">

<h2>
Quick Actions
</h2>


<button>
Add New Product
</button>

<button>
Manage Orders
</button>

<button>
View Customers
</button>


</div>



</div>





</div>

)

}


export default Dashboard;
import React from 'react'

export default function Dish({dish}) {
  return (
    <div className="card mb-3 shadow p-3 mb-5 bg-white rounded" style={{maxWidth :'50%', padding :'10px'}}>
  <div className="row g-0">
    <div className="col-md-4">
      <img
        src={dish.img}
        alt="Trendy Pants and Shoes"
        className="img-fluid rounded-start"
        style={{height:'250px',width:'250px'}}
      />
    </div>
    <div className="col-md-8">
      <div className="card-body">
        <h5 className="card-title" style={{fontSize:'25px'}}>{dish.name}</h5>
        <p className="card-text">
          {dish.description}
        </p>
        <div style={{display : 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
        <div>
          <p>Quantity :</p>
          <div className="form-outline" data-mdb-input-init><input type="number" min = '0' id="typeNumber" className="form-control" style={{width: '100px'}} /></div>
        </div>
        <div>
          <h1 style={{marginRight:'10rem'}}>Price : ₹{dish.price}</h1>
        </div>

</div>
      </div>
      <button type="button" class="btn btn-primary" style={{}}>Add to cart</button>

    </div>

  </div>
</div>
    
  )
}

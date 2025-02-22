import '../main.css'


export function Card(data) {
    return (
        <div className="card">
            <div className="prs" style={{display:data.info.aksiya?"block":"none"}}>
                <h5>-50%</h5>
            </div>
            <div className="img"><img src={data.info.img} alt="" /></div>
            <button className="btn-sh"><i className="fa-brands fa-cc-visa" style={{ color: 'white' }}></i>    Add To Cart</button>
            <h4>{data.info.name}</h4>
            <div className="p">
                <p>$ {data.info.price}</p>
                <div className="price"><p>$1100</p></div>
            </div>
        </div>
    )
}
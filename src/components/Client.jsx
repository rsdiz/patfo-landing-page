function Client(props) {
  return (
    <div id='client' className='text-center'>
      <div className='container'>
        <div className='col-md-8 col-md-offset-2 section-title'>
          <h2>Our Client</h2>
        </div>
        <div id='row'>
          {props.data
            ? props.data.map((d, i) => (
                <div key={`${d.name}-${i}`} className='col-md-3 col-sm-6 client'>
                  <div className='thumbnail'>
                    {' '}
                    <img src={d.img} alt={d.name} className='client-img' />
                  </div>
                </div>
              ))
            : 'loading'}
        </div>
      </div>
    </div>
  )
}

export default Client

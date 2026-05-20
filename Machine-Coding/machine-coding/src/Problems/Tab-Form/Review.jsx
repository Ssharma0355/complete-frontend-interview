
function Review({data, setData,error}) {
    const {agree} = data

    const check = () => {
        setData(prev => ({
            ...prev,
            agree: !prev.agree
        }))
    }
    console.log(data)
  return (
    <div>
       <h1>Name: {data.name}</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil eligendi nemo perspiciatis quis excepturi accusamus eos tempore, vero re.</p>
      {error && <p style={{color:"red"}}>{error}</p>}
      <button onClick={check}>Do you agree?{data.agree ? "Yes" : "No"}</button>

    </div>
  )
}

export default Review

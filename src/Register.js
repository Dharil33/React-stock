import React,{useState}from 'react'

const Register = () => {

    const [data,setData] = useState({
        fullname:'',
        phone:'',
        email:'',
        msg:''
    });

    const InputEvent = (event)=>{
        const {name,value} = event.target;
        setData((preVal)=>{
            return{
                ...preVal,
                [name]:value,
            };
        });
    };

    const formSubmit = (e)=>{
        e.preventDefault();
        alert(`Dear ${data.fullname} Your Message send Successfully`);
    }


    return (
        <>
            <div className="my5">
                <h1 className="text-center">Registration</h1>
            </div>
            <div className="container contact_div">
                <div className="row">
                    <div className="col-md-6 col-10 mx-auto">
                        <form onSubmit={formSubmit}>
                        <div className="mb-3">
                        <label for="exampleFormControlInput1" className="form-label">Full Name</label>
                        <input type="text" className="form-control" id="exampleFormControlInput1" name="fullname"
                        value={data.fullname}
                        onChange={InputEvent} placeholder="Enter Your Full name"/>
                        </div>
                        <div className="mb-3">
                        <label for="exampleFormControlInput1" className="form-label">Phone number</label>
                        <input type="Number" className="form-control" id="exampleFormControlInput1" name="phone"
                        value={data.phone}
                        onChange={InputEvent} placeholder="Enter Phone Number"/>
                        </div>
                        <div className="mb-3">
                        <label for="exampleFormControlInput1" className="form-label">Email address</label>
                        <input type="email" className="form-control" id="exampleFormControlInput1" name="email"
                        value={data.email}
                        onChange={InputEvent} placeholder="name@example.com"/>
                        </div>
                        <div className="mb-3">
                        <label for="exampleFormControlInput1" className="form-label">Password</label>
                        <input type="password" className="form-control" id="exampleFormControlInput1" name="password"
                        value={data.password}
                        onChange={InputEvent} placeholder="Enter Your Password"/>
                        </div>
                        <div className="mb-3">
                        <label for="exampleFormControlTextarea1" className="form-label">Message</label>
                        <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" name="msg"
                        value={data.msg}
                        onChange={InputEvent}></textarea>
                        </div>
                        <div className="col-12">
                            <button className="btn btn-primary" type="submit">
                                Submit
                            </button>
                        </div>
                        <br/>
                        <h5>Already have a Account?<a href="/Login" > Sign In</a></h5>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Register

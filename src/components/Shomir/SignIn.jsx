import React from 'react';

const SignIn = () => {
    return (
        <div>

            <div className="hero bg-base-200 min-h-screen">





                <div className="card bg-base-100 w-full shrink-0 shadow-2xl max-w-screen-md p-5">
                    <h1 className='text-2xl m-auto'><span className="underline">Form !</span></h1>
                    <form className="card-body">
                        <div className='grid gap-5 grid-cols-2'>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">First name</span>
                                </label>
                                <input type="text" placeholder="First Name" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Last Name</span>
                                </label>
                                <input type="text" placeholder="Last Name" className="input input-bordered" required />


                            </div>
                        </div>
                        <div className='grid gap-5 grid-cols-2'>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Phone Number</span>
                                </label>
                                <input type="number" placeholder="Phone Number" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Your Email</span>
                                </label>
                                <input type="email" placeholder="Your Email" className="input input-bordered" required />


                            </div>
                        </div>
                        <div>
                            <textarea
                                placeholder="Write message"
                                className="textarea textarea-bordered textarea-lg w-full "></textarea>
                        </div>

                        <div className="form-control mt-6">

                            <input className='btn btn-secondary' type="submit" value="Submit" />
                        </div>
                    </form>
                </div>
            </div>
        </div>

    );
};

export default SignIn;
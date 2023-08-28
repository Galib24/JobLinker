const seekersForm = () => {
    return (
        <div className="my-28">
            <div className="py-5">
                <h2 className="text-4xl text-center font-semibold my-5 ">Seekers Job Post Form</h2>
                <p className="text-center my-2 font-semibold text-base px-2">Ready to get hired?</p>

                <form  className="mx-2 lg:mx-5">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Full Name</span>
                            </label>
                            <input type="text" name="name" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Job Title</span>
                            </label>
                            <input type="text" name="JobTitle" className="input input-bordered" required />

                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Education Qualification</span>
                            </label>
                            <input type="text" name="education" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Experience</span>


                            </label>

                            <input type="text" name="experience" className="input input-bordered" required />

                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Seeker Email </span>
                            </label>
                            <input type="email" name="email" className="input input-bordered" required />

                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Job Type</span>
                            </label>
                            <input type="text" name="jobType" className="input input-bordered" required />

                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Photo URL</span>
                            </label>
                            <input type="text" name="photo" className="input input-bordered" required />

                        </div>


                        <div className="grid lg:grid-cols-4 gap-5 w-full items-center">

                            <p className="font-semibold">Type Your Top Three Skills:</p>

                            <div className="form-control">

                                <label className="label">
                                    <span className="label-text">SkillOne*</span>
                                </label>
                                <input type="text" name="SkillOne" className="input input-bordered" required />

                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">SkillTwo*</span>
                                </label>
                                <input type="text" name="SkillTwo" className="input input-bordered" required />

                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">SkillThree*</span>
                                </label>
                                <input type="text" name="SkillThree" className="input input-bordered" required />

                            </div>

                        </div>

                        <div className="form-control">
                            <input type="file" className="file-input file-input-bordered w-full max-w-xs lg:mt-9" />
                        </div>
                    </div>
                    <div className="form-control mt-6">

                        <input type="submit" className="btn btn-info btn-block text-white " value="Submit Post"/>
                    </div>
                </form>
                <div className="card-body">

                </div>
            </div>

        </div>
    );
};

export default seekersForm;
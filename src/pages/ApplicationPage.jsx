import ProxyImage from "../assets/images/proxyimg.png";
import { useForm } from "react-hook-form";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../assets/css/Application.css";
import { Helmet } from "react-helmet";
import ApplicationPopup from "../components/ApplicationPopup";

const courseData = {
  "Full-stack Web Development": {
    month: "6 Months",
    price: "₦600,000",
    discountedprice: "₦450,000",
    time: "Tuesday's 12:00-3:00 PM , Friday's 9:00am-12:00pm",
  },
  "Frontend Web Development": {
    month: "3 Months",
    price: "₦400,000",
    discountedprice: "₦220,000",
    time: "Tuesday's 12:00-3:00 PM, Friday's 9:00 AM -12:00 PM",
  },
  "Cyber-Security": {
    month: "2 Months",
    price: "₦400,000",
    discountedprice: "₦250,000",
    time: "Monday's 9:00am-12:00pm, Wednesday's 9:00am-12:00pm",
  },
  "Data Analytics": {
    month: "3 Months",
    price: "₦400,000",
    discountedprice: "₦250,000",
    time: "Tuesday's 9:00am-12:00pm, Thurdays 9:00am-12:00pm",
  },
  "UIUX Design": {
    month: "2 Months",
    price: "₦250,000",
    discountedprice: "₦180,000",
    time: "Tuesday's & Thursday's, 10AM-1PM",
  },
  "Desktop Publishing": {
    month: "2 Months",
    price: "₦100,000",
    discountedprice: "₦80,000",
    time: "Monday's 12:00-3:00pm, Wednesday's 12:00-3:00pm, Friday's 12:00pm-3:00pm",
  },
  "digital Marketing": {
    month: "3 Months",
    price: "₦300.000",
    discountedprice: "₦180,000",
    time: "Monday's 9:00am-12:00pm, Thursday's 9:00am-12:00pm",
  },
  "Certified Ethical Hacking": {
    month: "6 Months",
    price: "₦950,000",
    discountedprice: "₦750,000",
    time: "Wednesday's & Friday's, 9am to 12PM",
  },
  "Graphics Design & Branding": {
    month: "3 Months",
    price: "₦250,000",
    discountedprice: "₦160,000",
    time: "Tuesday's 9:00am-12:00pm, Thursday's 12:00pm-3:00pm",
  },
  "Software Development & Mobile Apps": {
    month: "6 Months",
    price: "₦950,000",
    discountedprice: "₦650,000",
    time: "Tuesday's & Thursday's, 9:00am-12:00pm",
  },
  "Python Programming": {
    month: "2 Months",
    price: "₦350,000",
    discountedprice: "₦250,0000",
    time: "Wednesday 9:-12PM & Weekdays 12pm-4pm",
  },
  "Computer Engineering": {
    month: "3-6 Months",
    price: "₦350,000",
    discountedprice: "₦250,000",
    time: "Mondays , Wednesday &  Friday's, 10AM-5PM",
  },
  "Computer Aided - Design": {
    month: "3 Months",
    price: "₦450,000",
    discountedprice: "₦280,000",
    time: "Saturday's, 12:000PM & 4:00PM",
  },
};

function ApplicationPage() {
  const {
    register,
    handleSubmit,
    watch,
    setValue,
    reset, // i added this
    formState: { errors },
  } = useForm();
  // i touched this...
  const [showApplicationPopup, setShowApplicationPopup] = useState(false);
  const selectedCourse = watch("course");

  useEffect(() => {
    if (selectedCourse && courseData[selectedCourse]) {
      const { month, price, time, discountedprice } =
        courseData[selectedCourse];
      setValue("month", month);
      setValue("price", price);
      setValue("time", time);
      setValue("discountedprice", discountedprice);
    }
  }, [selectedCourse, setValue]);

  const onSubmit = (data) => {
    // i touched this...
    setShowApplicationPopup(true);
    // Reset form to default when the popup is active
    reset();
    return data;
  };
  return (
    <>
      <Helmet>
        <title>Join Us — Proxy Coding School </title>
        <meta
          name="title"
          content="Proxy Coding School — Learn, Grow and Thrive"
        />
        <meta
          name="description"
          content="Proxy coding school is a vibrant community that fosters growth and success for both tutors and students. We provide a supportive and enriching environment where tutors are empowered to inspire and guide students towards achieving their academic goals."
        />

        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://proxycodingschool.com/" />
        <meta
          property="og:title"
          content="Proxy Coding School — Learn, Grow and Thrive"
        />
        <meta
          property="og:description"
          content="Proxy coding school is a vibrant community that fosters growth and success for both tutors and students. We provide a supportive and enriching environment where tutors are empowered to inspire and guide students towards achieving their academic goals."
        />
        <meta
          property="og:image"
          content="https://metatags.io/images/meta-tags.png"
        />

        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://proxycodingschool.com/" />
        <meta
          property="twitter:title"
          content="Proxy Coding School — Learn, Grow and Thrive"
        />
        <meta
          property="twitter:description"
          content="Proxy coding school is a vibrant community that fosters growth and success for both tutors and students. We provide a supportive and enriching environment where tutors are empowered to inspire and guide students towards achieving their academic goals."
        />
        <meta
          property="twitter:image"
          content="https://metatags.io/images/meta-tags.png"
        />
      </Helmet>
      <div className="container-fluid">

      <div className='apply-body d-flex flex-column flex-lg-row min-vh-100'>
      <div className="apply-body-content d-lg-flex d-none align-items-center justify-content-center ">
        <div>
          <div className='proxy-img d-flex justify-content-center'>
          <img src={ProxyImage} alt=""/>
        <div className="apply-body d-flex flex-column flex-lg-row min-vh-100 gap-2">
          <div className="apply-body-content d-lg-flex d-none align-items-center justify-content-center ">
            <div>
              <div className="proxy-img d-flex justify-content-center">
                <img src={ProxyImage} alt="" />
              </div>

              <p className="text-center text-white intro1">
                Welcome to proxy Coding School
              </p>
              <p className="intro2 text-center text-white"> Application Form</p>
              <p className="text-center text-white intro3">
                For school enquiry: 08039209990, 08039209990
              </p>
            </div>

          </div>

          <div className="form p-4 d-flex flex-column justify-content-center">
            <nav aria-label="breadcrumb">
              <ol className="breadcrumb">
                <Link className="" to="/">
                  <li className="breadcrumb-item">Home</li>
                </Link>
              </ol>
            </nav>
            <div className="form-header">
              <h1>Application Form</h1>
              <p>Kindly fill your details to start registration process</p>
            </div>


      <div className='form p-lg-5 p-3 d-flex flex-column justify-content-center'>
      <nav aria-label="breadcrumb">
            <ol className="breadcrumb">
            <Link className='' to='/'>
              <li className="breadcrumb-item">Home</li>
              </Link>
            
              
              
            </ol>
          </nav>
        <div className='form-header'>
        <h1>Application Form</h1>
        <p>Kindly fill your details to start registration process</p>
        </div>
        
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="row g-2"
              autoComplete="off"
            >
              <div className="col-md-6">
                <label htmlFor="firstname" className="form-label info-label">
                  First Name
                </label>
                <input
                  type="text"
                  className="form-control info-input "
                  id="firstname"
                  {...register("firstname", {
                    required: "Name is required",
                    minLength: {
                      value: 2,
                      message: "Name must be at least 2 characters long",
                    },
                    pattern: {
                      value: /^[A-Za-z\s]+$/,
                      message: "Name can only contain letters and spaces",
                    },
                  })}
                />
                {errors.firstname && (
                  <span className="text-danger info-span">
                    {errors.firstname.message}
                  </span>
                )}
              </div>

              <div className="col-md-6">
                <label htmlFor="name" className="form-label info-label">
                  Last Name
                </label>
                <input
                  type="text"
                  className="form-control info-input "
                  id="lastname"
                  {...register("lastname", {
                    required: "Name is required",
                    minLength: {
                      value: 2,
                      message: "Name must be at least 2 characters long",
                    },
                    pattern: {
                      value: /^[A-Za-z\s]+$/,
                      message: "Name can only contain letters and spaces",
                    },
                  })}
                />
                {errors.lastname && (
                  <span className="text-danger info-span">
                    {errors.lastname.message}
                  </span>
                )}
              </div>


              <div className="col-12">
                <label htmlFor="phone-no" className="form-label info-label">
                  Phone Number
                </label>
                <input
                  type="tel"
                  className="form-control info-input"
                  id="phone-no"
                  {...register("tel", {
                    required: "Enter phone number",
                    pattern: {
                      value: /^[0-9]{10,15}$/,
                      message: "Invalid Phone number",
                    },
                  })}
                />
                {errors.tel && (
                  <span className="text-danger info-span">
                    {errors.tel.message}
                  </span>
                )}
              </div>

              <div className="col-12">
                <label htmlFor="email" className="form-label info-label">
                  Email Address
                </label>
                <input
                  type="email"
                  className="form-control info-input"
                  id="email"
                  {...register("email", {
                    required: "Enter email",
                    pattern: {
                      value:
                        /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                      message: "Invalid Email",
                    },
                  })}
                />
                {errors.email && (
                  <span className="text-danger info-span">
                    {errors.email.message}
                  </span>
                )}
              </div>

              <div className="col-12">
                <label htmlFor="select" className="form-label info-label">
                  Course Intrest
                </label>
                <select
                  id="select"
                  className="form-select info-select"
                  {...register("course", {
                    required: "Please select a course",
                  })}
                >
                  <option value="">Select a course</option>
                  {Object.keys(courseData)
                    .sort()
                    .map((course) => (
                      <option key={course} value={course}>
                        {course}
                      </option>
                    ))}
                </select>
                {errors.course && (
                  <span className="text-danger info-span">
                    {errors.course.message}
                  </span>
                )}
              </div>
              <div className="col-md-6">
                <input
                  type="text"
                  className="form-control info-input"
                  id="month"
                  placeholder="Months"
                  {...register("month")}
                  readOnly
                />
              </div>
              <div className="col-md-6">
                <input
                  type="text"
                  className="form-control info-input"
                  id="time"
                  placeholder="Time"
                  {...register("time")}
                  readOnly
                />
              </div>
              <div className="col-md-6">
                <input
                  className="form-control info-input"
                  type="text"
                  id="price"
                  placeholder="Price"
                  {...register("price")}
                  readOnly
                />
              </div>
              <div className="col-md-6">
                <input
                  className="form-control info-input"
                  type="text"
                  id="discountedprice"
                  placeholder="Discounted price"
                  {...register("discountedprice")}
                  readOnly
                />
              </div>

              <div className="d-grid col-12 mx-auto m-4">
                <button type="submit" className="btn btn-primary">
                  Apply Now
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      {/* I touched this... */}
      {/* Show Application pop up on submit */}
      {showApplicationPopup && (
        <ApplicationPopup setShowApplicationPopup={setShowApplicationPopup} />
      )}
    </>
  );
}

export default ApplicationPage;

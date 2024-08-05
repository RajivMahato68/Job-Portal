import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, Link } from 'react-router-dom';
import { clearAllUpdateProfileErrors, updateProfile } from '../../store/slices/updateProfileSlice';
import {getUser} from "../../store/slices/userSlice";
import { toast } from 'react-toastify';

const UpdateProfile = () => {
  const { user } = useSelector((state) => state.user);
  const { loading, error, isUpdate } = useSelector((state) => state.updateProfile);

  const dispatch = useDispatch();
  const navigateTo = useNavigate();

  const [name, setName] = useState(user && user.name);
  const [email, setEmail] = useState(user && user.email);
  const [phone, setPhone] = useState(user && user.phone);
  const [address, setAddress] = useState(user && user.address);
  const [coverLetter, setCoverLetter] = useState(user && user.coverLetter);
  const [firstNiche, setFirstNiche] = useState(user && user.niches?.firstNiche);
  const [secondNiche, setSecondNiche] = useState(user && user.niches?.secondNiche);
  const [thirdNiche, setThirdNiche] = useState(user && user.niches?.thirdNiche);
  const [resume, setResume] = useState(null);
  const [resumePreview, setResumePreview] = useState(user && user.resume?.url);

  const handleUpdateProfile = () => {
    const formData = new FormData();
    formData.append('name', name);
    formData.append('email', email);
    formData.append('phone', phone);
    formData.append('address', address);
    if (user && user.role === 'Job Seeker') {
      formData.append('firstNiche', firstNiche);
      formData.append('secondNiche', secondNiche);
      formData.append('thirdNiche', thirdNiche);
      formData.append('coverLetter', coverLetter);
    }
    if (resume) {
      formData.append('resume', resume);
    }
    dispatch(updateProfile(formData));
  };

  useEffect(() => {
    if (error) {
      toast.error(error);
      dispatch(clearAllUpdateProfileErrors());
    }
    if (isUpdate) {
      toast.success("Profile Updated.");
      dispatch(getUser());
      dispatch(clearAllUpdateProfileErrors());
      navigateTo('/'); // Navigate to home page after update
      window.location.reload();
    }
  }, [dispatch, loading, error, isUpdate, user, navigateTo]);

  const resumeHandler = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      setResumePreview(reader.result);
      setResume(file);
    };
  };

  const nichesArray = [
    'Software Development', 'Web Development', 'Cybersecurity', 'Data Science',
    'Artificial Intelligence', 'Cloud Computing', 'DevOps', 'Mobile App Development',
    'Blockchain', 'Database Administration', 'Network Administration', 'UI/UX Design',
    'Game Development', 'IoT (Internet of Things)', 'Big Data', 'Machine Learning',
    'IT Project Management', 'IT Support and Helpdesk', 'Systems Administration',
    'IT Consulting',
  ];

  return (
    <div className='account_components'>
      <h3>Update Profile</h3>
      <div>
        <label>Full Name</label>
        <input type='text' value={name} onChange={(e) => setName(e.target.value)} />
      </div>

      <div>
        <label>Email Address</label>
        <input type='email' value={email} onChange={(e) => setEmail(e.target.value)} />
      </div>
      <div>
        <label>Phone</label>
        <input type='number' value={phone} onChange={(e) => setPhone(e.target.value)} />
      </div>

      <div>
        <label>Address</label>
        <input type='text' value={address} onChange={(e) => setAddress(e.target.value)} />
      </div>
      {user && user.role === 'Job Seeker' && (
        <>
          <div>
            <label>My Preferred Job Niches</label>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
              <select value={firstNiche} onChange={(e) => setFirstNiche(e.target.value)}>
                {nichesArray.map((element, index) => (
                  <option value={element} key={index}>{element}</option>
                ))}
              </select>

              <select value={secondNiche} onChange={(e) => setSecondNiche(e.target.value)}>
                {nichesArray.map((element, index) => (
                  <option value={element} key={index}>{element}</option>
                ))}
              </select>

              <select value={thirdNiche} onChange={(e) => setThirdNiche(e.target.value)}>
                {nichesArray.map((element, index) => (
                  <option value={element} key={index}>{element}</option>
                ))}
              </select>
            </div>
          </div>
          <div>
            <label>CoverLetter</label>
            <textarea value={coverLetter} onChange={(e) => setCoverLetter(e.target.value)} rows={5}></textarea>
          </div>

          <div>
            <label>Upload Resume</label>
            <input type='file' onChange={resumeHandler} />
            {user && user.resume && (
              <div>
                <p>Current Resume</p>
                <a href={user.resume.url} target='_blank' rel='noopener noreferrer' className='view-resume'>View Resume</a>
              </div>
            )}
           
          </div>
        </>
      )}
       <div className="save_change_btn_wrapper">
              <button className="btn" onClick={handleUpdateProfile} disabled={loading}>Save Changes</button>
            </div>
    </div>
  );
};

export default UpdateProfile;

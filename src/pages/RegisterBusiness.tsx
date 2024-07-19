import React, { useState } from 'react';
import Breadcrum from "../components/Common/Breadcrum";
import styles from "../Assets/css/registerBusiness.module.css";

const RegisterBusiness = () => {
  const [formData, setFormData] = useState({
    businessName: '',
    ownerName: '',
    email: '',
    phone: '',
    address: '',
    description: '',
  });
  const [submittedData, setSubmittedData] = useState(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmittedData(formData);
    setFormData({
      businessName: '',
      ownerName: '',
      email: '',
      phone: '',
      address: '',
      description: '',
    });
  };

  return (
    <div className={styles.page}>
      <Breadcrum title="Register Your Business" />
      <div className={styles.main}>
        <form className={styles.form} onSubmit={handleSubmit}>
          <div className={styles.formGroup}>
            <label>Business Name</label>
            <input
              type="text"
              name="businessName"
              value={formData.businessName}
              onChange={handleChange}
              required
            />
          </div>
          <div className={styles.formGroup}>
            <label>Owner Name</label>
            <input
              type="text"
              name="ownerName"
              value={formData.ownerName}
              onChange={handleChange}
              required
            />
          </div>
          <div className={styles.formGroup}>
            <label>Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className={styles.formGroup}>
            <label>Phone</label>
            <input
              type="text"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
            />
          </div>
          <div className={styles.formGroup}>
            <label>Address</label>
            <input
              type="text"
              name="address"
              value={formData.address}
              onChange={handleChange}
              required
            />
          </div>
          <div className={styles.formGroup}>
            <label>Description</label>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
              required
            ></textarea>
          </div>
          <button type="submit" className={styles.submitButton}>
            Register Business
          </button>
        </form>
        {submittedData && (
          <div className={styles.submittedData}>
            <h2>Submitted Data</h2>
            <p><strong>Business Name:</strong> </p>
            <p><strong>Owner Name:</strong>  </p>
            <p><strong>Email:</strong> </p>
            <p><strong>Phone:</strong> </p>
            <p><strong>Address:</strong> </p>
            <p><strong>Description:</strong> </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default RegisterBusiness;

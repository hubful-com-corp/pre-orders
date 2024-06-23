import React, { useState, useEffect } from 'react';
import axios from 'axios';

const AdminPage = () => {
    const [coupons, setCoupons] = useState([]);
    const [code, setCode] = useState('');
    const [discount, setDiscount] = useState('');
    const [expiration, setExpiration] = useState('');

    const fetchCoupons = async () => {
        try {
            const response = await axios.get('/api/coupons');
            setCoupons(response.data);
        } catch (error) {
            console.error(error);
        }
    };

    useEffect(() => {
        fetchCoupons();
    }, []);

    const handleCreateCoupon = async (e) => {
        e.preventDefault();
        try {
            await axios.post('/api/coupons/create', {
                code,
                discount,
                expiration,
            });
            fetchCoupons();
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div>
            <header>
                <h1>Admin Portal</h1>
            </header>
            <section>
                <h2>Create Coupon</h2>
                <form onSubmit={handleCreateCoupon}>
                    <div>
                        <label>Code</label>
                        <input type="text" value={code} onChange={(e) => setCode(e.target.value)} required />
                    </div>
                    <div>
                        <label>Discount</label>
                        <input type="number" value={discount} onChange={(e) => setDiscount(e.target.value)} required />
                    </div>
                    <div>
                        <label>Expiration Date</label>
                        <input type="date" value={expiration} onChange={(e) => setExpiration(e.target.value)} required />
                    </div>
                    <button type="submit">Create Coupon</button>
                </form>
            </section>
            <section>
                <h2>Coupons List</h2>
                <ul>
                    {coupons.map((coupon) => (
                        <li key={coupon.id}>{coupon.code} - {coupon.discount}% off, expires on {coupon.expiration}</li>
                    ))}
                </ul>
            </section>
        </div>
    );
};

export default AdminPage;

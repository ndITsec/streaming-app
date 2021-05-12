import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { selectUser } from '../features/userSlice';
import db from '../firebase';
import './PlansPage.css';
import { loadStripe } from '@stripe/stripe-js';

function PlansPage()  {
    const [products, setProducts] = useState([]);
    const user = useSelector(selectUser);
    const [subscription, setSubscription] = useState(null);
    

    useEffect(() => {
      db.collection("customers")
        .doc(user?.uid)
        .collection("subscriptions")
        .get()
        .then((querySnapshot) => {
          querySnapshot.forEach(async (subscription) => {
            setSubscription({
              role: subscription.data().role,
              current_period_end: subscription.data().current_period_end.seconds,
              current_period_start: subscription.data().current_period_start
                .seconds,
            });
          });
        });
    }, [user?.uid]);
    
    
  
    useEffect(() => {
      db.collection('products')
        .where('active', '==', true)
        .get()
        .then((querySnapshot) => {
          const products = {};
          querySnapshot.forEach(async (productDoc) => {
            products[productDoc.id] = productDoc.data();
            const priceSnap = await productDoc.ref.collection('prices').get();
            priceSnap.docs.forEach((price) => {
              products[productDoc.id].prices = {
                priceId: price.id,
                priceData: price.data(),
              };
            });
          });
          setProducts(products);
        });
    }, []);

    console.log(products);

    const loadCheckout = async (priceId) => {
      const docRef = await db.collection('customers')
      .doc(user.uid)
      .collection('checkout_sessions')
      .add({
        price: priceId,
        success_url: window.location.origin,
        cancel_url: window.location.origin,
      });

      docRef.onSnapshot(async (snapshot) => {
        const { error, sessionId } = snapshot.data();

        if (error) {
          alert(`An error occured: ${error.message}`);
        } 

        if (sessionId) {
          const stripe = await loadStripe('pk_test_51IqHtCLZGnCfjP9k0TheltZiEyedziE1fBNjqEsFesep5U3re4ZASlCwCIxhnwaYIACnwd71dtnNcrWXnfQ8lu9e00l5s75WAt');
          stripe.redirectToCheckout({ sessionId });
        }
      });
    };

    return (
        <div className="plansPage">
          {subscription && <p>Renewal date: {new Date(subscription?.current_period_end * 1000).toLocaleDateString()}</p>}
          {Object.entries(products).map(([productId, productData]) => {
            
            const isCurrentPlan = productData.name.includes(subscription?.role);
            
            return (
              <div key={productId} className={`${isCurrentPlan && "plansPage__plan--disabled"} plansPage__plan`}>
                <div className="plansPage__info">
                  <h5>{productData.name}</h5>
                  <h6>{productData.description}</h6>
                </div>

                <button onClick={() => !isCurrentPlan && loadCheckout(productData.prices.priceId)}>
                  {isCurrentPlan ? `Current Plan` : `Subscribe`}
                  </button>

              </div>
            );
          })}
        </div>
    );
        }

export default PlansPage;

import React, { useState } from 'react';
import './LoginPage.css';
import SignUp from './SignUp';
import { motion } from 'framer-motion';
import {
  loginscreenAnimation,
  loginscreenTransition,
  animationOne,
  transitionOne,
  animationTwo,
  transitionTwo,
  animationThree,
  transitionThree,
  animationFour,
  transitionFour,
  animationLogo,
  transitionLogo,
  animationButton,
  transitionButton,
} from '../animations/loginPage';


function LoginPage() {
    const [signIn, setSignIn] = useState(false);

    return (
        <motion.div
          initial='out'
          animate='in'
          variants={loginscreenAnimation}
          transition={loginscreenTransition}
          className='login'
        >
          <div className='login__background'>
            <motion.img
              initial='out'
              animate='in'
              variants={animationLogo}
              transition={transitionLogo}
              className='login__logo'
              src='https://i.ibb.co/h9QYCqh/imageedit-19-3129439397.png'
              alt=''
            />
            <motion.button
              initial='out'
              animate='in'
              variants={animationButton}
              transition={transitionButton}
              className='login__button'
              onClick={() => setSignIn(true)}
            >
              Sign In
            </motion.button>
            <div className='login__gradient' />
          </div>
          <div className='login__text'>
            {signIn ? (
              <SignUp />
            ) : (
              <>
                <motion.h1
                  initial='out'
                  animate='in'
                  variants={animationOne}
                  transition={transitionOne}
                >
                  Unlimited films, TV Shows, Programmes and more.
                </motion.h1>
                <motion.h2
                  initial='out'
                  animate='in'
                  variants={animationTwo}
                  transition={transitionTwo}
                >
                  Watch anywhere. Cancel anytime
                </motion.h2>
                <motion.h3
                  initial='out'
                  animate='in'
                  variants={animationThree}
                  transition={transitionThree}
                >
                  Ready to watch? Enter your email to create or restart your
                  membership.
                </motion.h3>
                <motion.div
                  initial='out'
                  animate='in'
                  variants={animationFour}
                  transition={transitionFour}
                  className='login__input'
                >
                  <form>
                    <input type='email' placeholder='Email Address' />
                    <button
                      className='login__getStartedButton'
                      onClick={() => setSignIn(true)}
                    >
                      GET STARTED
                    </button>
                  </form>
                </motion.div>
              </>
            )}
          </div>
        </motion.div>
      );
    };
    
    export default LoginPage;

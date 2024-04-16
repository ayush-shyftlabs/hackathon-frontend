import React, {useState} from 'react';
import { Button, Card } from 'antd';
import { FacebookOutlined ,GoogleOutlined} from '@ant-design/icons';
import Wrapper from "../../layout";
import {LoginSocialFacebook, LoginSocialGoogle} from 'reactjs-social-login';
import {AuthService} from "../../api/auth/Auth";

const clientId = process.env.GOOGLE_CLIENT_ID || '939446384253-4fppn78g2l7lcakcq26qs8kqnr73u4nk.apps.googleusercontent.com'; // Replace with your Google OAuth2 Client ID


const LoginPage = () => {
    const [provider, setProvider] = useState(null);
    const [data, setData] = useState({});

    const onLogin=async ({ provider, data }) => {
      try{
          console.log(data);
          setProvider(provider);
          setData(data)
          // const code=data?.code;
          // const res=await AuthService.sendCode(code);
          //   await localStorage.setItem('login','true');
      } catch (e){
          console.log("Error LogIn + ",e);
      }
    }

    return (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
            <Card style={{ width: 300 }}>
                <h2 style={{ textAlign: 'center' }}>Login</h2>
             <div style={{ display: 'flex',flexDirection:'column', justifyContent: 'space-evenly', alignItems: 'center' ,minHeight:'10rem'}}>
                 <LoginSocialGoogle
                     client_id={clientId}
                     onLoginStart={()=>console.log('Login start')}
                     redirect_uri={'http://localhost:3000'}
                     scope={'https://www.googleapis.com/auth/adwords profile openid email'}
                     onResolve={onLogin}
                     access_type="offline"
                     onReject={err => {
                         console.log(err);
                     }}
                 >
                     <Button
                         type="primary"
                         icon={<GoogleOutlined />}
                         style={{ width: '100%' }}
                     >
                         Login with Google
                     </Button>
                 </LoginSocialGoogle>

                 <LoginSocialFacebook

                     appId={process.env.REACT_APP_FB_APP_ID || '1122799938963488'}

                     onLoginStart={()=>console.log('Login start')}
                     onResolve={()=>console.log("facebook Login")}
                     onReject={err => {
                         console.log(err);
                     }}
                 >
                     <Button
                         type="primary"
                         icon={<FacebookOutlined />}
                         style={{ width: '100%' }}
                     >
                         Login with Facebook
                     </Button>
                 </LoginSocialFacebook>

             </div>
                {/*<LoginSocialFacebook*/}
                {/*    appId="YOUR_FACEBOOK_APP_ID"*/}
                {/*    onSuccess={handleFacebookLogin}*/}
                {/*    onFailure={(error) => console.error('Facebook login failed:', error)}*/}
                {/*    style={{ width: '100%' }}*/}
                {/* onReject={(v)=>console.log(v)}*/}
                {/*    onResolve={}/>*/}
            </Card>
        </div>
    );
};

// const LoginPage = Wrapper(Login);

export default LoginPage;

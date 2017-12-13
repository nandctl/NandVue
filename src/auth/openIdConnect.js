

export default function(){

  console.log("Inside the sso login page");

  var clientInfo = {
    client_id : '@!1ED1.1780.35EF.D364!0001!A878.C304!0008!0822.8858.D0F3.B498\n',
    redirect_uri : 'https://sso-jsf-demo-master.ctnr.ctl.io/sso-jsf-demo/spa/javascript-sample/login-callback.html'
  };
  var providerInfo = OIDC.discover('https://sso.ctl.io');
  OIDC.setClientInfo( clientInfo );
  OIDC.setProviderInfo( providerInfo );
  OIDC.storeInfo(providerInfo, clientInfo);
  // Remove State and Nonce from previous session
  sessionStorage.removeItem('state');
  sessionStorage.removeItem('nonce');
  OIDC.generateLoginRequest({scope : 'openid ctl_dynamic_scope ctl_scope',response_type : 'token id_token'});
  OIDC.login( {scope : 'openid profile email',response_type : 'token id_token'} );

  console.log("Called the sso login page and got the response back");
}


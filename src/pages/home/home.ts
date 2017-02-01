import { Component } from '@angular/core';

import { GoogleAnalytics } from 'ionic-native';
GoogleAnalytics.startTrackerWithId('UA-71770803-5')
   .then(() => {
     console.log('Google analytics is ready now');
     // Tracker is ready
     // You can now track pages or set additional information such as AppVersion or UserId
     GoogleAnalytics.setAppVersion("1.0");
     GoogleAnalytics.trackView("Home Page", "", false);
   })
   .catch(e => console.log('Error starting GoogleAnalytics', e));

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  fireEvent(){
    GoogleAnalytics.trackEvent("tvc_test", "tvc_fire_button_clicked","Home Page",0,false);
  }

  
}
